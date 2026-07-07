"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutModal from "./LogoutModal";
import { 
  PhoneIcon, 
  MailIcon, 
  InstagramIcon, 
  FacebookIcon, 
  YoutubeIcon, 
  LinkedinIcon, 
  ChevronDownIcon, 
  SearchIcon, 
  UserIcon, 
  HamburgerIcon, 
  ChevronLeftIcon,
  ProfileDetailsIcon,
  RecommendationsIcon,
  ShortlistsIcon,
  CounselorIcon,
  DocumentsIcon,
  ReferEarnIcon,
  LogoutIcon
} from "./Icons";

// Local ChevronRightIcon SVG Component
const ChevronRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BrandLogo = () => (
  <div className="flex relative items-center justify-center">
    <Image 
      src="/logo.png" 
      alt="DegreeFYD Logo" 
      width={140} 
      height={35} 
      priority
      style={{ objectFit: "contain", width: "140px", height: "auto" }}
    />
  </div>
);


export default function Header({ profileName = "Kartikay Sharma" }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const firstName = profileName.split(" ")[0];

  const handleLogoutConfirm = () => {
    alert("Logged out successfully!");
    setIsLogoutOpen(false);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Top thin bar */}
      <div className="hidden lg:flex justify-between items-center py-2 px-8 xl:px-12 bg-white border-b border-border text-[13px] text-text-body">
        <div className="flex gap-5">
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><PhoneIcon /></span>
            <span>9306508369</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><MailIcon /></span>
            <span>example@degreefyd.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Connect with us on your Favorite Socials -</span>
          <div className="flex gap-2 items-center">
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><InstagramIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><FacebookIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><YoutubeIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="hidden lg:grid grid-cols-3 items-center py-3.5 px-8 xl:px-12 bg-white static border-b border-border shadow-[0_2px_10px_rgba(0,0,0,0.01)] h-[74px]">
        <div className="flex items-center justify-start">
          <BrandLogo />
        </div>
        <nav className="flex justify-center gap-8">
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Universities</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Courses</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>More</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Regular</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
        </nav>
        <div className="flex items-center justify-end gap-3">
          <button className="flex items-center gap-2 border border-[#c3d4e9] py-2 px-4 rounded-lg text-primary font-medium text-sm transition-all hover:bg-primary-light hover:border-primary">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-2 bg-[#f3f6f9] border border-border py-2 px-4 rounded-lg text-text-dark font-medium text-sm transition-all hover:bg-[#e2e8f0]">
            <UserIcon />
            <span>{firstName}</span>
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center p-3.5 bg-white border-b border-border static">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg cursor-pointer"
        >
          <HamburgerIcon />
        </button>
        <div className="flex items-center gap-1.5 font-bold text-xl text-text-dark font-title">
          <BrandLogo />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
            <SearchIcon />
          </button>
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg cursor-pointer"
          >
            <UserIcon />
          </button>
        </div>
      </div>
      <div className="flex lg:hidden items-center bg-primary py-3 px-5 text-white font-medium text-sm gap-2 cursor-pointer">
        <ChevronLeftIcon />
        <span>Back</span>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 flex lg:hidden">
          {/* Drawer Slide-out container */}
          <div className="w-[280px] sm:w-[320px] bg-white h-full shadow-2xl flex flex-col justify-between py-6 px-4 animate-in slide-in-from-left duration-200">
            <div className="flex flex-col gap-6">
              
              {/* Drawer Header Brand Logo and Close Button */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <BrandLogo />
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-slate-400 hover:text-text-dark transition-colors cursor-pointer flex items-center justify-center"
                >
                  <img src="/close_icon.png" alt="Close Menu" className="w-3.5 h-3.5 object-contain" />
                </button>
              </div>

              {/* User Profile avatar circle progress */}
              <div className="flex items-center gap-4 py-2">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[9px] font-bold py-0.5 px-1.5 rounded-full z-10 shadow-sm">65%</div>
                  <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)", position: "absolute", top: 0, left: 0 }}>
                    <circle cx="50" cy="50" r="44" stroke="#e8eef6" strokeWidth="4.5" fill="transparent" />
                    <circle cx="50" cy="50" r="44" stroke="#10b981" strokeWidth="4.5" fill="transparent" strokeDasharray="276.4" strokeDashoffset="96.7" strokeLinecap="round" />
                  </svg>
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-transparent bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl font-title">
                    K
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-dark leading-snug">{profileName}</span>
                  <span className="text-xs text-text-light truncate max-w-[150px]">example@gmail.com</span>
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full" />

              {/* Navigation Links list */}
              <nav className="flex flex-col gap-1.5">
                <Link 
                  href="/" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ProfileDetailsIcon />
                    <span>Profile details</span>
                  </div>
                  <ChevronRightIcon />
                </Link>

                <Link 
                  href="/recommendations" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/recommendations" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RecommendationsIcon />
                    <span>Recommendations</span>
                  </div>
                  <ChevronRightIcon />
                </Link>

                <Link 
                  href="/shortlists" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/shortlists" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ShortlistsIcon />
                    <span>Shortlists</span>
                  </div>
                  <ChevronRightIcon />
                </Link>

                <Link 
                  href="/talk-to-counselor" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/talk-to-counselor" || pathname === "/session-booked" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CounselorIcon />
                    <span>Talk to counselor</span>
                  </div>
                  <ChevronRightIcon />
                </Link>

                <Link 
                  href="/my-documents" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/my-documents" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <DocumentsIcon />
                    <span>My documents</span>
                  </div>
                  <ChevronRightIcon />
                </Link>

                <Link 
                  href="/refer-earn" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-[14px] ${
                    pathname === "/refer-earn" ? "text-primary bg-primary-light" : "text-text-body hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ReferEarnIcon />
                    <span>Refer & earn</span>
                  </div>
                  <ChevronRightIcon />
                </Link>
              </nav>

            </div>

            {/* Mobile Log out action at the bottom */}
            <div className="flex flex-col gap-4">
              <div className="h-px bg-slate-100 w-full" />
              <div 
                onClick={() => setIsLogoutOpen(true)}
                className="flex items-center gap-3 py-3 px-3 rounded-lg text-red-500 font-bold text-[14px] cursor-pointer hover:bg-red-50 transition-colors"
              >
                <LogoutIcon />
                <span>Log out</span>
              </div>
            </div>

          </div>
          
          {/* Drawer backdrop remaining space click to close */}
          <div className="flex-1" onClick={() => setIsDrawerOpen(false)} />
        </div>
      )}

      {/* Global Log out Modal (handles trigger from mobile header drawer as well!) */}
      <LogoutModal 
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}
