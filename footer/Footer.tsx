"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export interface ClubFooterProps {
    settings?: Record<string, any>;
    footerItems?: any[];
    builderContent?: Record<string, any[]>;
}

export default function ClubFooter({ settings = {} }: ClubFooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#07111e] text-white border-t border-slate-800">
            {/* Top Main Footer Section */}
            <div className="container py-12 sm:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                    {/* 1. Left: Club Logo & Branding (col 1-4) */}
                    <div className="lg:col-span-3 flex items-center gap-3.5">
                        {settings.footer_logo || settings.logo ? (
                            <Link href="/" className="inline-block">
                                <img
                                    src={settings.footer_logo || settings.logo}
                                    alt={settings.siteName || "Camden Tigers"}
                                    className="w-auto object-contain max-h-12"
                                />
                            </Link>
                        ) : (
                            <>
                                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700 p-0.5 shadow-lg shrink-0">
                                    <div className="w-full h-full bg-[#07111e] rounded-[14px] flex items-center justify-center overflow-hidden">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="w-8 h-8 text-amber-500"
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

                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1.5 leading-none">
                                        <span className="text-xl font-black text-white tracking-wider">CAMDEN</span>
                                        <span className="text-xl font-black text-[#f97316] tracking-wider">TIGERS</span>
                                    </div>
                                    <span className="text-[10px] font-extrabold tracking-[0.24em] text-slate-300 uppercase mt-0.5">
                                        FOOTBALL CLUB
                                    </span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* 2. Middle: Navigation Links (2 Rows, col 5-8) */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5 text-xs font-semibold text-slate-300">
                        {/* Row 1 */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/about-us" className="hover:text-white transition">About Us</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/teams" className="hover:text-white transition">Teams</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/player-pathway" className="hover:text-white transition">Player Pathway</Link>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <Link href="/assessment-trials" className="hover:text-white transition">Assessment & Trials</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/news" className="hover:text-white transition">News & Blog</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
                            <span className="text-slate-600">|</span>
                            <Link href="/contact" className="hover:text-white transition">Contact</Link>
                        </div>
                    </div>

                    {/* 3. Right: Contact Info & Socials (col 9-12) */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-end gap-6 border-t md:border-t-0 pt-6 md:pt-0 border-slate-800">
                        {/* Address & Email */}
                        <div className="space-y-2.5 text-xs text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <Icon icon="solar:map-point-bold" className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-white text-xs leading-tight">Ron Dine Memorial Reserve</p>
                                    <p className="text-[11px] text-slate-400 mt-0.5">McCrea Drive, Camden South NSW 2570</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <Icon icon="solar:letter-bold" className="w-4 h-4 text-[#f97316] shrink-0" />
                                <a
                                    href="mailto:admin@camdentigers.com.au"
                                    className="text-xs font-semibold text-slate-300 hover:text-[#f97316] transition"
                                >
                                    admin@camdentigers.com.au
                                </a>
                            </div>
                        </div>

                        {/* Social Icons (White round circles) */}
                        <div className="flex items-center gap-2 shrink-0">
                            {[
                                { icon: "ri:facebook-fill", href: "https://facebook.com", label: "Facebook" },
                                { icon: "ri:instagram-line", href: "https://instagram.com", label: "Instagram" },
                                { icon: "ri:youtube-fill", href: "https://youtube.com", label: "YouTube" },
                                { icon: "ri:twitter-x-fill", href: "https://x.com", label: "X" },
                            ].map((s, idx) => (
                                <a
                                    key={idx}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className="w-8 h-8 rounded-full bg-white text-[#07111e] hover:bg-[#f97316] hover:text-white transition flex items-center justify-center shadow-xs"
                                >
                                    <Icon icon={s.icon} className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Sub-Footer Bar */}
            <div className="border-t border-slate-800/80 bg-[#050c15]">
                <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-medium">
                    <p>© {currentYear} Camden Tigers Football Club. All rights reserved.</p>
                    <p className="tracking-wide text-slate-400">
                        Community • Inclusion • Development • Integrity
                    </p>
                </div>
            </div>
        </footer>
    );
}
