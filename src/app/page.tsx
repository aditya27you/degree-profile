import Image from "next/image";

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

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
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

export default function Home() {
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
      <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-[10%] gap-8 max-w-[1440px] mx-auto w-full">
        {/* Left Sidebar (Desktop Only) */}
        <aside className="hidden lg:flex flex-col w-[260px] bg-white border border-border rounded-xl p-6 h-fit shadow-premium">
          <nav className="flex flex-col gap-2">
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-primary bg-primary-light font-medium text-[15px] cursor-pointer transition-all">
              <div className="flex items-center justify-center text-lg text-primary">
                <ProfileDetailsIcon />
              </div>
              <span>Profile details</span>
            </div>
            <div className="flex items-center gap-3 py-3 px-4 rounded-lg text-text-body font-medium text-[15px] cursor-pointer transition-all hover:bg-slate-50 hover:text-text-dark group">
              <div className="flex items-center justify-center text-lg text-text-light group-hover:text-text-dark transition-colors">
                <RecommendationsIcon />
              </div>
              <span>Recommendations</span>
            </div>
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

        {/* Right Content Panels */}
        <section className="flex-1 flex flex-col gap-6">
          <h1 className="block lg:hidden text-2xl font-bold text-text-dark font-title mb-1 mt-2.5">Profile Details</h1>

          {/* Profile card with circle progress */}
          <div className="bg-white border border-border rounded-xl p-5 lg:p-6 flex items-center justify-between shadow-premium">
            <div className="flex items-center gap-5">
              <div className="relative w-[72px] h-[72px] lg:w-[84px] lg:h-[84px]">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-bold py-0.5 px-1.5 rounded-full z-10 shadow-[0_2px_5px_rgba(16,185,129,0.3)]">65%</div>
                {/* SVG Progress Circle Border */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)", position: "absolute", top: 0, left: 0 }}>
                  <circle cx="50" cy="50" r="44" stroke="#e8eef6" strokeWidth="4" fill="transparent" />
                  <circle cx="50" cy="50" r="44" stroke="#10b981" strokeWidth="4" fill="transparent" strokeDasharray="276.4" strokeDashoffset="96.7" strokeLinecap="round" />
                </svg>
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-[3px] border-transparent flex items-center justify-center">
                  {/* Shows placeholder 'K' */}
                  <div className="w-full h-full flex items-center justify-center bg-slate-300 text-white font-semibold text-2xl lg:text-[32px] font-title">K</div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-lg lg:text-xl font-bold text-text-dark font-title">Kartikay Sharma</h2>
                <p className="text-sm text-text-light">example@gmail.com</p>
              </div>
            </div>
            <button className="hidden lg:block border border-primary text-primary font-semibold text-sm py-2.5 px-5 rounded-lg bg-transparent transition-all hover:bg-primary hover:text-white hover:shadow-[0_4px_12px_rgba(11,58,96,0.15)]">
              Complete profile
            </button>
          </div>

          {/* Card 1: General Details */}
          <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-text-dark font-title">General Details</h3>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12">
                <EditIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Full Name</span>
                <span className="text-sm font-semibold text-text-dark break-words">Kartikay Sharma</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Parent's Phone</span>
                <span className="text-sm font-semibold text-text-dark break-words">9306508269</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Secondary Email</span>
                <span className="text-sm font-semibold text-text-dark break-words">ani141sh@gmail.com</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Current State</span>
                <span className="text-sm font-semibold text-text-dark break-words">Haryana</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Current City</span>
                <span className="text-sm font-semibold text-text-dark break-words">Jind</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">WhatsApp</span>
                <span className="text-sm font-semibold text-text-dark break-words">---</span>
              </div>
            </div>
          </div>

          {/* Card 2: Your Preference Detail */}
          <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-text-dark font-title">Your Preference Detail</h3>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12">
                <EditIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Stream</span>
                <span className="text-sm font-semibold text-text-dark break-words">Management, Agriculture, +2</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Level</span>
                <span className="text-sm font-semibold text-text-dark break-words">Diploma</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Degree</span>
                <span className="text-sm font-semibold text-text-dark break-words">Online B.com</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Specialization</span>
                <span className="text-sm font-semibold text-text-dark break-words">ACCA</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Study Mode</span>
                <span className="text-sm font-semibold text-text-dark break-words">Online</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Preferred Budget</span>
                <span className="text-sm font-semibold text-text-dark break-words">1,50,000</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Preferred State</span>
                <span className="text-sm font-semibold text-text-dark break-words">Punjab</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Preferred City</span>
                <span className="text-sm font-semibold text-text-dark break-words">Ludhiana</span>
              </div>
            </div>
          </div>

          {/* Card 3: Additional Details */}
          <div className="bg-white border border-border rounded-xl p-5 lg:p-7 shadow-premium transition-all hover:border-slate-300 hover:shadow-premiumHover">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-text-dark font-title">Additional Details</h3>
              <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-dark bg-transparent transition-all hover:border-primary hover:bg-primary-light hover:text-primary hover:rotate-12">
                <EditIcon />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Highest qualification</span>
                <span className="text-sm font-semibold text-text-dark break-words">12th</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Motive</span>
                <span className="text-sm font-semibold text-text-dark break-words">Salary Hike</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Current Profession</span>
                <span className="text-sm font-semibold text-text-dark break-words">Student</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Desired time to start Course</span>
                <span className="text-sm font-semibold text-text-dark break-words">June 2026</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Last CGPA/Percentage</span>
                <span className="text-sm font-semibold text-text-dark break-words">92%</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Academic gap (if any)</span>
                <span className="text-sm font-semibold text-text-dark break-words">No</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Lorem ipsum</span>
                <span className="text-sm font-semibold text-text-dark break-words">Lorem</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-medium text-text-light">Lorem ipsum</span>
                <span className="text-sm font-semibold text-text-dark break-words">Lorem</span>
              </div>
            </div>
          </div>
        </section>
      </main>  
      <footer className="bg-primary text-white text-center py-4 px-5 text-[13px] font-normal border-t border-primary-dark mt-auto">
        <p>© 2026 Nuvora Education Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
