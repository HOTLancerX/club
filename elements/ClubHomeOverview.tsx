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

export interface HighlightVideoItem {
  id: string;
  title: string;
  duration?: string;
  thumbnail: string;
  videoUrl?: string;
  category?: string;
  views?: string;
}

export function ClubHomeOverviewFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Intro Content
  const clubBadge: string = s.content?.clubBadge || "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&auto=format&fit=crop&q=80";
  const badgeText: string = s.content?.badgeText || "OFFICIAL CLUB HUB";
  const introTitle: string = s.content?.introTitle || "WELCOME TO CAMDEN TIGERS";
  const introTagline: string = s.content?.introTagline || "Pride, Passion & Community Since 1961";
  const introDescription: string = s.content?.introDescription || "Representing the heart of Macarthur football. From grassroots junior academies to elite premier squads, our club embodies championship determination and community spirit.";

  // Latest Match Card
  const showLatestMatch: boolean = s.content?.showLatestMatch ?? true;
  const latestMatchCompetition: string = s.content?.latestMatchCompetition || "Premier League • Round 18";
  const latestMatchDate: string = s.content?.latestMatchDate || "Last Sunday";
  const latestMatchVenue: string = s.content?.latestMatchVenue || "Ron Dine Memorial Reserve";
  const homeTeamName: string = s.content?.homeTeamName || "Camden Tigers";
  const homeTeamLogo: string = s.content?.homeTeamLogo || "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80";
  const homeTeamScore: string = s.content?.homeTeamScore || "3";
  const awayTeamName: string = s.content?.awayTeamName || "Sydney University SFC";
  const awayTeamLogo: string = s.content?.awayTeamLogo || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80";
  const awayTeamScore: string = s.content?.awayTeamScore || "1";
  const latestMatchPom: string = s.content?.latestMatchPom || "Player of the Match: L. Mitchell (2 Goals)";
  const latestMatchOutcome: string = s.content?.latestMatchOutcome || "WIN";

  // Upcoming Match Card
  const showUpcomingMatch: boolean = s.content?.showUpcomingMatch ?? true;
  const upcomingCompetition: string = s.content?.upcomingCompetition || "State Championship • Round 19";
  const upcomingDate: string = s.content?.upcomingDate || "Saturday, 14 Oct 2026 • 15:30 AEST";
  const upcomingVenue: string = s.content?.upcomingVenue || "Camden Sports Ground, Field 1";
  const nextHomeName: string = s.content?.nextHomeName || "Camden Tigers";
  const nextHomeLogo: string = s.content?.nextHomeLogo || "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80";
  const nextAwayName: string = s.content?.nextAwayName || "Macarthur Rams FC";
  const nextAwayLogo: string = s.content?.nextAwayLogo || "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80";
  const upcomingTicketUrl: string = s.content?.upcomingTicketUrl || "/tickets";
  const upcomingTicketText: string = s.content?.upcomingTicketText || "Matchday Info & Tickets";

  // Video Highlights
  const showHighlights: boolean = s.content?.showHighlights ?? true;
  const highlightsTitle: string = s.content?.highlightsTitle || "Match Highlights & Media";
  const highlightsSubtitle: string = s.content?.highlightsSubtitle || "Catch up on the latest goals, match recaps, and locker room interviews";
  const highlightsList: HighlightVideoItem[] = s.content?.highlightsList || [
    {
      id: "1",
      title: "Match Recap: Tigers 3-1 Sydney Uni (Full Highlights)",
      duration: "04:22",
      category: "Match Highlights",
      thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
      views: "2.4K Views",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "2",
      title: "Coach Post-Match Press Conference: Round 18 Tactics",
      duration: "03:10",
      category: "Press Room",
      thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
      views: "1.1K Views",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: "3",
      title: "Academy Goals of the Month: Junior Division Showcase",
      duration: "05:45",
      category: "Academy",
      thumbnail: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
      views: "3.8K Views",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  // Styles
  const primaryAccentColor: string = s.style?.primaryAccentColor || "#f97316";
  const secondaryAccentColor: string = s.style?.secondaryAccentColor || "#ea580c";
  const cardBgColor: string = s.style?.cardBgColor || "#ffffff";
  const darkCardBgColor: string = s.style?.darkCardBgColor || "#0f172a";
  const titleColor: string = s.style?.titleColor || "#0f172a";
  const titleTypography = s.style?.titleTypography || {};
  const descColor: string = s.style?.descColor || "#64748b";
  const descTypography = s.style?.descTypography || {};

  const titleStyles = getTypographyStyles(titleTypography);
  const descStyles = getTypographyStyles(descTypography);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* ── 1. Top Section: Club Intro Banner ── */}
      <div
        className="rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-slate-800"
        style={{ backgroundColor: darkCardBgColor }}
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
          {clubBadge && (
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-orange-500/40 p-1 bg-slate-900 shadow-lg shrink-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={clubBadge} alt="Club Crest" className="w-full h-full object-cover rounded-xl" />
            </div>
          )}

          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              {badgeText}
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase" style={titleStyles}>
              {introTitle}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-orange-400">
              {introTagline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed" style={descStyles}>
              {introDescription}
            </p>
          </div>
        </div>
      </div>

      {/* ── 2. Middle Match Center Grid (Latest vs Upcoming) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Latest Match Card */}
        {showLatestMatch && (
          <div
            className="rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 flex flex-col justify-between transition hover:shadow-xl"
            style={{ backgroundColor: cardBgColor }}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Latest Result
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">{latestMatchCompetition}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  latestMatchOutcome === "WIN"
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : latestMatchOutcome === "DRAW"
                    ? "bg-amber-100 text-amber-800 border border-amber-300"
                    : "bg-rose-100 text-rose-800 border border-rose-300"
                }`}>
                  {latestMatchOutcome}
                </span>
              </div>

              {/* Scoreboard Visual */}
              <div className="grid grid-cols-3 items-center text-center py-4">
                {/* Home */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl p-1 bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={homeTeamLogo} alt={homeTeamName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{homeTeamName}</span>
                </div>

                {/* Score */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-mono">
                    {homeTeamScore} <span className="text-slate-300">-</span> {awayTeamScore}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 mt-1 uppercase">Full Time</span>
                </div>

                {/* Away */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl p-1 bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={awayTeamLogo} alt={awayTeamName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">{awayTeamName}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Icon icon="solar:map-point-bold" className="text-orange-500" width={15} />
                {latestMatchVenue}
              </span>
              <span className="font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                {latestMatchPom}
              </span>
            </div>
          </div>
        )}

        {/* Upcoming Match Card */}
        {showUpcomingMatch && (
          <div
            className="rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-800 text-white flex flex-col justify-between transition hover:shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: darkCardBgColor }}
          >
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-orange-600/10 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block">
                    Next Fixture
                  </span>
                  <h3 className="text-sm font-bold text-slate-200 mt-0.5">{upcomingCompetition}</h3>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold">
                  <Icon icon="solar:calendar-bold" width={13} />
                  <span>Upcoming</span>
                </div>
              </div>

              {/* Matchup Teams Visual */}
              <div className="grid grid-cols-3 items-center text-center py-4">
                {/* Next Home */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl p-1 bg-slate-900 border border-slate-700 shadow-xs flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={nextHomeLogo} alt={nextHomeName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-1">{nextHomeName}</span>
                </div>

                {/* VS Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-amber-600 text-white font-black text-sm flex items-center justify-center shadow-lg">
                    VS
                  </div>
                  <span className="text-[11px] font-bold text-orange-300 mt-2">Kickoff Match</span>
                </div>

                {/* Next Away */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl p-1 bg-slate-900 border border-slate-700 shadow-xs flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={nextAwayLogo} alt={nextAwayName} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100 line-clamp-1">{nextAwayName}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-400 space-y-0.5">
                <p className="flex items-center gap-1.5 font-semibold text-slate-300">
                  <Icon icon="solar:clock-circle-bold" className="text-orange-400" width={14} />
                  {upcomingDate}
                </p>
                <p className="flex items-center gap-1.5">
                  <Icon icon="solar:map-point-linear" width={14} />
                  {upcomingVenue}
                </p>
              </div>

              {upcomingTicketUrl && (
                <a
                  href={upcomingTicketUrl}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition shadow-md shrink-0"
                >
                  <span>{upcomingTicketText}</span>
                  <Icon icon="solar:arrow-right-linear" width={15} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── 3. Bottom Highlights & Media Grid ── */}
      {showHighlights && highlightsList.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600 block">
                Club TV & Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {highlightsTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              {highlightsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightsList.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Thumbnail + Video Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-orange-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                      <Icon icon="solar:play-bold" width={22} className="ml-0.5" />
                    </div>
                  </div>

                  {item.duration && (
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-950/80 text-white font-mono text-[11px] font-bold">
                      {item.duration}
                    </span>
                  )}

                  {item.category && (
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-xs">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-2 border-t border-slate-100">
                    <span>{item.views || "Camden Tigers TV"}</span>
                    <span className="inline-flex items-center gap-1 text-orange-600 font-bold group-hover:underline">
                      Watch Video <Icon icon="solar:arrow-right-linear" width={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const clubHomeOverviewElement = {
  type: "club-home-overview",
  category: "club",
  label: "Club Home & Match Overview",
  icon: "solar:home-smile-bold-duotone",

  schema: {
    content: {
      clubBadge: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&auto=format&fit=crop&q=80",
      badgeText: "OFFICIAL CLUB HUB",
      introTitle: "WELCOME TO CAMDEN TIGERS",
      introTagline: "Pride, Passion & Community Since 1961",
      introDescription: "Representing the heart of Macarthur football. From grassroots junior academies to elite premier squads, our club embodies championship determination and community spirit.",

      showLatestMatch: true,
      latestMatchCompetition: "Premier League • Round 18",
      latestMatchDate: "Last Sunday",
      latestMatchVenue: "Ron Dine Memorial Reserve",
      homeTeamName: "Camden Tigers",
      homeTeamLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      homeTeamScore: "3",
      awayTeamName: "Sydney University SFC",
      awayTeamLogo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
      awayTeamScore: "1",
      latestMatchPom: "Player of the Match: L. Mitchell (2 Goals)",
      latestMatchOutcome: "WIN",

      showUpcomingMatch: true,
      upcomingCompetition: "State Championship • Round 19",
      upcomingDate: "Saturday, 14 Oct 2026 • 15:30 AEST",
      upcomingVenue: "Camden Sports Ground, Field 1",
      nextHomeName: "Camden Tigers",
      nextHomeLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      nextAwayName: "Macarthur Rams FC",
      nextAwayLogo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80",
      upcomingTicketUrl: "/tickets",
      upcomingTicketText: "Matchday Info & Tickets",

      showHighlights: true,
      highlightsTitle: "Match Highlights & Media",
      highlightsSubtitle: "Catch up on the latest goals, match recaps, and locker room interviews",
      highlightsList: [
        {
          id: "1",
          title: "Match Recap: Tigers 3-1 Sydney Uni (Full Highlights)",
          duration: "04:22",
          category: "Match Highlights",
          thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
          views: "2.4K Views",
          videoUrl: "https://www.youtube.com",
        },
        {
          id: "2",
          title: "Coach Post-Match Press Conference: Round 18 Tactics",
          duration: "03:10",
          category: "Press Room",
          thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
          views: "1.1K Views",
          videoUrl: "https://www.youtube.com",
        },
        {
          id: "3",
          title: "Academy Goals of the Month: Junior Division Showcase",
          duration: "05:45",
          category: "Academy",
          thumbnail: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
          views: "3.8K Views",
          videoUrl: "https://www.youtube.com",
        },
      ],
    },

    style: {
      primaryAccentColor: "#f97316",
      secondaryAccentColor: "#ea580c",
      cardBgColor: "#ffffff",
      darkCardBgColor: "#0f172a",
      titleColor: "#0f172a",
      titleTypography: { fontSize: 36, fontSizeUnit: "px", fontWeight: "900" },
      descColor: "#64748b",
      descTypography: { fontSize: 14, fontSizeUnit: "px", fontWeight: "400" },
    },
  },

  controls: [
    // ═══════════════════ CONTENT TAB ══════════════════
    {
      tab: "Content",
      section: "Club Intro Header",
      controls: [
        {
          name: "badgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Badge Pill Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "introTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Intro Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "introTagline",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Intro Tagline" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "introDescription",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Intro Description" value={value || ""} onChange={onChange} rows={3} />
          ),
        },
        {
          name: "clubBadge",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ImageGallery label="Club Crest Logo" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },
    {
      tab: "Content",
      section: "Latest Match Result",
      controls: [
        {
          name: "showLatestMatch",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Latest Match Card" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "latestMatchCompetition",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Competition / Round" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "homeTeamName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Home Team Name" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "homeTeamScore",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Home Score" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "awayTeamName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Away Team Name" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "awayTeamScore",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Away Score" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "latestMatchOutcome",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Outcome Badge"
              value={value || "WIN"}
              onChange={onChange}
              options={[
                { value: "WIN", label: "WIN (Green)" },
                { value: "DRAW", label: "DRAW (Yellow)" },
                { value: "LOSS", label: "LOSS (Red)" },
              ]}
            />
          ),
        },
        {
          name: "latestMatchVenue",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Venue Name" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "latestMatchPom",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Player of Match Note" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },
    {
      tab: "Content",
      section: "Upcoming Next Match",
      controls: [
        {
          name: "showUpcomingMatch",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Upcoming Match Card" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "upcomingCompetition",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Competition / Round" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "upcomingDate",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Date & Time" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "nextHomeName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Home Team" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "nextAwayName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Away Team" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "upcomingVenue",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Venue" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "upcomingTicketUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Url label="Tickets / Matchday URL" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    // ═══════════════════ STYLE TAB ════════════════════
    {
      tab: "Style",
      section: "Color Customization",
      controls: [
        {
          name: "primaryAccentColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Primary Accent (Orange)" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "darkCardBgColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Dark Banner Background" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "cardBgColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Light Card Background" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
      ],
    },
    {
      tab: "Style",
      section: "Typography",
      controls: [
        {
          name: "titleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Intro Title Font" value={value} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubHomeOverviewFrontend element={element} />,
};

export default clubHomeOverviewElement;
