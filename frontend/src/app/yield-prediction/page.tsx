import YeildForm from "@/components/yeild_prediction/YieldForm";
import RootLayout from "@/layouts/RootLayout";
import CropCard from "@/components/CropCard";

import maizeImg from "@/assets/images/maize.jpg";
import grapesImg from "@/assets/images/grapes.png";
import orangeImg from "@/assets/images/orange.jpg";
import pepperImg from "@/assets/images/pepper.jpg";
import potatoImg from "@/assets/images/potato.jpg";
import strawberryImg from "@/assets/images/strawberry.jpg";
import tomatoImg from "@/assets/images/tomato.webp";

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
          <div className="rounded-xl border-1 border-border-gray-400 bg-custom-card-bg p-6">
            <h1 className="text-xl xl:text-2xl font-bold mb-4">
              Detection Results
            </h1>
            <p>gdgdg</p>
          </div>
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
