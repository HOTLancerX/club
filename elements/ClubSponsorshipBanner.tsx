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

export interface PlacementItem {
  id: string;
  image?: string;
  icon?: string;
  iconColor?: string;
  title: string;
  url?: string;
  target?: string;
}

export function ClubSponsorshipBannerFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Left Content
  const image: string =
    s.content?.image ||
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&auto=format&fit=crop&q=80";
  const imageAlt: string = s.content?.imageAlt || "Advertise with Camden Tigers";
  const showBadge: boolean = s.content?.showBadge ?? true;
  const badgeText: string = s.content?.badgeText || "ADVERTISE WITH";
  const title: string = s.content?.title || "CAMDEN TIGERS";
  const description: string =
    s.content?.description ||
    "Show your support and get your business noticed. We offer a range of advertising opportunities to increase your brand's visibility within the club and local community.";

  // Button
  const showButton: boolean = s.content?.showButton ?? true;
  const buttonText: string = s.content?.buttonText || "View Sponsorship Opportunities";
  const buttonUrl: string = s.content?.buttonUrl || "/sponsorship";
  const buttonTarget: string = s.content?.buttonTarget || "_self";

  // Middle Content: Placements
  const placementsBadgeText: string = s.content?.placementsBadgeText || "KEY PLACEMENTS INCLUDE";
  const placements: PlacementItem[] = s.content?.placements || [];

  // Right Content: Tagline
  const showTagline: boolean = s.content?.showTagline ?? true;
  const taglineText: string = s.content?.taglineText || "Support Local\nSport. Grow\nTogether.";

  // Styles
  const containerBg: string = s.style?.containerBg || "#ffffff";
  const containerBorderColor: string = s.style?.containerBorderColor || "#e2e8f0";
  const containerRadius: number = s.style?.containerRadius ?? 16;
  const containerPaddingV: number = s.style?.containerPaddingV ?? 24;
  const containerPaddingH: number = s.style?.containerPaddingH ?? 28;

  const imageRadius: number = s.style?.imageRadius ?? 12;

  const badgeColor: string = s.style?.badgeColor || "#f97316";
  const badgeTypography = s.style?.badgeTypography || {};
  const titleColor: string = s.style?.titleColor || "#0f172a";
  const titleTypography = s.style?.titleTypography || {};
  const descColor: string = s.style?.descColor || "#475569";
  const descTypography = s.style?.descTypography || {};

  const buttonBg: string = s.style?.buttonBg || "#f97316";
  const buttonHoverBg: string = s.style?.buttonHoverBg || "#ea580c";
  const buttonColor: string = s.style?.buttonColor || "#ffffff";
  const buttonRadius: number = s.style?.buttonRadius ?? 8;
  const buttonTypography = s.style?.buttonTypography || {};

  const placementsBadgeColor: string = s.style?.placementsBadgeColor || "#f97316";
  const placementsBadgeTypography = s.style?.placementsBadgeTypography || {};

  const cardBg: string = s.style?.cardBg || "#f8fafc";
  const cardBorderColor: string = s.style?.cardBorderColor || "#f1f5f9";
  const cardRadius: number = s.style?.cardRadius ?? 12;
  const cardTitleColor: string = s.style?.cardTitleColor || "#0f172a";
  const cardTitleTypography = s.style?.cardTitleTypography || {};
  const cardIconColorDefault: string = s.style?.cardIconColorDefault || "#0f172a";
  const cardIconSize: number = s.style?.cardIconSize ?? 28;

  const taglineColor: string = s.style?.taglineColor || "#0f172a";

  const badgeTyp = getTypographyStyles(badgeTypography);
  const titleTyp = getTypographyStyles(titleTypography);
  const descTyp = getTypographyStyles(descTypography);
  const btnTyp = getTypographyStyles(buttonTypography);
  const pBadgeTyp = getTypographyStyles(placementsBadgeTypography);
  const cTitleTyp = getTypographyStyles(cardTitleTypography);

  return (
    <div
      className="w-full relative overflow-hidden border shadow-sm transition-all duration-300"
      style={{
        backgroundColor: containerBg,
        borderColor: containerBorderColor,
        borderRadius: `${containerRadius}px`,
        padding: `${containerPaddingV}px ${containerPaddingH}px`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full relative z-10">
        {/* ── Left Column: Player Photo & Headline + Button ── */}
        <div className="lg:col-span-5 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5">
          {/* Photo */}
          {image && (
            <div
              className="w-24 h-24 md:w-40 md:h-40 min-w-24 min-h-24 md:min-w-40 md:min-h-40 overflow-hidden shrink-0 shadow-xs border border-slate-100"
              style={{ borderRadius: `${imageRadius}px` }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Text & Button */}
          <div className="flex flex-col items-start min-w-0">
            {showBadge && badgeText && (
              <span
                className="text-[11px] font-bold tracking-wider uppercase mb-1"
                style={{ color: badgeColor, ...badgeTyp }}
              >
                {badgeText}
              </span>
            )}

            {title && (
              <h3
                className="text-lg sm:text-xl font-extrabold tracking-tight mb-1.5 leading-snug uppercase"
                style={{ color: titleColor, ...titleTyp }}
              >
                {title}
              </h3>
            )}

            {description && (
              <p
                className="text-[11.5px] leading-relaxed mb-3 text-slate-600 line-clamp-3"
                style={{ color: descColor, ...descTyp }}
              >
                {description}
              </p>
            )}

            {showButton && buttonText && (
              <a
                href={buttonUrl}
                target={buttonTarget}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-all duration-200 shadow-xs hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer no-underline"
                style={{
                  backgroundColor: buttonBg,
                  color: buttonColor,
                  borderRadius: `${buttonRadius}px`,
                  ...btnTyp,
                }}
                onMouseEnter={(e) => {
                  if (buttonHoverBg) e.currentTarget.style.backgroundColor = buttonHoverBg;
                }}
                onMouseLeave={(e) => {
                  if (buttonBg) e.currentTarget.style.backgroundColor = buttonBg;
                }}
              >
                <span>{buttonText}</span>
                <Icon icon="solar:arrow-right-linear" width="14" height="14" />
              </a>
            )}
          </div>
        </div>

        {/* ── Middle Column: Placements Cards ── */}
        <div className="lg:col-span-5 flex flex-col items-start w-full">
          {placementsBadgeText && (
            <span
              className="text-[10.5px] font-bold tracking-wider uppercase mb-2.5"
              style={{ color: placementsBadgeColor, ...pBadgeTyp }}
            >
              {placementsBadgeText}
            </span>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full">
            {placements.map((item, idx) => {
              const iconColor = item.iconColor || cardIconColorDefault;
              const hasCustomImage = !!item.image;
              const hasIcon = !!item.icon;

              const ItemWrapper = item.url ? "a" : "div";
              const wrapperProps = item.url
                ? {
                    href: item.url,
                    target: item.target || "_self",
                    style: { textDecoration: "none", color: "inherit" },
                  }
                : {};

              return (
                <ItemWrapper
                  key={item.id || idx}
                  className="flex flex-col items-center text-center justify-between p-2.5 border shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs min-h-[90px]"
                  style={{
                    backgroundColor: cardBg,
                    borderColor: cardBorderColor,
                    borderRadius: `${cardRadius}px`,
                  }}
                  {...(wrapperProps as any)}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center shrink-0 mb-1.5"
                    style={{ color: iconColor }}
                  >
                    {hasCustomImage ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-6 h-6 object-contain"
                      />
                    ) : hasIcon ? (
                      <Icon icon={item.icon!} width={cardIconSize} height={cardIconSize} />
                    ) : (
                      <Icon icon="solar:tag-bold" width={cardIconSize} height={cardIconSize} />
                    )}
                  </div>

                  {/* Card Title */}
                  <span
                    className="text-[10.5px] font-bold leading-tight line-clamp-2"
                    style={{ color: cardTitleColor, ...cTitleTyp }}
                  >
                    {item.title}
                  </span>
                </ItemWrapper>
              );
            })}
          </div>
        </div>

        {/* ── Right Column: Slogan ── */}
        <div className="lg:col-span-2 hidden lg:flex justify-end items-center pr-4">
          {showTagline && taglineText && (
            <div className="text-right select-none transform rotate-1">
              <span
                className="text-base xl:text-lg font-black leading-tight italic tracking-tight whitespace-pre-line"
                style={{
                  color: taglineColor,
                  fontFamily: "cursive, sans-serif",
                }}
              >
                {taglineText}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Orange Grunge Splash Accent in the top-right / right side */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none w-36 sm:w-56 overflow-hidden opacity-95">
        <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="none" fill="none">
          <path
            d="M50 0 L200 0 L200 200 L120 200 L40 120 L80 80 L30 40 Z"
            fill="#f97316"
            fillOpacity="0.9"
          />
          <path
            d="M100 0 L200 0 L200 140 L160 120 L130 60 Z"
            fill="#ea580c"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
}

const clubSponsorshipBannerElement = {
  type: "club-sponsorship-banner",
  category: "club",
  label: "Club Sponsorship Banner",
  icon: "solar:billboard-bold-duotone",

  schema: {
    content: {
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&auto=format&fit=crop&q=80",
      imageAlt: "Advertise with Camden Tigers",
      showBadge: true,
      badgeText: "ADVERTISE WITH",
      title: "CAMDEN TIGERS",
      description:
        "Show your support and get your business noticed. We offer a range of advertising opportunities to increase your brand's visibility within the club and local community.",
      showButton: true,
      buttonText: "View Sponsorship Opportunities",
      buttonUrl: "/sponsorship",
      buttonTarget: "_self",
      placementsBadgeText: "KEY PLACEMENTS INCLUDE",
      placements: [
        {
          id: "pl_1",
          image: "",
          icon: "solar:t-shirt-bold",
          iconColor: "#0f172a",
          title: "Player Kits\n& Training Wear",
          url: "",
          target: "_self",
        },
        {
          id: "pl_2",
          image: "",
          icon: "solar:billboard-bold",
          iconColor: "#0f172a",
          title: "Ground Signage\n& Banners",
          url: "",
          target: "_self",
        },
        {
          id: "pl_3",
          image: "",
          icon: "solar:monitor-bold",
          iconColor: "#0f172a",
          title: "Digital Channels\n(Website & Social Media)",
          url: "",
          target: "_self",
        },
        {
          id: "pl_4",
          image: "",
          icon: "solar:ticket-sale-bold",
          iconColor: "#0f172a",
          title: "Events & Club\nMaterials",
          url: "",
          target: "_self",
        },
      ],
      showTagline: true,
      taglineText: "Support Local\nSport. Grow\nTogether.",
    },

    style: {
      containerBg: "#ffffff",
      containerBorderColor: "#e2e8f0",
      containerRadius: 16,
      containerPaddingV: 24,
      containerPaddingH: 28,
      imageRadius: 12,
      badgeColor: "#f97316",
      badgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      titleColor: "#0f172a",
      titleTypography: { fontSize: 20, fontSizeUnit: "px", fontWeight: "800" },
      descColor: "#475569",
      descTypography: { fontSize: 11.5, fontSizeUnit: "px", fontWeight: "400" },
      buttonBg: "#f97316",
      buttonHoverBg: "#ea580c",
      buttonColor: "#ffffff",
      buttonRadius: 8,
      buttonTypography: { fontSize: 12, fontSizeUnit: "px", fontWeight: "700" },
      placementsBadgeColor: "#f97316",
      placementsBadgeTypography: { fontSize: 10.5, fontSizeUnit: "px", fontWeight: "700" },
      cardBg: "#f8fafc",
      cardBorderColor: "#f1f5f9",
      cardRadius: 12,
      cardTitleColor: "#0f172a",
      cardTitleTypography: { fontSize: 10.5, fontSizeUnit: "px", fontWeight: "700" },
      cardIconColorDefault: "#0f172a",
      cardIconSize: 26,
      taglineColor: "#0f172a",
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "Left Column: Advert Content",
      controls: [
        {
          name: "image",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ImageGallery label="Player Photo" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "imageAlt",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Image Alt Text" value={value || ""} onChange={onChange} />
          ),
        },
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
            <Text label="Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "description",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Description" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "showButton",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Button" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "buttonText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Label" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "buttonUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Link" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "buttonTarget",
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
      section: "Middle Column: Placements List",
      controls: [
        {
          name: "placementsBadgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Placements Section Eyebrow" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "placements",
          responsive: false,
          render: (value: any, onChange: any) => (
            <div className="space-y-3">
              {(value || []).map((item: any, idx: number) => (
                <Section key={item.id || idx} label={`#${idx + 1}: ${item.title || "Placement"}`}>
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          onChange((value || []).filter((_: any, i: number) => i !== idx))
                        }
                        className="text-[11px] text-red-400 hover:text-red-600 cursor-pointer"
                      >
                        Remove Item
                      </button>
                    </div>

                    <IconPicker
                      label="Icon"
                      value={item.icon || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], icon: v };
                        onChange(u);
                      }}
                    />

                    <ColorPickerPopup
                      label="Icon Color"
                      value={item.iconColor || "#0f172a"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], iconColor: v };
                        onChange(u);
                      }}
                    />

                    <Textarea
                      label="Title / Text (Multi-line)"
                      value={item.title || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], title: v };
                        onChange(u);
                      }}
                    />

                    <Url
                      label="Link (Optional)"
                      value={item.url || ""}
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
                  const newItem: PlacementItem = {
                    id: `pl_${Date.now()}`,
                    icon: "solar:tag-bold",
                    iconColor: "#0f172a",
                    title: "New Placement",
                    url: "",
                    target: "_self",
                  };
                  onChange([...(value || []), newItem]);
                }}
                className="w-full flex items-center justify-center gap-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-[13px] font-medium cursor-pointer transition-colors"
              >
                + Add Placement
              </button>
            </div>
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Right Column: Tagline",
      controls: [
        {
          name: "showTagline",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Tagline Slogan" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "taglineText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Tagline Text (Multi-line)" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Container Styles",
      controls: [
        {
          name: "containerBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Container Background" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "containerBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Border Color" value={value ?? "#e2e8f0"} onChange={onChange} />
          ),
        },
        {
          name: "containerRadius",
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
          name: "containerPaddingV",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Padding Top/Bottom (px)"
              value={value ?? 24}
              onChange={onChange}
              min={8}
              max={60}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "containerPaddingH",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Padding Left/Right (px)"
              value={value ?? 28}
              onChange={onChange}
              min={8}
              max={60}
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
      section: "Left Column Styles",
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
            <ColorPickerPopup label="Title Color" value={value ?? "#0f172a"} onChange={onChange} />
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
            <ColorPickerPopup label="Description Color" value={value ?? "#475569"} onChange={onChange} />
          ),
        },
        {
          name: "descTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Description Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "buttonBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Background" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "buttonHoverBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Hover Background" value={value ?? "#ea580c"} onChange={onChange} />
          ),
        },
        {
          name: "buttonColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Button Text Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "buttonRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Button Corner Radius (px)"
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
      ],
    },

    {
      tab: "Style",
      section: "Placement Card Styles",
      controls: [
        {
          name: "placementsBadgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Placements Eyebrow Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "placementsBadgeTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Placements Eyebrow Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "cardBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Card Background" value={value ?? "#f8fafc"} onChange={onChange} />
          ),
        },
        {
          name: "cardBorderColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Card Border Color" value={value ?? "#f1f5f9"} onChange={onChange} />
          ),
        },
        {
          name: "cardRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Card Corner Radius (px)"
              value={value ?? 12}
              onChange={onChange}
              min={0}
              max={24}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "cardTitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Card Title Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "cardTitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Card Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "cardIconSize",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Icon Size (px)"
              value={value ?? 26}
              onChange={onChange}
              min={16}
              max={48}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubSponsorshipBannerFrontend element={element} />,
};

export default clubSponsorshipBannerElement;
