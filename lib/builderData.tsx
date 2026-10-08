/**
 * plugin/club/lib/builderData.tsx
 *
 * SERVER-ONLY. Registers server-side renderers for club builder elements.
 * Auto-discovered by hook/builderDataHooks.ts via require.context.
 */

import React from "react";
import { registerBuilderElement } from "@/hook/builderDataHooks";
import { ClubHeroBannerFrontend } from "@/plugin/club/elements/ClubHeroBanner";
import { ClubInfoBarFrontend } from "@/plugin/club/elements/ClubInfoBar";
import { ClubStoryValuesFrontend } from "@/plugin/club/elements/ClubStoryValues";
import { ClubPlayerPathwayFrontend } from "@/plugin/club/elements/ClubPlayerPathway";
import { ClubTrialsBannerFrontend } from "@/plugin/club/elements/ClubTrialsBanner";
import { ClubSponsorshipBannerFrontend } from "@/plugin/club/elements/ClubSponsorshipBanner";

// ── club-hero-banner: Club Hero Banner ──
registerBuilderElement("club-hero-banner", (schema) => {
  return <ClubHeroBannerFrontend element={{ schema, id: "server" }} />;
});

// ── club-info-bar: Club Quick Stats Bar ──
registerBuilderElement("club-info-bar", (schema) => {
  return <ClubInfoBarFrontend element={{ schema, id: "server" }} />;
});

// ── club-story-values: Club Story & Values ──
registerBuilderElement("club-story-values", (schema) => {
  return <ClubStoryValuesFrontend element={{ schema, id: "server" }} />;
});

// ── club-player-pathway: Club Player Pathway ──
registerBuilderElement("club-player-pathway", (schema) => {
  return <ClubPlayerPathwayFrontend element={{ schema, id: "server" }} />;
});

// ── club-trials-banner: Club Upcoming Trials Banner ──
registerBuilderElement("club-trials-banner", (schema) => {
  return <ClubTrialsBannerFrontend element={{ schema, id: "server" }} />;
});

// ── club-sponsorship-banner: Club Sponsorship Banner ──
registerBuilderElement("club-sponsorship-banner", (schema) => {
  return <ClubSponsorshipBannerFrontend element={{ schema, id: "server" }} />;
});

