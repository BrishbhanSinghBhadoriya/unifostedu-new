"use client";

import React, { useRef, useState } from "react";
import { Upload, FileText as FileTextIcon, X } from "lucide-react";

export default function FileUpload({ title, acceptedFiles, onFilesChange }) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
    onFilesChange && onFilesChange([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    onFilesChange && onFilesChange(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
    onFilesChange && onFilesChange([...files, ...newFiles]);
  };

  const handleDragOver = (e) => { e.preventDefault(); };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer transition-colors hover:border-blue-400 hover:bg-blue-50"
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input type="file" ref={fileInputRef} className="hidden" multiple accept={acceptedFiles} onChange={handleFileChange} />
      <Upload size={24} className="mx-auto text-gray-400 mb-2" />
      <p className="font-medium text-gray-700">{title}</p>
      <p className="text-sm text-gray-500 mt-1">Click to upload or drag and drop</p>
      <p className="text-xs text-gray-400 mt-2">{acceptedFiles}</p>
      {files.length > 0 && (
        <div className="mt-4 text-left">
          <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <FileTextIcon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="text-gray-400 hover:text-red-500">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


