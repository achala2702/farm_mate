"use client";

import React, { useState, useRef, DragEvent } from "react";
import Button from "../button";
import { Icon } from "@iconify/react";
import DiseaseDetection from "@/actions/DIseaseDetectionAction";
import { setDiseaseData } from "@/redux/slices/DiseaseDetectionSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

export default function UploadImageCard({}) {
  const [uplodedImage, setUploadedImage] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  //opeening the file upload dialog
  const handleUploadButtonClick = () => {
    inputRef.current?.click();
  };

  //handling the uploaded image
  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  //removing selected image
  const removeSelectedImage = () => {
    setUploadedImage(null);
    setError(null);
  };

  //handle file drop to the div
  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setUploadedImage(file);
    }
  };

  //handle drag over
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  //handle drag leave
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setError(null);

    const formData = new FormData();
    if (uplodedImage) {
      formData.append("image", uplodedImage);
    }

    try {
      const data = await DiseaseDetection(null, formData);
      setLoading(false);

      if (data.success) {
        dispatch(setDiseaseData(data.data));
        removeSelectedImage();
      } else if(data.error.errors) {
        setError(data.error.errors);
      } else{
        setError(data.error)
      }
    } catch (err) {
      console.error("Detection failed:", err);
      setError("err");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="rounded-xl border-1 border-border-gray-400 bg-custom-card-bg p-6 lg:col-span-2"
    >
      <div className="flex justify-between items-center pb-2">
        <h1 className="text-xl xl:text-2xl font-bold mb-4">Upload Image</h1>
        <Button
          disabled={!uplodedImage}
          className={`${
            !uplodedImage ? "text-foreground/30 pointer-events-none" : " "
          }  bg-background p-3 text-sm border-1 rounded-xl`}
          type="submit"
          text={loading?"Diagnosing...":"Diagnose Now"}
        />
      </div>

      <div
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-1 rounded-xl border-dashed min-h-60 flex flex-col items-center justify-center text-custom-foreground-muted gap-2 p-8 ${
          isDragging ? "border-border-gray-200" : "border-border-gray-400"
        }`}
      >
        {uplodedImage ? (
          <>
            <img
              src={uplodedImage ? URL.createObjectURL(uplodedImage) : ""}
              alt="Uploaded Crop Image"
              className="max-h-64 object-contain mb-4 rounded-md"
            />
            <Button
              text="Remove Image"
              onClick={removeSelectedImage}
              className="bg-background px-4 py-2 border-1 rounded-xl"
            />
          </>
        ) : (
          <>
            <Icon icon="solar:upload-broken" width={32} />
            <h2 className="text-base md:text-xl font-bold text-center">
              Drag and drop or click to upload
            </h2>
            <p className="text-sm md:text-lg text-center">
              supported formats: JPG, PNG, WEBP
            </p>
            <Button
              text="Browse Files"
              onClick={handleUploadButtonClick}
              className="bg-background p-3 md:p-4 border-1 rounded-xl"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              ref={inputRef}
              onChange={handleUploadImage}
              className="hidden pointer-events-none"
            />
          </>
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </form>
  );
}
