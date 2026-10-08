"use client";

import React from "react";
import { Icon } from "@iconify/react";
import {
  Text,
  Textarea,
  NumberControl,
  ColorPickerPopup,
  Typography,
  Toggle,
  ImageGallery,
  Select,
} from "@/components/builder/controls";

function getTypographyStyles(value: any) {
  if (!value || typeof value !== "object") return {};
  const styles: React.CSSProperties = {};
  if (value.fontFamily) styles.fontFamily = value.fontFamily;
  if (value.fontSize) styles.fontSize = `${value.fontSize}${value.fontSizeUnit || "px"}`;
  if (value.fontWeight) styles.fontWeight = value.fontWeight;
  if (value.textTransform) styles.textTransform = value.textTransform as any;
  if (value.fontStyle) styles.fontStyle = value.fontStyle;
  if (value.textDecoration) styles.textDecoration = value.textDecoration;
  if (value.lineHeight && value.lineHeight > 0)
    styles.lineHeight = `${value.lineHeight}${value.lineHeightUnit || "px"}`;
  if (value.letterSpacing !== undefined && value.letterSpacing !== 0)
    styles.letterSpacing = `${value.letterSpacing}${value.letterSpacingUnit || "px"}`;
  return styles;
}

export interface ClubMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  badge?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

const DEFAULT_MEMBERS: ClubMember[] = [
  {
    id: "1",
    name: "Rod Sharp",
    role: "Club President",
    badge: "Executive",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    email: "president@camdentigers.com.au",
    phone: "0412 345 678",
    bio: "Guiding Camden Tigers with over 20 years of football administration experience.",
  },
  {
    id: "2",
    name: "Gary Clarke",
    role: "Vice President",
    badge: "Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    email: "vp@camdentigers.com.au",
    phone: "0423 456 789",
    bio: "Dedicated to junior player pathways and community club engagement.",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    role: "Secretary & Operations",
    badge: "Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    email: "secretary@camdentigers.com.au",
    phone: "0434 567 890",
    bio: "Managing club registrations, fixtures, and administrative operations.",
  },
  {
    id: "4",
    name: "David Miller",
    role: "Club Treasurer",
    badge: "Finance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
    email: "treasurer@camdentigers.com.au",
    phone: "0445 678 901",
    bio: "Overseeing financial stewardship and sponsorship allocations.",
  },
];

export function ClubMembersFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Content
  const showBadge: boolean = s.content?.showBadge ?? true;
  const badgeText: string = s.content?.badgeText || "LEADERSHIP & COMMITTEE";
  const showTitle: boolean = s.content?.showTitle ?? true;
  const title: string = s.content?.title || "OUR COMMITTEE MEMBERS";
  const subtitle: string =
    s.content?.subtitle ||
    "Meet the dedicated volunteers and leadership team driving Camden Tigers Football Club forward.";
  const members: ClubMember[] = s.content?.members || DEFAULT_MEMBERS;

  // Layout
  const deskCols = Number(s.style?.columnsDesktop) || 4;
  const tabCols = Number(s.style?.columnsTablet) || 2;
  const mobCols = Number(s.style?.columnsMobile) || 1;
  const gap: number = s.style?.gap ?? 24;
  const centerItems: boolean = s.style?.centerItems ?? true;

  // Card & Image Style
  const cardBg: string = s.style?.cardBg || "#ffffff";
  const cardBorderColor: string = s.style?.cardBorderColor || "#e2e8f0";
  const cardBorderRadius: number = s.style?.cardBorderRadius ?? 16;
  const cardShadow: string = s.style?.cardShadow || "shadow-sm";
  const imageHeight: number = s.style?.imageHeight ?? 280;
  const imageShape: string = s.style?.imageShape || "cover"; // 'cover' | 'circle'

  // Typography & Color Styles
  const badgeColor: string = s.style?.badgeColor || "#f97316";
  const badgeBg: string = s.style?.badgeBg || "#fff7ed";
  const badgeTyp = getTypographyStyles(s.style?.badgeTypography || {});

  const titleColor: string = s.style?.titleColor || "#0f172a";
  const titleTyp = getTypographyStyles(s.style?.titleTypography || {});

  const subtitleColor: string = s.style?.subtitleColor || "#64748b";
  const subtitleTyp = getTypographyStyles(s.style?.subtitleTypography || {});

  const nameColor: string = s.style?.nameColor || "#0f172a";
  const nameTyp = getTypographyStyles(s.style?.nameTypography || {});

  const roleColor: string = s.style?.roleColor || "#f97316";
  const roleTyp = getTypographyStyles(s.style?.roleTypography || {});

  const bioColor: string = s.style?.bioColor || "#64748b";

  const getWidthClass = () => {
    if (deskCols === 6)
      return "w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)] max-w-xs";
    if (deskCols === 4)
      return "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm";
    if (deskCols === 3)
      return "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md";
    if (deskCols === 2)
      return "w-full sm:w-[calc(50%-12px)] max-w-md";
    return "w-full max-w-lg";
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
            {showBadge && badgeText && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-xs"
                style={{
                  color: badgeColor,
                  backgroundColor: badgeBg,
                  ...badgeTyp,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {badgeText}
              </span>
            )}

            {title && (
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
                style={{ color: titleColor, ...titleTyp }}
              >
                {title}
              </h2>
            )}

            {/* Orange Camden Tigers Accent Bar */}
            <div className="w-14 h-1 bg-[#f97316] rounded-full mt-3" />

            {subtitle && (
              <p
                className="text-sm sm:text-base max-w-2xl mt-3 font-normal"
                style={{ color: subtitleColor, ...subtitleTyp }}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Members Dynamic Grid */}
        <div
          className={`flex flex-wrap ${
            centerItems ? "justify-center" : "justify-start"
          } items-stretch w-full`}
          style={{ gap: `${gap}px` }}
        >
          {members.map((member, idx) => (
            <div
              key={member.id || idx}
              className={`flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardShadow} ${getWidthClass()}`}
              style={{
                backgroundColor: cardBg,
                borderRadius: `${cardBorderRadius}px`,
                borderColor: cardBorderColor,
                borderWidth: "1px",
              }}
            >
              {/* Photo Area */}
              {imageShape === "circle" ? (
                <div className="p-6 pb-2 flex justify-center items-center">
                  <div
                    className="relative rounded-full overflow-hidden border-4 border-orange-500/20 group-hover:border-orange-500 transition-colors shadow-md"
                    style={{
                      width: `${imageHeight > 220 ? 180 : imageHeight}px`,
                      height: `${imageHeight > 220 ? 180 : imageHeight}px`,
                    }}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                        <Icon icon="solar:user-bold" width={56} />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div
                  className="w-full overflow-hidden bg-slate-100 relative shrink-0"
                  style={{
                    height: `${imageHeight}px`,
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                      <Icon icon="solar:user-bold" width={64} />
                    </div>
                  )}

                  {/* Optional Badge Tag on Card */}
                  {member.badge && (
                    <div className="absolute top-3 right-3 bg-[#07111e]/85 backdrop-blur-xs text-[#f97316] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-orange-500/30 shadow-md">
                      {member.badge}
                    </div>
                  )}
                </div>
              )}

              {/* Member Card Details */}
              <div className="p-5 flex flex-col flex-1 justify-between text-center space-y-2">
                <div>
                  {/* Member Name */}
                  <h3
                    className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#f97316] transition-colors"
                    style={{ color: nameColor, ...nameTyp }}
                  >
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  {member.role && (
                    <p
                      className="text-xs sm:text-sm font-extrabold uppercase tracking-wide mt-1"
                      style={{ color: roleColor, ...roleTyp }}
                    >
                      {member.role}
                    </p>
                  )}

                  {/* Optional Bio text */}
                  {member.bio && (
                    <p
                      className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed"
                      style={{ color: bioColor }}
                    >
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Contact Icons / Actions */}
                {(member.email || member.phone) && (
                  <div className="pt-3.5 mt-2 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-500 text-xs">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-lg bg-orange-50/60 hover:bg-orange-100 text-[#f97316] transition-colors"
                        title={member.email}
                      >
                        <Icon icon="solar:letter-bold" width={16} />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="p-2 rounded-lg bg-orange-50/60 hover:bg-orange-100 text-[#f97316] transition-colors"
                        title={member.phone}
                      >
                        <Icon icon="solar:phone-bold" width={16} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const clubMembersElement = {
  type: "club-members",
  label: "Club Committee & Members",
  category: "club",

  schema: {
    content: {
      showBadge: true,
      badgeText: "LEADERSHIP & COMMITTEE",
      showTitle: true,
      title: "OUR COMMITTEE MEMBERS",
      subtitle:
        "Meet the dedicated volunteers and leadership team driving Camden Tigers Football Club forward.",
      members: DEFAULT_MEMBERS,
    },

    style: {
      columnsDesktop: 4,
      columnsTablet: 2,
      columnsMobile: 1,
      gap: 24,
      centerItems: true,
      cardBg: "#ffffff",
      cardBorderColor: "#e2e8f0",
      cardBorderRadius: 16,
      cardShadow: "shadow-sm",
      imageHeight: 280,
      imageShape: "cover",

      badgeColor: "#f97316",
      badgeBg: "#fff7ed",
      badgeTypography: {
        fontSize: 11,
        fontWeight: "800",
      },

      titleColor: "#0f172a",
      titleTypography: {
        fontSize: 32,
        fontWeight: "800",
      },

      subtitleColor: "#64748b",
      subtitleTypography: {
        fontSize: 14,
        fontWeight: "400",
      },

      nameColor: "#0f172a",
      nameTypography: {
        fontSize: 18,
        fontWeight: "700",
      },

      roleColor: "#f97316",
      roleTypography: {
        fontSize: 12,
        fontWeight: "700",
      },

      bioColor: "#64748b",
      iconColor: "#f97316",
    },
  },

  controls: [
    // ═══════════════════ CONTENT TAB ═══════════════
    {
      tab: "Content",
      section: "Section Header",
      controls: [
        {
          name: "showBadge",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Header Badge" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "badgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Badge Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "showTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Section Title" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "title",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Section Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "subtitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Section Subtitle" value={value || ""} onChange={onChange} rows={2} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Club Committee Members",
      controls: [
        {
          name: "members",
          responsive: false,
          render: (value: any, onChange: any) => {
            const list: ClubMember[] = Array.isArray(value) ? value : [];
            const updateMember = (idx: number, field: string, val: any) => {
              const updated = [...list];
              updated[idx] = { ...updated[idx], [field]: val };
              onChange(updated);
            };
            const addMember = () => {
              onChange([
                ...list,
                {
                  id: Date.now().toString(),
                  name: "New Member Name",
                  role: "Committee Role",
                  badge: "Staff",
                  image: "",
                  email: "",
                  phone: "",
                  bio: "",
                },
              ]);
            };
            const removeMember = (idx: number) => {
              onChange(list.filter((_, i) => i !== idx));
            };

            return (
              <div className="space-y-4">
                <label className="text-xs font-semibold text-gray-700">Members List</label>
                {list.map((m, idx) => (
                  <div key={m.id || idx} className="p-3 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-700">Member #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeMember(idx)}
                        className="text-red-500 hover:text-red-700 text-xs font-semibold cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>

                    <Text
                      label="Full Name *"
                      value={m.name || ""}
                      onChange={(v) => updateMember(idx, "name", v)}
                    />

                    <Text
                      label="Role / Designation *"
                      value={m.role || ""}
                      onChange={(v) => updateMember(idx, "role", v)}
                    />

                    <Text
                      label="Tag / Badge (e.g. Executive, Coach)"
                      value={m.badge || ""}
                      onChange={(v) => updateMember(idx, "badge", v)}
                    />

                    <ImageGallery
                      label="Photo Image"
                      value={m.image || ""}
                      onChange={(v) => updateMember(idx, "image", v)}
                    />

                    <Text
                      label="Email Address"
                      value={m.email || ""}
                      onChange={(v) => updateMember(idx, "email", v)}
                    />

                    <Text
                      label="Phone Number"
                      value={m.phone || ""}
                      onChange={(v) => updateMember(idx, "phone", v)}
                    />

                    <Textarea
                      label="Short Bio / Note"
                      value={m.bio || ""}
                      onChange={(v) => updateMember(idx, "bio", v)}
                      rows={2}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addMember}
                  className="w-full py-2 bg-orange-50 text-[#f97316] border border-orange-200 rounded-md text-xs font-bold hover:bg-orange-100 transition cursor-pointer"
                >
                  + Add New Member
                </button>
              </div>
            );
          },
        },
      ],
    },

    // ═══════════════════ STYLE TAB ═══════════════
    {
      tab: "Style",
      section: "Grid Columns & Layout",
      controls: [
        {
          name: "columnsDesktop",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Desktop Columns" value={value ?? 4} onChange={onChange} min={1} max={6} />
          ),
        },
        {
          name: "columnsTablet",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Tablet Columns" value={value ?? 2} onChange={onChange} min={1} max={4} />
          ),
        },
        {
          name: "columnsMobile",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Mobile Columns" value={value ?? 1} onChange={onChange} min={1} max={3} />
          ),
        },
        {
          name: "gap",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Grid Gap (px)" value={value ?? 24} onChange={onChange} min={0} max={60} />
          ),
        },
        {
          name: "centerItems",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Center Grid Alignment" value={value ?? true} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Card & Image Styling",
      controls: [
        {
          name: "cardBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Card Background Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "cardBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Card Border Color" value={value ?? "#e2e8f0"} onChange={onChange} />
          ),
        },
        {
          name: "cardBorderRadius",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Card Border Radius (px)" value={value ?? 16} onChange={onChange} min={0} max={40} />
          ),
        },
        {
          name: "imageShape",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Photo Layout Shape"
              value={value || "cover"}
              onChange={onChange}
              options={[
                { label: "Cover Top Header", value: "cover" },
                { label: "Circular Avatar", value: "circle" },
              ]}
            />
          ),
        },
        {
          name: "imageHeight",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl label="Photo Height / Size (px)" value={value ?? 280} onChange={onChange} min={120} max={500} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Typography & Colors",
      controls: [
        {
          name: "badgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Badge Text Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "badgeBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Badge Background" value={value ?? "#fff7ed"} onChange={onChange} />
          ),
        },
        {
          name: "titleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Section Title Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "titleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Section Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "subtitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Subtitle Color" value={value ?? "#64748b"} onChange={onChange} />
          ),
        },
        {
          name: "nameColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Member Name Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "nameTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Member Name Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "roleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Role / Designation Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "roleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Role Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubMembersFrontend element={element} />,
};

export default clubMembersElement;
