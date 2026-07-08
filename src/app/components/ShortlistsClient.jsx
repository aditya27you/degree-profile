"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { PinIcon } from "./Icons";
import { LOGO_COMPONENTS } from "./CollegeLogos";
import CourseDropdown from "./CourseDropdown";

const DEFAULT_RECOMMENDATIONS = [
  {
    id: "college-2",
    name: "Amity University Online",
    nirfRank: "#4 NIRF Rank",
    location: "Noida, Uttar Prade...",
    logoKey: "Amity",
  },
  {
    id: "college-3",
    name: "GLA University Online",
    nirfRank: "#13 NIRF Rank",
    location: "Mathura, Uttar Pra...",
    logoKey: "Gla",
  },
  {
    id: "college-5",
    name: "Sharda University Online",
    nirfRank: "#21 NIRF Rank",
    location: "Greater Noida, Utt...",
    logoKey: "Sharda",
  },
];

const DEFAULT_SHORTLISTED = [
  {
    id: "college-1",
    name: "Alagappa University",
    nirfRank: "#134 NIRF Rank",
    location: "Hyderabad",
    logoKey: "Alagappa",
    selectedCourse: "Online BBA",
  },
  {
    id: "college-4",
    name: "LPU Online",
    nirfRank: "#1 NIRF Rank",
    location: "Phagwada, Punjab",
    logoKey: "Lpu",
    selectedCourse: "Online MBA",
  },
];

// Filled Bookmark SVG Component
const BookmarkIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0b3a60" stroke="#0b3a60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

export default function ShortlistsClient() {
  const [shortlisted, setShortlisted] = useState([]);
  const [toastMessage, setToastMessage] = useState("");

  // Initialize data from localStorage on mount
  useEffect(() => {
    const recs = localStorage.getItem("degreefyd_recommendations");
    const shorts = localStorage.getItem("degreefyd_shortlisted");

    if (shorts) {
      setShortlisted(JSON.parse(shorts));
    } else {
      localStorage.setItem("degreefyd_shortlisted", JSON.stringify(DEFAULT_SHORTLISTED));
      setShortlisted(DEFAULT_SHORTLISTED);
    }

    if (!recs) {
      localStorage.setItem("degreefyd_recommendations", JSON.stringify(DEFAULT_RECOMMENDATIONS));
    }
  }, []);

  const handleUpdateCourse = (college, degree) => {
    const updatedShorts = shortlisted.map((s) => 
      s.id === college.id ? { ...s, selectedCourse: degree } : s
    );
    setShortlisted(updatedShorts);
    localStorage.setItem("degreefyd_shortlisted", JSON.stringify(updatedShorts));

    setToastMessage(`Updated course for "${college.name}" to ${degree}!`);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleRemoveFromShortlist = (college) => {
    // 1. Remove from shortlisted list
    const updatedShorts = shortlisted.filter((s) => s.id !== college.id);
    setShortlisted(updatedShorts);
    localStorage.setItem("degreefyd_shortlisted", JSON.stringify(updatedShorts));

    // 2. Add back to recommendations list
    const recs = localStorage.getItem("degreefyd_recommendations");
    const currentRecs = recs ? JSON.parse(recs) : [];
    
    // Check if college already exists in recs (to avoid duplicates)
    const exists = currentRecs.find((r) => r.id === college.id);
    let updatedRecs;
    if (exists) {
      updatedRecs = currentRecs;
    } else {
      // Remove selectedCourse when putting it back in Recommendations
      const { selectedCourse, ...cleanCollege } = college;
      updatedRecs = [...currentRecs, cleanCollege];
    }
    localStorage.setItem("degreefyd_recommendations", JSON.stringify(updatedRecs));

    setToastMessage(`"${college.name}" removed from shortlist and returned to Recommendations.`);
    setTimeout(() => setToastMessage(""), 4000);
  };

  return (
    <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto w-full bg-bg-page font-body shadow-sm pt-14 lg:pt-[110px] relative">
      <Header />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-10 right-10 bg-primary text-white py-3.5 px-6 rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 font-medium text-[13px] flex items-center gap-3 border border-sky-900">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
          {toastMessage}
        </div>
      )}

      <main className="flex flex-col lg:flex-row flex-1 pt-6 pb-6 px-4 lg:px-[100px] gap-4 w-full">
        <Sidebar />

        {/* Right Content Panel - Shortlisted Colleges */}
        <section className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-text-dark font-title mt-2">Shortlisted colleges</h1>
            <p className="text-[13px] text-text-light mt-1">Manage your shortlisted colleges, edit selected programs, or click bookmark to remove them.</p>
          </div>

          {/* Cards Grid */}
          {shortlisted.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shortlisted.map((college) => {
                const LogoComponent = LOGO_COMPONENTS[college.logoKey];
                return (
                  <div 
                    key={college.id} 
                    className="flex flex-col items-start p-4 bg-[#FFF] border border-[#CFD8DE] rounded-[8px] w-full sm:w-[327px] h-[229px] relative hover:border-slate-400 transition-all shadow-sm"
                  >
                    {/* Bookmark/Save Active Icon in Top Right */}
                    <button 
                      onClick={() => handleRemoveFromShortlist(college)}
                      className="absolute top-4 right-4 text-primary hover:scale-110 transition-transform cursor-pointer" 
                      aria-label="Remove from shortlist"
                    >
                      <BookmarkIconFilled />
                    </button>

                    {/* Top Row: Logo & Rank Badge / Location with 12px gap */}
                    <div className="flex items-center gap-3 w-full pr-6">
                      <div className="w-14 h-14 flex-shrink-0">
                        {LogoComponent && <LogoComponent />}
                      </div>
                      <div className="flex flex-col items-start gap-1">
                        {/* Rank Badge */}
                        <span className="bg-[#e6fcf5] text-green-600 text-[11px] font-bold py-0.5 px-2.5 rounded-full border border-green-100">
                          {college.nirfRank}
                        </span>
                        {/* Location */}
                        <div className="flex items-center gap-1 text-[14px] text-[#717171] font-normal leading-normal overflow-hidden text-ellipsis whitespace-nowrap">
                          <span className="text-slate-400"><PinIcon /></span>
                          <span className="truncate max-w-[150px]">{college.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* College Name - 12px gap from Row 1 */}
                    <h3 className="text-[15px] font-bold text-text-dark font-title leading-snug line-clamp-1 mt-3">
                      {college.name}
                    </h3>

                    {/* Searchable nested course dropdown - 12px gap from Name */}
                    <div className="w-full mt-3">
                      <CourseDropdown 
                        collegeId={college.id}
                        value={college.selectedCourse || ""}
                        onSelect={(degree) => handleUpdateCourse(college, degree)}
                      />
                    </div>

                    <button className="w-full mt-3 min-h-8 px-3 py-1.5 flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-normal font-['Poppins'] leading-normal rounded-lg transition-colors text-center shadow-sm">
                      Continue application
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white border border-[#CFD8DE] rounded-[8px] p-6 text-center">
              <span className="text-5xl mb-4">⭐</span>
              <h3 className="text-base font-bold text-text-dark font-title">No shortlisted colleges</h3>
              <p className="text-[13px] text-text-light mt-1 max-w-sm">Search and select a course on the Recommendations page to automatically shortlist universities!</p>
            </div>
          )}

          {/* Explore all colleges button */}
          <div className="flex justify-center pt-6">
            <button className="border border-primary/5 bg-primary/5 text-primary hover:bg-primary/15 hover:border-primary/15 font-semibold py-3 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Explore all colleges
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
