import YeildForm from "@/components/yeild_prediction/YieldForm";
import RootLayout from "@/layouts/RootLayout";
import CropCard from "@/components/CropCard";

import maizeImg from "@/assets/images/maize.webp";
import grapesImg from "@/assets/images/grapes.webp";
import orangeImg from "@/assets/images/orange.webp";
import pepperImg from "@/assets/images/pepper.webp";
import potatoImg from "@/assets/images/potato.webp";
import strawberryImg from "@/assets/images/strawberry.webp";
import tomatoImg from "@/assets/images/tomato.webp";
import YieldPredictionResult from "@/components/yeild_prediction/YieldPredictionResult";

const suportedCrops = [
  { cropName: "Maize", cropImage: maizeImg.src },
  { cropName: "Grapes", cropImage: grapesImg.src },
  { cropName: "Orange", cropImage: orangeImg.src },
  { cropName: "Pepper", cropImage: pepperImg.src },
  { cropName: "Potato", cropImage: potatoImg.src },
  { cropName: "Strawberry", cropImage: strawberryImg.src },
  { cropName: "Tomato", cropImage: tomatoImg.src },
];

export default function YeildPrediction() {
  return (
    <RootLayout>
      <div>
        <h1 className="text-2xl xl:text-4xl font-bold mb-2">
          Crop Yeild Prediction
        </h1>
        <p className="text-custom-foreground-muted text-lg">
          Estimate your potential crop yield based on various factors
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <YeildForm />
          <YieldPredictionResult />
        </div>
      </div>
      <div>
        <h1 className="text-2xl xl:text-4xl font-bold">Supported Crops</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
          {suportedCrops.map((crop) => (
            <CropCard
              key={crop.cropName}
              cropName={crop.cropName}
              cropImg={crop.cropImage}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
