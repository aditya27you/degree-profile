"use client";

import React, { useEffect } from "react";

export default function SuccessPopup({isOpen, 
  onClose, 
  title = "Session booked Successfully", 
  description = "Your session has been confirmed. A counselor will connect with you shortly."}) {
  
  // Auto-close after 3 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl animate-scale-in overflow-hidden inline-flex pt-[75.5px] pr-[41px] pb-[74.5px] pl-[44px] justify-center items-center flex-col">
        {/* Green Checkmark Icon */}
        <div className="w-16 h-16 bg-[#e6fcf5] rounded-full flex items-center justify-center mb-5 border border-green-100 shadow-inner">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Success Heading */}
        <h3 className="text-lg lg:text-xl font-bold text-green-600 mb-3 text-center">
          {title}
        </h3>

        {/* Description Text */}
        <p className="text-xs lg:text-sm text-text-light text-center max-w-[260px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
