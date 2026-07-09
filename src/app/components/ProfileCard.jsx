"use client";

import React from "react";

export default function ProfileCard({ name, email, initial, completion, avatarUrl }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius; // ~276.46
  // Ensure completion is bound between 0 and 100
  const validCompletion = Math.min(Math.max(Number(completion) || 0, 0), 100);
  const strokeDashoffset = circumference - (validCompletion / 100) * circumference;

  return (
    <div className="flex w-full max-w-[1013px] px-4 py-6 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-300 justify-between items-center">
      {/* Left side: Avatar + Info */}
      <div className="flex items-center gap-4">
        {/* Avatar + Progress Ring wrapper */}
        <div className="relative w-[96px] h-[96px] flex items-center justify-center flex-shrink-0">
          {/* Dynamic SVG Progress Circle */}
          <svg 
            width="96" 
            height="96" 
            viewBox="0 0 100 100" 
            className="absolute top-0 left-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            {/* Gray track ring */}
            <circle cx="50" cy="50" r={radius} stroke="#E8EEF6" strokeWidth="4" fill="transparent" />
            {/* Green filled progress ring */}
            <circle 
              cx="50" 
              cy="50" 
              r={radius} 
              stroke="#15803d" 
              strokeWidth="4" 
              fill="transparent" 
              strokeDasharray={circumference} 
              strokeDashoffset={strokeDashoffset} 
              strokeLinecap="round" 
            />
          </svg>

          {/* Completion percentage badge pill */}
          <div className="absolute top-0 left-0 bg-white border border-[#CFD8DE] text-[#15803d] text-sm font-medium font-['Poppins'] px-1.5 py-0.5 rounded-full z-20 shadow-sm leading-none">
            {validCompletion}%
          </div>

          {/* 80x80px circular avatar profile image / text placeholder wrapper */}
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 z-10">
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt="Profile Avatar" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                <span className="text-white text-3xl font-semibold font-['Inter']">
                  {initial || (name ? name.charAt(0).toUpperCase() : "")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Name + Email vertical stack */}
        <div className="flex flex-col gap-1">
          <h2 className="text-neutral-900 text-base font-normal font-['Poppins']">{name}</h2>
          <p className="text-neutral-500 text-sm font-normal font-['Poppins']">{email}</p>
        </div>
      </div>

      {/* Right side: Complete profile action button */}
      <button className="h-11 min-h-11 px-4 py-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-sky-950 text-sky-950 text-sm font-medium font-['Poppins'] hover:bg-sky-50 transition-colors">
        Complete profile
      </button>
    </div>
  );
}
