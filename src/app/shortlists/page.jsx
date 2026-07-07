import Image from "next/image";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { PinIcon } from "../components/Icons";

export const metadata = {
  title: "Shortlisted Colleges | DegreeFYD",
  description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/shortlists",
  },
  openGraph: {
    title: "Shortlisted Colleges | DegreeFYD",
    description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
    url: "https://degreefyd.com/shortlists",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shortlisted Colleges | DegreeFYD",
    description: "Review and manage your saved and shortlisted online university applications, status updates, and progress logs on DegreeFYD.",
  },
};

// Filled Bookmark SVG Component
const BookmarkIconFilled = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0b3a60" stroke="#0b3a60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const AlagappaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/alagappa_logo.png" 
      alt="Alagappa University Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

const AmityLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/amity_logo.jpg" 
      alt="Amity University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

const GlaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/gla_logo.jpg" 
      alt="GLA University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

const LpuLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/lpu_logo.png" 
      alt="LPU Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

const ShardaLogo = () => (
  <div className="w-14 h-14 relative overflow-hidden rounded-md border border-slate-100 flex items-center justify-center bg-white">
    <Image 
      src="/sharda_logo.png" 
      alt="Sharda University Online Logo" 
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);


const SHORTLISTED_DATA = [
  {
    id: "shortlist-1",
    name: "Alagappa University",
    nirfRank: "#134 NIRF Rank",
    location: "Hyderabad",
    logoComponent: AlagappaLogo,
    coursesShortlisted: 2,
  },
  {
    id: "shortlist-2",
    name: "Amity University Online",
    nirfRank: "#4 NIRF Rank",
    location: "Noida, Uttar Prade...",
    logoComponent: AmityLogo,
    coursesShortlisted: 2,
  },
  {
    id: "shortlist-3",
    name: "GLA University Online",
    nirfRank: "#13 NIRF Rank",
    location: "Mathura, Uttar Pra...",
    logoComponent: GlaLogo,
    coursesShortlisted: 2,
  },
  {
    id: "shortlist-4",
    name: "LPU Online",
    nirfRank: "#1 NIRF Rank",
    location: "Phagwada, Punjab",
    logoComponent: LpuLogo,
    coursesShortlisted: 2,
  },
  {
    id: "shortlist-5",
    name: "Sharda University Online",
    nirfRank: "#21 NIRF Rank",
    location: "Greater Noida, Utt...",
    logoComponent: ShardaLogo,
    coursesShortlisted: 2,
  },
];

export default function ShortlistedColleges() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Shortlisted Colleges",
    "numberOfItems": SHORTLISTED_DATA.length,
    "itemListElement": SHORTLISTED_DATA.map((college, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": college.name,
      "description": `Shortlisted university program located in ${college.location}. Ranked ${college.nirfRank}.`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto bg-bg-page font-body shadow-sm">
        <Header />

      <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-8 xl:px-12 lg:pl-[267px] xl:pl-[283px] gap-8 w-full">
        <Sidebar />

        {/* Right Content Panel - Shortlisted Colleges */}
        <section className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-text-dark font-title mb-2 mt-2">Shortlisted colleges</h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SHORTLISTED_DATA.map((college) => {
              const Logo = college.logoComponent;
              return (
                <div 
                  key={college.id} 
                  className="bg-[#FFF] border border-[#CFD8DE] rounded-[8px] p-4 w-full sm:w-[327px] h-[229px] hover:border-slate-400 transition-all flex flex-col items-start justify-between gap-3 relative shadow-sm"
                >
                  {/* Bookmark/Save Active Icon in Top Right */}
                  <button className="absolute top-4 right-4 text-primary hover:scale-110 transition-transform cursor-pointer" aria-label="Remove from shortlist">
                    <BookmarkIconFilled />
                  </button>

                  <div className="w-full flex flex-col gap-2">
                    {/* Top Row: Logo & Rank Badge / Location */}
                    <div className="flex items-start justify-between w-full pr-6">
                      <div className="w-14 h-14 flex-shrink-0">
                        <Logo />
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        {/* Rank Badge */}
                        <span className="bg-[#e6fcf5] text-green-600 text-[11px] font-bold py-1 px-2.5 rounded-full border border-green-100">
                          {college.nirfRank}
                        </span>
                        {/* Location */}
                        <div className="flex items-center gap-1 text-[13px] text-text-light">
                          <span className="text-slate-400"><PinIcon /></span>
                          <span className="truncate max-w-[120px]">{college.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* College Name */}
                    <h3 className="text-[15px] font-bold text-text-dark font-title leading-snug line-clamp-1">
                      {college.name}
                    </h3>
                  </div>

                  {/* Course Status Box */}
                  <div className="w-full border border-slate-100 rounded-lg py-1.5 px-3 bg-slate-50 text-[13px] text-text-dark font-medium leading-relaxed">
                    {college.coursesShortlisted} Course Shortlisted
                  </div>

                  {/* Continue Application Button */}
                  <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 rounded-lg text-xs lg:text-sm transition-colors text-center shadow-sm">
                    Continue application
                  </button>
                </div>
              );
            })}
          </div>

          {/* Explore all colleges button */}
          <div className="flex justify-center pt-6">
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 px-8 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Explore all colleges
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}
