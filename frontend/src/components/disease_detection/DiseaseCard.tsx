type DiseaseCardProps = {
  diseaseName: string;
  crops: string[];
  symptoms: string;
};

export default function DiseaseCard({
  diseaseName,
  crops,
  symptoms,
}: DiseaseCardProps) {
  return (
    <div className="bg-custom-card-bg rounded-2xl p-6 flex items-start justify-center gap-4 flex-col">
      <h1 className="text-xl xl:text-2xl font-bold">{diseaseName}</h1>
      <div className="flex flex-col gap-2">
        <p>Crops: {crops.join(", ")}</p>
        <p>Symptoms: {symptoms}</p>
      </div>
    </div>
  );
}
