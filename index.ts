import { addHook, addBuilderElement, PluginMeta } from "@/hook";
import ClubHeader from "./header/Header";
import ClubFooter from "./footer/Footer";
import clubHeroBannerElement from "./elements/ClubHeroBanner";
import clubInfoBarElement from "./elements/ClubInfoBar";
import clubStoryValuesElement from "./elements/ClubStoryValues";
import clubPlayerPathwayElement from "./elements/ClubPlayerPathway";
import clubTrialsBannerElement from "./elements/ClubTrialsBanner";
import clubSponsorshipBannerElement from "./elements/ClubSponsorshipBanner";
import clubMembersElement from "./elements/Mumber";

export const PLUGINS: PluginMeta = {
  nx: "club",
  name: "Camden Tigers Sports Club",
  version: "1.0.0",
  description: "Camden Tigers Sports Club",
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
  addBuilderElement(clubHeroBannerElement, PLUGINS.nx);
  addBuilderElement(clubInfoBarElement, PLUGINS.nx);
  addBuilderElement(clubStoryValuesElement, PLUGINS.nx);
  addBuilderElement(clubPlayerPathwayElement, PLUGINS.nx);
  addBuilderElement(clubTrialsBannerElement, PLUGINS.nx);
  addBuilderElement(clubSponsorshipBannerElement, PLUGINS.nx);
  addBuilderElement(clubMembersElement, PLUGINS.nx);
}