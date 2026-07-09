"use client";

import React, { useState } from "react";
import Popup from "../Popup";
import { EditIcon } from "./Icons";
import ProfileCard from "./ProfileCard";

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
    <section className="flex-1 min-w-0 flex flex-col gap-4">
      <h1 className="block lg:hidden text-2xl font-bold text-text-dark font-title mb-1 mt-2.5">Profile Details</h1>

      {/* Profile card with circle progress */}
      <ProfileCard 
        name={profile.fullName}
        email={profile.secondaryEmail}
        initial={profile.fullName.charAt(0).toUpperCase()}
        completion={65}
      />

      {/* Card 1: General Details */}
      <div className="w-full py-6 px-4 rounded-[8px] border border-[#CFD8DE] bg-white">
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
            <span className="text-[13px] font-medium text-text-light">Parent&apos; Phone</span>
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
      <div className="w-full py-6 px-4 rounded-[8px] border border-[#CFD8DE] bg-white">
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
      <div className="w-full py-6 px-4 rounded-[8px] border border-[#CFD8DE] bg-white">
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
