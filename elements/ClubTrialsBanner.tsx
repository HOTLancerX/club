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

export interface ClubTrialItem {
  id: string;
  image?: string;
  icon?: string;
  iconColor?: string;
  badge: string;
  date: string;
  details: string;
  url?: string;
  target?: string;
}

export function ClubTrialsBannerFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Left Content
  const showBadge: boolean = s.content?.showBadge ?? true;
  const badgeText: string = s.content?.badgeText || "PLAYER PATHWAY";
  const title: string = s.content?.title || "YOUR JOURNEY. OUR SUPPORT.";
  const description: string =
    s.content?.description ||
    "A clear pathway for every player — from MiniRoos to a senior football, helping every player reach their potential.";

  // Right Trials Box
  const trials: ClubTrialItem[] = s.content?.trials || [];
  const showDividers: boolean = s.content?.showDividers ?? true;

  // Bottom Location
  const showLocation: boolean = s.content?.showLocation ?? true;
  const locationIcon: string = s.content?.locationIcon || "solar:map-point-bold";
  const locationVenue: string = s.content?.locationVenue || "Ron Dine Memorial Reserve";
  const locationAddress: string =
    s.content?.locationAddress || "McCrae Drive, Camden South NSW 2570";
  const locationUrl: string = s.content?.locationUrl || "";
  const locationTarget: string = s.content?.locationTarget || "_blank";

  // Styles
  const badgeColor: string = s.style?.badgeColor || "#f97316";
  const badgeTypography = s.style?.badgeTypography || {};
  const titleColor: string = s.style?.titleColor || "#ffffff";
  const titleTypography = s.style?.titleTypography || {};
  const descColor: string = s.style?.descColor || "#cbd5e1";
  const descTypography = s.style?.descTypography || {};

  const boxBorderColor: string = s.style?.boxBorderColor || "#f97316";
  const boxBg: string = s.style?.boxBg || "rgba(11, 21, 35, 0.75)";
  const boxRadius: number = s.style?.boxRadius ?? 16;
  const boxPaddingV: number = s.style?.boxPaddingV ?? 20;
  const boxPaddingH: number = s.style?.boxPaddingH ?? 24;

  const trialBadgeColor: string = s.style?.trialBadgeColor || "#f97316";
  const trialBadgeTypography = s.style?.trialBadgeTypography || {};
  const trialDateColor: string = s.style?.trialDateColor || "#ffffff";
  const trialDateTypography = s.style?.trialDateTypography || {};
  const trialDetailsColor: string = s.style?.trialDetailsColor || "#cbd5e1";
  const trialDetailsTypography = s.style?.trialDetailsTypography || {};
  const trialIconColorDefault: string = s.style?.trialIconColorDefault || "#f97316";
  const dividerColor: string = s.style?.dividerColor || "rgba(255, 255, 255, 0.15)";

  const locationIconColor: string = s.style?.locationIconColor || "#f97316";
  const locationTextColor: string = s.style?.locationTextColor || "#e2e8f0";
  const locationTypography = s.style?.locationTypography || {};

  const badgeTyp = getTypographyStyles(badgeTypography);
  const titleTyp = getTypographyStyles(titleTypography);
  const descTyp = getTypographyStyles(descTypography);
  const tBadgeTyp = getTypographyStyles(trialBadgeTypography);
  const tDateTyp = getTypographyStyles(trialDateTypography);
  const tDetailsTyp = getTypographyStyles(trialDetailsTypography);
  const locTyp = getTypographyStyles(locationTypography);

  const LocationWrapper = locationUrl ? "a" : "div";
  const locWrapperProps = locationUrl
    ? {
        href: locationUrl,
        target: locationTarget,
        style: { textDecoration: "none" },
      }
    : {};

  return (
    <div className="w-full">
      {/* ── Top Row: Headline (Left) & Trials Box (Right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-6 items-center w-full">
        {/* Left Headline */}
        <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
          {showBadge && badgeText && (
            <span
              className="text-xs font-bold tracking-wider uppercase mb-2"
              style={{ color: badgeColor, ...badgeTyp }}
            >
              {badgeText}
            </span>
          )}

          {title && (
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2.5 leading-tight uppercase"
              style={{ color: titleColor, ...titleTyp }}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="text-xs sm:text-[13px] leading-relaxed m-0 text-slate-300 max-w-lg"
              style={{ color: descColor, ...descTyp }}
            >
              {description}
            </p>
          )}

          {/* ── Bottom Row: Location Line ── */}
          {showLocation && (locationVenue || locationAddress) && (
            <LocationWrapper
              className="flex items-center justify-center lg:justify-start gap-2 pt-1 transition-opacity hover:opacity-90 cursor-pointer"
              {...(locWrapperProps as any)}
            >
              <div className="shrink-0" style={{ color: locationIconColor }}>
                <Icon icon={locationIcon} width="20" height="20" />
              </div>
              <p
                className="text-xs sm:text-[13px] font-semibold leading-tight m-0 text-slate-200 truncate"
                style={{ color: locationTextColor, ...locTyp }}
              >
                {locationVenue && <span className="font-bold">{locationVenue}</span>}
                {locationVenue && locationAddress && <span className="mx-2 opacity-60">•</span>}
                {locationAddress && <span>{locationAddress}</span>}
              </p>
            </LocationWrapper>
          )}
        </div>

        {/* Right Trials Box */}
        <div className="md:col-span-7 w-full">
          <div
            className="w-full border shadow-lg backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor: boxBg,
              borderColor: boxBorderColor,
              borderRadius: `${boxRadius}px`,
              padding: `${boxPaddingV}px ${boxPaddingH}px`,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center">
              {trials.map((trial, idx) => {
                const iconColor = trial.iconColor || trialIconColorDefault;
                const hasCustomImage = !!trial.image;
                const hasIcon = !!trial.icon;
                const isLast = idx === trials.length - 1;

                const ItemWrapper = trial.url ? "a" : "div";
                const wrapperProps = trial.url
                  ? {
                      href: trial.url,
                      target: trial.target || "_self",
                      style: { textDecoration: "none", color: "inherit" },
                    }
                  : {};

                return (
                  <ItemWrapper
                    key={trial.id || idx}
                    className="relative flex items-start gap-3.5 group cursor-pointer transition-transform duration-200 hover:translate-x-0.5"
                    {...(wrapperProps as any)}
                  >
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center shrink-0 pt-1"
                      style={{ color: iconColor }}
                    >
                      {hasCustomImage ? (
                        <img
                          src={trial.image}
                          alt={trial.badge}
                          className="w-8 h-8 object-contain"
                        />
                      ) : hasIcon ? (
                        <Icon icon={trial.icon!} width="32" height="32" />
                      ) : (
                        <Icon icon="solar:calendar-date-bold" width="32" height="32" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0">
                      {/* Eyebrow / Category */}
                      {trial.badge && (
                        <span
                          className="text-[10.5px] font-bold tracking-wider uppercase leading-tight mb-1 truncate"
                          style={{ color: trialBadgeColor, ...tBadgeTyp }}
                        >
                          {trial.badge}
                        </span>
                      )}

                      {/* Main Date / Title */}
                      {trial.date && (
                        <h4
                          className="text-sm sm:text-base font-extrabold tracking-tight leading-snug mb-1 truncate"
                          style={{ color: trialDateColor, ...tDateTyp }}
                        >
                          {trial.date}
                        </h4>
                      )}

                      {/* Timings / Age Groups */}
                      {trial.details && (
                        <p
                          className="text-xs leading-relaxed m-0 whitespace-pre-line text-slate-300"
                          style={{ color: trialDetailsColor, ...tDetailsTyp }}
                        >
                          {trial.details}
                        </p>
                      )}
                    </div>

                    {/* Vertical Divider between columns on desktop */}
                    {showDividers && !isLast && (
                      <div
                        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px pointer-events-none -mr-3"
                        style={{ backgroundColor: dividerColor }}
                      />
                    )}
                  </ItemWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

const clubTrialsBannerElement = {
  type: "club-trials-banner",
  category: "club",
  label: "Club Upcoming Trials Banner",
  icon: "solar:calendar-date-bold-duotone",

  schema: {
    content: {
      showBadge: true,
      badgeText: "PLAYER PATHWAY",
      title: "YOUR JOURNEY. OUR SUPPORT.",
      description:
        "A clear pathway for every player — from MiniRoos to a senior football, helping every player reach their potential.",
      showDividers: true,
      trials: [
        {
          id: "tr_1",
          image: "",
          icon: "solar:calendar-date-bold",
          iconColor: "#f97316",
          badge: "MIXED TRIALS",
          date: "SAT 7 NOV 2026",
          details: "U8 – U12\n8:30 AM – 2:30 PM",
          url: "",
          target: "_self",
        },
        {
          id: "tr_2",
          image: "",
          icon: "solar:calendar-add-bold",
          iconColor: "#f97316",
          badge: "GIRLS TRIALS",
          date: "TUE 10 NOV 2026",
          details: "Ages 9–10 • 5:30 PM\nAges 11–12 • 6:45 PM",
          url: "",
          target: "_self",
        },
      ],
      showLocation: true,
      locationIcon: "solar:map-point-bold",
      locationVenue: "Ron Dine Memorial Reserve",
      locationAddress: "McCrae Drive, Camden South NSW 2570",
      locationUrl: "",
      locationTarget: "_blank",
    },

    style: {
      badgeColor: "#f97316",
      badgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      titleColor: "#ffffff",
      titleTypography: { fontSize: 26, fontSizeUnit: "px", fontWeight: "800" },
      descColor: "#cbd5e1",
      descTypography: { fontSize: 12.5, fontSizeUnit: "px", fontWeight: "400" },
      boxBorderColor: "#f97316",
      boxBg: "rgba(11, 21, 35, 0.75)",
      boxRadius: 16,
      boxPaddingV: 20,
      boxPaddingH: 24,
      trialBadgeColor: "#f97316",
      trialBadgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      trialDateColor: "#ffffff",
      trialDateTypography: { fontSize: 15, fontSizeUnit: "px", fontWeight: "800" },
      trialDetailsColor: "#cbd5e1",
      trialDetailsTypography: { fontSize: 12, fontSizeUnit: "px", fontWeight: "500" },
      trialIconColorDefault: "#f97316",
      dividerColor: "rgba(255, 255, 255, 0.15)",
      locationIconColor: "#f97316",
      locationTextColor: "#e2e8f0",
      locationTypography: { fontSize: 12.5, fontSizeUnit: "px", fontWeight: "600" },
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "Headline Content (Left)",
      controls: [
        {
          name: "showBadge",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Eyebrow Badge" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "badgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Eyebrow Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "title",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Main Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "description",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Description" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Trials Schedule Items (Right Box)",
      controls: [
        {
          name: "trials",
          responsive: false,
          render: (value: any, onChange: any) => (
            <div className="space-y-3">
              {(value || []).map((trial: any, idx: number) => (
                <Section key={trial.id || idx} label={`#${idx + 1}: ${trial.badge || "Trial Event"}`}>
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          onChange((value || []).filter((_: any, i: number) => i !== idx))
                        }
                        className="text-[11px] text-red-400 hover:text-red-600 cursor-pointer"
                      >
                        Remove Event
                      </button>
                    </div>

                    <IconPicker
                      label="Event Icon"
                      value={trial.icon || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], icon: v };
                        onChange(u);
                      }}
                    />

                    <ColorPickerPopup
                      label="Icon Color"
                      value={trial.iconColor || "#f97316"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], iconColor: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Trial Category Badge (e.g. MIXED TRIALS)"
                      value={trial.badge || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], badge: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Trial Date (e.g. SAT 7 NOV 2026)"
                      value={trial.date || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], date: v };
                        onChange(u);
                      }}
                    />

                    <Textarea
                      label="Timings / Age Groups (Multi-line)"
                      value={trial.details || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], details: v };
                        onChange(u);
                      }}
                    />

                    <Url
                      label="Link / Registration URL (Optional)"
                      value={trial.url || ""}
                      onChange={(v: any) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], url: v?.url || "" };
                        onChange(u);
                      }}
                    />
                  </div>
                </Section>
              ))}

              <button
                type="button"
                onClick={() => {
                  const newItem: ClubTrialItem = {
                    id: `tr_${Date.now()}`,
                    icon: "solar:calendar-date-bold",
                    iconColor: "#f97316",
                    badge: "NEW TRIAL",
                    date: "DATE TBD",
                    details: "Age group & timing",
                    url: "",
                    target: "_self",
                  };
                  onChange([...(value || []), newItem]);
                }}
                className="w-full flex items-center justify-center gap-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-[13px] font-medium cursor-pointer transition-colors"
              >
                + Add Trial Event
              </button>
            </div>
          ),
        },
        {
          name: "showDividers",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Vertical Divider Between Events" value={value ?? true} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Location Info (Bottom)",
      controls: [
        {
          name: "showLocation",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Location Bar" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "locationIcon",
          responsive: false,
          render: (value: any, onChange: any) => (
            <IconPicker label="Location Icon" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "locationVenue",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Venue Name (e.g. Ron Dine Memorial Reserve)" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "locationAddress",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Address (e.g. McCrae Drive, Camden South NSW 2570)" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "locationUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Map Link (Optional)" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Headline Styles",
      controls: [
        {
          name: "badgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Eyebrow Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "badgeTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Eyebrow Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "titleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Title Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "titleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "descColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Description Color" value={value ?? "#cbd5e1"} onChange={onChange} />
          ),
        },
        {
          name: "descTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Description Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Trials Box Container Styles",
      controls: [
        {
          name: "boxBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Box Border Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "boxBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Box Background" value={value ?? "rgba(11, 21, 35, 0.75)"} onChange={onChange} />
          ),
        },
        {
          name: "boxRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Corner Radius (px)"
              value={value ?? 16}
              onChange={onChange}
              min={0}
              max={36}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "boxPaddingV",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Padding Top/Bottom (px)"
              value={value ?? 20}
              onChange={onChange}
              min={8}
              max={48}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "boxPaddingH",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Padding Left/Right (px)"
              value={value ?? 24}
              onChange={onChange}
              min={8}
              max={48}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Trials Text & Icon Styles",
      controls: [
        {
          name: "trialBadgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Trial Badge Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "trialBadgeTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Trial Badge Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "trialDateColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Trial Date Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "trialDateTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Trial Date Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "trialDetailsColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Timings/Details Color" value={value ?? "#cbd5e1"} onChange={onChange} />
          ),
        },
        {
          name: "trialDetailsTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Timings/Details Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "trialIconColorDefault",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Default Event Icon Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Location Line Styles",
      controls: [
        {
          name: "locationIconColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Location Pin Icon Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "locationTextColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Location Text Color" value={value ?? "#e2e8f0"} onChange={onChange} />
          ),
        },
        {
          name: "locationTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Location Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubTrialsBannerFrontend element={element} />,
};

export default clubTrialsBannerElement;
