import Image from "next/image";
export default function PlaceCard({ cardPhoto, cardHeading, cardSubHeading }) {
  return (
    <div className="flex flex-col justify-center gap-4 pb-3">
      <div className="bg-gray-300 h-[10rem]  w-[10rem]">
        <Image
          src={cardPhoto}
          alt=""
          width={400}
          height={300}
          className="h-[10rem] object-cover shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-lg font-light">{cardHeading}</div>
        <div className="text-xs text-gray-500">{cardSubHeading}</div>
      </div>
    </div>
  );
}
