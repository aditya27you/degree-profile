import { Metadata } from "next";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import MyDocumentsClient from "../components/MyDocumentsClient";

export const metadata: Metadata = {
  title: "Upload Your Documents | DegreeFYD Verification",
  description: "Securely upload and verify your academic documents, including Aadhar card, PAN card, CV, Class 10/12 marksheets for online university admissions on DegreeFYD.",
  alternates: {
    canonical: "https://degreefyd.com/my-documents",
  },
  openGraph: {
    title: "Upload Your Documents | DegreeFYD Verification",
    description: "Securely upload and verify your academic documents, including Aadhar card, PAN card, CV, Class 10/12 marksheets for online university admissions on DegreeFYD.",
    url: "https://degreefyd.com/my-documents",
    siteName: "DegreeFYD",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Upload Your Documents | DegreeFYD Verification",
    description: "Securely upload and verify your academic documents, including Aadhar card, PAN card, CV, Class 10/12 marksheets for online university admissions on DegreeFYD.",
  },
};

export default function MyDocuments() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Upload Your Documents | DegreeFYD Verification",
    "description": "Securely upload and verify your academic documents, including Aadhar card, PAN card, CV, Class 10/12 marksheets for online university admissions on DegreeFYD.",
    "url": "https://degreefyd.com/my-documents",
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
      <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto bg-bg-page font-body shadow-sm">
        <Header />

        <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-8 xl:px-12 lg:pl-[267px] xl:pl-[283px] gap-8 w-full">
          <Sidebar />
          <MyDocumentsClient />
        </main>

        <Footer />
      </div>
    </>
  );
}
