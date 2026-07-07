"use client";

import { useEffect, useState } from "react";

// Mock data for State and City options
const STATE_CITIES_MAP = {
  Haryana: ["Jind", "Gurugram", "Faridabad", "Rohtak", "Hisar"],
  Punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Vasant Kunj"],
};



export default function Popup({ isOpen, onClose, profile, onSubmit }) {
  const [form, setForm] = useState({
    fullName: "",
    parentPhone: "",
    secondaryEmail: "",
    currentState: "",
    currentCity: "",
    whatsapp: "",
  });

  // User-provided useEffect 1: Set form values based on profile ID
  useEffect(() => {
    setForm({
      fullName: profile.fullName ?? "",
      parentPhone: profile.parentPhone ?? "",
      secondaryEmail: profile.secondaryEmail ?? "",
      currentState: profile.currentState ?? "",
      currentCity: profile.currentCity ?? "",
      whatsapp: profile.whatsapp ?? "",
    });
  }, [profile.id]); // keyed on id, not the whole object — avoids re-syncing on every render  

  // User-provided useEffect 2: Clear stale city when state changes
  useEffect(() => {
    setForm(f => ({ ...f, currentCity: "" })); // clear stale city when state changes
  }, [form.currentState]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      fullName: form.fullName,
      parentPhone: form.parentPhone,
      secondaryEmail: form.secondaryEmail,
      currentState: form.currentState,
      currentCity: form.currentCity,
      whatsapp: form.whatsapp,
    });
    onClose();
  };

  const availableCities = STATE_CITIES_MAP[form.currentState] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl p-6 lg:p-8 animate-scale-in">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-xl lg:text-2xl font-bold text-text-dark mb-6">
          Update General details :
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-dark">Full name</label>
              <input 
                type="text"
                value={form.fullName}
                onChange={(e) => setForm(f => ({ ...f, fullName: e.target.value }))}
                placeholder="Aditya sh"
                className="border border-[#cbd5e1] rounded-lg py-2.5 px-4 text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Parent's Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-dark">Parent's phone</label>
              <input 
                type="tel"
                value={form.parentPhone}
                onChange={(e) => setForm(f => ({ ...f, parentPhone: e.target.value }))}
                placeholder="1234567890"
                className="border border-[#cbd5e1] rounded-lg py-2.5 px-4 text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Secondary Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-dark">Secondary email</label>
              <input 
                type="email"
                value={form.secondaryEmail}
                onChange={(e) => setForm(f => ({ ...f, secondaryEmail: e.target.value }))}
                placeholder="example@gmail.com"
                className="border border-[#cbd5e1] rounded-lg py-2.5 px-4 text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Current State */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-text-dark">Current state</label>
              <div className="relative">
                <select
                  value={form.currentState}
                  onChange={(e) => setForm(f => ({ ...f, currentState: e.target.value }))}
                  className="w-full appearance-none border border-[#cbd5e1] rounded-lg py-2.5 pl-4 pr-10 text-sm text-text-dark focus:outline-none focus:border-primary bg-white cursor-pointer transition-colors"
                  required
                >
                  <option value="" disabled>Select state</option>
                  {Object.keys(STATE_CITIES_MAP).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Current City */}
            <div className="flex flex-col gap-2 relative">
              <label className="text-sm font-semibold text-text-dark">Current city</label>
              <div className="relative">
                <select
                  value={form.currentCity}
                  onChange={(e) => setForm(f => ({ ...f, currentCity: e.target.value }))}
                  disabled={!form.currentState}
                  className="w-full appearance-none border border-[#cbd5e1] rounded-lg py-2.5 pl-4 pr-10 text-sm text-text-dark focus:outline-none focus:border-primary bg-white cursor-pointer disabled:bg-slate-50 disabled:text-slate-400 transition-colors"
                  required
                >
                  <option value="" disabled>Select city</option>
                  {availableCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-text-dark">Whatsapp</label>
              <input 
                type="text"
                value={form.whatsapp}
                onChange={(e) => setForm(f => ({ ...f, whatsapp: e.target.value }))}
                placeholder="example@gmail.com"
                className="border border-[#cbd5e1] rounded-lg py-2.5 px-4 text-sm text-text-dark focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button 
              type="submit"
              className="bg-primary text-white font-semibold py-3 px-12 rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
