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

export interface PathwayStepItem {
  id: string;
  image?: string;
  icon?: string;
  circleBg?: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  target?: string;
}

export function ClubPlayerPathwayFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Header Content
  const showBadge: boolean = s.content?.showBadge ?? true;
  const badgeText: string = s.content?.badgeText || "PLAYER PATHWAY";
  const title: string = s.content?.title || "YOUR JOURNEY. OUR SUPPORT.";
  const description: string =
    s.content?.description ||
    "A clear pathway for every player — from MiniRoos to senior football, helping every player reach their potential.";

  // Steps
  const steps: PathwayStepItem[] = s.content?.steps || [];
  const showArrows: boolean = s.content?.showArrows ?? true;

  // Layout Alignment
  const headerAlign: "left" | "center" = s.style?.headerAlign || "left";
  const isCenter = headerAlign === "center";

  // Styles
  const badgeColor: string = s.style?.badgeColor || "#f97316";
  const badgeTypography = s.style?.badgeTypography || {};
  const titleColor: string = s.style?.titleColor || "#0f172a";
  const titleTypography = s.style?.titleTypography || {};
  const descColor: string = s.style?.descColor || "#475569";
  const descTypography = s.style?.descTypography || {};

  const circleSize: number = s.style?.circleSize ?? 72;
  const circleBgDefault: string = s.style?.circleBgDefault || "#f97316";
  const iconColorDefault: string = s.style?.iconColorDefault || "#ffffff";
  const arrowColor: string = s.style?.arrowColor || "#f97316";

  const stepTitleColor: string = s.style?.stepTitleColor || "#0f172a";
  const stepTitleTypography = s.style?.stepTitleTypography || {};
  const stepSubtitleColor: string = s.style?.stepSubtitleColor || "#475569";
  const stepSubtitleTypography = s.style?.stepSubtitleTypography || {};
  const stepDescColor: string = s.style?.stepDescColor || "#64748b";
  const stepDescTypography = s.style?.stepDescTypography || {};

  const badgeTyp = getTypographyStyles(badgeTypography);
  const titleTyp = getTypographyStyles(titleTypography);
  const descTyp = getTypographyStyles(descTypography);
  const sTitleTyp = getTypographyStyles(stepTitleTypography);
  const sSubTyp = getTypographyStyles(stepSubtitleTypography);
  const sDescTyp = getTypographyStyles(stepDescTypography);

  return (
    <div className="w-full">
      {/* ── Header Section ── */}
      {(badgeText || title || description) && (
        <div
          className={`flex flex-col mb-10 ${
            isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl"
          }`}
        >
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
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 leading-tight uppercase"
              style={{ color: titleColor, ...titleTyp }}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className="text-xs sm:text-sm leading-relaxed m-0 text-slate-600"
              style={{ color: descColor, ...descTyp }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* ── Steps Pathway Flow ── */}
      <div className="w-full overflow-x-auto pb-4 pt-1">
        <div className="flex items-start justify-between min-w-170 lg:min-w-0 w-full gap-2 sm:gap-4">
          {steps.map((step, idx) => {
            const circleBg = step.circleBg || circleBgDefault;
            const iconColor = step.iconColor || iconColorDefault;
            const hasCustomImage = !!step.image;
            const hasIcon = !!step.icon;
            const isLast = idx === steps.length - 1;

            const ItemWrapper = step.url ? "a" : "div";
            const wrapperProps = step.url
              ? {
                  href: step.url,
                  target: step.target || "_self",
                  style: { textDecoration: "none", color: "inherit" },
                }
              : {};

            return (
              <React.Fragment key={step.id || idx}>
                {/* Step Node */}
                <ItemWrapper
                  className="flex flex-col items-center text-center flex-1 min-w-0 group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                  {...(wrapperProps as any)}
                >
                  {/* Icon Circle */}
                  <div
                    className="rounded-full flex items-center justify-center shrink-0 shadow-md mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      width: `${circleSize}px`,
                      height: `${circleSize}px`,
                      minWidth: `${circleSize}px`,
                      minHeight: `${circleSize}px`,
                      backgroundColor: circleBg,
                    }}
                  >
                    {hasCustomImage ? (
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : hasIcon ? (
                      <Icon
                        icon={step.icon!}
                        width={Math.round(circleSize * 0.48)}
                        height={Math.round(circleSize * 0.48)}
                        style={{ color: iconColor }}
                      />
                    ) : (
                      <Icon
                        icon="solar:users-group-two-rounded-bold"
                        width={Math.round(circleSize * 0.48)}
                        height={Math.round(circleSize * 0.48)}
                        style={{ color: iconColor }}
                      />
                    )}
                  </div>

                  {/* Step Title */}
                  {step.title && (
                    <h3
                      className="text-sm sm:text-base font-extrabold tracking-tight leading-snug mb-0.5 truncate w-full"
                      style={{ color: stepTitleColor, ...sTitleTyp }}
                    >
                      {step.title}
                    </h3>
                  )}

                  {/* Step Subtitle / Age / Division */}
                  {step.subtitle && (
                    <span
                      className="text-xs sm:text-[13px] font-semibold leading-tight mb-1 truncate w-full"
                      style={{ color: stepSubtitleColor, ...sSubTyp }}
                    >
                      {step.subtitle}
                    </span>
                  )}

                  {/* Step Description / Objective */}
                  {step.description && (
                    <p
                      className="text-[11px] sm:text-xs leading-tight m-0 text-slate-500 max-w-32.5 line-clamp-2"
                      style={{ color: stepDescColor, ...sDescTyp }}
                    >
                      {step.description}
                    </p>
                  )}
                </ItemWrapper>

                {/* Connecting Right Arrow */}
                {showArrows && !isLast && (
                  <div
                    className="flex items-center justify-center shrink-0 pt-6 px-1 pointer-events-none"
                    style={{ color: arrowColor }}
                  >
                    <Icon icon="solar:arrow-right-linear" width="22" height="22" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const clubPlayerPathwayElement = {
  type: "club-player-pathway",
  category: "club",
  label: "Club Player Pathway",
  icon: "solar:routing-2-bold-duotone",

  schema: {
    content: {
      showBadge: true,
      badgeText: "PLAYER PATHWAY",
      title: "YOUR JOURNEY. OUR SUPPORT.",
      description:
        "A clear pathway for every player — from MiniRoos to senior football, helping every player reach their potential.",
      showArrows: true,
      steps: [
        {
          id: "step_1",
          image: "",
          icon: "solar:users-group-two-rounded-bold",
          circleBg: "#f97316",
          iconColor: "#ffffff",
          title: "MiniRoos",
          subtitle: "U6 – U11",
          description: "Skills & fun",
          url: "",
          target: "_self",
        },
        {
          id: "step_2",
          image: "",
          icon: "solar:user-bold",
          circleBg: "#f97316",
          iconColor: "#ffffff",
          title: "Youth",
          subtitle: "U12 – U18",
          description: "Development & competition",
          url: "",
          target: "_self",
        },
        {
          id: "step_3",
          image: "",
          icon: "solar:clipboard-list-bold",
          circleBg: "#f97316",
          iconColor: "#ffffff",
          title: "Development",
          subtitle: "MJDL & GJDL",
          description: "Build & prepare",
          url: "",
          target: "_self",
        },
        {
          id: "step_4",
          image: "",
          icon: "solar:cup-star-bold",
          circleBg: "#f97316",
          iconColor: "#ffffff",
          title: "Representative",
          subtitle: "MSAP & FNSW",
          description: "Higher level",
          url: "",
          target: "_self",
        },
        {
          id: "step_5",
          image: "",
          icon: "solar:medal-ribbon-bold",
          circleBg: "#f97316",
          iconColor: "#ffffff",
          title: "Seniors",
          subtitle: "Men & Women",
          description: "Compete & achieve",
          url: "",
          target: "_self",
        },
      ],
    },

    style: {
      headerAlign: "left",
      badgeColor: "#f97316",
      badgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      titleColor: "#0f172a",
      titleTypography: { fontSize: 26, fontSizeUnit: "px", fontWeight: "800" },
      descColor: "#475569",
      descTypography: { fontSize: 12.5, fontSizeUnit: "px", fontWeight: "400" },
      circleSize: 72,
      circleBgDefault: "#f97316",
      iconColorDefault: "#ffffff",
      arrowColor: "#f97316",
      stepTitleColor: "#0f172a",
      stepTitleTypography: { fontSize: 15, fontSizeUnit: "px", fontWeight: "800" },
      stepSubtitleColor: "#475569",
      stepSubtitleTypography: { fontSize: 12.5, fontSizeUnit: "px", fontWeight: "600" },
      stepDescColor: "#64748b",
      stepDescTypography: { fontSize: 11.5, fontSizeUnit: "px", fontWeight: "400" },
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "Header Content",
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
        {
          name: "showArrows",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Connecting Arrows" value={value ?? true} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Pathway Steps",
      controls: [
        {
          name: "steps",
          responsive: false,
          render: (value: any, onChange: any) => (
            <div className="space-y-3">
              {(value || []).map((step: any, idx: number) => (
                <Section key={step.id || idx} label={`Step #${idx + 1}: ${step.title || "Pathway Step"}`}>
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() =>
                          onChange((value || []).filter((_: any, i: number) => i !== idx))
                        }
                        className="text-[11px] text-red-400 hover:text-red-600 cursor-pointer"
                      >
                        Remove Step
                      </button>
                    </div>

                    <IconPicker
                      label="Step Icon"
                      value={step.icon || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], icon: v };
                        onChange(u);
                      }}
                    />

                    <ColorPickerPopup
                      label="Circle Background"
                      value={step.circleBg || "#f97316"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], circleBg: v };
                        onChange(u);
                      }}
                    />

                    <ColorPickerPopup
                      label="Icon Color"
                      value={step.iconColor || "#ffffff"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], iconColor: v };
                        onChange(u);
                      }}
                    />

                    <ImageGallery
                      label="Custom Image (Optional)"
                      value={step.image || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], image: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Title (e.g. MiniRoos, Youth)"
                      value={step.title || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], title: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Subtitle / Age Group (e.g. U6 – U11)"
                      value={step.subtitle || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], subtitle: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Description (e.g. Skills & fun)"
                      value={step.description || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], description: v };
                        onChange(u);
                      }}
                    />

                    <Url
                      label="Step Link (Optional)"
                      value={step.url || ""}
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
                  const newStep: PathwayStepItem = {
                    id: `step_${Date.now()}`,
                    icon: "solar:star-bold",
                    circleBg: "#f97316",
                    iconColor: "#ffffff",
                    title: `Step #${(value?.length || 0) + 1}`,
                    subtitle: "Division / Group",
                    description: "Step details",
                    url: "",
                    target: "_self",
                  };
                  onChange([...(value || []), newStep]);
                }}
                className="w-full flex items-center justify-center gap-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-[13px] font-medium cursor-pointer transition-colors"
              >
                + Add Pathway Step
              </button>
            </div>
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Header Styles",
      controls: [
        {
          name: "headerAlign",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Select
              label="Header Alignment"
              value={value || "left"}
              onChange={onChange}
              options={[
                { value: "left", label: "Left Aligned" },
                { value: "center", label: "Centered" },
              ]}
            />
          ),
        },
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
      ],
    },

    {
      tab: "Style",
      section: "Steps & Circle Badge Styles",
      controls: [
        {
          name: "circleSize",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Circle Size (px)"
              value={value ?? 72}
              onChange={onChange}
              min={40}
              max={110}
              step={2}
              showSlider
              grid={2}
            />
          ),
        },
        {
          name: "circleBgDefault",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Default Circle Background" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "iconColorDefault",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Default Icon Color" value={value ?? "#ffffff"} onChange={onChange} />
          ),
        },
        {
          name: "arrowColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Connector Arrow Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "stepTitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Step Title Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "stepTitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Step Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "stepSubtitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Step Subtitle Color" value={value ?? "#475569"} onChange={onChange} />
          ),
        },
        {
          name: "stepSubtitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Step Subtitle Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "stepDescColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Step Description Color" value={value ?? "#64748b"} onChange={onChange} />
          ),
        },
        {
          name: "stepDescTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Step Description Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubPlayerPathwayFrontend element={element} />,
};

export default clubPlayerPathwayElement;
