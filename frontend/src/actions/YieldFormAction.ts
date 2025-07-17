"use server";

export async function yieldPrediction(
  previousState: void | null,
  formData: FormData
) {
  try {
    const area = formData.get("area")?.toString() ?? "0";
    const payload = {
      cropType: formData.get("cropType")?.toString() || "",
      district: formData.get("district")?.toString() || "",
      area: parseFloat(area),
      season: formData.get("season")?.toString() || "",
    };

    const res = await fetch("http://localhost:8080/api/yield-prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorJson = await res.json();
      console.log(errorJson);
      return errorJson;
    }

    const data = await res.json();
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
    return { error: "Failed to fetch prediction." };
  }
}
