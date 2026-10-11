"use client";

import React from "react";
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

export interface ClubTrophyItem {
  id: string;
  title: string;
  category: "Major Championship" | "Cup Win" | "Youth Title" | "Club Honour";
  years: string[];
  count: number;
  iconName?: string;
  description: string;
  pedestalColor?: string;
}

export function ClubAchievementsFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  const badgeText: string = s.content?.badgeText || "HALL OF FAME";
  const sectionTitle: string = s.content?.sectionTitle || "HONOURS & ACHIEVEMENTS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "A legacy forged in silverware — celebrating over six decades of championship triumphs and prestigious accolades.";

  const trophies: ClubTrophyItem[] = s.content?.trophies || [
    {
      id: "t1",
      title: "State Premier League Champions",
      category: "Major Championship",
      count: 4,
      years: ["1994", "2008", "2017", "2024"],
      iconName: "solar:cup-star-bold",
      description: "Awarded to the grand final champion of the NSW state tier competition.",
      pedestalColor: "#f59e0b",
    },
    {
      id: "t2",
      title: "NSW State Challenge Cup",
      category: "Cup Win",
      count: 6,
      years: ["1986", "1994", "2003", "2011", "2019", "2023"],
      iconName: "solar:cup-bold",
      description: "State knockout tournament victory against top tier regional squads.",
      pedestalColor: "#f97316",
    },
    {
      id: "t3",
      title: "Women’s League 1 Premiership",
      category: "Major Championship",
      count: 3,
      years: ["2018", "2021", "2025"],
      iconName: "solar:crown-star-bold",
      description: "Undefeated regular season champions in Football NSW Women's division.",
      pedestalColor: "#ec4899",
    },
    {
      id: "t4",
      title: "State Youth Academy Cup",
      category: "Youth Title",
      count: 8,
      years: ["1999", "2005", "2010", "2014", "2017", "2020", "2022", "2026"],
      iconName: "solar:medal-ribbon-star-bold",
      description: "Recognizing youth player excellence and junior division tournament victories.",
      pedestalColor: "#3b82f6",
    },
    {
      id: "t5",
      title: "NSW Fair Play & Community Club of the Year",
      category: "Club Honour",
      count: 5,
      years: ["2001", "2009", "2015", "2020", "2025"],
      iconName: "solar:shield-star-bold",
      description: "Honouring exemplary sportsmanship, grassroots inclusion, and volunteer community spirit.",
      pedestalColor: "#10b981",
    },
  ];

  const totalTitlesCount = trophies.reduce((acc, curr) => acc + curr.count, 0);
  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full">
          <Icon icon="solar:cup-star-bold" width={15} />
          {badgeText}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight" style={headingStyles}>
          {sectionTitle}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
          {sectionSubtitle}
        </p>

        {/* Aggregate Banner */}
        <div className="pt-2 inline-flex items-center gap-3 px-6 py-2 rounded-2xl bg-slate-900 text-white font-mono text-xs shadow-md">
          <span className="text-orange-400 font-black text-lg">{totalTitlesCount}</span>
          <span className="text-slate-300 font-sans font-bold uppercase tracking-wider">Total Trophies & Honours Won</span>
        </div>
      </div>

      {/* Trophy Cabinet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trophies.map((trophy) => (
          <div
            key={trophy.id}
            className="group rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            {/* Top Glow Accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: trophy.pedestalColor || "#f97316" }}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {/* 3D Trophy Icon Pedestal */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: trophy.pedestalColor || "#f97316",
                  }}
                >
                  <Icon icon={trophy.iconName || "solar:cup-star-bold"} width={32} />
                </div>

                {/* Count Badge */}
                <div className="text-right">
                  <span className="font-mono font-black text-3xl text-slate-900 block leading-none">
                    {trophy.count}x
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Titles
                  </span>
                </div>
              </div>

              {/* Titles & Category */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 font-mono block">
                  {trophy.category}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1 group-hover:text-orange-600 transition-colors">
                  {trophy.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {trophy.description}
              </p>
            </div>

            {/* Years Badges Pill Wrap */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Winning Years:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {trophy.years.map((year, yIdx) => (
                  <span
                    key={yIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 font-mono font-bold text-xs text-slate-800 shadow-2xs group-hover:border-orange-200"
                  >
                    {year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const clubAchievementsElement = {
  type: "club-achievements",
  category: "club",
  label: "Club Trophy Room & Honours",
  icon: "solar:cup-star-bold-duotone",

  schema: {
    content: {
      badgeText: "HALL OF FAME",
      sectionTitle: "HONOURS & ACHIEVEMENTS",
      sectionSubtitle: "A legacy forged in silverware — celebrating over six decades of championship triumphs and prestigious accolades.",
      trophies: [
        {
          id: "t1",
          title: "State Premier League Champions",
          category: "Major Championship",
          count: 4,
          years: ["1994", "2008", "2017", "2024"],
          iconName: "solar:cup-star-bold",
          description: "Awarded to the grand final champion of the NSW state tier competition.",
        },
        {
          id: "t2",
          title: "NSW State Challenge Cup",
          category: "Cup Win",
          count: 6,
          years: ["1986", "1994", "2003", "2011", "2019", "2023"],
          iconName: "solar:cup-bold",
          description: "State knockout tournament victory against top tier regional squads.",
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

  render: (element: any) => <ClubAchievementsFrontend element={element} />,
};

export default clubAchievementsElement;
