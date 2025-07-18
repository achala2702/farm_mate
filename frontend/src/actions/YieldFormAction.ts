"use server";

export type YieldResponseDto = {
  cropType: string;
  district: string;
  area: number;
  season: string;
  prediction: number;
};

type YieldPredictionResult =
  | { success: true; data: YieldResponseDto }
  | { success: false; error: any };

export async function yieldPrediction(
  previousState: YieldPredictionResult | null,
  formData: FormData
): Promise<YieldPredictionResult> {
  try {
    const area = formData.get("area")?.toString() ?? "0";
    const payload = {
      cropType: formData.get("cropType")?.toString() || "",
      district: formData.get("district")?.toString() || "",
      area: parseFloat(area),
      season: formData.get("season")?.toString() || "",
    };

    const res = await fetch(`${process.env.BACKEND_URL}/yield-prediction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorJson = await res.json();
      console.log(errorJson);
      return { success: false, error: errorJson };
    }

    const data: YieldResponseDto = await res.json();
    return { success: true, data };
  } catch (e) {
    console.log(e);
    return { success: false, error: "Failed to fetch prediction." };
  }
}
