"use client";

import { useState } from "react";
import RootLayout from "@/layouts/RootLayout";
import DetectionResults from "@/components/disease_detection/DetectionResults";
import UploadImageCard from "@/components/disease_detection/UploadImageCard";

export default function DiseaseDetection() {
  const [uplodedImage, setUploadedImage] = useState<File | null>(null);

  return (
    <RootLayout>
      <div className="">
        <h1 className="text-2xl xl:text-4xl font-bold mb-2">
          Plant Disease Detection
        </h1>
        <p className="text-custom-foreground-muted text-lg">
          Upload an image of your crop to identify potential disease
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <UploadImageCard
            uplodedImage={uplodedImage}
            setUploadedImage={setUploadedImage}
          />
          <DetectionResults />
        </div>
      </div>
    </RootLayout>
  );
}
