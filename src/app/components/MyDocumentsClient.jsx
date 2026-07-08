"use client";

import React, { useState } from "react";

// Local Custom Icons for Uploader
const CloudUploadIcon = () => (
  <img src="/cloud_upload_icon.png" alt="Upload" className="w-6 h-6 object-contain inline" />
);

const FileIcon = () => (
  <img src="/file_icon.png" alt="Browse" className="w-3.5 h-3.5 object-contain inline mr-1" />
);

const EditIconLocal = () => (
  <img src="/edit_icon.png" alt="Change" className="w-3.5 h-3.5 object-contain inline mr-1" />
);

function ChangeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M6.58882 2.0307H1.95029C1.5988 2.0307 1.26171 2.17033 1.01317 2.41887C0.764629 2.66741 0.625 3.0045 0.625 3.35599V12.633C0.625 12.9845 0.764629 13.3216 1.01317 13.5702C1.26171 13.8187 1.5988 13.9583 1.95029 13.9583H11.2273C11.5788 13.9583 11.9159 13.8187 12.1645 13.5702C12.413 13.3216 12.5526 12.9845 12.5526 12.633V7.99452M11.5587 1.03672C11.8223 0.773099 12.1798 0.625 12.5526 0.625C12.9254 0.625 13.283 0.773099 13.5466 1.03672C13.8102 1.30033 13.9583 1.65787 13.9583 2.03069C13.9583 2.4035 13.8102 2.76104 13.5466 3.02466L7.25146 9.3198L4.60088 9.98244L5.26353 7.33186L11.5587 1.03672Z" stroke="#0D3B59" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChangeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-1 pt-1 pr-3 pb-1 pl-2 w-full border border-slate-200 rounded-lg text-sm font-medium text-[#0D3B59] hover:bg-slate-50 transition-colors"
    >
      <ChangeIcon />
      Change
    </button>
  );
}

function DocumentThumbnail({ preview, label = "Preview" }) {
  return (
    <div className="relative w-full h-[140px] rounded-md overflow-hidden group cursor-pointer border border-slate-100 bg-slate-50 flex items-center justify-center">
      <img src={preview} alt="Document preview" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white text-base font-semibold text-center px-2">{label}</span>
      </div>
    </div>
  );
}


export default function MyDocumentsClient() {
  const [documents, setDocuments] = useState([
    { id: "doc-1", name: "Class 10 Marksheet", state: "validated", fileUrl: "/doc_preview.jpg" },
    { id: "doc-2", name: "Class 12 Marksheet", state: "pending", fileUrl: "/doc_preview.png" },
    { id: "doc-3", name: "Aadhar Card", state: "empty" },
    { id: "doc-4", name: "PAN Card", state: "empty" },
    { id: "doc-5", name: "CV", state: "empty" },
  ]);

  const handleSimulatedUpload = (id) => {
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
            ? { ...doc, state: "pending", fileUrl: "/doc_preview.png" } 
            : doc
        )
      );
    }, 1500);
  };

  return (
    <section className="flex-1 flex flex-col gap-6 items-start">
      <h1 className="text-xl lg:text-2xl font-bold text-text-dark font-title">
        Upload your documents
      </h1>

      {/* Documents Grid / Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full xl:w-[1013px]">
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
                <DocumentThumbnail preview={doc.fileUrl} label={`Preview ${doc.name}`} />

                {/* Status row at bottom */}
                {doc.state === "validated" ? (
                  <ChangeButton onClick={() => handleSimulatedUpload(doc.id)} />
                ) : (
                  <span className="w-full text-center bg-[#FFF5EC] text-[#E05A10] text-xs sm:text-[13px] font-semibold py-2.5 px-3 rounded-[8px] truncate block">
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
              className="border border-[#CFD8DE] rounded-[8px] p-4 bg-white h-[235px] flex flex-col items-start justify-between gap-4 shadow-sm flex-1"
            >
              {/* Dashed Inner Container */}
              <div className="w-full flex-1 border border-dashed border-[#CFD8DE] rounded-[8px] p-2 flex flex-col items-center justify-center text-center gap-1.5 bg-[#fafbfc]">
                <div className="flex items-center justify-center">
                  <CloudUploadIcon />
                </div>
                <span className="text-xs lg:text-sm font-bold text-text-dark font-title line-clamp-1">
                  {doc.name}
                </span>
                <span className="text-[9px] sm:text-[10px] text-text-light font-medium uppercase tracking-tight leading-tight block">
                  PDF, JPG or PNG <br /> (Max 5MB)
                </span>
              </div>

              {/* Browse Files Button */}
              <button 
                onClick={() => handleSimulatedUpload(doc.id)}
                className="w-full border border-primary rounded-[8px] py-2 px-3 text-xs font-bold text-primary bg-white hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                <FileIcon />
                <span>Browse files</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
