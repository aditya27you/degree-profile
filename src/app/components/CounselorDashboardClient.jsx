"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BookSessionModal from "./BookSessionModal";
import SuccessPopup from "./SuccessPopup";
import { StarIcon, VerifiedIcon, CalendarIcon } from "./Icons";


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
      <section className="flex-1 flex flex-col gap-6 overflow-hidden">
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
              className="bg-[#FFF] border border-[#CFD8DE] rounded-[8px] p-3 w-[260px] sm:w-[189.8px] lg:w-full h-fit hover:border-slate-400 transition-all flex flex-col items-center gap-3 flex-shrink-0 snap-center"
            >
              {/* Circular Profile Photo Centered */}
              <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-inner bg-slate-100 relative">
                <img 
                  src={counselor.imageUrl} 
                  alt={counselor.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Verified Check */}
              <div className="flex items-center justify-center gap-1.5 text-center">
                <span className="text-sm font-bold text-text-dark font-title truncate max-w-[130px]">
                  {counselor.name}
                </span>
                <VerifiedIcon />
              </div>

              {/* Subtext: Languages */}
              <p className="text-xs text-text-light text-center leading-snug">
                Speaks {counselor.languages}
              </p>

              {/* Stats Row */}
              <div className="flex items-center w-full border-t border-slate-100 pt-2.5 text-center">
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-[11px] font-bold text-text-dark">{counselor.experienceText}</span>
                  <span className="text-[10px] text-text-light">Experience</span>
                </div>
                <div className="w-px h-6 bg-slate-200" />
                <div className="flex-1 flex flex-col items-center">
                  <span className="text-[11px] font-bold text-text-dark flex items-center gap-0.5 justify-center">
                    <StarIcon />
                    <span>{counselor.ratingText}</span>
                  </span>
                  <span className="text-[10px] text-text-light">Ratings</span>
                </div>
              </div>

              {/* Book Free Session Button */}
              <button 
                onClick={() => {
                  setSelectedCounselor(counselor);
                  setIsModalOpen(true);
                }}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs py-2.5 px-2 rounded-lg transition-colors mt-auto flex items-center justify-center gap-1"
              >
                <CalendarIcon />
                <span>Book a Free Session</span>
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
          setSuccessDetails({
            title: "Session booked Successfully",
            description: `Your session with ${counselorName} has been booked for ${dateLabel} at ${timeSlot}.`
          });
          setIsSuccessOpen(true);
        }}
      />

      <SuccessPopup 
        isOpen={isSuccessOpen}
        onClose={() => {
          setIsSuccessOpen(false);
          router.push("/session-booked");
        }}
        title={successDetails.title}
        description={successDetails.description}
      />
    </>
  );
}
