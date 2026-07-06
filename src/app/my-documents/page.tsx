"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// Local Custom Icons for Uploader
const CloudUploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0b3a60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
    <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.3-2-2-3.6-4-3.9C17 3.4 13 1 9.5 2.5 6 4 4.5 8 5.5 11.5c-2.3.8-3.5 3.2-2.5 5.5s3.2 3.5 5.5 2.5h11c1.2 0 2.3-.5 3-1.5z" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="8" x2="12" y2="20" />
  </svg>
);

const FileIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const EditIconLocal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

interface DocItem {
  id: string;
  name: string;
  state: "validated" | "pending" | "empty" | "uploading";
  fileUrl?: string;
}

export default function MyDocuments() {
  const [documents, setDocuments] = useState<DocItem[]>([
    { id: "doc-1", name: "Class 10 Marksheet", state: "validated", fileUrl: "/doc_preview.jpg" },
    { id: "doc-2", name: "Class 12 Marksheet", state: "pending", fileUrl: "/doc_preview.jpg" },
    { id: "doc-3", name: "Aadhar Card", state: "empty" },
    { id: "doc-4", name: "PAN Card", state: "empty" },
    { id: "doc-5", name: "CV", state: "empty" },
  ]);

  const handleSimulatedUpload = (id: string) => {
    // Transition to uploading first
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, state: "uploading" } : doc
      )
    );

    // After 1.5 seconds, set as pending validation
    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((doc) =>
          doc.id === id 
            ? { ...doc, state: "pending", fileUrl: "/doc_preview.jpg" } 
            : doc
        )
      );
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen lg:min-h-[1110px] max-w-[1440px] mx-auto bg-bg-page font-body shadow-sm">
      <Header />

      <main className="flex flex-col lg:flex-row flex-1 py-10 px-4 lg:px-8 xl:px-12 gap-8 w-full">
        <Sidebar />

        {/* Right Content Panel - Upload Documents */}
        <section className="flex-1 flex flex-col gap-6 items-start">
          <h1 className="text-xl lg:text-2xl font-bold text-text-dark font-title">
            Upload your documents
          </h1>

          {/* Documents Grid / Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full xl:w-[1013px]">
            {documents.map((doc) => {
              const isUploaded = doc.state === "validated" || doc.state === "pending";
              const isUploading = doc.state === "uploading";

              if (isUploading) {
                return (
                  <div 
                    key={doc.id}
                    className="border border-[#CFD8DE] rounded-[8px] p-4 bg-white h-[235px] flex flex-col items-center justify-center gap-3 shadow-sm flex-1"
                  >
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                    <span className="text-xs font-semibold text-text-light">Uploading...</span>
                  </div>
                );
              }

              if (isUploaded) {
                return (
                  <div 
                    key={doc.id}
                    className="border border-[#CFD8DE] rounded-[8px] p-4 bg-white h-[235px] flex flex-col items-start justify-between gap-4 shadow-sm flex-1"
                  >
                    {/* Thumbnail preview */}
                    <div className="w-full h-[140px] relative overflow-hidden rounded-[4px] border border-slate-100 bg-slate-50 flex items-center justify-center">
                      <img 
                        src={doc.fileUrl} 
                        alt={doc.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Status row at bottom */}
                    {doc.state === "validated" ? (
                      <button 
                        onClick={() => handleSimulatedUpload(doc.id)}
                        className="w-full border border-slate-200 rounded-[8px] py-1.5 px-3 text-xs font-semibold text-text-dark bg-white hover:bg-slate-50 transition-colors flex items-center justify-center"
                      >
                        <EditIconLocal />
                        <span>Change</span>
                      </button>
                    ) : (
                      <span className="w-full text-center bg-[#fffbeb] text-amber-600 text-[10px] sm:text-[11px] font-bold py-1.5 px-2 rounded-md border border-amber-100 truncate block">
                        Validation in process...
                      </span>
                    )}
                  </div>
                );
              }

              // Empty state
              return (
                <div 
                  key={doc.id}
                  className="border-2 border-dashed border-[#CFD8DE] rounded-[8px] p-4 bg-white h-[235px] flex flex-col items-center justify-between text-center gap-4 shadow-sm flex-1 hover:border-slate-400 transition-colors"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mt-2 flex-shrink-0">
                    <CloudUploadIcon />
                  </div>

                  {/* Label & helper texts */}
                  <div className="flex flex-col gap-1 w-full">
                    <span className="text-sm font-bold text-text-dark font-title line-clamp-1">
                      {doc.name}
                    </span>
                    <span className="text-[10px] text-text-light font-medium uppercase tracking-tight">
                      PDF, JPG or PNG (Max 5MB)
                    </span>
                  </div>

                  {/* Browse Files Button */}
                  <button 
                    onClick={() => handleSimulatedUpload(doc.id)}
                    className="w-full border border-slate-200 rounded-[8px] py-1.5 px-3 text-xs font-semibold text-text-dark bg-white hover:bg-slate-50 transition-colors flex items-center justify-center"
                  >
                    <FileIcon />
                    <span>Browse files</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
