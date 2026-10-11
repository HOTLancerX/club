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

export interface PlayerStatItem {
  label: string;
  value: string;
}

export interface ClubPlayerItem {
  id: string;
  name: string;
  jerseyNumber: string;
  role: "Goalkeeper" | "Defender" | "Midfielder" | "Forward" | "Coach";
  category: "senior" | "womens" | "u20";
  photo: string;
  nationality?: string;
  isCaptain?: boolean;
  isViceCaptain?: boolean;
  appearances?: number;
  goals?: number;
  cleanSheets?: number;
  assists?: number;
  bio?: string;
}

export function ClubPlayersRosterFrontend({ element }: { element: any }) {
  const s = element?.schema || {};
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedSquad, setSelectedSquad] = useState<string>("senior");
  const [selectedPlayerModal, setSelectedPlayerModal] = useState<ClubPlayerItem | null>(null);

  const badgeText: string = s.content?.badgeText || "SQUAD ROSTER";
  const sectionTitle: string = s.content?.sectionTitle || "MEET THE TIGERS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "Player profiles, jersey numbers, and season statistics for our competitive squads.";

  const players: ClubPlayerItem[] = s.content?.players || [
    {
      id: "1",
      name: "Marcus Vance",
      jerseyNumber: "1",
      role: "Goalkeeper",
      category: "senior",
      nationality: "Australia",
      isViceCaptain: true,
      appearances: 18,
      cleanSheets: 8,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
      bio: "Club stalwart with over 120 senior appearances and outstanding penalty-stopping record.",
    },
    {
      id: "2",
      name: "Liam O'Connor",
      jerseyNumber: "4",
      role: "Defender",
      category: "senior",
      nationality: "Australia",
      appearances: 17,
      goals: 2,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
      bio: "Towering center-back renowned for commanding aerial dominance and defensive leadership.",
    },
    {
      id: "3",
      name: "Alexander Cole",
      jerseyNumber: "10",
      role: "Midfielder",
      category: "senior",
      nationality: "Australia",
      isCaptain: true,
      appearances: 18,
      goals: 9,
      assists: 11,
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80",
      bio: "Club Captain and playmaker with supreme vision, set-piece precision, and championship pedigree.",
    },
    {
      id: "4",
      name: "Lucas Mitchell",
      jerseyNumber: "9",
      role: "Forward",
      category: "senior",
      nationality: "Australia",
      appearances: 16,
      goals: 14,
      assists: 5,
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
      bio: "Golden Boot contender with explosive pace and clinical finishing inside the penalty box.",
    },
    {
      id: "5",
      name: "Emma Thornton",
      jerseyNumber: "7",
      role: "Forward",
      category: "womens",
      nationality: "Australia",
      isCaptain: true,
      appearances: 15,
      goals: 12,
      assists: 8,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
      bio: "Women's Premier League MVP and dynamic winger with blistering acceleration.",
    },
    {
      id: "6",
      name: "Sophie Zhang",
      jerseyNumber: "8",
      role: "Midfielder",
      category: "womens",
      nationality: "Australia",
      appearances: 14,
      goals: 5,
      assists: 7,
      photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
      bio: "Midfield dynamo with pinpoint passing range and tireless box-to-box work rate.",
    },
  ];

  const filteredPlayers = players.filter((p) => {
    const squadMatch = p.category === selectedSquad;
    const roleMatch = selectedRole === "all" || p.role === selectedRole;
    return squadMatch && roleMatch;
  });

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Header & Controls */}
      <div className="space-y-6 border-b border-slate-200 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
              <Icon icon="solar:user-bold" width={14} />
              {badgeText}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase mt-2" style={headingStyles}>
              {sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl">
              {sectionSubtitle}
            </p>
          </div>

          {/* Squad Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-end">
            {[
              { id: "senior", label: "Men's 1st Team" },
              { id: "womens", label: "Women's Premier" },
            ].map((sq) => (
              <button
                key={sq.id}
                type="button"
                onClick={() => setSelectedSquad(sq.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSquad === sq.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {sq.label}
              </button>
            ))}
          </div>
        </div>

        {/* Position Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {["all", "Goalkeeper", "Defender", "Midfielder", "Forward"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedRole === role
                  ? "bg-orange-600 text-white shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {role === "all" ? "All Positions" : role}
            </button>
          ))}
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPlayers.map((player) => (
          <div
            key={player.id}
            onClick={() => setSelectedPlayerModal(player)}
            className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            {/* Player Portrait */}
            <div className="relative aspect-3/4 w-full overflow-hidden bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={player.photo}
                alt={player.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Jersey Number Badge */}
              <div className="absolute top-3 left-3 w-10 h-10 rounded-2xl bg-orange-600 text-white font-mono font-black text-lg flex items-center justify-center shadow-lg border border-orange-400/50">
                #{player.jerseyNumber}
              </div>

              {/* Captain Badge */}
              {player.isCaptain && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md">
                  CAPTAIN
                </div>
              )}

              {/* Role & Name Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block">
                  {player.role}
                </span>
                <h3 className="text-lg font-black tracking-tight leading-tight">
                  {player.name}
                </h3>
              </div>
            </div>

            {/* Quick Stat Summary Bar */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-around text-center text-xs">
              <div>
                <span className="text-slate-400 text-[10px] block uppercase font-bold">Matches</span>
                <span className="font-black font-mono text-slate-900 text-sm">{player.appearances ?? 0}</span>
              </div>
              <div className="w-px h-6 bg-slate-200" />
              <div>
                <span className="text-slate-400 text-[10px] block uppercase font-bold">
                  {player.role === "Goalkeeper" ? "Clean Sheets" : "Goals"}
                </span>
                <span className="font-black font-mono text-orange-600 text-sm">
                  {player.role === "Goalkeeper" ? player.cleanSheets ?? 0 : player.goals ?? 0}
                </span>
              </div>
              <div className="w-px h-6 bg-slate-200" />
              <div>
                <span className="text-slate-400 text-[10px] block uppercase font-bold">View</span>
                <Icon icon="solar:card-2-bold" className="text-slate-400 group-hover:text-orange-600 mx-auto" width={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Player Detail Modal */}
      {selectedPlayerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative">
            <button
              type="button"
              onClick={() => setSelectedPlayerModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 text-white flex items-center justify-center hover:bg-slate-900 transition"
            >
              <Icon icon="solar:close-circle-bold" width={22} />
            </button>

            <div className="relative aspect-16/10 w-full bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedPlayerModal.photo} alt={selectedPlayerModal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 text-white">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider block">
                  #{selectedPlayerModal.jerseyNumber} • {selectedPlayerModal.role}
                </span>
                <h3 className="text-2xl font-black">{selectedPlayerModal.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedPlayerModal.bio || "Key member of the competitive Tigers squad."}
              </p>

              <div className="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-2xl text-center border border-slate-100">
                <div className="p-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Apps</span>
                  <span className="text-xl font-black font-mono text-slate-900">{selectedPlayerModal.appearances ?? 0}</span>
                </div>
                <div className="p-2 border-x border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Goals</span>
                  <span className="text-xl font-black font-mono text-orange-600">{selectedPlayerModal.goals ?? 0}</span>
                </div>
                <div className="p-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Assists</span>
                  <span className="text-xl font-black font-mono text-slate-900">{selectedPlayerModal.assists ?? 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const clubPlayersRosterElement = {
  type: "club-players-roster",
  category: "club",
  label: "Club Players & Squad Roster",
  icon: "solar:user-id-bold-duotone",

  schema: {
    content: {
      badgeText: "SQUAD ROSTER",
      sectionTitle: "MEET THE TIGERS",
      sectionSubtitle: "Player profiles, jersey numbers, and season statistics for our competitive squads.",
      players: [
        {
          id: "1",
          name: "Marcus Vance",
          jerseyNumber: "1",
          role: "Goalkeeper",
          category: "senior",
          nationality: "Australia",
          isViceCaptain: true,
          appearances: 18,
          cleanSheets: 8,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
          bio: "Club stalwart with over 120 senior appearances and outstanding penalty-stopping record.",
        },
        {
          id: "2",
          name: "Liam O'Connor",
          jerseyNumber: "4",
          role: "Defender",
          category: "senior",
          nationality: "Australia",
          appearances: 17,
          goals: 2,
          photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
          bio: "Towering center-back renowned for commanding aerial dominance and defensive leadership.",
        },
        {
          id: "3",
          name: "Alexander Cole",
          jerseyNumber: "10",
          role: "Midfielder",
          category: "senior",
          nationality: "Australia",
          isCaptain: true,
          appearances: 18,
          goals: 9,
          assists: 11,
          photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80",
          bio: "Club Captain and playmaker with supreme vision, set-piece precision, and championship pedigree.",
        },
        {
          id: "4",
          name: "Lucas Mitchell",
          jerseyNumber: "9",
          role: "Forward",
          category: "senior",
          nationality: "Australia",
          appearances: 16,
          goals: 14,
          assists: 5,
          photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80",
          bio: "Golden Boot contender with explosive pace and clinical finishing inside the penalty box.",
        },
        {
          id: "5",
          name: "Emma Thornton",
          jerseyNumber: "7",
          role: "Forward",
          category: "womens",
          nationality: "Australia",
          isCaptain: true,
          appearances: 15,
          goals: 12,
          assists: 8,
          photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80",
          bio: "Women's Premier League MVP and dynamic winger with blistering acceleration.",
        },
        {
          id: "6",
          name: "Sophie Zhang",
          jerseyNumber: "8",
          role: "Midfielder",
          category: "womens",
          nationality: "Australia",
          appearances: 14,
          goals: 5,
          assists: 7,
          photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80",
          bio: "Midfield dynamo with pinpoint passing range and tireless box-to-box work rate.",
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
      section: "Header",
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

  render: (element: any) => <ClubPlayersRosterFrontend element={element} />,
};

export default clubPlayersRosterElement;
