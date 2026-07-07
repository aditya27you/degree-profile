import Image from "next/image";
import { Metadata } from "next";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { PinIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "College Recommendations | DegreeFYD",
  description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/recommendations",
  },
  openGraph: {
    title: "College Recommendations | DegreeFYD",
    description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
    url: "https://degreefyd.com/recommendations",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "College Recommendations | DegreeFYD",
    description: "Explore top-ranked online and distance universities tailored to your educational preferences, budget, and stream choices on DegreeFYD.",
  },
};

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

interface College {
  id: string;
  name: string;
  nirfRank: string;
  location: string;
  logoComponent: React.ComponentType;
}

const RECOMMENDATIONS_DATA: College[] = [
  {
    id: "college-1",
    name: "Alagappa University",
    nirfRank: "#134 NIRF Rank",
    location: "Hyderabad",
    logoComponent: AlagappaLogo,
  },
  {
    id: "college-2",
    name: "Amity University Online",
    nirfRank: "#4 NIRF Rank",
    location: "Noida, Uttar Prade...",
    logoComponent: AmityLogo,
  },
  {
    id: "college-3",
    name: "GLA University Online",
    nirfRank: "#13 NIRF Rank",
    location: "Mathura, Uttar Pra...",
    logoComponent: GlaLogo,
  },
  {
    id: "college-4",
    name: "LPU Online",
    nirfRank: "#1 NIRF Rank",
    location: "Phagwada, Punjab",
    logoComponent: LpuLogo,
  },
  {
    id: "college-5",
    name: "Sharda University Online",
    nirfRank: "#21 NIRF Rank",
    location: "Greater Noida, Utt...",
    logoComponent: ShardaLogo,
  },
];

export default function Recommendations() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Recommended Online Colleges",
    "numberOfItems": RECOMMENDATIONS_DATA.length,
    "itemListElement": RECOMMENDATIONS_DATA.map((college, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": college.name,
      "description": `Online degree courses offered in ${college.location}. Ranked ${college.nirfRank}.`
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

      <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-8 xl:px-12 lg:pl-[249px] gap-8 w-full">
        <Sidebar />

        {/* Right Content Panel - Recommended Colleges */}
        <section className="flex-1 flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-text-dark font-title mb-2 mt-2">Recommended colleges</h1>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECOMMENDATIONS_DATA.map((college) => {
              const Logo = college.logoComponent;
              return (
                <div 
                  key={college.id} 
                  className="bg-[#FFF] border border-[#CFD8DE] rounded-[8px] p-4 w-full sm:w-[327px] h-[187px] hover:border-slate-400 transition-all flex flex-col items-start justify-between gap-3"
                >
                  <div className="w-full">
                    {/* Top Row: Logo & Rank Badge / Location */}
                    <div className="flex items-start justify-between w-full">
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
                          <span className="truncate max-w-[130px]">{college.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* College Name */}
                    <h3 className="text-[15px] font-bold text-text-dark font-title leading-snug line-clamp-1 mt-3">
                      {college.name}
                    </h3>
                  </div>

                  {/* Input Search Degree */}
                  <div className="w-full relative">
                    <input 
                      type="text" 
                      placeholder="Search degree"
                      className="w-full border border-[#cbd5e1] rounded-lg py-1.5 px-3.5 text-sm text-text-dark focus:outline-none focus:border-primary placeholder-slate-400 transition-colors"
                    />
                  </div>
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
