import { addHook, addBuilderElement, PluginMeta } from "@/hook";
import ClubHeader from "./header/Header";
import ClubFooter from "./footer/Footer";

// Existing elements
import clubHeroBannerElement from "./elements/ClubHeroBanner";
import clubInfoBarElement from "./elements/ClubInfoBar";
import clubStoryValuesElement from "./elements/ClubStoryValues";
import clubPlayerPathwayElement from "./elements/ClubPlayerPathway";
import clubTrialsBannerElement from "./elements/ClubTrialsBanner";
import clubSponsorshipBannerElement from "./elements/ClubSponsorshipBanner";
import clubMembersElement from "./elements/Mumber";

// 10 New Club Builder Elements
import clubHomeOverviewElement from "./elements/ClubHomeOverview";
import clubAboutHistoryElement from "./elements/ClubAboutHistory";
import clubTeamsGridElement from "./elements/ClubTeamsGrid";
import clubPlayersRosterElement from "./elements/ClubPlayersRoster";
import clubFixturesResultsElement from "./elements/ClubFixturesResults";
import clubPointsTableElement from "./elements/ClubPointsTable";
import clubNewsFeedElement from "./elements/ClubNewsFeed";
import clubMediaGalleryElement from "./elements/ClubMediaGallery";
import clubAchievementsElement from "./elements/ClubAchievements";
import clubContactMapElement from "./elements/ClubContactMap";

export const PLUGINS: PluginMeta = {
  nx: "club",
  name: "Camden Tigers Sports Club",
  version: "1.1.0",
  description: "Comprehensive Sports & Football Club Management Elements",
  author: "HOTLancerX",
  path: "https://github.com/HOTLancerX/club.git",
  icon: "fluent-mdl2:more-sports",
  color: "from-red-500 to-yellow-500",
};

export function register() {
  // ─── 1. Header & Footer (root.pages) ───────────────────────────────────────
  addHook(
    "root.pages",
    [
      {
        key: "club-header",
        label: "Camden Tigers Header",
        type: "header",
        slug: "layout",
        style: "left",
        position: 30,
        active: true,
        component: ClubHeader,
      },
      {
        key: "club-footer",
        label: "Camden Tigers Footer",
        type: "footer",
        slug: "layout",
        style: "left",
        position: 30,
        active: true,
        component: ClubFooter,
      },
    ],
    PLUGINS.nx
  );

  // ─── 2. Builder Elements ────────────────────────────────────────────────────
  // Core & Promotional
  addBuilderElement(clubHeroBannerElement, PLUGINS.nx);
  addBuilderElement(clubInfoBarElement, PLUGINS.nx);
  addBuilderElement(clubStoryValuesElement, PLUGINS.nx);
  addBuilderElement(clubPlayerPathwayElement, PLUGINS.nx);
  addBuilderElement(clubTrialsBannerElement, PLUGINS.nx);
  addBuilderElement(clubSponsorshipBannerElement, PLUGINS.nx);
  addBuilderElement(clubMembersElement, PLUGINS.nx);

  // 10 Dedicated Club Elements
  addBuilderElement(clubHomeOverviewElement, PLUGINS.nx);
  addBuilderElement(clubAboutHistoryElement, PLUGINS.nx);
  addBuilderElement(clubTeamsGridElement, PLUGINS.nx);
  addBuilderElement(clubPlayersRosterElement, PLUGINS.nx);
  addBuilderElement(clubFixturesResultsElement, PLUGINS.nx);
  addBuilderElement(clubPointsTableElement, PLUGINS.nx);
  addBuilderElement(clubNewsFeedElement, PLUGINS.nx);
  addBuilderElement(clubMediaGalleryElement, PLUGINS.nx);
  addBuilderElement(clubAchievementsElement, PLUGINS.nx);
  addBuilderElement(clubContactMapElement, PLUGINS.nx);
}