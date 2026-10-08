"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import MenuClients from "@/components/MenuClients";
import MobileDrawer from "@/components/page/header/MobileDrawer";
import type { MenuItem } from "@/models/Menu";
import AuthAc from "@/components/AuthAc";

export interface ClubHeaderProps {
    settings?: Record<string, any>;
    topItems?: MenuItem[];
    mainItems?: MenuItem[];
    rightItems?: MenuItem[];
    mobileItems?: MenuItem[];
    builderContent?: Record<string, any[]>;
    permalinkMap?: Record<string, string>;
}

const DEFAULT_NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Teams", href: "/teams" },
    { label: "News & Blog", href: "/news" },
    { label: "Gallery", href: "/gallery" },
];

export default function ClubHeader({
    settings = {},
    mainItems = [],
    rightItems = [],
    mobileItems = [],
    builderContent = {},
}: ClubHeaderProps) {
    const pathname = usePathname() || "/";
    const isSticky = settings.header_sticky !== "false";
    const [moreOpen, setMoreOpen] = useState(false);

    const siteName = settings.siteName || "Camden Tigers Football Club";

    return (
        <header
            className={`z-50 bg-[#07111e] text-white border-b border-white/10 shadow-lg ${
                isSticky ? "sticky top-0 backdrop-blur-md" : "relative"
            }`}
        >
            <div className="container h-20 flex items-center justify-between gap-4 sm:gap-6 w-full">
                {/* Left: Club Logo & Branding */}
                <Link href="/" className="flex items-center gap-3 shrink-0 group">
                    {settings.logo ? (
                        <img
                            src={settings.logo}
                            alt={settings.siteName || "Camden Tigers"}
                            className="w-auto object-contain max-h-11"
                            style={{
                                height: settings.header_logo_height
                                    ? `${settings.header_logo_height}px`
                                    : settings.headerLogoHeight
                                        ? `${settings.headerLogoHeight}px`
                                        : undefined,
                            }}
                        />
                    ) : (
                        <div className="flex items-center gap-3">
                            {/* Mascot Icon */}
                            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-0.5 shadow-md group-hover:scale-105 transition-transform shrink-0">
                                <div className="w-full h-full bg-[#07111e] rounded-[10px] flex items-center justify-center overflow-hidden">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="w-7 h-7 text-amber-500 transform group-hover:rotate-3 transition-transform"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" fill="#f97316" fillOpacity="0.2" />
                                        <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" stroke="#f97316" />
                                        <path d="M8 9l4 4 4-4" stroke="#ffffff" />
                                        <path d="M9 14h6" stroke="#f97316" />
                                        <circle cx="9" cy="9" r="1" fill="#ffffff" />
                                        <circle cx="15" cy="9" r="1" fill="#ffffff" />
                                    </svg>
                                </div>
                            </div>

                            {/* Club Name Typography */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 leading-none">
                                    <span className="text-lg font-black text-white tracking-wider">CAMDEN</span>
                                    <span className="text-lg font-black text-[#f97316] tracking-wider">TIGERS</span>
                                </div>
                                <span className="text-[9px] font-extrabold tracking-[0.22em] text-slate-300 uppercase mt-0.5">
                                    FOOTBALL CLUB
                                </span>
                            </div>
                        </div>
                    )}
                </Link>

                {/* Middle: Desktop Navigation */}
                {mainItems.length > 0 ? (
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <MenuClients
                            menuItems={mainItems}
                            settings={settings}
                            builderContent={builderContent}
                            className="flex items-center gap-1 font-bold text-xs uppercase tracking-wider"
                        />
                    </div>
                ) : (
                    <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2">
                        {DEFAULT_NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                                        isActive
                                            ? "text-[#f97316]"
                                            : "text-slate-300 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#f97316] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}

                        {/* More Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setMoreOpen(!moreOpen)}
                                onBlur={() => setTimeout(() => setMoreOpen(false), 200)}
                                className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                            >
                                <span>More +</span>
                            </button>
                            {moreOpen && (
                                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0b1828] border border-white/10 rounded-2xl p-2 shadow-2xl space-y-1 z-50">
                                    <Link
                                        href="/contact"
                                        className="block px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/sponsorship"
                                        className="block px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
                                    >
                                        Sponsorship
                                    </Link>
                                    <Link
                                        href="/events"
                                        className="block px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
                                    >
                                        Club Events
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                )}

                {/* Right: Register / Login CTA + Mobile Drawer */}
                <div className="flex items-center gap-3 shrink-0">
                    <Link
                        href="/account"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#f97316] hover:from-amber-400 hover:to-orange-500 text-[#07111e] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-orange-500/20 transition transform hover:-translate-y-0.5 cursor-pointer"
                    >
                        <span>Register / Login</span>
                        <Icon icon="solar:user-bold" className="w-4 h-4 text-[#07111e]" />
                    </Link>

                    {/* Mobile Hamburger Drawer */}
                    <div className="lg:hidden flex items-center">
                        <MobileDrawer
                            items={
                                mobileItems.length > 0
                                    ? mobileItems
                                    : (DEFAULT_NAV_ITEMS.map((n, idx) => ({
                                          id: `club-mob-nav-${idx}`,
                                          label: n.label,
                                          title: n.label,
                                          url: n.href,
                                          link: { url: n.href },
                                      })) as any)
                            }
                            settings={settings}
                            iconColor="#f97316"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
