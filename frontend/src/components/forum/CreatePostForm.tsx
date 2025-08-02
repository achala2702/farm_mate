"use client";

import { useState, useRef } from "react";
import Button from "../button";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function CreatePostForm() {
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeSelectedImage = () => {
    if (inputRef.current) inputRef.current.value = "";
    setPreviewUrl(null);
  };

  const handleUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //submitting the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    //setting the image
    if (inputRef.current?.files?.[0]) {
      formData.set("image", inputRef.current.files[0]);
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/create`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Failed to create post.");
      } else {
        form.reset();
        setPreviewUrl(null);
        router.back();
      }
    } catch (err) {
      setError("Something went wrong.");
      console.log(err)
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="bg-custom-card-bg rounded-xl border-1 border-border-gray-400 p-6 flex items-start justify-center flex-col">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-4 mt-4"
      >
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

        <div className="border-1 rounded-xl border-dashed min-h-60 flex flex-col items-center justify-center text-custom-foreground-muted gap-2 p-8">
          {previewUrl ? (
            <>
              <img
                src={previewUrl}
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
            </>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            ref={inputRef}
            onChange={handleUploadImage}
            className="hidden pointer-events-none"
          />
        </div>

        <Button
          type="submit"
          text={isPending ? "Posting..." : "Post"}
          disabled={isPending}
          className="w-full bg-primaryGreen px-4 py-2 border-1 my-2 rounded-xl"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
}


// "use client";

// import { useState, useRef, useActionState } from "react";
// import Button from "../button";
// import { Icon } from "@iconify/react";
// import CreatePostAction from "@/actions/CreatePostAction";

// export default function CreatePostForm() {
//   const [error, setError] = useState<null | string>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [state, action, isPending] = useActionState(CreatePostAction, null);

//   const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   //remove the selected image
//   const removeSelectedImage = () => {
//     if (inputRef.current) inputRef.current.value = "";
//     setPreviewUrl(null);
//   };

//   const handleUploadButtonClick = () => {
//     if (inputRef.current) {
//       inputRef.current.click();
//     }
//   };

//   return (
//     <div className="bg-custom-card-bg rounded-xl border-1 border-border-gray-400 p-6 flex items-start justify-center flex-col">
//       <form
//         action={action}
//         className="w-full space-y-4 mt-4"
//       >
//         <div>
//           <label htmlFor="title">Title: </label>
//           <input
//             id="title"
//             name="title"
//             className="w-full p-2 border rounded-md bg-background"
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="category">Category: </label>
//           <select
//             id="category"
//             name="category"
//             className="w-full p-2 border rounded-md bg-background"
//             required
//             defaultValue={""}
//           >
//             <option value="" disabled>
//               Select a category
//             </option>
//             <option value="plant-diseases">Plant Diseases</option>
//             <option value="crop-management">Crop Management</option>
//             <option value="organic-farming">Organic Farming</option>
//             <option value="pest-control">Pest Control</option>
//             <option value="irrigation">Irrigation</option>
//             <option value="soil-and-fertilizers">Soil & Fertilizers</option>
//             <option value="seeds-and-varieties">Seeds & Varieties</option>
//             <option value="farming-policies">Farming Policies</option>
//             <option value="sustainable-practices">Sustainable Practices</option>
//             <option value="farm-technology">Farm Technology</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="content">Content: </label>
//           <textarea
//             id="content"
//             name="content"
//             rows={4}
//             className="w-full p-2 border rounded-md bg-background"
//             required
//           />
//         </div>

//         <div className="border-1 rounded-xl border-dashed min-h-60 flex flex-col items-center justify-center text-custom-foreground-muted gap-2 p-8">
//           {previewUrl ? (
//             <>
//               <img
//                 src={previewUrl}
//                 alt="Uploaded Crop Image"
//                 className="max-h-64 object-contain mb-4 rounded-md"
//               />
//               <Button
//                 text="Remove Image"
//                 onClick={removeSelectedImage}
//                 className="bg-background px-4 py-2 border-1 rounded-xl"
//               />
//             </>
//           ) : (
//             <>
//               <Icon icon="solar:upload-broken" width={32} />
//               <h2 className="text-base md:text-xl font-bold text-center">
//                 Drag and drop or click to upload
//               </h2>
//               <p className="text-sm md:text-lg text-center">
//                 supported formats: JPG, PNG, WEBP
//               </p>
//               <Button
//                 text="Browse Files"
//                 onClick={handleUploadButtonClick}
//                 className="bg-background p-3 md:p-4 border-1 rounded-xl"
//               />
//             </>
//           )}
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             ref={inputRef}
//             onChange={handleUploadImage}
//             className="hidden pointer-events-none"
//           />
//         </div>

//         <Button
//           type="submit"
//           text="Post"
//           className="w-full bg-primaryGreen px-4 py-2 border-1 my-2 rounded-xl"
//           onClick={() => {
//             setError(null);
//             setPreviewUrl(null);
//           }}
//         />
//         {error && <p className="text-red-500 text-sm">{error}</p>}
//       </form>
//     </div>
//   );
// }
