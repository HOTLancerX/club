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

export function ClubHeroBannerFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Content
  const titleLine1: string = s.content?.titleLine1 || "BUILT ON COMMUNITY.";
  const titleLine2: string = s.content?.titleLine2 || "DRIVEN BY FOOTBALL.";
  const subtitle: string =
    s.content?.subtitle ||
    "Camden Tigers Football Club – Camden South, NSW, Australia | Est. 1961";

  // Primary Button
  const showPrimaryBtn: boolean = s.content?.showPrimaryBtn ?? true;
  const primaryBtnText: string = s.content?.primaryBtnText || "Explore Teams";
  const primaryBtnUrl: string = s.content?.primaryBtnUrl || "/teams";
  const primaryBtnTarget: string = s.content?.primaryBtnTarget || "_self";

  // Secondary Button
  const showSecondaryBtn: boolean = s.content?.showSecondaryBtn ?? true;
  const secondaryBtnText: string = s.content?.secondaryBtnText || "Register";
  const secondaryBtnUrl: string = s.content?.secondaryBtnUrl || "/register";
  const secondaryBtnTarget: string = s.content?.secondaryBtnTarget || "_self";

  // Right Tagline & Background
  const showTagline: boolean = s.content?.showTagline ?? true;
  const taglineText: string = s.content?.taglineText || "More Than Just a Club";
  const bgImage: string =
    s.content?.bgImage ||
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80";

  // Styles
  const minHeight: number = s.style?.minHeight ?? 520;
  const paddingV: number = s.style?.paddingV ?? 64;
  const overlayDarkness: number = s.style?.overlayDarkness ?? 0.6;

  const titleLine1Color: string = s.style?.titleLine1Color || "#ffffff";
  const titleLine1Typography = s.style?.titleLine1Typography || {};
  const titleLine2Color: string = s.style?.titleLine2Color || "#f97316";
  const titleLine2Typography = s.style?.titleLine2Typography || {};

  const subtitleColor: string = s.style?.subtitleColor || "#e2e8f0";
  const subtitleTypography = s.style?.subtitleTypography || {};

  // Primary Button Styles
  const primaryBtnBg: string = s.style?.primaryBtnBg || "#f97316";
  const primaryBtnHoverBg: string = s.style?.primaryBtnHoverBg || "#ea580c";
  const primaryBtnColor: string = s.style?.primaryBtnColor || "#ffffff";
  const primaryBtnRadius: number = s.style?.primaryBtnRadius ?? 8;
  const primaryBtnTypography = s.style?.primaryBtnTypography || {};

  // Secondary Button Styles
  const secondaryBtnBg: string = s.style?.secondaryBtnBg || "rgba(0, 0, 0, 0.45)";
  const secondaryBtnBorderColor: string =
    s.style?.secondaryBtnBorderColor || "rgba(255, 255, 255, 0.35)";
  const secondaryBtnHoverBorderColor: string =
    s.style?.secondaryBtnHoverBorderColor || "#ffffff";
  const secondaryBtnColor: string = s.style?.secondaryBtnColor || "#ffffff";
  const secondaryBtnRadius: number = s.style?.secondaryBtnRadius ?? 8;
  const secondaryBtnTypography = s.style?.secondaryBtnTypography || {};

  const taglineColor: string = s.style?.taglineColor || "#ffffff";
  const taglineAccentColor: string = s.style?.taglineAccentColor || "#f97316";

  const t1Typ = getTypographyStyles(titleLine1Typography);
  const t2Typ = getTypographyStyles(titleLine2Typography);
  const subTyp = getTypographyStyles(subtitleTypography);
  const pBtnTyp = getTypographyStyles(primaryBtnTypography);
  const sBtnTyp = getTypographyStyles(secondaryBtnTypography);

  return (
    <div
      className="w-full relative overflow-hidden flex items-center bg-cover bg-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        minHeight: `${minHeight}px`,
        paddingTop: `${paddingV}px`,
        paddingBottom: `${paddingV}px`,
      }}
    >
      {/* Dark Ambient Gradient Overlays for optimal readability */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, rgba(3, 7, 18, ${overlayDarkness + 0.25}) 0%, rgba(3, 7, 18, ${overlayDarkness}) 50%, rgba(3, 7, 18, ${overlayDarkness * 0.4}) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

      {/* Container wrapper */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* ── Left Column: Headline, Subtitle, CTA Buttons ── */}
          <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
            {/* Main Headline */}
            <h1 className="tracking-tight leading-[1.08] mb-3 select-none">
              {titleLine1 && (
                <span
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase"
                  style={{ color: titleLine1Color, ...t1Typ }}
                >
                  {titleLine1}
                </span>
              )}
              {titleLine2 && (
                <span
                  className="block text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase"
                  style={{ color: titleLine2Color, ...t2Typ }}
                >
                  {titleLine2}
                </span>
              )}
            </h1>

            {/* Subtitle / Club details */}
            {subtitle && (
              <p
                className="text-xs sm:text-sm md:text-[15px] font-medium leading-relaxed mb-7 max-w-xl text-slate-200"
                style={{ color: subtitleColor, ...subTyp }}
              >
                {subtitle}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {showPrimaryBtn && primaryBtnText && (
                <a
                  href={primaryBtnUrl}
                  target={primaryBtnTarget}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer no-underline"
                  style={{
                    backgroundColor: primaryBtnBg,
                    color: primaryBtnColor,
                    borderRadius: `${primaryBtnRadius}px`,
                    ...pBtnTyp,
                  }}
                  onMouseEnter={(e) => {
                    if (primaryBtnHoverBg)
                      e.currentTarget.style.backgroundColor = primaryBtnHoverBg;
                  }}
                  onMouseLeave={(e) => {
                    if (primaryBtnBg)
                      e.currentTarget.style.backgroundColor = primaryBtnBg;
                  }}
                >
                  <span>{primaryBtnText}</span>
                  <Icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              )}

              {showSecondaryBtn && secondaryBtnText && (
                <a
                  href={secondaryBtnUrl}
                  target={secondaryBtnTarget}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold border backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer no-underline"
                  style={{
                    backgroundColor: secondaryBtnBg,
                    borderColor: secondaryBtnBorderColor,
                    color: secondaryBtnColor,
                    borderRadius: `${secondaryBtnRadius}px`,
                    ...sBtnTyp,
                  }}
                  onMouseEnter={(e) => {
                    if (secondaryBtnHoverBorderColor)
                      e.currentTarget.style.borderColor = secondaryBtnHoverBorderColor;
                  }}
                  onMouseLeave={(e) => {
                    if (secondaryBtnBorderColor)
                      e.currentTarget.style.borderColor = secondaryBtnBorderColor;
                  }}
                >
                  <span>{secondaryBtnText}</span>
                  <Icon icon="solar:arrow-right-linear" width="16" height="16" />
                </a>
              )}
            </div>
          </div>

          {/* ── Right Column: Handwritten Tagline & Accents ── */}
          <div className="lg:col-span-4 flex justify-end items-center relative">
            {showTagline && taglineText && (
              <div className="relative transform -rotate-3 select-none flex flex-col items-center">
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold italic tracking-wide text-white drop-shadow-md"
                  style={{
                    color: taglineColor,
                    fontFamily: "cursive, sans-serif",
                  }}
                >
                  {taglineText}
                </span>

                {/* Orange Brush Underline Swash */}
                <svg
                  viewBox="0 0 240 24"
                  className="w-48 sm:w-56 h-4 mt-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14 C60 6, 180 8, 236 12 C170 18, 70 20, 4 14 Z"
                    fill={taglineAccentColor}
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Orange Paint Slash / Grunge Accent in bottom right corner */}
      <div className="absolute right-0 bottom-0 pointer-events-none w-36 sm:w-52 h-24 sm:h-36 overflow-hidden opacity-90">
        <svg viewBox="0 0 200 150" className="w-full h-full" fill="none">
          <path d="M40 150 L120 40 L160 40 L80 150 Z" fill="#f97316" fillOpacity="0.8" />
          <path d="M90 150 L170 20 L195 20 L115 150 Z" fill="#ea580c" fillOpacity="0.9" />
          <path d="M140 150 L190 60 L200 60 L150 150 Z" fill="#ff781f" fillOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

const clubHeroBannerElement = {
  type: "club-hero-banner",
  category: "club",
  label: "Club Hero Banner",
  icon: "solar:crown-star-bold-duotone",

  schema: {
    content: {
      titleLine1: "BUILT ON COMMUNITY.",
      titleLine2: "DRIVEN BY FOOTBALL.",
      subtitle: "Camden Tigers Football Club – Camden South, NSW, Australia | Est. 1961",
      showPrimaryBtn: true,
      primaryBtnText: "Explore Teams",
      primaryBtnUrl: "/teams",
      primaryBtnTarget: "_self",
      showSecondaryBtn: true,
      secondaryBtnText: "Register",
      secondaryBtnUrl: "/register",
      secondaryBtnTarget: "_self",
      showTagline: true,
      taglineText: "More Than Just a Club",
      bgImage:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80",
    },

    style: {
      minHeight: 520,
      paddingV: 64,
      overlayDarkness: 0.6,
      titleLine1Color: "#ffffff",
      titleLine1Typography: { fontSize: 48, fontSizeUnit: "px", fontWeight: "900" },
      titleLine2Color: "#f97316",
      titleLine2Typography: { fontSize: 48, fontSizeUnit: "px", fontWeight: "900" },
      subtitleColor: "#e2e8f0",
      subtitleTypography: { fontSize: 14.5, fontSizeUnit: "px", fontWeight: "500" },
      primaryBtnBg: "#f97316",
      primaryBtnHoverBg: "#ea580c",
      primaryBtnColor: "#ffffff",
      primaryBtnRadius: 8,
      primaryBtnTypography: { fontSize: 13.5, fontSizeUnit: "px", fontWeight: "700" },
      secondaryBtnBg: "rgba(0, 0, 0, 0.45)",
      secondaryBtnBorderColor: "rgba(255, 255, 255, 0.35)",
      secondaryBtnHoverBorderColor: "#ffffff",
      secondaryBtnColor: "#ffffff",
      secondaryBtnRadius: 8,
      secondaryBtnTypography: { fontSize: 13.5, fontSizeUnit: "px", fontWeight: "700" },
      taglineColor: "#ffffff",
      taglineAccentColor: "#f97316",
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "Hero Headline & Text",
      controls: [
        {
          name: "titleLine1",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Title Line 1 (White)" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "titleLine2",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Title Line 2 (Orange Accent)" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "subtitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Subtitle / Location Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "bgImage",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ImageGallery label="Background Panoramic Image" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Primary Button",
      controls: [
        {
          name: "showPrimaryBtn",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Primary Button" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Label" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Link" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnTarget",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Open In"
              value={value || "_self"}
              onChange={onChange}
              options={[
                { value: "_self", label: "Same Tab" },
                { value: "_blank", label: "New Tab" },
              ]}
            />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Secondary Button",
      controls: [
        {
          name: "showSecondaryBtn",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Secondary Button" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Label" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Link" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnTarget",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Open In"
              value={value || "_self"}
              onChange={onChange}
              options={[
                { value: "_self", label: "Same Tab" },
                { value: "_blank", label: "New Tab" },
              ]}
            />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Right Slogan / Tagline",
      controls: [
        {
          name: "showTagline",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Script Tagline" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "taglineText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Tagline Text (e.g. More Than Just a Club)" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Hero Layout & Background",
      controls: [
        {
          name: "minHeight",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Minimum Height (px)"
              value={value ?? 520}
              onChange={onChange}
              min={300}
              max={900}
              step={20}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "paddingV",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Vertical Padding (px)"
              value={value ?? 64}
              onChange={onChange}
              min={24}
              max={140}
              step={4}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "overlayDarkness",
          responsive: false,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Background Overlay Darkness"
              value={value ?? 0.6}
              onChange={onChange}
              min={0.1}
              max={0.95}
              step={0.05}
              showSlider
              grid={2}
            />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Typography & Colors",
      controls: [
        {
          name: "titleLine1Color",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Line 1 Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "titleLine1Typography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Line 1 Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "titleLine2Color",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Line 2 Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "titleLine2Typography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Line 2 Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "subtitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Subtitle Color" value={value ?? "#e2e8f0"} onChange={onChange} />
          ),
        },
        {
          name: "subtitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Subtitle Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Primary Button Styles",
      controls: [
        {
          name: "primaryBtnBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Background" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnHoverBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Hover Background" value={value ?? "#ea580c"} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Text Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "primaryBtnRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Corner Radius (px)"
              value={value ?? 8}
              onChange={onChange}
              min={0}
              max={30}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "primaryBtnTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Button Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Secondary Button Styles",
      controls: [
        {
          name: "secondaryBtnBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Background" value={value ?? "rgba(0, 0, 0, 0.45)"} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Border Color" value={value ?? "rgba(255, 255, 255, 0.35)"} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnHoverBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Hover Border Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Text Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "secondaryBtnRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Corner Radius (px)"
              value={value ?? 8}
              onChange={onChange}
              min={0}
              max={30}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "secondaryBtnTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Button Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubHeroBannerFrontend element={element} />,
};

export default clubHeroBannerElement;
