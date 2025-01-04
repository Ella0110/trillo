import Card from "../components/card";
import nextConfig from "../../../next.config.mjs";
import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="px-40 py-4  text-black flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-xl">Hot Places</div>

        <div className="flex gap-10  justify-between">

          <div className="flex flex-col gap-4 justify-center">
            <div className=" bg-gray-300">
              <Image src="" alt="" width={180} height={150} className="object-cover" />
            <div className="flex flex-col gap-1 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-light">Auckland</div>
              <div className="text-gray-500 text-xs">Subheading</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className=" bg-gray-300">
              <Image src="" alt="" width={180} height={150} className="object-cover" />
            <div className="flex flex-col gap-1 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-light">Auckland</div>
              <div className="text-gray-500 text-xs">Subheading</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className=" bg-gray-300">
              <Image src="" alt="" width={180} height={150} className="object-cover" />
            <div className="flex flex-col gap-1 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-light">Auckland</div>
              <div className="text-gray-500 text-xs">Subheading</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center">
            <div className=" bg-gray-300">
              <Image src="" alt="" width={180} height={150} className="object-cover" />
            <div className="flex flex-col gap-1 mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-lg font-light">Auckland</div>
              <div className="text-gray-500 text-xs">Subheading</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xl">Trending Stays</div>
        <div className="flex gap-10 flex-nowrap">
        <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-3.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />
        </div>
      </div>
    </div>
  );
}