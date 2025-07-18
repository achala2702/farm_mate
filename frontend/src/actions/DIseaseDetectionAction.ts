"use server";

export type DiseaseResponseDto = {
  prediction: string;
};

type DiseaseDetectionResult =
  | { success: true; data: DiseaseResponseDto }
  | { success: false; error: any };

export default async function DiseaseDetection(
  prevState: void | null,
  formData: FormData
): Promise<DiseaseDetectionResult> {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/disease-detection`, {
      method: "POST",
      body: formData,
    });
    ("Failed to fetch prediction.");

    if (!res.ok) {
      const errorJson = await res.json();
      console.log(errorJson);
      return { success: false, error: errorJson };
    }

    const data: DiseaseResponseDto = await res.json();

    return { success: true, data };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Failed to fetch prediction." };
  }
}
