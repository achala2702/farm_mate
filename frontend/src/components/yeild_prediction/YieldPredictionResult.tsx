"use client";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

export default function () {
  const yieldData = useSelector(
    (state: RootState) => state.predictYield.yieldData
  );
  return (
    <div className="rounded-xl border-1 border-border-gray-400 bg-custom-card-bg p-6">
      <h1 className="text-xl xl:text-2xl font-bold mb-4">Detection Results</h1>
      {yieldData && (
        <>
          <p>
            <span className="font-bold">Crop Name: </span>
            {yieldData?.cropType}
          </p>
          <p>
            <span className="font-bold">District: </span>
            {yieldData?.district}
          </p>
          <p>
            <span className="font-bold">Area: </span>
            {yieldData?.area} ha
          </p>
          <p>
            <span className="font-bold">Season: </span>
            {yieldData?.season}
          </p>
          <p>
            <span className="font-bold">Estimated Production: </span>
            {yieldData?.prediction} mt
          </p>
        </>
      )}
    </div>
  );
}
