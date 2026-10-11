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

export interface ClubMediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: "matches" | "training" | "events" | "fans";
  url: string;
  thumbnail: string;
  date?: string;
}

export function ClubMediaGalleryFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<ClubMediaItem | null>(null);

  const badgeText: string = s.content?.badgeText || "PHOTO & VIDEO VAULT";
  const sectionTitle: string = s.content?.sectionTitle || "MATCHDAY GALLERY";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "High-resolution match photography, training moments, trophy celebrations, and supporter memories.";

  const mediaItems: ClubMediaItem[] = s.content?.mediaItems || [
    {
      id: "m1",
      type: "photo",
      title: "Round 18 Derby Celebration: 3-1 Win",
      category: "matches",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80",
      date: "09 Oct 2026",
    },
    {
      id: "m2",
      type: "video",
      title: "Tactical Drill & High-Performance Conditioning",
      category: "training",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1600&auto=format&fit=crop&q=80",
      date: "04 Oct 2026",
    },
    {
      id: "m3",
      type: "photo",
      title: "Women’s Grand Final Semi-Final Triumph",
      category: "matches",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&auto=format&fit=crop&q=80",
      date: "28 Sep 2026",
    },
    {
      id: "m4",
      type: "photo",
      title: "Passionate Camden Community Fan Zone",
      category: "fans",
      thumbnail: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&auto=format&fit=crop&q=80",
      date: "20 Sep 2026",
    },
    {
      id: "m5",
      type: "photo",
      title: "Annual Junior Trophy Presentation Day",
      category: "events",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&auto=format&fit=crop&q=80",
      date: "15 Sep 2026",
    },
    {
      id: "m6",
      type: "video",
      title: "Goal of the Month Contenders: September 2026",
      category: "matches",
      thumbnail: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
      url: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=1600&auto=format&fit=crop&q=80",
      date: "01 Sep 2026",
    },
  ];

  const filteredMedia = (selectedCategory === "all"
    ? mediaItems
    : mediaItems.filter((m) => m.category === selectedCategory)
  );

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header & Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            <Icon icon="solar:gallery-bold" width={14} />
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase mt-2" style={headingStyles}>
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-end">
          {[
            { id: "all", label: "All Media" },
            { id: "matches", label: "Matches" },
            { id: "training", label: "Training" },
            { id: "events", label: "Events & Gala" },
            { id: "fans", label: "Supporters" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            onClick={() => setLightboxItem(item)}
            className="group relative aspect-4/3 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                {item.category}
              </span>
              {item.type === "video" ? (
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg">
                  <Icon icon="solar:play-bold" width={16} className="ml-0.5" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center">
                  <Icon icon="solar:magnifer-zoom-in-bold" width={16} />
                </div>
              )}
            </div>

            {/* Bottom Details */}
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              {item.date && (
                <span className="text-[10px] font-mono text-orange-400 font-bold block">
                  {item.date}
                </span>
              )}
              <h4 className="font-bold text-sm line-clamp-2 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-400 transition p-2 cursor-pointer"
            >
              <Icon icon="solar:close-circle-bold" width={32} />
            </button>

            <div className="w-full rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border border-slate-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightboxItem.url} alt={lightboxItem.title} className="w-full max-h-[75vh] object-contain mx-auto" />
            </div>

            <div className="w-full p-4 text-white text-center space-y-1">
              <h3 className="font-bold text-lg">{lightboxItem.title}</h3>
              <p className="text-xs text-orange-400 font-medium">{lightboxItem.date} • {lightboxItem.category.toUpperCase()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const clubMediaGalleryElement = {
  type: "club-media-gallery",
  category: "club",
  label: "Club Photo & Video Gallery",
  icon: "solar:gallery-wide-bold-duotone",

  schema: {
    content: {
      badgeText: "PHOTO & VIDEO VAULT",
      sectionTitle: "MATCHDAY GALLERY",
      sectionSubtitle: "High-resolution match photography, training moments, trophy celebrations, and supporter memories.",
      mediaItems: [
        {
          id: "m1",
          type: "photo",
          title: "Round 18 Derby Celebration: 3-1 Win",
          category: "matches",
          thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
          url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80",
          date: "09 Oct 2026",
        },
        {
          id: "m2",
          type: "video",
          title: "Tactical Drill & High-Performance Conditioning",
          category: "training",
          thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
          url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=1600&auto=format&fit=crop&q=80",
          date: "04 Oct 2026",
        },
        {
          id: "m3",
          type: "photo",
          title: "Women’s Grand Final Semi-Final Triumph",
          category: "matches",
          thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
          url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&auto=format&fit=crop&q=80",
          date: "28 Sep 2026",
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
      section: "Header Settings",
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

  render: (element: any) => <ClubMediaGalleryFrontend element={element} />,
};

export default clubMediaGalleryElement;
