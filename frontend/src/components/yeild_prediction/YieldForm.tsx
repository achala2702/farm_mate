"use client";

import { yieldPrediction } from "@/actions/YieldFormAction";
import Button from "../button";
import { useActionState, useEffect } from "react";
import { setYieldData } from "@/redux/slices/YieldPredectionSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";

export default function YeildForm() {
  const [state, action, isPending] = useActionState(yieldPrediction, null);
  const dispatch = useDispatch<AppDispatch>();

  //setting the data if it success
  useEffect(() => {
    if (state?.success) {
      console.log(state.data);
      dispatch(setYieldData(state.data));
    }
  }, [state]);

  return (
    <div className="lg:col-span-2 bg-custom-card-bg rounded-xl border-1 border-border-gray-400 p-6 flex items-start justify-center flex-col">
      <h1 className="text-xl xl:text-2xl font-bold">Enter Crop Details</h1>
      <p>
        Fill in the details of your farming conditions to get accurate yield
        predictions
      </p>
      <form action={action} className="w-full space-y-4 mt-4">
        <div>
          <label htmlFor="cropType">Crop Type: </label>
          <select
            id="cropType"
            name="cropType"
            className="w-full p-2 border rounded-md bg-background"
            required
            defaultValue={""}
          >
            <option value="" disabled>
              Select a crop
            </option>
            <option value="Maize">Maize</option>
            <option value="Grapes">Grapes</option>
            <option value="Orange">Orange</option>
            <option value="Pepper">Pepper</option>
            <option value="Potato">Potato</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Tomato">Tomato</option>
          </select>
        </div>

        <div>
          <label htmlFor="district">District: </label>
          <select
            id="district"
            name="district"
            className="w-full p-2 border rounded-md bg-background"
            required
            defaultValue={""}
          >
            <option value="" disabled>
              Select a district
            </option>
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kaluthara">Kaluthara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="Nuwara Eliya">Nuwara Eliya</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hanbantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Mannar">Mannar</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullativu">Mullativu</option>
            <option value="Batticaloa">Killinochchi</option>
            <option value="Ampara">Ampara</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Badulla">Badulla</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Monaragala">Monaragala</option>
            <option value="Kegalla">Kegalla</option>
          </select>
        </div>

        <div>
          <label htmlFor="area">Area (hectares)</label>
          <input
            type="number"
            id="area"
            name="area"
            step="0.1"
            min="0"
            defaultValue={0}
            className="w-full p-2 border rounded-md bg-background"
            required
          />
        </div>

        <div>
          <label htmlFor="season">Season: </label>
          <select
            id="season"
            name="season"
            className="w-full p-2 border rounded-md bg-background"
            required
            defaultValue={""}
          >
            <option value="" disabled>
              Select season
            </option>
            <option value="Yala">Yala</option>
            <option value="Maha">Maha</option>
            <option value="Year">Whole Year</option>
          </select>
        </div>

        <Button
          type="submit"
          text={isPending ? "Predciting..." : "Predict Yield"}
          className="w-full bg-primaryGreen px-4 py-2 border-1 my-2 rounded-xl"
        />
      </form>
    </div>
  );
}
