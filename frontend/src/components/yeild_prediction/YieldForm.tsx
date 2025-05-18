import React, { useState } from "react";
import Button from "../button";

type YeildFormProps = {
  onResponse: (data: string | null) => void;
};

type formDataType = {
  cropType: string;
  district: string;
  area: number;
  season: string;
};

export default function YeildForm({ onResponse }: YeildFormProps) {
  const [formData, setFormData] = useState<formDataType>({
    cropType: "",
    district: "",
    area: 0,
    season: "",
  });

  const handlePridictClick = () => {};

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="lg:col-span-2 bg-custom-card-bg rounded-xl border-1 border-border-gray-400 p-6 flex items-start justify-center flex-col">
      <h1 className="text-xl xl:text-2xl font-bold">Enter Crop Details</h1>
      <p>
        Fill in the details of your farming conditions to get accurate yield
        predictions
      </p>
      <form className="w-full space-y-4 mt-4">
        <div>
          <label htmlFor="cropType">Crop Type: </label>
          <select
            id="cropType"
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
            required
          >
            <option value="" disabled>
              Select a crop
            </option>
            <option value="maize">Maize</option>
            <option value="grapes">Grapes</option>
            <option value="orange">Orange</option>
            <option value="pepper">Pepper</option>
            <option value="potato">Potato</option>
            <option value="strawberry">Strawberry</option>
            <option value="tomato">Tomato</option>
          </select>
        </div>

        <div>
          <label htmlFor="district">District: </label>
          <select
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
            required
          >
            <option value="" disabled>
              Select a district
            </option>
            <option value="colombo">Colombo</option>
            <option value="gampaha">Gampaha</option>
            <option value="kaluthara">Kaluthara</option>
            <option value="kandy">Kandy</option>
            <option value="matale">Matale</option>
            <option value="nuwara eliya">Nuwara Eliya</option>
            <option value="galle">Galle</option>
            <option value="matara">Matara</option>
            <option value="hanbantota">Hambantota</option>
            <option value="jaffna">Jaffna</option>
            <option value="mannar">Mannar</option>
            <option value="vavuniya">Vavuniya</option>
            <option value="mullativu">Mullativu</option>
            <option value="Batticaloa">Killinochchi</option>
            <option value="ampara">Ampara</option>
            <option value="trincomalee">Trincomalee</option>
            <option value="kurunegala">Kurunegala</option>
            <option value="puttalam">Puttalam</option>
            <option value="anuradhapura">Anuradhapura</option>
            <option value="polonnaruwa">Polonnaruwa</option>
            <option value="badulla">Badulla</option>
            <option value="ratnapura">Ratnapura</option>
            <option value="monaragala">Monaragala</option>
            <option value="kegalla">Kegalla</option>
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
            value={formData.area}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
            required
          />
        </div>

        <div>
          <label htmlFor="season">Season: </label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-background"
            required
          >
            <option value="" disabled>
              Select season
            </option>
            <option value="yala">Yala</option>
            <option value="maha">Maha</option>
            <option value="year">Whole Year</option>
          </select>
        </div>

        <Button
          text="Predict Yield"
          onClick={handlePridictClick}
          className="w-full bg-primaryGreen px-4 py-2 border-1 my-2 rounded-xl"
        />
      </form>
    </div>
  );
}
