"use client";

import React from "react";


export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex flex-col justify-center items-center">
      {/* Modal Box */}
      <div className="bg-white rounded-[12px] shadow-2xl p-6 w-[90%] sm:w-[448px] flex flex-col gap-4 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Row */}
        <div className="flex items-center justify-between w-full border-b border-slate-100 pb-3">
          <h3 className="text-[17px] font-bold text-text-dark font-title">
            Log out?
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-text-dark transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Close modal"
          >
            <img src="/close_icon.png" alt="Close" className="w-3.5 h-3.5 object-contain" />
          </button>
        </div>

        {/* Body Description */}
        <p className="text-[14px] text-text-light font-medium leading-relaxed mb-2">
          Are you sure you want to log out of your account?
        </p>

        {/* Footer Actions (Right aligned) */}
        <div className="flex items-center justify-end gap-3 w-full">
          <button 
            onClick={onClose}
            className="border border-[#0b3a60] text-[#0b3a60] hover:bg-slate-50 font-bold py-2 px-5 rounded-[8px] text-xs sm:text-sm transition-colors focus:outline-none"
          >
            Cancel
          </button>
          
          <button 
            onClick={onConfirm}
            className="bg-[#C2392A] hover:bg-[#A82B1E] text-white font-bold py-2 px-5 rounded-[8px] text-xs sm:text-sm transition-colors focus:outline-none"
          >
            Log out
          </button>
        </div>

      </div>
    </div>
  );
}
