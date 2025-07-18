"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function DetectionResults() {
  const diseaseData = useSelector(
    (state: RootState) => state.detectDisease.diseaseData
  );
  return (
    <div className="rounded-xl border-1 border-border-gray-400 bg-custom-card-bg p-6">
      <h1 className="text-xl xl:text-2xl font-bold mb-4">Detection Results</h1>
      <p>
        {diseaseData?.prediction.includes("___")
          ? diseaseData.prediction.split("___")[1].replace(/_/g, " ")
          : diseaseData?.prediction.replace(/_/g, " ")}
      </p>
    </div>
  );
}
