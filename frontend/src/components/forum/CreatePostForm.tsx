"use client";

import { useState } from "react";
import Button from "../button";

export default function CreatePostForm() {
  const [error, setError] = useState<null | string>(null);
  return (
    <div className="bg-custom-card-bg rounded-xl border-1 border-border-gray-400 p-6 flex items-start justify-center flex-col">
      <form className="w-full space-y-4 mt-4">
        <div>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            className="w-full p-2 border rounded-md bg-background"
            required
          />
        </div>

        <div>
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            name="category"
            className="w-full p-2 border rounded-md bg-background"
            required
            defaultValue={""}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="plant-diseases">Plant Diseases</option>
            <option value="crop-management">Crop Management</option>
            <option value="organic-farming">Organic Farming</option>
            <option value="pest-control">Pest Control</option>
            <option value="irrigation">Irrigation</option>
            <option value="soil-and-fertilizers">Soil & Fertilizers</option>
            <option value="seeds-and-varieties">Seeds & Varieties</option>
            <option value="farming-policies">Farming Policies</option>
            <option value="sustainable-practices">Sustainable Practices</option>
            <option value="farm-technology">Farm Technology</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            className="w-full p-2 border rounded-md bg-background"
            required
          />
        </div>

        <Button
          type="submit"
          text="Post"
          className="w-full bg-primaryGreen px-4 py-2 border-1 my-2 rounded-xl"
          onClick={() => setError(null)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}
