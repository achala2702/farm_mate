type CropCardProps = {
  cropName: string;
  cropImg: string;
};

export default function CropCard({ cropName, cropImg }: CropCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 pb-3 bg-custom-card-bg rounded-2xl w-full">
      <img
        src={cropImg}
        className="rounded-t-2xl object-cover h-24 w-full md:h-28 xl:h-32"
      />
      <p className="text-sm lg:text-base">{cropName}</p>
    </div>
  );
}
