import Image from "next/image";
import styles from "./page.module.css";

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
  <div className={styles.logoIcon}>
    <svg width="32" height="32" viewBox="0 0 120 120" fill="none">
      {/* Swoosh Orange */}
      <path d="M25 80 C 40 40, 80 40, 95 80" stroke="#f38612" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Swoosh Dark Blue */}
      <path d="M15 70 C 35 25, 85 25, 105 70" stroke="#0b3a60" strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* Graduation Cap body */}
      <polygon points="60,25 90,40 60,55 30,40" fill="#0b3a60" />
      {/* Cap tassel */}
      <path d="M90 40 L90 65" stroke="#f38612" strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="65" r="4" fill="#f38612" />
    </svg>
    <span>
      Degree<span className={styles.logoFyd}>FYD</span>
    </span>
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ==========================================================================
         1. DESKTOP HEADER (Top bar double-decker navbar)
         ========================================================================== */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.contactItem}>
            <PhoneIcon />
            <span>9306508369</span>
          </div>
          <div className={styles.contactItem}>
            <MailIcon />
            <span>example@degreefyd.com</span>
          </div>
        </div>
        <div className={styles.topBarRight}>
          <span>Connect with us on your Favorite Socials -</span>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><InstagramIcon /></a>
            <a href="#" className={styles.socialIcon}><FacebookIcon /></a>
            <a href="#" className={styles.socialIcon}><YoutubeIcon /></a>
            <a href="#" className={styles.socialIcon}><LinkedinIcon /></a>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <BrandLogo />
        </div>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <span>Universities</span>
            <ChevronDownIcon />
          </div>
          <div className={styles.navItem}>
            <span>Courses</span>
            <ChevronDownIcon />
          </div>
          <div className={styles.navItem}>
            <span>More</span>
            <ChevronDownIcon />
          </div>
        </nav>
        <div className={styles.headerActions}>
          <div className={styles.dropdownAction}>
            <span>Regular</span>
            <ChevronDownIcon />
          </div>
          <button className={styles.searchBtn}>
            <SearchIcon />
            <span>Search</span>
          </button>
          <button className={styles.userProfileBtn}>
            <UserIcon />
            <span>Kartikay</span>
          </button>
        </div>
      </header>

      {/* ==========================================================================
         2. MOBILE HEADER & NAVIGATION
         ========================================================================== */}
      <div className={styles.mobileHeader}>
        <button className={styles.mobileHeaderIcon}>
          <HamburgerIcon />
        </button>
        <div className={styles.mobileLogo}>
          <BrandLogo />
        </div>
        <div className={styles.mobileHeaderActions}>
          <button className={styles.mobileHeaderIcon}>
            <SearchIcon />
          </button>
          <button className={styles.mobileHeaderIcon}>
            <UserIcon />
          </button>
        </div>
      </div>
      <div className={styles.mobileBackBar}>
        <ChevronLeftIcon />
        <span>Back</span>
      </div>

      {/* ==========================================================================
         3. MAIN LAYOUT GRID (Sidebar + Main panel)
         ========================================================================== */}
      <main className={styles.mainWrapper}>
        {/* Left Sidebar (Desktop Only) */}
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarMenu}>
            <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
              <div className={styles.sidebarItemIcon}>
                <ProfileDetailsIcon />
              </div>
              <span>Profile details</span>
            </div>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarItemIcon}>
                <RecommendationsIcon />
              </div>
              <span>Recommendations</span>
            </div>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarItemIcon}>
                <ShortlistsIcon />
              </div>
              <span>Shortlists</span>
            </div>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarItemIcon}>
                <CounselorIcon />
              </div>
              <span>Talk to counselor</span>
            </div>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarItemIcon}>
                <DocumentsIcon />
              </div>
              <span>My documents</span>
            </div>
            <div className={styles.sidebarItem}>
              <div className={styles.sidebarItemIcon}>
                <ReferEarnIcon />
              </div>
              <span>Refer & Earn</span>
            </div>
          </nav>
          <div className={styles.sidebarDivider} />
          <div className={styles.logoutItem}>
            <div className={styles.sidebarItemIcon}>
              <LogoutIcon />
            </div>
            <span>Log out</span>
          </div>
        </aside>

        {/* Right Content Panels */}
        <section className={styles.contentArea}>
          <h1 className={styles.profileTitle}>Profile Details</h1>

          {/* Profile card with circle progress */}
          <div className={styles.profileCard}>
            <div className={styles.profileCardLeft}>
              <div className={styles.avatarProgressWrapper}>
                <div className={styles.progressLabel}>65%</div>
                {/* SVG Progress Circle Border */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)", position: "absolute", top: 0, left: 0 }}>
                  <circle cx="50" cy="50" r="44" stroke="#e8eef6" strokeWidth="4" fill="transparent" />
                  <circle cx="50" cy="50" r="44" stroke="var(--color-green)" strokeWidth="4" fill="transparent" strokeDasharray="276.4" strokeDashoffset="96.7" strokeLinecap="round" />
                </svg>
                <div className={styles.avatarCircle}>
                  {/* Shows placeholder 'K' on desktop and mobile placeholder image */}
                  <div className={styles.avatarPlaceholder}>K</div>
                </div>
              </div>
              <div className={styles.profileInfo}>
                <h2 className={styles.profileName}>Kartikay Sharma</h2>
                <p className={styles.profileEmail}>example@gmail.com</p>
              </div>
            </div>
            <button className={styles.completeProfileBtn}>
              Complete profile
            </button>
          </div>

          {/* Card 1: General Details */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>General Details</h3>
              <button className={styles.editBtn}>
                <EditIcon />
              </button>
            </div>
            <div className={styles.sectionGrid}>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Full Name</span>
                <span className={styles.fieldValue}>Kartikay Sharma</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Parent's Phone</span>
                <span className={styles.fieldValue}>9306508269</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Secondary Email</span>
                <span className={styles.fieldValue}>ani141sh@gmail.com</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Current State</span>
                <span className={styles.fieldValue}>Haryana</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Current City</span>
                <span className={styles.fieldValue}>Jind</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>WhatsApp</span>
                <span className={styles.fieldValue}>---</span>
              </div>
            </div>
          </div>

          {/* Card 2: Your Preference Detail */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Your Preference Detail</h3>
              <button className={styles.editBtn}>
                <EditIcon />
              </button>
            </div>
            <div className={styles.sectionGrid}>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Stream</span>
                <span className={styles.fieldValue}>Management, Agriculture, +2</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Level</span>
                <span className={styles.fieldValue}>Diploma</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Degree</span>
                <span className={styles.fieldValue}>Online B.com</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Specialization</span>
                <span className={styles.fieldValue}>ACCA</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Study Mode</span>
                <span className={styles.fieldValue}>Online</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Preferred Budget</span>
                <span className={styles.fieldValue}>1,50,000</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Preferred State</span>
                <span className={styles.fieldValue}>Punjab</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Preferred City</span>
                <span className={styles.fieldValue}>Ludhiana</span>
              </div>
            </div>
          </div>

          {/* Card 3: Additional Details */}
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Additional Details</h3>
              <button className={styles.editBtn}>
                <EditIcon />
              </button>
            </div>
            <div className={styles.sectionGrid}>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Highest qualification</span>
                <span className={styles.fieldValue}>12th</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Motive</span>
                <span className={styles.fieldValue}>Salary Hike</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Current Profession</span>
                <span className={styles.fieldValue}>Student</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Desired time to start Course</span>
                <span className={styles.fieldValue}>June 2026</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Last CGPA/Percentage</span>
                <span className={styles.fieldValue}>92%</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Academic gap (if any)</span>
                <span className={styles.fieldValue}>No</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Lorem ipsum</span>
                <span className={styles.fieldValue}>Lorem</span>
              </div>
              <div className={styles.gridField}>
                <span className={styles.fieldLabel}>Lorem ipsum</span>
                <span className={styles.fieldValue}>Lorem</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
         4. FOOTER
         ========================================================================== */}
      <footer className={styles.footer}>
        <p>© 2026 Nuvora Education Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}
