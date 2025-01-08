import HotelCard from "../components/card/hotelcard";
import nextConfig from "../../../next.config.mjs";
import Image from "next/image";
import PlaceCard from "../components/card/placecard";

export default function HomeContent() {
  return (
    <div className="flex flex-col gap-6 px-40 py-8 text-black">
      <div className="flex flex-col gap-2">
        <div className="text-xl">Hot Places</div>

        <div className="flex gap-10 w-full justify-between flex-none overflow-x-scroll">
          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardHeading="Auckland"
            cardSubHeading="Britomart"
          />

          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardHeading="QueenStown"
            cardSubHeading="River"
          />

          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
            cardHeading="Duntin"
            cardSubHeading="Station"
          />

          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardHeading="Waipu"
            cardSubHeading="Cave"
          />

          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardHeading="Wanaka"
            cardSubHeading="Lake"
          />

          <PlaceCard
            cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
            cardHeading="NZ"
            cardSubHeading="Nature"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xl">Trending Stays</div>

        <div className="flex gap-10 flex-none overflow-x-scroll text-sm">
          <HotelCard
            cardSize="12rem"
            cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardAddress="Groveland, California"
            cardRate="4.91"
            cardDetailAddress="Yosemite National Park"
            cardPrice="$289"
          />

          <HotelCard
            cardSize="12rem"
            cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardAddress="Groveland, California"
            cardRate="4.91"
            cardDetailAddress="Yosemite National Park"
            cardPrice="$289"
          />

          <HotelCard
            cardSize="12rem"
            cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardAddress="Groveland, California"
            cardRate="4.91"
            cardDetailAddress="Yosemite National Park"
            cardPrice="$289"
          />

          <HotelCard
            cardSize="12rem"
            cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
            cardAddress="Groveland, California"
            cardRate="4.91"
            cardDetailAddress="Yosemite National Park"
            cardPrice="$289"
          />

          <HotelCard
            cardSize="12rem"
            cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
            cardAddress="Groveland, California"
            cardRate="4.91"
            cardDetailAddress="Yosemite National Park"
            cardPrice="$289"
          />
        </div>
      </div>
    </div>
  );
}
