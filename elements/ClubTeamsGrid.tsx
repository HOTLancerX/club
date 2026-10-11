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

export interface ClubTeamItem {
  id: string;
  name: string;
  category: "senior" | "womens" | "youth" | "junior";
  division: string;
  headCoach: string;
  assistantCoach?: string;
  captainName?: string;
  squadSize: number;
  image: string;
  leagueStanding?: string;
  trainingTimes?: string;
  rosterUrl?: string;
}

export function ClubTeamsGridFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const badgeText: string = s.content?.badgeText || "SQUADS & DIVISIONS";
  const sectionTitle: string = s.content?.sectionTitle || "OUR TEAMS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "From our flagship Premier 1st Grade squad to developing grassroots junior teams.";

  const teams: ClubTeamItem[] = s.content?.teams || [
    {
      id: "1",
      name: "Men's 1st Grade Premier Team",
      category: "senior",
      division: "Football NSW League One",
      headCoach: "M. Henderson",
      assistantCoach: "D. Rossi",
      captainName: "A. Cole (#10)",
      squadSize: 22,
      leagueStanding: "2nd in League One",
      trainingTimes: "Tue & Thu 19:00 - 21:00",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/senior-1st-grade",
    },
    {
      id: "2",
      name: "Men's Under-20s Reserve Grade",
      category: "senior",
      division: "NSW U20 Championship",
      headCoach: "J. Miller",
      captainName: "E. Clark (#7)",
      squadSize: 20,
      leagueStanding: "1st in U20 Table",
      trainingTimes: "Tue & Thu 17:30 - 19:00",
      image: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/u20-reserve",
    },
    {
      id: "3",
      name: "Women's Premier League Squad",
      category: "womens",
      division: "NSW Women's League 1",
      headCoach: "S. O'Connor",
      captainName: "K. Williams (#9)",
      squadSize: 21,
      leagueStanding: "3rd in Premier Div",
      trainingTimes: "Mon & Wed 18:30 - 20:30",
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/womens-premier",
    },
    {
      id: "4",
      name: "Women's Youth U18 Development",
      category: "womens",
      division: "Macarthur Regional Youth",
      headCoach: "R. Evans",
      squadSize: 18,
      leagueStanding: "Champions 2025",
      trainingTimes: "Mon & Wed 17:00 - 18:30",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/womens-u18",
    },
    {
      id: "5",
      name: "Youth Academy U16 Boys",
      category: "youth",
      division: "Youth Talent Pathway",
      headCoach: "P. Santos",
      squadSize: 18,
      leagueStanding: "State Youth League",
      trainingTimes: "Wed & Fri 17:00 - 18:30",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/u16-academy",
    },
    {
      id: "6",
      name: "Junior Grassroots U12 Tigers",
      category: "junior",
      division: "Camden District Association",
      headCoach: "B. Taylor (FA Certified)",
      squadSize: 15,
      leagueStanding: "Community Cup Winners",
      trainingTimes: "Wednesdays 16:30 - 17:45",
      image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&auto=format&fit=crop&q=80",
      rosterUrl: "/teams/u12-grassroots",
    },
  ];

  const filteredTeams = teams.filter((t) => {
    if (selectedCategory === "all") return true;
    return t.category === selectedCategory;
  });

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header & Category Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
            <Icon icon="solar:users-group-two-rounded-bold" width={14} />
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase" style={headingStyles}>
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl">
            {sectionSubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
          {[
            { id: "all", label: "All Teams" },
            { id: "senior", label: "Senior Men's" },
            { id: "womens", label: "Women's & Girls" },
            { id: "youth", label: "Youth Academy" },
            { id: "junior", label: "Junior Grassroots" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-orange-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Photo Banner */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Division Tag */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-white/20 text-[11px] font-bold">
                  {team.division}
                </span>

                {team.leagueStanding && (
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-orange-600 text-white text-[11px] font-bold shadow-md">
                    {team.leagueStanding}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  {team.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Head Coach</span>
                    <span className="font-bold text-slate-800">{team.headCoach}</span>
                  </div>

                  {team.captainName && (
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-400 font-medium">Captain</span>
                      <span className="font-bold text-slate-800">{team.captainName}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-400 font-medium">Squad Roster</span>
                    <span className="font-bold text-slate-800">{team.squadSize} Players</span>
                  </div>

                  {team.trainingTimes && (
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-400 font-medium">Training</span>
                      <span className="font-bold text-orange-600">{team.trainingTimes}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="p-6 pt-0">
              <a
                href={team.rosterUrl || "#"}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-50 hover:bg-orange-600 text-slate-800 hover:text-white border border-slate-200 hover:border-orange-600 transition-all shadow-2xs"
              >
                <span>View Full Team Roster</span>
                <Icon icon="solar:arrow-right-linear" width={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const clubTeamsGridElement = {
  type: "club-teams-grid",
  category: "club",
  label: "Club Teams & Squads",
  icon: "solar:users-group-two-rounded-bold-duotone",

  schema: {
    content: {
      badgeText: "SQUADS & DIVISIONS",
      sectionTitle: "OUR TEAMS",
      sectionSubtitle: "From our flagship Premier 1st Grade squad to developing grassroots junior teams.",
      teams: [
        {
          id: "1",
          name: "Men's 1st Grade Premier Team",
          category: "senior",
          division: "Football NSW League One",
          headCoach: "M. Henderson",
          captainName: "A. Cole (#10)",
          squadSize: 22,
          leagueStanding: "2nd in League One",
          trainingTimes: "Tue & Thu 19:00 - 21:00",
          image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/senior-1st-grade",
        },
        {
          id: "2",
          name: "Men's Under-20s Reserve Grade",
          category: "senior",
          division: "NSW U20 Championship",
          headCoach: "J. Miller",
          captainName: "E. Clark (#7)",
          squadSize: 20,
          leagueStanding: "1st in U20 Table",
          trainingTimes: "Tue & Thu 17:30 - 19:00",
          image: "https://images.unsplash.com/photo-1529900245534-5e117b60b4d6?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/u20-reserve",
        },
        {
          id: "3",
          name: "Women's Premier League Squad",
          category: "womens",
          division: "NSW Women's League 1",
          headCoach: "S. O'Connor",
          captainName: "K. Williams (#9)",
          squadSize: 21,
          leagueStanding: "3rd in Premier Div",
          trainingTimes: "Mon & Wed 18:30 - 20:30",
          image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/womens-premier",
        },
        {
          id: "4",
          name: "Women's Youth U18 Development",
          category: "womens",
          division: "Macarthur Regional Youth",
          headCoach: "R. Evans",
          squadSize: 18,
          leagueStanding: "Champions 2025",
          trainingTimes: "Mon & Wed 17:00 - 18:30",
          image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/womens-u18",
        },
        {
          id: "5",
          name: "Youth Academy U16 Boys",
          category: "youth",
          division: "Youth Talent Pathway",
          headCoach: "P. Santos",
          squadSize: 18,
          leagueStanding: "State Youth League",
          trainingTimes: "Wed & Fri 17:00 - 18:30",
          image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/u16-academy",
        },
        {
          id: "6",
          name: "Junior Grassroots U12 Tigers",
          category: "junior",
          division: "Camden District Association",
          headCoach: "B. Taylor (FA Certified)",
          squadSize: 15,
          leagueStanding: "Community Cup Winners",
          trainingTimes: "Wednesdays 16:30 - 17:45",
          image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&auto=format&fit=crop&q=80",
          rosterUrl: "/teams/u12-grassroots",
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
    {
      tab: "Style",
      section: "Styling",
      controls: [
        {
          name: "primaryColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Primary Accent" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubTeamsGridFrontend element={element} />,
};

export default clubTeamsGridElement;
