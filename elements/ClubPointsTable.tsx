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

export interface ClubStandingsRow {
  rank: number;
  teamName: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goalDifference: string;
  points: number;
  form: ("W" | "D" | "L")[];
  isMyClub?: boolean;
}

export function ClubPointsTableFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  const badgeText: string = s.content?.badgeText || "LEAGUE STANDINGS";
  const competitionName: string = s.content?.competitionName || "Football NSW League One • 2026/27";
  const subtitle: string =
    s.content?.subtitle || "Official ladder standings, goal difference / NRR, and recent form guide.";
  const showFormGuide: boolean = s.content?.showFormGuide ?? true;

  const standings: ClubStandingsRow[] = s.content?.standings || [
    {
      rank: 1,
      teamName: "Macarthur Rams FC",
      logo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 13,
      drawn: 3,
      lost: 2,
      goalsFor: 44,
      goalsAgainst: 16,
      goalDifference: "+28",
      points: 42,
      form: ["W", "W", "D", "W", "W"],
    },
    {
      rank: 2,
      teamName: "Camden Tigers FC",
      logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 12,
      drawn: 4,
      lost: 2,
      goalsFor: 41,
      goalsAgainst: 18,
      goalDifference: "+23",
      points: 40,
      form: ["W", "D", "W", "W", "W"],
      isMyClub: true,
    },
    {
      rank: 3,
      teamName: "Bankstown City Lions",
      logo: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 11,
      drawn: 3,
      lost: 4,
      goalsFor: 38,
      goalsAgainst: 22,
      goalDifference: "+16",
      points: 36,
      form: ["L", "W", "W", "D", "W"],
    },
    {
      rank: 4,
      teamName: "Sydney University SFC",
      logo: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 9,
      drawn: 4,
      lost: 5,
      goalsFor: 31,
      goalsAgainst: 24,
      goalDifference: "+7",
      points: 31,
      form: ["W", "L", "W", "L", "L"],
    },
    {
      rank: 5,
      teamName: "Dunbar Rovers FC",
      logo: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 8,
      drawn: 3,
      lost: 7,
      goalsFor: 29,
      goalsAgainst: 28,
      goalDifference: "+1",
      points: 27,
      form: ["D", "D", "L", "W", "W"],
    },
    {
      rank: 6,
      teamName: "Rydalmere Lions FC",
      logo: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 6,
      drawn: 5,
      lost: 7,
      goalsFor: 25,
      goalsAgainst: 30,
      goalDifference: "-5",
      points: 23,
      form: ["D", "L", "D", "L", "W"],
    },
    {
      rank: 7,
      teamName: "Inter Lions SC",
      logo: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=100&auto=format&fit=crop&q=80",
      played: 18,
      won: 4,
      drawn: 3,
      lost: 11,
      goalsFor: 19,
      goalsAgainst: 39,
      goalDifference: "-20",
      points: 15,
      form: ["L", "L", "W", "L", "L"],
    },
  ];

  const primaryAccent: string = s.style?.primaryAccent || "#f97316";
  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
          <Icon icon="solar:ranking-bold" width={14} />
          {badgeText}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase" style={headingStyles}>
          {competitionName}
        </h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>

      {/* Points Table Container */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white font-black uppercase tracking-wider text-[11px]">
                <th className="py-4 px-4 sm:px-6 text-center w-12">Pos</th>
                <th className="py-4 px-4 sm:px-6">Team</th>
                <th className="py-4 px-3 text-center">P</th>
                <th className="py-4 px-3 text-center">W</th>
                <th className="py-4 px-3 text-center">D</th>
                <th className="py-4 px-3 text-center">L</th>
                <th className="py-4 px-3 text-center hidden sm:table-cell">GF</th>
                <th className="py-4 px-3 text-center hidden sm:table-cell">GA</th>
                <th className="py-4 px-3 text-center">GD / NRR</th>
                <th className="py-4 px-4 sm:px-6 text-center font-mono text-orange-400">PTS</th>
                {showFormGuide && <th className="py-4 px-4 text-center hidden md:table-cell">Form</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {standings.map((row) => {
                const isTopThree = row.rank <= 3;
                const isClub = row.isMyClub;

                return (
                  <tr
                    key={row.rank}
                    className={`transition-colors ${
                      isClub
                        ? "bg-orange-50/70 hover:bg-orange-100/60 font-bold"
                        : "hover:bg-slate-50/80"
                    }`}
                  >
                    {/* Rank */}
                    <td className="py-3.5 px-4 sm:px-6 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-xl text-xs font-black font-mono ${
                          isClub
                            ? "bg-orange-600 text-white shadow-xs"
                            : isTopThree
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.rank}
                      </span>
                    </td>

                    {/* Team Name & Crest */}
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 p-0.5 shrink-0 flex items-center justify-center">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={row.logo} alt={row.teamName} className="w-full h-full object-cover rounded-md" />
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${isClub ? "text-orange-950" : "text-slate-900"}`}>
                          {row.teamName}
                          {isClub && (
                            <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-orange-600 bg-orange-100 border border-orange-200 px-2 py-0.5 rounded-md">
                              Our Club
                            </span>
                          )}
                        </span>
                      </div>
                    </td>

                    {/* Numbers */}
                    <td className="py-3.5 px-3 text-center font-mono text-slate-600">{row.played}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-emerald-700 font-bold">{row.won}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-amber-600">{row.drawn}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-rose-600">{row.lost}</td>
                    <td className="py-3.5 px-3 text-center font-mono text-slate-500 hidden sm:table-cell">
                      {row.goalsFor ?? "-"}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono text-slate-500 hidden sm:table-cell">
                      {row.goalsAgainst ?? "-"}
                    </td>
                    <td className="py-3.5 px-3 text-center font-mono font-bold text-slate-800">
                      {row.goalDifference}
                    </td>

                    {/* Points */}
                    <td className="py-3.5 px-4 sm:px-6 text-center font-mono font-black text-sm sm:text-base text-slate-950">
                      {row.points}
                    </td>

                    {/* Form Guide */}
                    {showFormGuide && (
                      <td className="py-3.5 px-4 text-center hidden md:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((f, i) => (
                            <span
                              key={i}
                              className={`w-5 h-5 rounded-md text-[10px] font-black font-mono flex items-center justify-center ${
                                f === "W"
                                  ? "bg-emerald-600 text-white"
                                  : f === "D"
                                  ? "bg-amber-500 text-white"
                                  : "bg-rose-500 text-white"
                              }`}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Positions 1–3: Finals Series & Promotion
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> Camden Tigers Row
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-400">P: Played | GD: Goal Diff | PTS: Points</span>
        </div>
      </div>
    </div>
  );
}

const clubPointsTableElement = {
  type: "club-points-table",
  category: "club",
  label: "Club League Standings Table",
  icon: "solar:ranking-bold-duotone",

  schema: {
    content: {
      badgeText: "LEAGUE STANDINGS",
      competitionName: "Football NSW League One • 2026/27",
      subtitle: "Official ladder standings, goal difference / NRR, and recent form guide.",
      showFormGuide: true,
      standings: [
        {
          rank: 1,
          teamName: "Macarthur Rams FC",
          logo: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=100&auto=format&fit=crop&q=80",
          played: 18,
          won: 13,
          drawn: 3,
          lost: 2,
          goalsFor: 44,
          goalsAgainst: 16,
          goalDifference: "+28",
          points: 42,
          form: ["W", "W", "D", "W", "W"],
        },
        {
          rank: 2,
          teamName: "Camden Tigers FC",
          logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop&q=80",
          played: 18,
          won: 12,
          drawn: 4,
          lost: 2,
          goalsFor: 41,
          goalsAgainst: 18,
          goalDifference: "+23",
          points: 40,
          form: ["W", "D", "W", "W", "W"],
          isMyClub: true,
        },
      ],
    },

    style: {
      primaryAccent: "#f97316",
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
            <Text label="Badge Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "competitionName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Competition Name" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "subtitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Subtitle" value={value || ""} onChange={onChange} rows={2} />
          ),
        },
        {
          name: "showFormGuide",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Form Guide (W/D/L)" value={value ?? true} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubPointsTableFrontend element={element} />,
};

export default clubPointsTableElement;
