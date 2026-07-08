import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Session Booked Successfully | DegreeFYD",
  description: "Your free counseling session with our online education experts has been booked successfully.",
  alternates: {
    canonical: "https://degreefyd.com/session-booked",
  },
  openGraph: {
    title: "Session Booked Successfully | DegreeFYD",
    description: "Your free counseling session with our online education experts has been booked successfully.",
    url: "https://degreefyd.com/session-booked",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Session Booked Successfully | DegreeFYD",
    description: "Your free counseling session with our online education experts has been booked successfully.",
  },
};

// Reusable CounselorInfo component

const CounselorInfo = ({name, role, imageUrl, statusText }) => {
  return (
    <div className="w-full border border-slate-200 rounded-lg p-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        {/* Counselor Photo */}
        <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center bg-slate-100 relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Counselor Details */}
        <div className="flex flex-col gap-0.5">
          <h3 className="text-[15px] font-bold text-text-dark font-title">
            {name}
          </h3>
          <p className="text-xs text-text-light">
            {role}
          </p>
        </div>
      </div>

      {/* Confirmation Pill Badge */}
      <span className="bg-[#e6fcf5] text-green-600 text-[11px] font-bold py-1 px-3 rounded-md border border-green-100">
        {statusText}
      </span>
    </div>
  );
};

// Reusable SessionDetails Row Component

const SessionDetailsRow = ({ label, value }) => {
  return (
    <div className="w-full flex items-center justify-between text-sm py-1">
      <span className="text-text-light font-medium">{label}</span>
      <span className="text-text-dark font-bold text-right">{value}</span>
    </div>
  );
};

// Main SessionCard containing top row, sub-card, details, and action buttons

const SessionCard = ({ 
  counselorName, 
  counselorRole, 
  counselorImageUrl, 
  dateText, 
  timeText}) => {
  return (
    <div className="flex flex-col items-center gap-6 p-4 w-full xl:w-[1013px] border border-[#CFD8DE] bg-white rounded-[8px] shadow-sm">
      
      {/* Top Header Row with checkmark */}
      <div className="flex items-center gap-3 w-full justify-start">
        <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-base lg:text-lg font-bold text-text-dark font-title">
          Your Session is Booked!
        </h2>
      </div>

      {/* Counselor sub-card info */}
      <CounselorInfo 
        name={counselorName} 
        role={counselorRole} 
        imageUrl={counselorImageUrl} 
        statusText="Session Confirmed" 
      />

      {/* Date & Time detailed fields */}
      <div className="w-full flex flex-col gap-2 border-t border-slate-50 pt-3">
        <SessionDetailsRow label="Date" value={dateText} />
        <SessionDetailsRow label="Time" value={timeText} />
      </div>

      {/* Reschedule & Start Session Buttons */}
      <div className="flex items-center justify-center gap-4 w-full mt-2">
        <button className="border border-primary text-primary font-bold text-xs lg:text-sm py-2.5 px-6 rounded-lg hover:bg-slate-50 transition-colors">
          Reschedule session
        </button>
        <button className="bg-primary hover:bg-primary-dark text-white font-bold text-xs lg:text-sm py-2.5 px-6 rounded-lg transition-all shadow-md">
          Start session now
        </button>
      </div>

    </div>
  );
};

export default function SessionBooked() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventReservation",
    "reservationNumber": "DF-SESSION-2026",
    "reservationStatus": "https://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Kartikay Sharma"
    },
    "reservationFor": {
      "@type": "Event",
      "name": "Free Career & College Counseling Session",
      "startDate": "2026-06-04T11:00:00Z",
      "endDate": "2026-06-04T11:30:00Z",
      "location": {
        "@type": "VirtualLocation",
        "name": "DegreeFYD Online Portal"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto w-full bg-bg-page font-body shadow-sm pt-14 lg:pt-[110px]">
        <Header />

      <main className="flex flex-col lg:flex-row flex-1 pt-6 pb-6 px-4 lg:px-[100px] gap-4 w-full">
        <Sidebar />

        {/* Right Content Panel - Your Session is Booked! */}
        <section className="flex-1 flex flex-col gap-6 items-start">
          <SessionCard 
            counselorName="Harsh Pandey"
            counselorRole="Career Counsellor"
            counselorImageUrl="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80"
            dateText="Wednesday, 4 June 2026"
            timeText="11:00 AM - 11:30 AM"
          />
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
