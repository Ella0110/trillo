import { useState } from "react";
import nextConfig from "../../../next.config";
import DateInput from "../components/dateinput";
import PricePanel from "../components/pricepanel";
import Link from "next/link";

export default function Reserve({ hotel }) {
  var date = new Date();
  const today = date.toISOString().split("T")[0];
  const tomorrow = new Date(date.getTime() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(1);

  let originalPrice = Math.ceil(hotel.bookings[0].price / 100) * 100;
  let CurrentPrice = hotel.bookings[0].price

  const queryString = new URLSearchParams({
    id:hotel.hotelId,
    checkIn,
    checkOut,
    guests
  })
  return (
    <div className="flex flex-col gap-4 p-7 text-gray-800 bg-white shadow-lg">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <div className="text-gray-500 font-medium text-xl line-through">
            ${originalPrice}
          </div>
          <div className="text-gray-700 font-medium text-xl">
            ${CurrentPrice}
          </div>
          <div className="text-gray-700">night</div>
        </div>
        <div className="flex gap-1 items-center">
          <svg className="w-4 h-4 fill-gray-600">
            <use
              xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}
            ></use>
          </svg>
          <div className="text-gray-700 ">{hotel.totalRating} ·</div>
          <div className="text-gray-500 ">{hotel.totalVote}</div>
          <div className="text-gray-500">reviews</div>
        </div>
      </div>
      {/* Date */}
      <div className="grid grid-cols-2 rounded-lg border-gray-500 border-[1px]">
        <div className="border-gray-500 border-r-[1px] p-3">
          <label className="text-xs font-bold text-gray-800">CHECK-IN</label>
          <DateInput value={checkIn} minDate={today} onChange={setCheckIn} />
        </div>
        <div className="p-3">
          <label className="text-xs font-bold text-gray-800">CHECK-OUT</label>
          <DateInput value={checkOut} minDate={checkIn || today} onChange={setCheckOut} />
        </div>

        <div className="flex flex-col col-span-2 border-gray-700 border-t-[1px] p-3">
          <label className="text-xs font-bold text-gray-800">GUEST</label>
          <input
            type="number"
            className="w-full bg-transparent  hover:text-gray-500 max-w-12 focus:outline-none"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>
      </div>
      <Link
        href={`/order?${queryString}`}
        className="flex items-center justify-center rounded-lg h-10 text-white bg-pink-600"
      >
        Reserve
      </Link>
      <div className="flex items-center justify-center text-xs text-gray-500">
        You won&apos;t be charged yet
      </div>
      <PricePanel 
        hotel={hotel}
        checkIn={checkIn}
        checkOut={checkOut}/>
    </div>
  );
}
