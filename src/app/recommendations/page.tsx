import Image from "next/image";
import Link from "next/link";

// --- Inline SVG Icons for Visual Elegance and Zero External Dependencies ---

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- Sidebar SVG Icons ---

const ProfileDetailsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const RecommendationsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const ShortlistsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const CounselorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01" />
    <path d="M12 10h.01" />
    <path d="M16 10h.01" />
  </svg>
);

const DocumentsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ReferEarnIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <line x1="6" y1="21" x2="6" y2="7" />
    <line x1="18" y1="21" x2="18" y2="7" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 7V2.5A2.5 2.5 0 0 1 14.5 5h-5A2.5 2.5 0 0 1 12 2.5z" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

// --- Brand Logo component for top bars ---

const BrandLogo = () => (
  <div className="flex relative items-center justify-center">
    <Image 
      src="/logo.png" 
      alt="DegreeFYD Logo" 
      width={140} 
      height={35} 
      priority
      style={{ objectFit: "contain" }}
    />
  </div>
);

// --- University SVG Logos (Crests) for Zero Dependency Premium Graphics ---

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
  return (
    <div className="flex flex-col min-h-screen bg-bg-page font-body">
      {/* ==========================================================================
         1. DESKTOP HEADER (Top bar double-decker navbar)
         ========================================================================== */}
      <div className="hidden lg:flex justify-between items-center py-2 px-[10%] bg-white border-b border-border text-[13px] text-text-body">
        <div className="flex gap-5">
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><PhoneIcon /></span>
            <span>9306508369</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-accent-orange"><MailIcon /></span>
            <span>example@degreefyd.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>Connect with us on your Favorite Socials -</span>
          <div className="flex gap-2 items-center">
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><InstagramIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><FacebookIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><YoutubeIcon /></a>
            <a href="#" className="flex items-center justify-center w-5 h-5 rounded-full text-primary text-[12px] transition-all hover:-translate-y-0.5 hover:opacity-80"><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <header className="hidden lg:flex justify-between items-center py-3.5 px-[10%] bg-white sticky top-0 z-50 border-b border-border shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div className="flex items-center gap-2 font-bold text-2xl text-text-dark font-title">
          <BrandLogo />
        </div>
        <nav className="flex gap-7.5 gap-x-8">
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Universities</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>Courses</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
          <div className="flex items-center gap-1 font-medium text-text-dark text-[15px] cursor-pointer transition-colors hover:text-accent-orange group">
            <span>More</span>
            <span className="text-text-light transition-transform group-hover:translate-y-0.5"><ChevronDownIcon /></span>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-medium text-text-dark text-[15px] cursor-pointer py-1.5 px-3 rounded-md transition-colors hover:bg-primary-light">
            <span>Regular</span>
            <ChevronDownIcon />
          </div>
          <button className="flex items-center gap-2 border border-[#c3d4e9] py-2 px-4 rounded-lg text-primary font-medium text-sm transition-all hover:bg-primary-light hover:border-primary">
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-2 bg-[#f3f6f9] border border-border py-2 px-4 rounded-lg text-text-dark font-medium text-sm transition-all hover:bg-[#e2e8f0]">
            <UserIcon />
            <span>Kartikay</span>
          </button>
        </div>
      </header>

      {/* ==========================================================================
         2. MOBILE HEADER & NAVIGATION
         ========================================================================== */}
      <div className="flex lg:hidden justify-between items-center p-3.5 bg-white border-b border-border sticky top-0 z-50">
        <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
          <HamburgerIcon />
        </button>
        <div className="flex items-center gap-1.5 font-bold text-xl text-text-dark font-title">
          <BrandLogo />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
            <SearchIcon />
          </button>
          <button className="flex items-center justify-center w-9 h-9 rounded-md border border-border text-text-dark text-lg">
            <UserIcon />
          </button>
        </div>
      </div>
      <div className="flex lg:hidden items-center bg-primary py-3 px-5 text-white font-medium text-sm gap-2 cursor-pointer">
        <ChevronLeftIcon />
        <span>Back</span>
      </div>

      {/* ==========================================================================
         3. MAIN LAYOUT GRID (Sidebar + Main panel)
         ========================================================================== */}
      <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-[10%] gap-8 max-w-[1440px] mx-auto w-full">
        {/* Left Sidebar (Desktop Only) */}
        <aside className="hidden lg:flex flex-col w-[260px] bg-white border border-border rounded-xl p-6 h-fit shadow-premium">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <ProfileDetailsIcon />
              </div>
              <span>Profile details</span>
            </Link>
            <Link href="/recommendations" className="flex items-center gap-3 py-3 px-4 rounded-lg text-primary bg-primary-light font-medium text-[15px] cursor-pointer transition-all">
              <div className="flex items-center justify-center text-lg text-primary">
                <RecommendationsIcon />
              </div>
              <span>Recommendations</span>
            </Link>
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <ShortlistsIcon />
              </div>
              <span>Shortlists</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <CounselorIcon />
              </div>
              <span>Talk to counselor</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <DocumentsIcon />
              </div>
              <span>My documents</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <ReferEarnIcon />
              </div>
              <span>Refer & Earn</span>
            </div>
          </nav>
          <div className="h-px bg-border my-5" />
          <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-red-500 font-medium text-[15px] cursor-pointer transition-all hover:bg-red-50">
            <div className="flex items-center justify-center text-lg text-red-500">
              <LogoutIcon />
            </div>
            <span>Log out</span>
          </div>
        </aside>

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

      {/* ==========================================================================
         4. FOOTER
         ========================================================================== */}
      <footer className="bg-primary text-white text-center py-4 px-5 text-[13px] font-normal border-t border-primary-dark mt-auto">
        <p>© 2026 Nuvora Education Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
