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

export interface ClubFixtureItem {
  id: string;
  round: string;
  competition: string;
  date: string;
  time: string;
  homeTeam: string;
  homeLogo: string;
  awayTeam: string;
  awayLogo: string;
  venue: string;
  ticketUrl?: string;
  livestreamUrl?: string;
}

export interface ClubResultItem {
  id: string;
  round: string;
  competition: string;
  date: string;
  homeTeam: string;
  homeLogo: string;
  homeScore: string;
  awayTeam: string;
  awayLogo: string;
  awayScore: string;
  outcome: "WIN" | "LOSS" | "DRAW";
  venue: string;
  reportUrl?: string;
}

export function ClubFixturesResultsFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [activeTab, setActiveTab] = useState<"fixtures" | "results">("fixtures");

  const badgeText: string = s.content?.badgeText || "MATCH CENTER";
  const sectionTitle: string = s.content?.sectionTitle || "FIXTURES & RESULTS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "Stay up to date with matchday schedules, kickoff times, and official competition results.";

  const fixtures: ClubFixtureItem[] = s.content?.fixtures || [
    {
      id: "f1",
      round: "Round 19",
      competition: "Football NSW League One",
      date: "Saturday, 14 Oct 2026",
      time: "15:30 AEST",
      homeTeam: "Camden Tigers",
      homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      awayTeam: "Macarthur Rams FC",
      awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
      venue: "Ron Dine Memorial Reserve, Field 1",
      ticketUrl: "/tickets/round-19",
    },
    {
      id: "f2",
      round: "Round 20",
      competition: "Football NSW League One",
      date: "Saturday, 21 Oct 2026",
      time: "17:00 AEST",
      homeTeam: "Dunbar Rovers FC",
      homeLogo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80",
      awayTeam: "Camden Tigers",
      awayLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      venue: "Reg Bartley Oval, Sydney",
      ticketUrl: "/tickets/round-20",
    },
    {
      id: "f3",
      round: "State Cup Quarter-Final",
      competition: "NSW State Cup 2026",
      date: "Wednesday, 25 Oct 2026",
      time: "19:30 AEST",
      homeTeam: "Camden Tigers",
      homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      awayTeam: "Bankstown City Lions",
      awayLogo: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=100&auto=format&fit=crop&q=80",
      venue: "Camden Sports Stadium",
      ticketUrl: "/tickets/state-cup-qf",
    },
  ];

  const results: ClubResultItem[] = s.content?.results || [
    {
      id: "r1",
      round: "Round 18",
      competition: "Football NSW League One",
      date: "Sunday, 08 Oct 2026",
      homeTeam: "Camden Tigers",
      homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      homeScore: "3",
      awayTeam: "Sydney University SFC",
      awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
      awayScore: "1",
      outcome: "WIN",
      venue: "Ron Dine Memorial Reserve",
      reportUrl: "/news/round-18-recap",
    },
    {
      id: "r2",
      round: "Round 17",
      competition: "Football NSW League One",
      date: "Saturday, 30 Sep 2026",
      homeTeam: "Rydalmere Lions",
      homeLogo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80",
      homeScore: "2",
      awayTeam: "Camden Tigers",
      awayLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      awayScore: "2",
      outcome: "DRAW",
      venue: "Rydalmere Park",
      reportUrl: "/news/round-17-recap",
    },
    {
      id: "r3",
      round: "Round 16",
      competition: "Football NSW League One",
      date: "Saturday, 23 Sep 2026",
      homeTeam: "Camden Tigers",
      homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      homeScore: "4",
      awayTeam: "Inter Lions FC",
      awayLogo: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=100&auto=format&fit=crop&q=80",
      awayScore: "0",
      outcome: "WIN",
      venue: "Ron Dine Memorial Reserve",
      reportUrl: "/news/round-16-recap",
    },
  ];

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header & Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            <Icon icon="solar:calendar-bold" width={14} />
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase mt-2" style={headingStyles}>
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-end">
          <button
            type="button"
            onClick={() => setActiveTab("fixtures")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "fixtures"
                ? "bg-orange-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <Icon icon="solar:clock-circle-bold" width={16} />
            <span>Upcoming Fixtures</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("results")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "results"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            }`}
          >
            <Icon icon="solar:check-circle-bold" width={16} />
            <span>Previous Results</span>
          </button>
        </div>
      </div>

      {/* Fixtures Tab List */}
      {activeTab === "fixtures" && (
        <div className="space-y-4">
          {fixtures.map((fix) => (
            <div
              key={fix.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Competition & Date Tag */}
              <div className="lg:w-1/4 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                  {fix.competition}
                </span>
                <h4 className="text-sm sm:text-base font-black text-slate-900">{fix.round}</h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
                  <Icon icon="solar:calendar-linear" width={14} />
                  <span>{fix.date} • {fix.time}</span>
                </div>
              </div>

              {/* Matchup Center Display */}
              <div className="lg:w-2/4 grid grid-cols-7 items-center text-center py-2 px-4 rounded-2xl bg-slate-50 border border-slate-100">
                {/* Home */}
                <div className="col-span-3 flex items-center justify-end gap-3 text-right">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{fix.homeTeam}</span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={fix.homeLogo} alt={fix.homeTeam} className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>

                {/* VS */}
                <div className="col-span-1 flex justify-center">
                  <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-black text-xs flex items-center justify-center">
                    VS
                  </span>
                </div>

                {/* Away */}
                <div className="col-span-3 flex items-center justify-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 p-1 shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={fix.awayLogo} alt={fix.awayTeam} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{fix.awayTeam}</span>
                </div>
              </div>

              {/* Venue & Action Button */}
              <div className="lg:w-1/4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 text-right">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Icon icon="solar:map-point-linear" width={14} className="text-orange-500" />
                  {fix.venue}
                </span>

                {fix.ticketUrl && (
                  <a
                    href={fix.ticketUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white shadow-xs transition"
                  >
                    <span>Match Info</span>
                    <Icon icon="solar:arrow-right-linear" width={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results Tab List */}
      {activeTab === "results" && (
        <div className="space-y-4">
          {results.map((res) => (
            <div
              key={res.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Competition & Outcome */}
              <div className="lg:w-1/4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    res.outcome === "WIN"
                      ? "bg-emerald-100 text-emerald-800"
                      : res.outcome === "DRAW"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-rose-100 text-rose-800"
                  }`}>
                    {res.outcome}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{res.competition}</span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-900">{res.round}</h4>
                <p className="text-xs text-slate-500 font-medium">{res.date}</p>
              </div>

              {/* Matchup Center Scoreboard */}
              <div className="lg:w-2/4 grid grid-cols-7 items-center text-center py-2 px-4 rounded-2xl bg-slate-900 text-white">
                {/* Home */}
                <div className="col-span-3 flex items-center justify-end gap-3 text-right">
                  <span className="font-bold text-slate-100 text-xs sm:text-sm line-clamp-1">{res.homeTeam}</span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 p-1 shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={res.homeLogo} alt={res.homeTeam} className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>

                {/* Score */}
                <div className="col-span-1 flex flex-col justify-center">
                  <span className="font-mono font-black text-lg sm:text-2xl text-orange-400">
                    {res.homeScore} - {res.awayScore}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-400">FT</span>
                </div>

                {/* Away */}
                <div className="col-span-3 flex items-center justify-start gap-3 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 p-1 shrink-0 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={res.awayLogo} alt={res.awayTeam} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <span className="font-bold text-slate-100 text-xs sm:text-sm line-clamp-1">{res.awayTeam}</span>
                </div>
              </div>

              {/* Report & Venue */}
              <div className="lg:w-1/4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-3 text-right">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Icon icon="solar:map-point-linear" width={14} className="text-orange-500" />
                  {res.venue}
                </span>

                {res.reportUrl && (
                  <a
                    href={res.reportUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                  >
                    <span>Match Report</span>
                    <Icon icon="solar:document-text-bold" width={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const clubFixturesResultsElement = {
  type: "club-fixtures-results",
  category: "club",
  label: "Club Fixtures & Match Results",
  icon: "solar:calendar-mark-bold-duotone",

  schema: {
    content: {
      badgeText: "MATCH CENTER",
      sectionTitle: "FIXTURES & RESULTS",
      sectionSubtitle: "Stay up to date with matchday schedules, kickoff times, and official competition results.",
      fixtures: [
        {
          id: "f1",
          round: "Round 19",
          competition: "Football NSW League One",
          date: "Saturday, 14 Oct 2026",
          time: "15:30 AEST",
          homeTeam: "Camden Tigers",
          homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
          awayTeam: "Macarthur Rams FC",
          awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
          venue: "Ron Dine Memorial Reserve, Field 1",
          ticketUrl: "/tickets/round-19",
        },
        {
          id: "f2",
          round: "Round 20",
          competition: "Football NSW League One",
          date: "Saturday, 21 Oct 2026",
          time: "17:00 AEST",
          homeTeam: "Dunbar Rovers FC",
          homeLogo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80",
          awayTeam: "Camden Tigers",
          awayLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
          venue: "Reg Bartley Oval, Sydney",
          ticketUrl: "/tickets/round-20",
        },
      ],
      results: [
        {
          id: "r1",
          round: "Round 18",
          competition: "Football NSW League One",
          date: "Sunday, 08 Oct 2026",
          homeTeam: "Camden Tigers",
          homeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
          homeScore: "3",
          awayTeam: "Sydney University SFC",
          awayLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
          awayScore: "1",
          outcome: "WIN",
          venue: "Ron Dine Memorial Reserve",
          reportUrl: "/news/round-18-recap",
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

  render: (element: any) => <ClubFixturesResultsFrontend element={element} />,
};

export default clubFixturesResultsElement;
