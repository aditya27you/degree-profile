"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ProfileDetailsIcon, 
  RecommendationsIcon, 
  ShortlistsIcon, 
  CounselorIcon, 
  DocumentsIcon, 
  ReferEarnIcon, 
  LogoutIcon 
} from "./Icons";

export default function Sidebar() {
  const pathname = usePathname();

  const isProfileActive = pathname === "/";
  const isRecommendationsActive = pathname === "/recommendations";
  const isCounselorActive = pathname === "/talk-to-counselor" || pathname === "/session-booked";
  const isShortlistsActive = pathname === "/shortlists";
  const isReferEarnActive = pathname === "/refer-earn";
  const isDocumentsActive = pathname === "/my-documents";

  return (
    <aside className="hidden lg:flex flex-col w-[220px] bg-white border border-border rounded-xl p-4 h-fit shadow-premium flex-shrink-0">
      <nav className="flex flex-col gap-2">
        {/* Profile Details link */}
        <Link 
          href="/" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isProfileActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isProfileActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <ProfileDetailsIcon />
          </div>
          <span>Profile details</span>
        </Link>

        {/* Recommendations link */}
        <Link 
          href="/recommendations" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isRecommendationsActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isRecommendationsActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <RecommendationsIcon />
          </div>
          <span>Recommendations</span>
        </Link>

        {/* Shortlists link */}
        <Link 
          href="/shortlists" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isShortlistsActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isShortlistsActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <ShortlistsIcon />
          </div>
          <span>Shortlists</span>
        </Link>

        {/* Talk to Counselor link */}
        <Link 
          href="/talk-to-counselor" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isCounselorActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isCounselorActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <CounselorIcon />
          </div>
          <span>Talk to counselor</span>
        </Link>

        {/* My Documents link */}
        <Link 
          href="/my-documents" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isDocumentsActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isDocumentsActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <DocumentsIcon />
          </div>
          <span>My documents</span>
        </Link>

        {/* Refer & Earn link */}
        <Link 
          href="/refer-earn" 
          className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium text-[15px] cursor-pointer transition-all ${
            isReferEarnActive 
              ? "text-primary bg-primary-light" 
              : "text-text-body hover:bg-slate-50 hover:text-text-dark group"
          }`}
        >
          <div className={`flex items-center justify-center text-lg ${
            isReferEarnActive ? "text-primary" : "text-text-light group-hover:text-text-dark transition-colors"
          }`}>
            <ReferEarnIcon />
          </div>
          <span>Refer & Earn</span>
        </Link>
      </nav>
      <div className="h-px bg-border my-5" />
      <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-red-500 font-medium text-[15px] cursor-pointer transition-all hover:bg-red-50">
        <div className="flex items-center justify-center text-lg text-red-500">
          <LogoutIcon />
        </div>
        <span>Log out</span>
      </div>
    </aside>
  );
}
