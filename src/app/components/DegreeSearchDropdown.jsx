"use client";

import React, { useState, useEffect, useRef } from "react";

const DEGREES = [
  "Online MBA",
  "Online BBA",
  "Online MCA",
  "Online BCA",
  "Online B.Com",
  "Online M.Com",
  "Online BA",
  "Online MA",
  "Online Executive MBA"
];

const SmallChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function DegreeSearchDropdown({ value = "", onSelect, placeholder = "Search degree" }) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Keep state in sync with external value changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Close dropdown when clicking outside the component
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter degrees based on search text (case-insensitive)
  const filteredDegrees = DEGREES.filter((degree) =>
    degree.toLowerCase().includes(query.toLowerCase())
  );

  const handleOptionClick = (degree) => {
    setQuery(degree);
    setIsOpen(false);
    if (onSelect) {
      onSelect(degree);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Input Container */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full h-8 border border-[#CFD8DE] rounded-lg py-2 pl-3 pr-8 bg-white text-[13px] text-text-dark font-medium placeholder-slate-400 outline-none focus:border-primary transition-colors cursor-pointer"
        />
        {/* Chevron icon indicator at the right of input */}
        <div className="absolute right-3 pointer-events-none">
          <SmallChevronDown />
        </div>
      </div>

      {/* Floating Dropdown List */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-40 overflow-y-auto bg-white border border-[#CFD8DE] rounded-lg shadow-lg z-50 no-scrollbar">
          {filteredDegrees.length > 0 ? (
            filteredDegrees.map((degree, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(degree)}
                className="flex items-center justify-between py-2 px-3 hover:bg-slate-50 cursor-pointer text-[13px] text-text-dark font-medium border-b border-slate-50 last:border-b-0"
              >
                <span>{degree}</span>
                <SmallChevronDown />
              </div>
            ))
          ) : (
            <div className="py-2.5 px-3 text-[13px] text-text-light italic text-center">
              No matching degrees
            </div>
          )}
        </div>
      )}
    </div>
  );
}
