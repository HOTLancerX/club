/**
 * plugin/club/lib/builderData.tsx
 *
 * SERVER-ONLY. Registers server-side renderers for club builder elements.
 * Auto-discovered by hook/builderDataHooks.ts via require.context.
 */

import React from "react";
import { registerBuilderElement } from "@/hook/builderDataHooks";

// Existing elements
import { ClubHeroBannerFrontend } from "@/plugin/club/elements/ClubHeroBanner";
import { ClubInfoBarFrontend } from "@/plugin/club/elements/ClubInfoBar";
import { ClubStoryValuesFrontend } from "@/plugin/club/elements/ClubStoryValues";
import { ClubPlayerPathwayFrontend } from "@/plugin/club/elements/ClubPlayerPathway";
import { ClubTrialsBannerFrontend } from "@/plugin/club/elements/ClubTrialsBanner";
import { ClubSponsorshipBannerFrontend } from "@/plugin/club/elements/ClubSponsorshipBanner";
import { ClubMembersFrontend } from "@/plugin/club/elements/Mumber";

// 10 New Club Elements
import { ClubHomeOverviewFrontend } from "@/plugin/club/elements/ClubHomeOverview";
import { ClubAboutHistoryFrontend } from "@/plugin/club/elements/ClubAboutHistory";
import { ClubTeamsGridFrontend } from "@/plugin/club/elements/ClubTeamsGrid";
import { ClubPlayersRosterFrontend } from "@/plugin/club/elements/ClubPlayersRoster";
import { ClubFixturesResultsFrontend } from "@/plugin/club/elements/ClubFixturesResults";
import { ClubPointsTableFrontend } from "@/plugin/club/elements/ClubPointsTable";
import { ClubNewsFeedFrontend } from "@/plugin/club/elements/ClubNewsFeed";
import { ClubMediaGalleryFrontend } from "@/plugin/club/elements/ClubMediaGallery";
import { ClubAchievementsFrontend } from "@/plugin/club/elements/ClubAchievements";
import { ClubContactMapFrontend } from "@/plugin/club/elements/ClubContactMap";

// ── Existing Elements ──
registerBuilderElement("club-hero-banner", (schema) => (
  <ClubHeroBannerFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-info-bar", (schema) => (
  <ClubInfoBarFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-story-values", (schema) => (
  <ClubStoryValuesFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-player-pathway", (schema) => (
  <ClubPlayerPathwayFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-trials-banner", (schema) => (
  <ClubTrialsBannerFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-sponsorship-banner", (schema) => (
  <ClubSponsorshipBannerFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-members", (schema) => (
  <ClubMembersFrontend element={{ schema, id: "server" }} />
));

// ── 10 New Club Elements ──
registerBuilderElement("club-home-overview", (schema) => (
  <ClubHomeOverviewFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-about-history", (schema) => (
  <ClubAboutHistoryFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-teams-grid", (schema) => (
  <ClubTeamsGridFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-players-roster", (schema) => (
  <ClubPlayersRosterFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-fixtures-results", (schema) => (
  <ClubFixturesResultsFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-points-table", (schema) => (
  <ClubPointsTableFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-news-feed", (schema) => (
  <ClubNewsFeedFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-media-gallery", (schema) => (
  <ClubMediaGalleryFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-achievements", (schema) => (
  <ClubAchievementsFrontend element={{ schema, id: "server" }} />
));

registerBuilderElement("club-contact-map", (schema) => (
  <ClubContactMapFrontend element={{ schema, id: "server" }} />
));
