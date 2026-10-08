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

export interface ClubValueItem {
  id: string;
  image?: string;
  icon?: string;
  iconColor?: string;
  title: string;
  description: string;
  url?: string;
  target?: string;
}

export function ClubStoryValuesFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  // Left Side: About Story Content
  const showAboutBadge: boolean = s.content?.showAboutBadge ?? true;
  const aboutBadgeText: string = s.content?.aboutBadgeText || "ABOUT US";
  const aboutTitle: string = s.content?.aboutTitle || "OUR CLUB STORY";
  const aboutParagraph1: string =
    s.content?.aboutParagraph1 ||
    "Camden Tigers Football Club was established in 1961 and has grown into a respected and well-loved part of the Camden community. We are more than just a football club — we are a family, built on community, sportsmanship, inclusion and the belief that every player has the potential to grow, learn and succeed.";
  const aboutParagraph2: string =
    s.content?.aboutParagraph2 ||
    "Our club is proudly volunteer-driven, with dedicated coaches, managers, and families who give their time and support to make Camden Tigers a great place for players of all ages.";

  // Button
  const showButton: boolean = s.content?.showButton ?? true;
  const buttonText: string = s.content?.buttonText || "Learn More About Us";
  const buttonUrl: string = s.content?.buttonUrl || "/about";
  const buttonTarget: string = s.content?.buttonTarget || "_self";

  // Center Image
  const image: string =
    s.content?.image ||
    "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80";
  const imageAlt: string = s.content?.imageAlt || "Camden Tigers Football Club";

  // Right Side: Values
  const showValuesBadge: boolean = s.content?.showValuesBadge ?? true;
  const valuesBadgeText: string = s.content?.valuesBadgeText || "OUR VALUES";
  const values: ClubValueItem[] = s.content?.values || [];

  // Styles
  const aboutBadgeColor: string = s.style?.aboutBadgeColor || "#f97316";
  const aboutBadgeTypography = s.style?.aboutBadgeTypography || {};
  const aboutTitleColor: string = s.style?.aboutTitleColor || "#0f172a";
  const aboutTitleTypography = s.style?.aboutTitleTypography || {};
  const descColor: string = s.style?.descColor || "#475569";
  const descTypography = s.style?.descTypography || {};

  const buttonBg: string = s.style?.buttonBg || "#f97316";
  const buttonHoverBg: string = s.style?.buttonHoverBg || "#ea580c";
  const buttonColor: string = s.style?.buttonColor || "#ffffff";
  const buttonRadius: number = s.style?.buttonRadius ?? 10;
  const buttonTypography = s.style?.buttonTypography || {};

  const imageRadius: number = s.style?.imageRadius ?? 16;

  const valuesBadgeColor: string = s.style?.valuesBadgeColor || "#f97316";
  const valuesBadgeTypography = s.style?.valuesBadgeTypography || {};
  const valueTitleColor: string = s.style?.valueTitleColor || "#0f172a";
  const valueTitleTypography = s.style?.valueTitleTypography || {};
  const valueDescColor: string = s.style?.valueDescColor || "#64748b";
  const valueDescTypography = s.style?.valueDescTypography || {};
  const valueIconColorDefault: string = s.style?.valueIconColorDefault || "#f97316";
  const valueIconSize: number = s.style?.valueIconSize ?? 28;

  const abBadgeTyp = getTypographyStyles(aboutBadgeTypography);
  const abTitleTyp = getTypographyStyles(aboutTitleTypography);
  const descTyp = getTypographyStyles(descTypography);
  const btnTyp = getTypographyStyles(buttonTypography);
  const valBadgeTyp = getTypographyStyles(valuesBadgeTypography);
  const valTitleTyp = getTypographyStyles(valueTitleTypography);
  const valDescTyp = getTypographyStyles(valueDescTypography);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
        {/* ── Left Column: About Story ── */}
        <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-2">
          {showAboutBadge && aboutBadgeText && (
            <span
              className="text-xs font-bold tracking-wider uppercase mb-2"
              style={{ color: aboutBadgeColor, ...abBadgeTyp }}
            >
              {aboutBadgeText}
            </span>
          )}

          {aboutTitle && (
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight uppercase"
              style={{ color: aboutTitleColor, ...abTitleTyp }}
            >
              {aboutTitle}
            </h2>
          )}

          {aboutParagraph1 && (
            <p
              className="text-xs sm:text-[13px] leading-relaxed mb-4 text-slate-600"
              style={{ color: descColor, ...descTyp }}
            >
              {aboutParagraph1}
            </p>
          )}

          {aboutParagraph2 && (
            <p
              className="text-xs sm:text-[13px] leading-relaxed mb-6 text-slate-600"
              style={{ color: descColor, ...descTyp }}
            >
              {aboutParagraph2}
            </p>
          )}

          {showButton && buttonText && (
            <a
              href={buttonUrl}
              target={buttonTarget}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 cursor-pointer no-underline"
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
              <Icon icon="solar:arrow-right-linear" width="16" height="16" />
            </a>
          )}
        </div>

        {/* ── Center Column: Image ── */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          {image ? (
            <div
              className="w-full relative overflow-hidden shadow-md"
              style={{ borderRadius: `${imageRadius}px` }}
            >
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-72 sm:h-84 md:h-96 object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
          ) : (
            <div
              className="w-full h-80 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs"
              style={{ borderRadius: `${imageRadius}px` }}
            >
              Upload Club Story Image
            </div>
          )}
        </div>

        {/* ── Right Column: Values List ── */}
        <div className="lg:col-span-3 flex flex-col items-start pl-0 lg:pl-2">
          {showValuesBadge && valuesBadgeText && (
            <span
              className="text-xs font-bold tracking-wider uppercase mb-4"
              style={{ color: valuesBadgeColor, ...valBadgeTyp }}
            >
              {valuesBadgeText}
            </span>
          )}

          <div className="flex flex-col gap-4 w-full">
            {values.map((val, idx) => {
              const iconColor = val.iconColor || valueIconColorDefault;
              const hasCustomImage = !!val.image;
              const hasIcon = !!val.icon;

              const ItemWrapper = val.url ? "a" : "div";
              const wrapperProps = val.url
                ? {
                    href: val.url,
                    target: val.target || "_self",
                    style: { textDecoration: "none", color: "inherit" },
                  }
                : {};

              return (
                <ItemWrapper
                  key={val.id || idx}
                  className="flex items-start gap-3 group transition-transform duration-200 hover:translate-x-1"
                  {...(wrapperProps as any)}
                >
                  {/* Left Icon */}
                  <div
                    className="flex items-center justify-center shrink-0 pt-0.5"
                    style={{
                      width: `${valueIconSize}px`,
                      minWidth: `${valueIconSize}px`,
                      color: iconColor,
                    }}
                  >
                    {hasCustomImage ? (
                      <img
                        src={val.image}
                        alt={val.title}
                        className="w-full h-full object-contain"
                      />
                    ) : hasIcon ? (
                      <Icon icon={val.icon!} width={valueIconSize} height={valueIconSize} />
                    ) : (
                      <Icon icon="solar:star-bold" width={valueIconSize} height={valueIconSize} />
                    )}
                  </div>

                  {/* Right Text */}
                  <div className="flex flex-col min-w-0">
                    {val.title && (
                      <h4
                        className="text-xs sm:text-[13.5px] font-extrabold tracking-tight leading-snug mb-0.5"
                        style={{ color: valueTitleColor, ...valTitleTyp }}
                      >
                        {val.title}
                      </h4>
                    )}
                    {val.description && (
                      <p
                        className="text-[11px] sm:text-xs leading-tight m-0"
                        style={{ color: valueDescColor, ...valDescTyp }}
                      >
                        {val.description}
                      </p>
                    )}
                  </div>
                </ItemWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const clubStoryValuesElement = {
  type: "club-story-values",
  category: "club",
  label: "Club Story & Values",
  icon: "solar:book-bookmark-bold-duotone",

  schema: {
    content: {
      showAboutBadge: true,
      aboutBadgeText: "ABOUT US",
      aboutTitle: "OUR CLUB STORY",
      aboutParagraph1:
        "Camden Tigers Football Club was established in 1961 and has grown into a respected and well-loved part of the Camden community. We are more than just a football club — we are a family, built on community, sportsmanship, inclusion and the belief that every player has the potential to grow, learn and succeed.",
      aboutParagraph2:
        "Our club is proudly volunteer-driven, with dedicated coaches, managers, and families who give their time and support to make Camden Tigers a great place for players of all ages.",
      showButton: true,
      buttonText: "Learn More About Us",
      buttonUrl: "/about",
      buttonTarget: "_self",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
      imageAlt: "Camden Tigers Football Club",
      showValuesBadge: true,
      valuesBadgeText: "OUR VALUES",
      values: [
        {
          id: "val_1",
          image: "",
          icon: "solar:users-group-two-rounded-bold",
          iconColor: "#f97316",
          title: "Community",
          description: "Stronger together",
          url: "",
          target: "_self",
        },
        {
          id: "val_2",
          image: "",
          icon: "solar:hand-heart-bold",
          iconColor: "#f97316",
          title: "Inclusion",
          description: "Everyone belongs",
          url: "",
          target: "_self",
        },
        {
          id: "val_3",
          image: "",
          icon: "solar:shield-heart-bold",
          iconColor: "#f97316",
          title: "Commitment",
          description: "On and off the field",
          url: "",
          target: "_self",
        },
        {
          id: "val_4",
          image: "",
          icon: "solar:shield-check-bold",
          iconColor: "#f97316",
          title: "Integrity",
          description: "Do what's right",
          url: "",
          target: "_self",
        },
        {
          id: "val_5",
          image: "",
          icon: "solar:diploma-verified-bold",
          iconColor: "#f97316",
          title: "Development",
          description: "Better people, better players",
          url: "",
          target: "_self",
        },
      ],
    },

    style: {
      aboutBadgeColor: "#f97316",
      aboutBadgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      aboutTitleColor: "#0f172a",
      aboutTitleTypography: { fontSize: 26, fontSizeUnit: "px", fontWeight: "800" },
      descColor: "#475569",
      descTypography: { fontSize: 12.5, fontSizeUnit: "px", fontWeight: "400" },
      buttonBg: "#f97316",
      buttonHoverBg: "#ea580c",
      buttonColor: "#ffffff",
      buttonRadius: 10,
      buttonTypography: { fontSize: 13, fontSizeUnit: "px", fontWeight: "700" },
      imageRadius: 16,
      valuesBadgeColor: "#f97316",
      valuesBadgeTypography: { fontSize: 11, fontSizeUnit: "px", fontWeight: "700" },
      valueTitleColor: "#0f172a",
      valueTitleTypography: { fontSize: 13.5, fontSizeUnit: "px", fontWeight: "800" },
      valueDescColor: "#64748b",
      valueDescTypography: { fontSize: 11.5, fontSizeUnit: "px", fontWeight: "400" },
      valueIconColorDefault: "#f97316",
      valueIconSize: 28,
    },
  },

  controls: [
    // ══════════════════════════════════════════ CONTENT TAB ══════
    {
      tab: "Content",
      section: "About Story (Left Column)",
      controls: [
        {
          name: "showAboutBadge",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Eyebrow Badge" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "aboutBadgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Eyebrow Badge Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "aboutTitle",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Story Title" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "aboutParagraph1",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Paragraph 1" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "aboutParagraph2",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Textarea label="Paragraph 2" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "showButton",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Action Button" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "buttonText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Button Text" value={value || ""} onChange={onChange} />
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
      section: "Center Image",
      controls: [
        {
          name: "image",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ImageGallery label="Club Story Photo" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "imageAlt",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Image Alt Text" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Content",
      section: "Our Values (Right Column)",
      controls: [
        {
          name: "showValuesBadge",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Toggle label="Show Values Eyebrow" value={value ?? true} onChange={onChange} />
          ),
        },
        {
          name: "valuesBadgeText",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Values Eyebrow Text" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "values",
          responsive: false,
          render: (value: any, onChange: any) => (
            <div className="space-y-3">
              {(value || []).map((val: any, idx: number) => (
                <Section key={val.id || idx} label={`#${idx + 1}: ${val.title || "Value Item"}`}>
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
                      value={val.icon || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], icon: v };
                        onChange(u);
                      }}
                    />

                    <ColorPickerPopup
                      label="Icon Color"
                      value={val.iconColor || "#f97316"}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], iconColor: v };
                        onChange(u);
                      }}
                    />

                    <ImageGallery
                      label="Custom Icon Image (Optional)"
                      value={val.image || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], image: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Title (e.g. Community, Inclusion)"
                      value={val.title || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], title: v };
                        onChange(u);
                      }}
                    />

                    <Text
                      label="Subtitle (e.g. Stronger together)"
                      value={val.description || ""}
                      onChange={(v: string) => {
                        const u = [...value];
                        u[idx] = { ...u[idx], description: v };
                        onChange(u);
                      }}
                    />

                    <Url
                      label="Link (Optional)"
                      value={val.url || ""}
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
                  const newItem: ClubValueItem = {
                    id: `val_${Date.now()}`,
                    icon: "solar:star-bold",
                    iconColor: "#f97316",
                    title: `Value #${(value?.length || 0) + 1}`,
                    description: "Value description",
                    url: "",
                    target: "_self",
                  };
                  onChange([...(value || []), newItem]);
                }}
                className="w-full flex items-center justify-center gap-1 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded text-[13px] font-medium cursor-pointer transition-colors"
              >
                + Add Value Item
              </button>
            </div>
          ),
        },
      ],
    },

    // ══════════════════════════════════════════ STYLE TAB ════════
    {
      tab: "Style",
      section: "Story Styles (Left)",
      controls: [
        {
          name: "aboutBadgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Eyebrow Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "aboutBadgeTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Eyebrow Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "aboutTitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Title Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "aboutTitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "descColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Paragraphs Color" value={value ?? "#475569"} onChange={onChange} />
          ),
        },
        {
          name: "descTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Paragraphs Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Button Styles",
      controls: [
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
              value={value ?? 10}
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
          name: "buttonTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Button Typography" value={value} onChange={onChange} />
          ),
        },
      ],
    },

    {
      tab: "Style",
      section: "Center Image Styles",
      controls: [
        {
          name: "imageRadius",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Image Corner Radius (px)"
              value={value ?? 16}
              onChange={onChange}
              min={0}
              max={40}
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
      section: "Values Styles (Right)",
      controls: [
        {
          name: "valuesBadgeColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Values Eyebrow Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "valuesBadgeTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Values Eyebrow Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "valueTitleColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Value Title Color" value={value ?? "#0f172a"} onChange={onChange} />
          ),
        },
        {
          name: "valueTitleTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Value Title Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "valueDescColor",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Value Subtitle Color" value={value ?? "#64748b"} onChange={onChange} />
          ),
        },
        {
          name: "valueDescTypography",
          responsive: true,
          render: (value: any, onChange: any) => (
            <Typography label="Value Subtitle Typography" value={value} onChange={onChange} />
          ),
        },
        {
          name: "valueIconColorDefault",
          responsive: false,
          render: (value: any, onChange: any) => (
            <ColorPickerPopup label="Default Icon Color" value={value ?? "#f97316"} onChange={onChange} />
          ),
        },
        {
          name: "valueIconSize",
          responsive: true,
          render: (value: any, onChange: any) => (
            <NumberControl
              label="Icon Size (px)"
              value={value ?? 28}
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

  render: (element: any) => <ClubStoryValuesFrontend element={element} />,
};

export default clubStoryValuesElement;
