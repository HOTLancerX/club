"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Text,
  Textarea,
  Url,
  NumberControl,
  Select,
  Toggle,
  ColorPickerPopup,
  ImageGallery,
  Typography,
  Section,
} from "@/components/builder/controls";

function getTypographyStyles(value: any) {
  if (!value || typeof value !== "object") return {};
  const styles: React.CSSProperties = {};
  if (value.fontFamily) styles.fontFamily = value.fontFamily;
  if (value.fontSize) styles.fontSize = `${value.fontSize}${value.fontSizeUnit || "px"}`;
  if (value.fontWeight) styles.fontWeight = value.fontWeight;
  if (value.textTransform) styles.textTransform = value.textTransform;
  if (value.fontStyle) styles.fontStyle = value.fontStyle;
  if (value.textDecoration) styles.textDecoration = value.textDecoration;
  if (value.lineHeight && value.lineHeight > 0)
    styles.lineHeight = `${value.lineHeight}${value.lineHeightUnit || "px"}`;
  if (value.letterSpacing !== undefined && value.letterSpacing !== 0)
    styles.letterSpacing = `${value.letterSpacing}${value.letterSpacingUnit || "px"}`;
  return styles;
}

export interface ClubArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: "Match Report" | "Club Announcement" | "Academy & Youth" | "Community";
  publishedDate: string;
  author: string;
  readTime: string;
  image: string;
  url: string;
  isFeatured?: boolean;
}

export function ClubNewsFeedFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const badgeText: string = s.content?.badgeText || "PRESS & MEDIA";
  const sectionTitle: string = s.content?.sectionTitle || "LATEST CLUB NEWS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "Official match reports, academy updates, player signings, and community events.";

  const articles: ClubArticleItem[] = s.content?.articles || [
    {
      id: "1",
      title: "Dominant Derby Victory: Tigers Roar Past Sydney Uni 3-1 in Round 18",
      excerpt: "Lucas Mitchell's second-half brace and a resolute defensive masterclass at Ron Dine Reserve secured maximum competition points for the First Grade squad.",
      category: "Match Report",
      publishedDate: "09 Oct 2026",
      author: "Media Officer",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80",
      url: "/news/round-18-derby-victory",
      isFeatured: true,
    },
    {
      id: "2",
      title: "2027 Season Junior Academy Trials Announced for Under 9s to 16s",
      excerpt: "Registration is now officially open for the 2027 Football NSW development talent trials held across November at Camden Sports Ground.",
      category: "Academy & Youth",
      publishedDate: "06 Oct 2026",
      author: "Technical Director",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
      url: "/news/2027-junior-trials",
    },
    {
      id: "3",
      title: "Camden Tigers Annual Community Gala Dinner & Awards Night 2026",
      excerpt: "Celebrate an extraordinary season with our players, coaches, sponsors, and life members on Friday 28 November at Camden Civic Centre.",
      category: "Club Announcement",
      publishedDate: "02 Oct 2026",
      author: "Club Committee",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
      url: "/news/gala-dinner-2026",
    },
    {
      id: "4",
      title: "Women’s Premier League: Squad Clinches Grand Final Berth",
      excerpt: "A dramatic 89th-minute winner by Emma Thornton sees our Women's 1st Grade qualify for the State Championship Final.",
      category: "Match Report",
      publishedDate: "28 Sep 2026",
      author: "Match Correspondent",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
      url: "/news/womens-grand-final-berth",
    },
  ];

  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];
  const gridArticles = articles.filter((a) => a.id !== featuredArticle?.id);

  const filteredArticles = (selectedCategory === "all"
    ? gridArticles
    : gridArticles.filter((a) => a.category === selectedCategory)
  );

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            <Icon icon="solar:newspaper-bold" width={14} />
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase mt-2" style={headingStyles}>
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-end">
          {["all", "Match Report", "Club Announcement", "Academy & Youth"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {cat === "all" ? "All News" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Big Card */}
      {featuredArticle && (selectedCategory === "all" || featuredArticle.category === selectedCategory) && (
        <a
          href={featuredArticle.url}
          className="group block rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800 transition-all duration-300 hover:shadow-orange-950/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto lg:h-96 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white uppercase tracking-wider text-[10px]">
                  {featuredArticle.category}
                </span>
                <span className="text-slate-400">{featuredArticle.publishedDate}</span>
                <span className="text-slate-500">• {featuredArticle.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug group-hover:text-orange-400 transition-colors">
                {featuredArticle.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-4 flex items-center gap-2 font-bold text-xs text-orange-400 group-hover:translate-x-1 transition-transform">
                <span>Read Full Match Report</span>
                <Icon icon="solar:arrow-right-linear" width={16} />
              </div>
            </div>
          </div>
        </a>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  {article.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{article.publishedDate}</span>
                  <span>{article.readTime}</span>
                </div>

                <h4 className="font-bold text-base text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {article.title}
                </h4>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center gap-1.5 font-bold text-xs text-orange-600 group-hover:translate-x-1 transition-transform">
              <span>Read Story</span>
              <Icon icon="solar:arrow-right-linear" width={14} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const clubNewsFeedElement = {
  type: "club-news-feed",
  category: "club",
  label: "Club News & Match Reports",
  icon: "solar:document-text-bold-duotone",

  schema: {
    content: {
      badgeText: "PRESS & MEDIA",
      sectionTitle: "LATEST CLUB NEWS",
      sectionSubtitle: "Official match reports, academy updates, player signings, and community events.",
      articles: [
        {
          id: "1",
          title: "Dominant Derby Victory: Tigers Roar Past Sydney Uni 3-1 in Round 18",
          excerpt: "Lucas Mitchell's second-half brace and a resolute defensive masterclass secured maximum competition points.",
          category: "Match Report",
          publishedDate: "09 Oct 2026",
          author: "Media Officer",
          readTime: "3 min read",
          image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&auto=format&fit=crop&q=80",
          url: "/news/round-18-derby-victory",
          isFeatured: true,
        },
        {
          id: "2",
          title: "2027 Season Junior Academy Trials Announced for Under 9s to 16s",
          excerpt: "Registration is now officially open for the 2027 Football NSW development talent trials.",
          category: "Academy & Youth",
          publishedDate: "06 Oct 2026",
          author: "Technical Director",
          readTime: "2 min read",
          image: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
          url: "/news/2027-junior-trials",
        },
        {
          id: "3",
          title: "Camden Tigers Annual Community Gala Dinner & Awards Night 2026",
          excerpt: "Celebrate an extraordinary season with our players, coaches, sponsors, and life members.",
          category: "Club Announcement",
          publishedDate: "02 Oct 2026",
          author: "Club Committee",
          readTime: "2 min read",
          image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
          url: "/news/gala-dinner-2026",
        },
      ],
    },

    style: {
      primaryColor: "#f97316",
      headingTypography: { fontSize: 36, fontSizeUnit: "px", fontWeight: "900" },
    },
  },

  controls: [
    {
      tab: "Content",
      section: "Header Content",
      controls: [
        {
          name: "badgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Badge Pill" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "sectionTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Section Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "sectionSubtitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Subtitle" value={value || ""} onChange={onChange} rows={2} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubNewsFeedFrontend element={element} />,
};

export default clubNewsFeedElement;
