import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import CounselorDashboardClient from "../components/CounselorDashboardClient";

export const metadata = {
  title: "Book Free Counseling Session | DegreeFYD",
  description: "Schedule a live video counseling session with our expert career advisors. Find the best online programs, compare tuition budgets, and verify university degrees.",
  alternates: {
    canonical: "https://degreefyd.com/talk-to-counselor",
  },
  openGraph: {
    title: "Book Free Counseling Session | DegreeFYD",
    description: "Schedule a live video counseling session with our expert career advisors. Find the best online programs, compare tuition budgets, and verify university degrees.",
    url: "https://degreefyd.com/talk-to-counselor",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Book Free Counseling Session | DegreeFYD",
    description: "Schedule a live video counseling session with our expert career advisors. Find the best online programs, compare tuition budgets, and verify university degrees.",
  },
};

export default function TalkToCounselor() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book Free Counseling Session | DegreeFYD",
    "description": "Schedule a live video counseling session with our expert career advisors. Find the best online programs, compare tuition budgets, and verify university degrees.",
    "url": "https://degreefyd.com/talk-to-counselor",
    "isPartOf": {
      "@type": "WebSite",
      "name": "DegreeFYD",
      "url": "https://degreefyd.com/"
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
          <CounselorDashboardClient />
        </main>

        <Footer />
      </div>
    </>
  );
}
