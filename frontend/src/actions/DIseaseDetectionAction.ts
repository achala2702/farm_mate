"use server";

export default async function DiseaseDetection(
  prevState: void | null,
  formData: FormData
) {

  try {

    const res = await fetch("http://localhost:8080/api/disease-detection", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const errorJson = await res.json();
      console.log(errorJson);
      return errorJson;
    }

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
    return { error: "Failed to fetch prediction." };
  }
}
