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
