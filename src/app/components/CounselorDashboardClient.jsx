"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import BookSessionModal from "./BookSessionModal";
import SuccessPopup from "./SuccessPopup";
import { CalendarIcon } from "./Icons";

function VerifiedCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none">
      <path d="M7.41667 0.75L2.83333 5.33333L0.75 3.25" stroke="#007B2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
      <path d="M6.66667 0L8.72667 4.17333L13.3333 4.84667L10 8.09333L10.7867 12.68L6.66667 10.5133L2.54667 12.68L3.33333 8.09333L0 4.84667L4.60667 4.17333L6.66667 0Z" fill="#EAB308"/>
    </svg>
  );
}


const COUNSELORS_DATA = [
  { 
    id: "c-1", 
    name: "Harsh Pandey", 
    languages: "Hindi Only", 
    experienceText: "0 years", 
    ratingText: "0.5", 
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-2", 
    name: "Varun Sharma", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-3", 
    name: "Sumit Saroha", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-4", 
    name: "Rupal Singh", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-5", 
    name: "Prashant Kishor", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-6", 
    name: "Prashant Kishor", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-7", 
    name: "Vikash Dagar", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-8", 
    name: "Vikash Dagar", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-9", 
    name: "Vikash Dagar", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
  },
  { 
    id: "c-10", 
    name: "Vikash Dagar", 
    languages: "Hindi & english", 
    experienceText: "5+ years", 
    ratingText: "4.5", 
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
  },
];

export default function CounselorDashboardClient() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [successDetails, setSuccessDetails] = useState({ title: "", description: "" });
  const [activeDot, setActiveDot] = useState(0);

  const successTimerRef = useRef(null);
  const navTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
    };
  }, []);

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = 280; // card w-[260px] + gap [20px]
    const index = Math.round(scrollLeft / cardWidth);
    if (index >= 0 && index < COUNSELORS_DATA.length) {
      setActiveDot(index);
    }
  };

  return (
    <>
      {/* Right Content Panel - Book Free Session */}
      <section className="flex-1 min-w-0 flex flex-col gap-6 overflow-hidden">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-text-dark font-title mt-2">
            Book free session with our experts
          </h1>
          <p className="text-[13px] text-text-light leading-relaxed max-w-xl">
            Schedule an online, live video counseling session with our expert career advisors to find your ideal university stream.
          </p>
        </div>

        {/* Cards Container: horizontal scroll on mobile, grid on desktop */}
        <div 
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 xl:grid-cols-5 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-5 w-full no-scrollbar pb-4 scroll-smooth"
        >
          {COUNSELORS_DATA.map((counselor) => (
            <div 
              key={counselor.id}
              className="w-[189.8px] lg:w-full p-3 flex flex-col items-center gap-3 border border-[#CFD8DE] rounded-lg bg-white flex-shrink-0 lg:flex-shrink snap-center"
            >
              <img src={counselor.imageUrl} alt={counselor.name} className="w-16 h-16 rounded-full object-cover" />
              
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm text-text-dark">{counselor.name}</span>
                <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <VerifiedCheckIcon />
                </span>
              </div>
              
              <span className="text-xs text-gray-500 text-center">Speaks {counselor.languages}</span>
              
              <div className="flex justify-between w-full text-xs">
                <div className="flex flex-col items-start">
                  <span className="font-medium text-text-dark">{counselor.experienceText}</span>
                  <span className="text-gray-500">Experience</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="font-medium text-text-dark">{counselor.ratingText}</span>
                  </div>
                  <span className="text-gray-500">Ratings</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setSelectedCounselor(counselor);
                  setIsModalOpen(true);
                }}
                className="w-full bg-sky-950 hover:bg-sky-900 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center text-center"
              >
                Book Free Session
              </button>
            </div>
          ))}
        </div>

        {/* Mobile pagination dots */}
        <div className="flex lg:hidden justify-center gap-1.5 mt-2 w-full">
          {COUNSELORS_DATA.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeDot === i ? "bg-[#0b3a60]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </section>

      <BookSessionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        counselor={selectedCounselor}
        onBookingSuccess={(counselorName, dateLabel, timeSlot) => {
          setIsModalOpen(false);
          setSuccessDetails({
            title: "Session booked Successfully",
            description: `Your session with ${counselorName} has been booked for ${dateLabel} at ${timeSlot}.`
          });
          setIsSuccessOpen(true);

          // Clear any existing timers
          if (successTimerRef.current) clearTimeout(successTimerRef.current);
          if (navTimerRef.current) clearTimeout(navTimerRef.current);

          // Hide success popup after 1 second
          successTimerRef.current = setTimeout(() => {
            setIsSuccessOpen(false);
          }, 1000);

          // Navigate to session-booked page after 3 seconds (1s popup + 2s delay)
          navTimerRef.current = setTimeout(() => {
            router.push("/dashboard/session-booked");
          }, 3000);
        }}
      />

      <SuccessPopup 
        isOpen={isSuccessOpen}
        onClose={() => {
          if (successTimerRef.current) clearTimeout(successTimerRef.current);
          if (navTimerRef.current) clearTimeout(navTimerRef.current);
          setIsSuccessOpen(false);
          router.push("/session-booked");
        }}
        title={successDetails.title}
        description={successDetails.description}
      />
    </>
  );
}
