import ButtonGroup from "../components/pilltable";
import HotelCard from "../components/card/hotelcard";
import nextConfig from "../../../next.config.mjs";

export default function RightPanel({hotels}) {
  return (
  <div className="flex flex-col basis-4/5 mx-10 mt-8 text-sm font-normal text-gray-600 dark:text-gray-300">
    <div className="flex justify-between items-center mb-8">
      <div className="">1000 Properties in California</div>
      <ButtonGroup />
    </div>
    <div className="grid grid-cols-3 gap-10 mx-10">

      {hotels.map((hotel, i) => (
        <HotelCard
          key={i}
          cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
          cardAddress={hotel.address}
          cardRate={hotel.totalRating}
          cardHotelName={hotel.name}
          cardPrice={hotel.bookings[0].price}
          hotelId={hotel.hotelId}
        />
      ))}
      

      {/* <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-3.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-2.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      />

      <HotelCard
        cardPhoto={`${nextConfig.basePath}/img/hotel-1.jpg`}
        cardAddress="Groveland, California"
        cardRate="4.91"
        cardDetailAddress="Yosemite National Park"
        cardPrice="$289"
      /> */}
    </div>
  </div>
  );
}