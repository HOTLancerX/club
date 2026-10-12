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
  IconPicker,
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

export interface ClubMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface ClubCounterStat {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export function ClubAboutHistoryFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [activeTab, setActiveTab] = useState<"story" | "timeline" | "mission">("story");

  // Story Content
  const badgeText: string = s.content?.badgeText || "HERITAGE & TRADITION";
  const heading: string = s.content?.heading || "65 YEARS OF FOOTBALL EXCELLENCE";
  const storySubtitle: string = s.content?.storySubtitle || "From humble community beginnings in 1961 to a premier state powerhouse.";
  const storyParagraph1: string =
    s.content?.storyParagraph1 ||
    "Founded in 1961 by passionate local footballers in Camden South, Camden Tigers has evolved into one of New South Wales’ most revered community sporting institutions. For over six decades, our club has fostered talent, built lifelong friendships, and competed fiercely at every tier of grassroots and representative football.";
  const storyParagraph2: string =
    s.content?.storyParagraph2 ||
    "Our home ground at Ron Dine Memorial Reserve stands as a beacon of sporting pride. Through generations of dedicated volunteers, licensed coaching staffs, and unwavering supporters, the Tigers continue to pave pathways from Little Tigers to Premier 1st Grade champions.";

  const storyImage: string =
    s.content?.storyImage ||
    "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80";

  // Mission & Vision
  const missionTitle: string = s.content?.missionTitle || "Our Core Mission";
  const missionText: string =
    s.content?.missionText ||
    "To provide an inclusive, safe, and elite sporting environment where athletes of all ages and backgrounds develop technical football proficiency, sportsmanship, and leadership.";
  const visionTitle: string = s.content?.visionTitle || "Our Championship Vision";
  const visionText: string =
    s.content?.visionText ||
    "To be the premier sports academy and competitive club in regional NSW, producing national representative athletes while remaining anchored in community volunteer values.";

  // Key Stats Counter
  const statsCounters: ClubCounterStat[] = s.content?.statsCounters || [
    { label: "Founded Year", value: "1961", suffix: "", icon: "solar:flag-2-bold" },
    { label: "Active Players", value: "850", suffix: "+", icon: "solar:users-group-two-rounded-bold" },
    { label: "Championship Cups", value: "34", suffix: " Titles", icon: "solar:cup-star-bold" },
    { label: "Licensed Coaches", value: "48", suffix: "", icon: "solar:diploma-bold" },
  ];

  // Milestones Timeline
  const milestones: ClubMilestone[] = s.content?.milestones || [
    {
      year: "1961",
      title: "Club Inauguration & First Match",
      description: "Founded by community members at Camden South with just one senior team and hand-built goalposts.",
      icon: "solar:star-fall-bold",
    },
    {
      year: "1978",
      title: "Opening of Ron Dine Memorial Ground",
      description: "Dedicated club pavilion and first floodlit competition pitch opened to support growing youth divisions.",
      icon: "solar:shield-star-bold",
    },
    {
      year: "1994",
      title: "Historic Premier League Treble",
      description: "First Grade squad claimed the Minor Premiership, Grand Final Trophy, and State Challenge Cup in a single campaign.",
      icon: "solar:cup-bold",
    },
    {
      year: "2012",
      title: "Women’s Football Academy Launch",
      description: "Inaugurated dedicated girls & women's pathway, producing 3 A-League Women representative players.",
      icon: "solar:medal-ribbon-star-bold",
    },
    {
      year: "2026",
      title: "State League Era & Modern Training Facility",
      description: "Over 850 registered athletes and high-performance training ground facility.",
      icon: "solar:crown-star-bold",
    },
  ];

  // Style Settings
  const primaryColor: string = s.style?.primaryColor || "#f97316";
  const headingColor: string = s.style?.headingColor || "#0f172a";
  const descColor: string = s.style?.descColor || "#475569";
  const cardBgColor: string = s.style?.cardBgColor || "#ffffff";
  const statsBgColor: string = s.style?.statsBgColor || "#0f172a";

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 space-y-16">
      {/* ── 1. Top Narrative & Heritage Header ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold uppercase tracking-wider">
            <Icon icon="solar:history-bold" width={14} />
            {badgeText}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase" style={headingStyles}>
            {heading}
          </h2>

          <p className="text-base sm:text-lg font-bold text-orange-600">
            {storySubtitle}
          </p>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>{storyParagraph1}</p>
            <p>{storyParagraph2}</p>
          </div>

          {/* Mission & Vision Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-1.5">
              <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                <Icon icon="solar:target-bold" width={18} />
                <span>{missionTitle}</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">{missionText}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Icon icon="solar:eye-bold" width={18} className="text-orange-500" />
                <span>{visionTitle}</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal">{visionText}</p>
            </div>
          </div>
        </div>

        {/* Right Photo Presentation */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={storyImage} alt="Club Legacy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Est Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">FOUNDED IN</span>
                <span className="text-2xl font-black font-mono">1961 • CAMDEN</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                <Icon icon="solar:cup-star-bold" width={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. Statistics Counter Strip ── */}
      <div
        className="rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 text-white grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        style={{ backgroundColor: statsBgColor }}
      >
        {statsCounters.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-2 p-2">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
              <Icon icon={stat.icon} width={24} />
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
              {stat.value}
              <span className="text-orange-500 text-2xl font-sans">{stat.suffix}</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-400">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── 3. Interactive Milestone Timeline ── */}
      <div className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-wider text-orange-600 block">
            Through The Decades
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase">
            Historic Club Milestones
          </h3>
          <p className="text-sm text-slate-500">
            A journey of triumph, resilience, and grassroots football legacy.
          </p>
        </div>

        <div className="relative border-l-2 border-orange-200/80 ml-4 sm:ml-32 md:ml-40 space-y-10 pl-6 sm:pl-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Year Pill on Left */}
              <div className="absolute -left-9.25 sm:-left-38 md:-left-46 top-0 flex items-center">
                <span className="hidden sm:inline-block w-24 md:w-28 text-right font-black font-mono text-base sm:text-xl text-orange-600 mr-4">
                  {m.year}
                </span>
                <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-md flex items-center justify-center group-hover:scale-125 transition-transform" />
              </div>

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-lg transition-all space-y-2">
                <div className="flex items-center gap-2">
                  <span className="sm:hidden font-mono font-bold text-orange-600 text-xs px-2 py-0.5 rounded bg-orange-50 border border-orange-200">
                    {m.year}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {m.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const clubAboutHistoryElement = {
  type: "club-about-history",
  category: "club",
  label: "Club History & Mission",
  icon: "solar:history-bold-duotone",

  schema: {
    content: {
      badgeText: "HERITAGE & TRADITION",
      heading: "65 YEARS OF FOOTBALL EXCELLENCE",
      storySubtitle: "From humble community beginnings in 1961 to a premier state powerhouse.",
      storyParagraph1: "Founded in 1961 by passionate local footballers in Camden South, Camden Tigers has evolved into one of New South Wales’ most revered community sporting institutions. For over six decades, our club has fostered talent, built lifelong friendships, and competed fiercely at every tier of grassroots and representative football.",
      storyParagraph2: "Our home ground at Ron Dine Memorial Reserve stands as a beacon of sporting pride. Through generations of dedicated volunteers, licensed coaching staffs, and unwavering supporters, the Tigers continue to pave pathways from Little Tigers to Premier 1st Grade champions.",
      storyImage: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",

      missionTitle: "Our Core Mission",
      missionText: "To provide an inclusive, safe, and elite sporting environment where athletes of all ages develop football proficiency and leadership.",
      visionTitle: "Our Championship Vision",
      visionText: "To be the premier sports academy in regional NSW, producing national representative athletes while remaining anchored in community volunteer values.",

      statsCounters: [
        { label: "Founded Year", value: "1961", suffix: "", icon: "solar:flag-2-bold" },
        { label: "Active Players", value: "850", suffix: "+", icon: "solar:users-group-two-rounded-bold" },
        { label: "Championship Cups", value: "34", suffix: " Titles", icon: "solar:cup-star-bold" },
        { label: "Licensed Coaches", value: "48", suffix: "", icon: "solar:diploma-bold" },
      ],

      milestones: [
        {
          year: "1961",
          title: "Club Inauguration & First Match",
          description: "Founded by community members at Camden South with just one senior team and hand-built goalposts.",
        },
        {
          year: "1978",
          title: "Opening of Ron Dine Memorial Ground",
          description: "Dedicated club pavilion and first floodlit competition pitch opened to support growing youth divisions.",
        },
        {
          year: "1994",
          title: "Historic Premier League Treble",
          description: "First Grade squad claimed the Minor Premiership, Grand Final Trophy, and State Challenge Cup in a single campaign.",
        },
        {
          year: "2012",
          title: "Women’s Football Academy Launch",
          description: "Inaugurated dedicated girls & women's pathway, producing 3 A-League Women representative players.",
        },
        {
          year: "2026",
          title: "State League Era & Modern Facility",
          description: "Over 850 registered athletes and high-performance training ground facility.",
        },
      ],
    },

    style: {
      primaryColor: "#f97316",
      headingColor: "#0f172a",
      descColor: "#475569",
      cardBgColor: "#ffffff",
      statsBgColor: "#0f172a",
    },
  },

  controls: [
    {
      tab: "Content",
      section: "Header & Main Story",
      controls: [
        {
          name: "badgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Badge Pill" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "heading",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Main Heading" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "storySubtitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Subtitle" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "storyParagraph1",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Story Paragraph 1" value={value || ""} onChange={onChange} rows={3} />
          ),
        },
        {
          name: "storyParagraph2",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Story Paragraph 2" value={value || ""} onChange={onChange} rows={3} />
          ),
        },
        {
          name: "storyImage",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ImageGallery label="Heritage Photo" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },
    {
      tab: "Content",
      section: "Mission & Vision",
      controls: [
        {
          name: "missionTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Mission Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "missionText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Mission Description" value={value || ""} onChange={onChange} rows={2} />
          ),
        },
        {
          name: "visionTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Vision Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "visionText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Vision Description" value={value || ""} onChange={onChange} rows={2} />
          ),
        },
      ],
    },
    {
      tab: "Style",
      section: "Colors",
      controls: [
        {
          name: "primaryColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Primary Accent" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "statsBgColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Stats Strip Background" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubAboutHistoryFrontend element={element} />,
};

export default clubAboutHistoryElement;
