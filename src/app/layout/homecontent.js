import HotelCard from "../components/card/hotelcard";
import nextConfig from "../../../next.config.mjs";
import Image from "next/image";
import PlaceCard from "../components/card/placecard";

export default function HomeContent({hotels}) {
  return (
    <div className="flex flex-col gap-6 px-40 py-8 text-black">
      <div className="flex flex-col gap-2">
        <div className="text-xl">Hot Places</div>

        <div className="flex gap-10 w-full justify-between flex-none overflow-x-scroll">
          {hotels.map((hotel, i) => (
            <PlaceCard
              key={i}
              cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
              cardHeading={hotel.address.split(",")[0]}
              cardSubHeading={hotel.address.split(",")[1]}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-xl">Trending Stays</div>
        <div className="flex gap-10 flex-none overflow-x-scroll text-sm">
          {hotels.map((hotel, i) => (
            <HotelCard
              key={i}
              cardSize="12rem"
              // cardPhoto={hotel.gellary}
              cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
              cardAddress={hotel.address}
              cardRate={hotel.totalRating}
              cardHotelName={hotel.name}
              cardPrice={hotel.bookings[0].price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
