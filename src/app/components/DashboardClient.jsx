"use client";

import React, { useState } from "react";
import Popup from "../Popup";
import { EditIcon } from "./Icons";

export default function DashboardClient() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [profile, setProfile] = useState({
    id: "user-123",
    fullName: "aditya Shah",
    parentPhone: "9306508269",
    secondaryEmail: "adishah@gmail.com",
    currentState: "Darjeeling",
    currentCity: "Gurugram",
    whatsapp: "---",
  });

  return (
    <section className="flex-1 flex flex-col gap-6">
      <h1 className="block lg:hidden text-2xl font-bold text-text-dark font-title mb-1 mt-2.5">Profile Details</h1>

      {/* Profile card with circle progress */}
      <div className="bg-white border border-border rounded-xl p-5 lg:p-6 flex items-center justify-between shadow-premium">
        <div className="flex items-center gap-5">
          <div className="relative w-[72px] h-[72px] lg:w-[84px] lg:h-[84px]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-bold py-0.5 px-1.5 rounded-full z-10 shadow-[0_2px_5px_rgba(16,185,129,0.3)]">65%</div>
            {/* SVG Progress Circle Border */}
            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)", position: "absolute", top: 0, left: 0 }}>
              <circle cx="50" cy="50" r="44" stroke="#e8eef6" strokeWidth="4" fill="transparent" />
              <circle cx="50" cy="50" r="44" stroke="#10b981" strokeWidth="4" fill="transparent" strokeDasharray="276.4" strokeDashoffset="96.7" strokeLinecap="round" />
            </svg>
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-[3px] border-transparent flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-slate-300 text-white font-semibold text-2xl lg:text-[32px] font-title">
                {profile.fullName ? profile.fullName.charAt(0).toUpperCase() : ""}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg lg:text-xl font-bold text-text-dark font-title">{profile.fullName}</h2>
            <p className="text-sm text-text-light">{profile.secondaryEmail}</p>
          </div>
        </div>
        <button className="hidden lg:block border border-primary text-primary font-semibold text-sm py-2.5 px-5 rounded-lg bg-transparent transition-all hover:bg-primary hover:text-white hover:shadow-[0_4px_12px_rgba(11,58,96,0.15)]">
          Complete profile
        </button>
      </div>

      {/* Card 1: General Details */}
      <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-text-dark font-title">General Details</h3>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12"
          >
            <EditIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Full Name</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.fullName}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Parent's Phone</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.parentPhone}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Secondary Email</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.secondaryEmail}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Current State</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.currentState}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Current City</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.currentCity}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">WhatsApp</span>
            <span className="text-sm font-semibold text-text-dark break-words">{profile.whatsapp}</span>
          </div>
        </div>
      </div>

      {/* Card 2: Your Preference Detail */}
      <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-text-dark font-title">Your Preference Detail</h3>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12">
            <EditIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Stream</span>
            <span className="text-sm font-semibold text-text-dark break-words">Management, Agriculture, +2</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Level</span>
            <span className="text-sm font-semibold text-text-dark break-words">Diploma</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Degree</span>
            <span className="text-sm font-semibold text-text-dark break-words">Online B.com</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Specialization</span>
            <span className="text-sm font-semibold text-text-dark break-words">ACCA</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Study Mode</span>
            <span className="text-sm font-semibold text-text-dark break-words">Online</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Preferred Budget</span>
            <span className="text-sm font-semibold text-text-dark break-words">1,50,000</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Preferred State</span>
            <span className="text-sm font-semibold text-text-dark break-words">Select state</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Preferred City</span>
            <span className="text-sm font-semibold text-text-dark break-words">Select city</span>
          </div>
        </div>
      </div>

      {/* Card 3: Educational Detail */}
      <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-text-dark font-title">Educational Detail</h3>
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12">
            <EditIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">10th Board</span>
            <span className="text-sm font-semibold text-text-dark break-words">CBSE</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">10th Passing Year</span>
            <span className="text-sm font-semibold text-text-dark break-words">June 2024</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">10th CGPA/Percentage</span>
            <span className="text-sm font-semibold text-text-dark break-words">92%</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">12th Board</span>
            <span className="text-sm font-semibold text-text-dark break-words">CBSE</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">12th Passing Year</span>
            <span className="text-sm font-semibold text-text-dark break-words">June 2026</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Last CGPA/Percentage</span>
            <span className="text-sm font-semibold text-text-dark break-words">92%</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Academic gap (if any)</span>
            <span className="text-sm font-semibold text-text-dark break-words">No</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Lorem ipsum</span>
            <span className="text-sm font-semibold text-text-dark break-words">Lorem</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[13px] font-medium text-text-light">Lorem ipsum</span>
            <span className="text-sm font-semibold text-text-dark break-words">Lorem</span>
          </div>
        </div>
      </div>

      <Popup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        profile={profile}
        onSubmit={(updatedData) => setProfile(p => ({ ...p, ...updatedData }))}
      />
    </section>
  );
}
