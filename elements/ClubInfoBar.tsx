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

export interface ClubInfoBarItem {
  id: string;
  image?: string;
  icon?: string;
  iconColor?: string;
  eyebrow?: string;
  title: string;
  description: string;
  url?: string;
  target?: string;
}

export function ClubInfoBarFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Content
  const items: ClubInfoBarItem[] = s.content?.items || [];
  const columnsDesktop = s.content?.colsDesktop || 4;
  const columnsTablet = s.content?.colsTablet || 2;
  const columnsMobile = s.content?.colsMobile || 1;
  const showDividers: boolean = s.content?.showDividers ?? true;

  const mobColsClass = Number(columnsMobile) || 1;
  const tabColsClass = Number(columnsTablet) || 2;
  const deskColsClass = Number(columnsDesktop) || 4;

  const gridClass = `grid grid-cols-${mobColsClass} md:grid-cols-${tabColsClass} lg:grid-cols-${deskColsClass} w-full`;

  // Styles
  const containerBg: string = s.style?.containerBg || "";
  const itemPaddingV: number = s.style?.itemPaddingV ?? 18;
  const itemPaddingH: number = s.style?.itemPaddingH ?? 16;
  const iconSize: number = s.style?.iconSize ?? 38;
  const iconColorDefault: string = s.style?.iconColorDefault || "#f97316";

  const eyebrowColor: string = s.style?.eyebrowColor || "#94a3b8";
  const eyebrowTypography = s.style?.eyebrowTypography || {};
  const titleColor: string = s.style?.titleColor || "#ffffff";
  const titleTypography = s.style?.titleTypography || {};
  const descColor: string = s.style?.descColor || "#94a3b8";
  const descTypography = s.style?.descTypography || {};

  const dividerColor: string = s.style?.dividerColor || "rgba(255, 255, 255, 0.12)";
  const itemHoverLift: boolean = s.style?.itemHoverLift ?? false;

  const ebTyp = getTypographyStyles(eyebrowTypography);
  const tTyp = getTypographyStyles(titleTypography);
  const dTyp = getTypographyStyles(descTypography);

  return (
    <div
      className="w-full"
      style={containerBg ? { backgroundColor: containerBg } : undefined}
    >
      <div className={gridClass}>
        {items.map((item, idx) => {
          const iconColor = item.iconColor || iconColorDefault;
          const hasCustomImage = !!item.image;
          const hasIcon = !!item.icon;
          const isLast = idx === items.length - 1;

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
              className={`relative flex items-center gap-3.5 box-border transition-all duration-200 ${
                itemHoverLift ? "hover:-translate-y-0.5" : ""
              }`}
              style={{
                padding: `${itemPaddingV}px ${itemPaddingH}px`,
              }}
              {...(wrapperProps as any)}
            >
              {/* Left Icon */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: `${iconSize}px`,
                  minWidth: `${iconSize}px`,
                  color: iconColor,
                }}
              >
                {hasCustomImage ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                ) : hasIcon ? (
                  <Icon icon={item.icon!} width={iconSize} height={iconSize} />
                ) : (
                  <Icon icon="solar:star-bold" width={iconSize} height={iconSize} />
                )}
              </div>

              {/* Right Content */}
              <div className="flex flex-col min-w-0 justify-center">
                {/* Eyebrow */}
                {item.eyebrow && (
                  <span
                    className="text-[10.5px] font-bold tracking-wider uppercase leading-tight mb-0.5 truncate"
                    style={{ color: eyebrowColor, ...ebTyp }}
                  >
                    {item.eyebrow}
                  </span>
                )}

                {/* Main Title / Stat */}
                {item.title && (
                  <h4
                    className="text-sm sm:text-base font-extrabold tracking-tight leading-snug mb-0.5 truncate"
                    style={{ color: titleColor, ...tTyp }}
                  >
                    {item.title}
                  </h4>
                )}

                {/* Subtitle / Description */}
                {item.description && (
                  <p
                    className="text-[11.5px] sm:text-xs leading-tight m-0 whitespace-pre-line line-clamp-2"
                    style={{ color: descColor, ...dTyp }}
                  >
                    {item.description}
                  </p>
                )}
              </div>

              {/* Vertical Divider line between items (Desktop) */}
              {showDividers && !isLast && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px pointer-events-none"
                  style={{ backgroundColor: dividerColor }}
                />
              )}
            </ItemWrapper>
          );
        })}
      </div>
    </div>
  );
}

const clubInfoBarElement = {
  type: "club-info-bar",
  category: "club",
  label: "Club Quick Stats Bar",
  icon: "solar:widget-2-bold-duotone",

  schema: {
    content: {
      showDividers: true,
      colsDesktop: 4,
      colsTablet: 2,
      colsMobile: 1,
      items: [
        {
          id: "club_stat_1",
          image: "",
          icon: "solar:calendar-bold",
          iconColor: "#f97316",
          eyebrow: "FOUNDED",
          title: "1961",
          description: "A proud history in our community",
          url: "",
          target: "_self",
        },
        {
          id: "club_stat_2",
          image: "",
          icon: "solar:users-group-two-rounded-bold",
          iconColor: "#f97316",
          eyebrow: "AROUND",
          title: "120+ TEAMS",
          description: "Across all age groups",
          url: "",
          target: "_self",
        },
        {
          id: "club_stat_3",
          image: "",
          icon: "solar:map-point-bold",
          iconColor: "#f97316",
          eyebrow: "",
          title: "RON DINE MEMORIAL RESERVE",
          description: "McCrae Drive, Camden South\nNSW 2570",
          url: "",
          target: "_self",
        },
        {
          id: "club_stat_4",
          image: "",
          icon: "solar:hand-shake-bold",
          iconColor: "#f97316",
          eyebrow: "AFFILIATED WITH",
          title: "Macarthur Football Association",
          description: "& Football NSW",
          url: "",
          target: "_self",
        },
      ],
    },

    style: {
      containerBg: "",
      itemPaddingV: 18,
      itemPaddingH: 16,
      iconSize: 38,
      iconColorDefault: "#f97316",
      eyebrowColor: "#94a3b8",
      eyebrowTypography: { fontSize: 10.5, fontSizeUnit: "px", fontWeight: "700" },
      titleColor: "#ffffff",
      titleTypography: { fontSize: 15, fontSizeUnit: "px", fontWeight: "800" },
      descColor: "#94a3b8",
      descTypography: { fontSize: 11.5, fontSizeUnit: "px", fontWeight: "400" },
      dividerColor: "rgba(255, 255, 255, 0.12)",
      itemHoverLift: false,
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "Quick Info Items",
      controls: [
        {
          name: "items",
          responsive: false,
          render: (value: any, onChange: any) => (
            <div className="space-y-3">
              {(value || []).map((item: any, idx: number) => (
                <Section
                  key={item.id || idx}
                  label={`#${idx + 1}: ${item.eyebrow ? `${item.eyebrow} - ` : ""}${item.title || "Stat Item"}`}
                >
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
                      value={item.iconColor || "#f97316"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], iconColor: v };
                        onChange(u);
                      }}
                    />

                    <ImageGallery
                      label="Custom Icon Image (Optional)"
                      value={item.image || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], image: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Eyebrow / Small Upper Label (e.g. FOUNDED, AROUND)"
                      value={item.eyebrow || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], eyebrow: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Title / Main Value (e.g. 1961, 120+ TEAMS)"
                      value={item.title || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], title: v };
                        onChange(u);
                      }}
                    />

                    <Textarea
                      label="Description / Location / Subtitle"
                      value={item.description || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], description: v };
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
                  const newItem: ClubInfoBarItem = {
                    id: `club_stat_${Date.now()}`,
                    icon: "solar:star-bold",
                    iconColor: "#f97316",
                    eyebrow: "HIGHLIGHT",
                    title: `Stat #${(value?.length || 0) + 1}`,
                    description: "Details text goes here",
                    url: "",
                    target: "_self",
                  };
                  onChange([...(value || []), newItem]);
                }}
                className="w-full flex items-center justify-center gap-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-[13px] font-medium cursor-pointer transition-colors"
              >
                + Add Info Item
              </button>
            </div>
          ),
        },
        {
          name: "showDividers",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Vertical Dividers" value={value ?? true} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Columns Layout",
      controls: [
        {
          name: "colsDesktop",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Columns (Desktop)"
              value={value ?? 4}
              onChange={(v: any) => onChange(Number(v))}
              options={[
                { value: "1", label: "1 Column" },
                { value: "2", label: "2 Columns" },
                { value: "3", label: "3 Columns" },
                { value: "4", label: "4 Columns" },
                { value: "5", label: "5 Columns" },
                { value: "6", label: "6 Columns" },
              ]}
            />
          ),
        },
        {
          name: "colsTablet",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Columns (Tablet)"
              value={value ?? 2}
              onChange={(v: any) => onChange(Number(v))}
              options={[
                { value: "1", label: "1 Column" },
                { value: "2", label: "2 Columns" },
                { value: "3", label: "3 Columns" },
                { value: "4", label: "4 Columns" },
              ]}
            />
          ),
        },
        {
          name: "colsMobile",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Columns (Mobile)"
              value={value ?? 1}
              onChange={(v: any) => onChange(Number(v))}
              options={[
                { value: "1", label: "1 Column" },
                { value: "2", label: "2 Columns" },
              ]}
            />
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Icon Styles",
      controls: [
        {
          name: "iconSize",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Icon Size (px)"
              value={value ?? 38}
              onChange={onChange}
              min={20}
              max={64}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "iconColorDefault",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Default Icon Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Typography & Colors",
      controls: [
        {
          name: "eyebrowColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Eyebrow Text Color" value={value ?? "#94a3b8"} onChange={onChange} />
          ),
        },
        {
          name: "eyebrowTypography",
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
            <ColorPickerPopup label="Description Color" value={value ?? "#94a3b8"} onChange={onChange} />
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
          name: "dividerColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup
              label="Divider Line Color"
              value={value ?? "rgba(255, 255, 255, 0.12)"}
              onChange={onChange}
            />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Spacing & Background",
      controls: [
        {
          name: "containerBg",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Container Background (Optional Color/Gradient)" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "itemPaddingV",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Item Vertical Padding (px)"
              value={value ?? 18}
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
          name: "itemPaddingH",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Item Horizontal Padding (px)"
              value={value ?? 16}
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
          name: "itemHoverLift",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Hover Lift Animation" value={value ?? false} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubInfoBarFrontend element={element} />,
};

export default clubInfoBarElement;
