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

export function ClubContactMapFrontend({ element }: { element: any }) {
  const s = element?.schema || {};

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "General Inquiries",
    message: "",
  });

  const badgeText: string = s.content?.badgeText || "GET IN TOUCH";
  const sectionTitle: string = s.content?.sectionTitle || "CONTACT CAMDEN TIGERS";
  const sectionSubtitle: string =
    s.content?.sectionSubtitle ||
    "Reach out for player registration, trial dates, sponsorship opportunities, or clubhouse hire.";

  const groundName: string = s.content?.groundName || "Ron Dine Memorial Reserve";
  const addressLine1: string = s.content?.addressLine1 || "McCrae Drive, Camden South";
  const addressLine2: string = s.content?.addressLine2 || "NSW 2570, Australia";

  const emailGeneral: string = s.content?.emailGeneral || "admin@camdentigers.com.au";
  const emailRegistrations: string = s.content?.emailRegistrations || "registrar@camdentigers.com.au";
  const phoneMain: string = s.content?.phoneMain || "+61 (02) 4655 0000";

  const trainingScheduleText: string =
    s.content?.trainingScheduleText ||
    "Tuesday & Thursday: 17:00 – 21:30 | Matchdays: Saturdays & Sundays";

  const mapEmbedUrl: string =
    s.content?.mapEmbedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.150493863456!2d150.6865612849925!3d-34.07661266023349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f17042542ffb%3A0x5017d681632adb0!2sCamden%20South%20NSW%202570!5e0!3m2!1sen!2sau!4v1696800000000!5m2!1sen!2sau";

  const facebookUrl: string = s.content?.facebookUrl || "https://facebook.com";
  const instagramUrl: string = s.content?.instagramUrl || "https://instagram.com";
  const youtubeUrl: string = s.content?.youtubeUrl || "https://youtube.com";
  const xUrl: string = s.content?.xUrl || "https://x.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const headingStyles = getTypographyStyles(s.style?.headingTypography || {});

  return (
    <div className="w-full space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
          <Icon icon="solar:phone-calling-bold" width={14} />
          {badgeText}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase" style={headingStyles}>
          {sectionTitle}
        </h2>
        <p className="text-sm sm:text-base text-gray-500">{sectionSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Left Side: Contact Information & Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Info Card */}
          <div className="p-2 md:p-4 text-black space-y-6 relative">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-main text-white flex items-center justify-center font-bold shrink-0 shadow-lg">
                <Icon icon="solar:map-point-wave-bold" width={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                  HOME GROUND & CLUBHOUSE
                </span>
                <h3 className="text-lg font-black">{groundName}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              {addressLine1}<br />
              {addressLine2}
            </p>

            <div className="pt-4 border-t border-main space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-main text-white flex items-center justify-center shrink-0">
                  <Icon icon="solar:phone-bold" width={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Phone Inquiries</span>
                  <a href={`tel:${phoneMain}`} className="font-bold text-gray-500 hover:text-white transition">
                    {phoneMain}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-main text-white flex items-center justify-center shrink-0">
                  <Icon icon="solar:letter-bold" width={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">General Administration</span>
                  <a href={`mailto:${emailGeneral}`} className="font-bold text-gray-500 hover:text-white transition">
                    {emailGeneral}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-main text-white flex items-center justify-center shrink-0">
                  <Icon icon="solar:users-group-two-rounded-bold" width={16} />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Player Registrations</span>
                  <a href={`mailto:${emailRegistrations}`} className="font-bold text-gray-500 hover:text-white transition">
                    {emailRegistrations}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Strip */}
            <div className="pt-4 border-t border-main flex items-center gap-3">
              <span className="text-xs text-gray-400 font-bold mr-1">Follow Tigers:</span>
              {[
                { icon: "ri:facebook-fill", url: facebookUrl },
                { icon: "ri:instagram-line", url: instagramUrl },
                { icon: "ri:youtube-fill", url: youtubeUrl },
                { icon: "ri:twitter-x-fill", url: xUrl },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-main hover:bg-orange-500 text-white flex items-center justify-center transition"
                >
                  <Icon icon={s.icon} width={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Schedule Strip */}
          <div className="p-6 rounded-3xl bg-orange-50 border border-orange-100 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0">
              <Icon icon="solar:clock-circle-bold" width={20} />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-orange-950">Training & Office Hours</h4>
              <p className="text-xs text-orange-800/90 mt-1 leading-relaxed">{trainingScheduleText}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Inquiry Form & Map */}
        <div className="lg:col-span-7 space-y-6">
          {/* Contact Inquiry Form Card */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-black text-gray-900">Send an Official Message</h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Fill out the form below and our club administration team will respond within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2 animate-fade-in">
                <Icon icon="solar:check-circle-bold" width={36} className="mx-auto text-emerald-600" />
                <h4 className="font-black text-base">Thank You For Reaching Out!</h4>
                <p className="text-xs">Your inquiry has been received. A club representative will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full text-xs rounded-xl border border-gray-200 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full text-xs rounded-xl border border-gray-200 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0400 000 000"
                      className="w-full text-xs rounded-xl border border-gray-200 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs rounded-xl border border-gray-200 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-medium text-gray-700"
                    >
                      <option value="General Inquiries">General Club Inquiry</option>
                      <option value="Player Registration">Player Registration & Trials</option>
                      <option value="Sponsorship">Sponsorship & Commercial Partnership</option>
                      <option value="Clubhouse Hire">Ground & Clubhouse Facility Hire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your question or message here..."
                    className="w-full text-xs rounded-xl border border-gray-200 p-3.5 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition shadow-md cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Icon icon="solar:plain-bold" width={16} />
                </button>
              </form>
            )}
          </div>

          {/* Interactive Map Embed */}
          
        </div>
      </div>
      <div>
        {mapEmbedUrl && (
          <div className="rounded overflow-hidden border border-gray-200 shadow-md h-64 w-full bg-gray-100">
            <iframe
              title="Club Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
}

const clubContactMapElement = {
  type: "club-contact-map",
  category: "club",
  label: "Club Contact & Grounds Map",
  icon: "solar:map-point-wave-bold-duotone",

  schema: {
    content: {
      badgeText: "GET IN TOUCH",
      sectionTitle: "CONTACT CAMDEN TIGERS",
      sectionSubtitle: "Reach out for player registration, trial dates, sponsorship opportunities, or clubhouse hire.",
      groundName: "Ron Dine Memorial Reserve",
      addressLine1: "McCrae Drive, Camden South",
      addressLine2: "NSW 2570, Australia",
      emailGeneral: "admin@camdentigers.com.au",
      emailRegistrations: "registrar@camdentigers.com.au",
      phoneMain: "+61 (02) 4655 0000",
      trainingScheduleText: "Tuesday & Thursday: 17:00 – 21:30 | Matchdays: Saturdays & Sundays",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.150493863456!2d150.6865612849925!3d-34.07661266023349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f17042542ffb%3A0x5017d681632adb0!2sCamden%20South%20NSW%202570!5e0!3m2!1sen!2sau!4v1696800000000!5m2!1sen!2sau",
      facebookUrl: "https://facebook.com",
      instagramUrl: "https://instagram.com",
      youtubeUrl: "https://youtube.com",
      xUrl: "https://x.com",
    },

    style: {
      primaryColor: "#f97316",
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
      tab: "Content",
      section: "Address & Communication",
      controls: [
        {
          name: "groundName",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Ground / Stadium Name" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "addressLine1",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Street Address" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "addressLine2",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="City, State, Postal Code" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "emailGeneral",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="General Email" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "emailRegistrations",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Registrar Email" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "phoneMain",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Contact Phone" value={value || ""} onChange={onChange} />
          ),
        },
        {
          name: "mapEmbedUrl",
          responsive: false,
          render: (value: any, onChange: any) => (
            <Text label="Google Maps Iframe Embed URL" value={value || ""} onChange={onChange} />
          ),
        },
      ],
    },
  ],

  render: (element: any) => <ClubContactMapFrontend element={element} />,
};

export default clubContactMapElement;
