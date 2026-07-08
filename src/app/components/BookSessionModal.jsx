"use client";

import React, { useState } from "react";

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className="flex-shrink-0">
      <path d="M6.66667 0L8.72667 4.17333L13.3333 4.84667L10 8.09333L10.7867 12.68L6.66667 10.5133L2.54667 12.68L3.33333 8.09333L0 4.84667L4.60667 4.17333L6.66667 0Z" fill="#EAB308"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const DATE_TABS = [
  { id: "today", label: "Today", slotsText: "3 Slots Available" },
  { id: "tomorrow", label: "Tomorrow", slotsText: "19 Slots Available" },
  { id: "mar-28", label: "28 March", slotsText: "19 Slots Available" },
  { id: "mar-29", label: "29 March", slotsText: "19 Slots Available" },
  { id: "mar-30", label: "30 March", slotsText: "19 Slots Available" },
];

const TIME_SLOTS = [
  "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM",
  "1:30 PM - 2:00 PM", "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM", "3:00 PM - 3:30 PM",
  "3:30 PM - 4:00 PM", "4:30 PM - 5:00 PM", "5:00 PM - 5:30 PM", "5:30 PM - 6:00 PM",
  "6:00 PM - 6:30 PM", "6:30 PM - 7:00 PM", "7:00 PM - 7:30 PM"
];

export default function BookSessionModal({ isOpen, onClose, counselor, onBookingSuccess }) {
  const [selectedDateId, setSelectedDateId] = useState("today");
  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen || !counselor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* 1. Modal Container */}
      <div className="relative inline-flex flex-col items-start gap-4 px-6 py-5 bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-scale-in">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center w-full border-b pb-3">
          <h2 className="text-xl font-bold text-text-dark">
            Book a free session with {counselor.name} :
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors flex items-center justify-center"
            aria-label="Close modal"
          >
            <XIcon />
          </button>
        </div>

        {/* Modal Body columns */}
        <div className="flex flex-col md:flex-row gap-5 w-full">
          
          {/* 2. Left column — counselor info card */}
          <div className="flex flex-col justify-center items-center gap-5 p-3 self-stretch rounded-lg bg-[#EBF3F7] w-full md:w-[200px] flex-shrink-0">
            <img 
              src={counselor.imageUrl} 
              alt={counselor.name} 
              className="w-20 h-20 rounded-full object-cover border border-white shadow-sm" 
            />
            <div className="text-center">
              <p className="font-bold text-text-dark text-base">{counselor.name}</p>
              <p className="text-gray-500 text-xs md:text-sm mt-0.5">{counselor.experienceText} Experience</p>
            </div>
            
            {/* 5-star rating row */}
            <div className="flex items-center gap-0.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            {/* Side-by-side buttons */}
            <div className="flex gap-2 w-full">
              <a 
                href="https://wa.me/919306508369"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex justify-center items-center gap-1 border border-green-600 text-green-700 bg-white hover:bg-green-50 rounded-full text-xs font-semibold py-1.5 transition-colors text-center"
              >
                Whatsapp
              </a>
              <a 
                href="tel:9306508369"
                className="flex-1 flex justify-center items-center gap-1 border border-sky-600 text-sky-700 bg-white hover:bg-sky-50 rounded-full text-xs font-semibold py-1.5 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right column: date tabs + time slots */}
          <div className="flex-1 flex flex-col gap-4">
            
            {/* 3. Date tabs (per-tab sizing) */}
            <div className="flex gap-2 overflow-x-auto border-b pb-2 no-scrollbar">
              {DATE_TABS.map((tab) => {
                const isActive = tab.id === selectedDateId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSelectedDateId(tab.id);
                      setSelectedSlot(null); // Reset selected slot on date switch
                    }}
                    className={`flex w-[155px] justify-center items-center gap-2.5 px-3 py-2 flex-col border-b-2 transition-all flex-shrink-0 cursor-pointer ${
                      isActive 
                        ? "border-sky-600 text-text-dark font-bold" 
                        : "border-transparent text-gray-500 hover:text-sky-600"
                    }`}
                  >
                    <span className={isActive ? "font-bold text-sm" : "text-sm text-gray-500"}>
                      {tab.label}
                    </span>
                    <span className="text-green-600 text-xs font-medium">
                      {tab.slotsText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Time slot section */}
            <div>
              <p className="font-semibold text-text-dark mt-2 mb-3">Choose a Time slot :</p>
              
              {/* 4. Time slot buttons grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {TIME_SLOTS.map((slot) => {
                  const isSelected = slot === selectedSlot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded border border-[#199FD9] text-sm py-2 transition-all text-center ${
                        isSelected 
                          ? "bg-sky-50 font-semibold text-[#199FD9] border-2 border-[#199FD9]" 
                          : "bg-white text-[#199FD9] hover:bg-sky-50/50"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Booking submission panel */}
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
