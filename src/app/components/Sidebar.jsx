"use client";

import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
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
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const pathname = usePathname();

  const isProfileActive = pathname === "/";
  const isRecommendationsActive = pathname === "/recommendations";
  const isCounselorActive = pathname === "/talk-to-counselor" || pathname === "/session-booked";
  const isShortlistsActive = pathname === "/shortlists";
  const isReferEarnActive = pathname === "/refer-earn";
  const isDocumentsActive = pathname === "/my-documents";

  return (
    <aside className="hidden lg:flex flex-col sticky top-[134px] h-[552px] w-[211px] justify-between items-start bg-white border border-[#CFD8DE] rounded-[8px] py-4 px-0 z-40 overflow-y-auto flex-shrink-0">
      <nav className="flex flex-col gap-1.5 w-full">
        {/* Profile Details link */}
        <Link 
          href="/" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isProfileActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <ProfileDetailsIcon />
          </div>
          <span>Profile details</span>
        </Link>

        {/* Recommendations link */}
        <Link 
          href="/recommendations" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isRecommendationsActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <RecommendationsIcon />
          </div>
          <span>Recommendations</span>
        </Link>

        {/* Shortlists link */}
        <Link 
          href="/shortlists" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isShortlistsActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <ShortlistsIcon />
          </div>
          <span>Shortlists</span>
        </Link>

        {/* Talk to Counselor link */}
        <Link 
          href="/talk-to-counselor" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isCounselorActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <CounselorIcon />
          </div>
          <span>Talk to counselor</span>
        </Link>

        {/* My Documents link */}
        <Link 
          href="/my-documents" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isDocumentsActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <DocumentsIcon />
          </div>
          <span>My documents</span>
        </Link>

        {/* Refer & Earn link */}
        <Link 
          href="/refer-earn" 
          className={`flex items-center gap-2 py-2 pl-[13px] pr-4 w-full border-l-[3px] font-medium text-[14px] cursor-pointer transition-all duration-200 ${
            isReferEarnActive 
              ? "text-primary bg-primary-light border-primary" 
              : "text-text-body border-transparent hover:border-primary hover:text-primary"
          }`}
        >
          <div className="flex items-center justify-center">
            <ReferEarnIcon />
          </div>
          <span>Refer & Earn</span>
        </Link>
      </nav>

      {/* Logout Action wrapper at bottom */}
      <div className="w-full flex flex-col">
        <div className="h-px bg-slate-100 mx-4 mb-3" />
        <div 
          onClick={() => setIsLogoutOpen(true)}
          className="flex items-center gap-3 py-2.5 px-4 mx-4 rounded-lg text-red-500 font-bold text-[14px] cursor-pointer transition-all hover:bg-red-50"
        >
          <div className="flex items-center justify-center text-lg text-red-500">
            <LogoutIcon />
          </div>
          <span>Log out</span>
        </div>
      </div>

      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={() => {
          alert("Logged out successfully!");
          setIsLogoutOpen(false);
        }}
      />
    </aside>
  );
}
