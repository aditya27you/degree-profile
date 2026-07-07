"use client";

import React, { useState } from "react";
import { StarIcon, PhoneIcon } from "./Icons";

// Custom WhatsApp SVG Icon
const WhatsappIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="inline mr-1">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.003 0c3.21.002 6.228 1.248 8.5 3.514 2.272 2.265 3.522 5.277 3.524 8.496-.005 6.631-5.38 12.002-12.007 12.002-2.012-.002-3.996-.51-5.761-1.478L0 24zm6.59-4.846c1.78.969 3.548 1.478 5.417 1.48 5.515 0 10.002-4.484 10.006-9.998.002-2.673-1.04-5.184-2.936-7.082C17.24 1.656 14.733 1.05 12.003 1.05c-5.524 0-10.013 4.487-10.017 9.998-.001 1.956.513 3.865 1.487 5.568l-.973 3.55 3.645-.956zM17.91 14.77c-.32-.16-1.89-.93-2.185-1.04-.3-.11-.515-.16-.73.16-.215.32-.83 1.04-1.02 1.255-.185.215-.37.24-.69.08-2.675-1.34-4.415-4.75-4.646-5.155-.23-.405-.025-.625.18-.825.185-.18.405-.48.61-.72.2-.24.27-.4.405-.665.135-.27.065-.5-.035-.7-.1-.2-.83-2-.135-2.22-.3-.105-.66-.05-.88.165-.22.215-.86.84-.86 2.05 0 1.21.88 2.38.995 2.545.12.165 1.73 2.64 4.19 3.7 2.46 1.06 2.46.71 2.9.67.44-.04 1.89-.77 2.155-1.485.26-.715.26-1.33.185-1.46-.075-.13-.275-.21-.595-.37z"/>
  </svg>
);




const DATE_TABS = [
  { id: "today", label: "Today", slotsText: "3 Slots Available" },
  { id: "tomorrow", label: "Tomorrow", slotsText: "19 Slots Available" },
  { id: "mar-28", label: "28 March", slotsText: "19 Slots Available" },
  { id: "mar-29", label: "29 March", slotsText: "19 Slots Available" },
  { id: "mar-30", label: "30 March", slotsText: "19 Slots Available" },
];

const TIME_SLOTS = [
  "9:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "12:30 PM - 1:00 PM",
  "1:00 PM - 1:30 PM",
  "1:30 PM - 2:00 PM",
  "2:00 PM - 2:30 PM",
  "2:30 PM - 3:00 PM",
  "3:00 PM - 3:30 PM",
  "3:30 PM - 4:00 PM",
  "4:30 PM - 5:00 PM",
  "5:00 PM - 5:30 PM",
  "5:30 PM - 6:00 PM",
  "6:00 PM - 6:30 PM",
  "6:30 PM - 7:00 PM",
  "7:00 PM - 7:30 PM"
];

export default function BookSessionModal({ isOpen, onClose, counselor, onBookingSuccess }) {
  const [selectedDateId, setSelectedDateId] = useState("today");
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen || !counselor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl p-6 lg:p-8 animate-scale-in max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <h2 className="text-lg lg:text-xl font-bold text-text-dark">
            Book a free session with {counselor.name} :
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors border border-slate-200 rounded-md p-1 hover:bg-slate-50 flex items-center justify-center"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Modal Body: Split into Two Columns */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column (Fixed Width & Rounded) */}
          <div className="w-full md:w-[260px] bg-[#f0f4f8] rounded-xl p-4 md:p-6 flex flex-col gap-4 flex-shrink-0">
            
            {/* Counselor Detail Card (Row on mobile, Column on desktop) */}
            <div className="flex flex-row md:flex-col items-center md:items-center gap-4 w-full">
              {/* Circular Photo */}
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border border-white flex items-center justify-center shadow-md bg-slate-100 relative flex-shrink-0">
                <img 
                  src={counselor.imageUrl} 
                  alt={counselor.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col items-start md:items-center gap-0.5 md:gap-1.5 flex-1">
                {/* Name */}
                <h3 className="text-[15px] md:text-[17px] font-bold text-text-dark font-title text-left md:text-center leading-snug">
                  {counselor.name}
                </h3>

                {/* Experience */}
                <p className="text-xs md:text-sm font-medium text-text-light text-left md:text-center">
                  {counselor.experienceText}+ Experience
                </p>

                {/* Gold Stars Rating Row */}
                <div className="flex items-center justify-start md:justify-center gap-0.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>

            {/* Whatsapp & Call Buttons */}
            <div className="grid grid-cols-2 gap-2.5 w-full mt-2">
              <a 
                href="https://wa.me/919306508369"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border border-[#007B2D] rounded-[8px] py-2 px-3 text-[11px] font-bold text-[#007B2D] bg-white hover:bg-green-50/30 transition-colors"
              >
                <img src="/whatsapp_icon.png" alt="WhatsApp" className="w-3.5 h-3.5 object-contain inline mr-1" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:9306508369"
                className="flex items-center justify-center border border-blue-500 rounded-full py-2 px-3 text-[11px] font-bold text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                <span className="mr-1"><PhoneIcon /></span>
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column (Wider, Takes Remaining Space) */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Horizontal Date Tabs */}
            <div className="flex items-center w-full border-b border-slate-100 relative">
              {/* Left Arrow */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 pr-2 bg-white z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Scrollable container of tabs */}
              <div className="flex items-center w-full overflow-x-auto no-scrollbar px-6 gap-6 md:gap-8">
                {DATE_TABS.map((tab) => {
                  const isActive = tab.id === selectedDateId;
                  return (
                    <button 
                      key={tab.id}
                      onClick={() => {
                        setSelectedDateId(tab.id);
                        setSelectedSlot(null); // Reset selected slot on date switch
                      }}
                      className={`flex flex-col items-center pb-2.5 border-b-2 transition-all flex-shrink-0 cursor-pointer ${
                        isActive 
                          ? "border-primary text-primary font-bold" 
                          : "border-transparent text-text-dark font-medium hover:text-primary"
                      }`}
                    >
                      <span className="text-xs">{tab.label}</span>
                      <span className="text-[10px] text-green-600 mt-0.5">{tab.slotsText}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 pl-2 bg-white z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Time Slots Selection */}
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-text-dark">
                Choose a Time slot :
              </span>
              
              {/* Slots Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = slot === selectedSlot;
                  return (
                    <button 
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`border rounded-lg py-2 px-3 text-[11px] sm:text-xs font-semibold text-center transition-all ${
                        isSelected 
                          ? "border-primary bg-primary text-white shadow-md" 
                          : "border-sky-300 text-primary bg-white hover:bg-sky-50"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Submit Button to finalize session */}
            {selectedSlot && (
              <div className="flex justify-end mt-4">
                <button 
                  onClick={() => {
                    const dateLabel = DATE_TABS.find(t => t.id === selectedDateId)?.label || "Today";
                    onBookingSuccess(counselor.name, dateLabel, selectedSlot);
                    onClose();
                  }}
                  className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-8 rounded-lg shadow-md hover:shadow-lg transition-all text-sm"
                >
                  Confirm Booking
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
