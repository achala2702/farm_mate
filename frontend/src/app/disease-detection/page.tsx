import RootLayout from "@/layouts/RootLayout";
import DetectionResults from "@/components/disease_detection/DetectionResults";
import UploadImageCard from "@/components/disease_detection/UploadImageCard";
import CropCard from "@/components/CropCard";
import DiseaseCard from "@/components/disease_detection/DiseaseCard";

import maizeImg from "@/assets/images/maize.webp";
import appleImg from "@/assets/images/apples.webp";
import cherryImg from "@/assets/images/cherry.webp";
import grapesImg from "@/assets/images/grapes.webp";
import orangeImg from "@/assets/images/orange.webp";
import peachImg from "@/assets/images/Peach.webp";
import pepperImg from "@/assets/images/pepper.webp";
import potatoImg from "@/assets/images/potato.webp";
import strawberryImg from "@/assets/images/strawberry.webp";
import tomatoImg from "@/assets/images/tomato.webp";

const suportedCrops = [
  { cropName: "Maize", cropImage: maizeImg.src },
  { cropName: "Apple", cropImage: appleImg.src },
  { cropName: "Cherry", cropImage: cherryImg.src },
  { cropName: "Grapes", cropImage: grapesImg.src },
  { cropName: "Orange", cropImage: orangeImg.src },
  { cropName: "Peach", cropImage: peachImg.src },
  { cropName: "Pepper", cropImage: pepperImg.src },
  { cropName: "Potato", cropImage: potatoImg.src },
  { cropName: "Strawberry", cropImage: strawberryImg.src },
  { cropName: "Tomato", cropImage: tomatoImg.src },
];

const commonDiseases = [
  { diseaseName: "Scab", crops: ["Apple"], symptoms: "" },
  { diseaseName: "Black Rot", crops: ["Apple", "Grape"], symptoms: "" },
  { diseaseName: "Rust", crops: ["Apple"], symptoms: "" },
  { diseaseName: "Powdery Mildew", crops: ["Cherry"], symptoms: "" },
  { diseaseName: "Gray Leaf Spot", crops: ["Maize"], symptoms: "" },
  { diseaseName: "Common Rust", crops: ["Maize"], symptoms: "" },
  { diseaseName: "Nothern Leaf", crops: ["Maize"], symptoms: "" },
  { diseaseName: "Black Measles", crops: ["Grape"], symptoms: "" },
  { diseaseName: "Leaf Blight", crops: ["Grape"], symptoms: "" },
  { diseaseName: "Citrus Canker", crops: ["Orange"], symptoms: "" },
  { diseaseName: "Yellow Leaf", crops: ["Orange"], symptoms: "" },
  { diseaseName: "Citrus Greening", crops: ["Orange"], symptoms: "" },
  { diseaseName: "Bacterial Spot", crops: ["Peach", "Pepper", "Tomato"], symptoms: "" },
  { diseaseName: "Early Blight", crops: ["Potato", "Tomato"], symptoms: "" },
  { diseaseName: "Late Blight", crops: ["Potato", "Tomato"], symptoms: "" },
  { diseaseName: "Leaf Scorch", crops: ["Strawberry"], symptoms: "" },
  { diseaseName: "Leaf Mold", crops: ["Tomato"], symptoms: "" },
  { diseaseName: "Septoria Leaf Spot", crops: ["Tomato"], symptoms: "" },
  { diseaseName: "Spider Mites", crops: ["Tomato"], symptoms: "" },
  { diseaseName: "Target Spot", crops: ["Tomato"], symptoms: "" },
  { diseaseName: "Yellow Leaf Curl Virus", crops: ["Tomato"], symptoms: "" },
  { diseaseName: "Mosaic Virus", crops: ["Tomato"], symptoms: "" },
];

export default function DiseaseDetection() {
  return (
    <RootLayout>
      <div className="">
        <h1 className="text-2xl xl:text-4xl font-bold mb-2">
          Plant Disease Detection
        </h1>
        <p className="text-custom-foreground-muted text-lg">
          Upload an image of your crop to identify potential disease
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
          <UploadImageCard />
          <DetectionResults />
        </div>
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
        <h1 className="text-2xl xl:text-4xl font-bold">Common Plant Disease</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
          {commonDiseases.map((disease) => (
            <DiseaseCard
              key={disease.diseaseName}
              diseaseName={disease.diseaseName}
              crops={disease.crops}
              symptoms={disease.symptoms}
            />
          ))}
        </div>
      </div>
    </RootLayout>
  );
}
