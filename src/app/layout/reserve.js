import { useState } from "react";
import nextConfig from "../../../next.config.mjs";

export default function Reserve() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  // const handleSearch = () => {
  //   console.log({location, checkIn, checkOut, guests});
  // };
  return (
    <div className="flex flex-col gap-4 p-7 text-gray-800 bg-white shadow-lg">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <div className="text-gray-500 font-medium text-xl line-through">$500</div>
          <div className="text-gray-700 font-medium text-xl">$440</div>
          <div className="text-gray-700">night</div>
        </div>
        <div className="flex gap-1 items-center">
          <svg className="w-4 h-4 fill-gray-600">
              <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}></use>
          </svg>
          <div className="text-gray-700 ">4.99 ·</div>
          <div className="text-gray-500 ">337</div>
          <div className="text-gray-500">reviews</div>
        </div>
      </div>
      <div className="grid grid-cols-2 rounded-lg border-gray-500 border-[1px]">
        <div className="border-gray-500 border-r-[1px] p-3">
          <label className="text-xs font-bold text-gray-800">CHECK-IN</label>
          <input type="date" placeholder="Add Dates" className="w-full bg-transparent text-gray-500 focus:outline-none" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>
        </div>
        <div className="p-3">
          <label className="text-xs font-bold text-gray-800">CHECK-OUT</label>
          <input type="date" className="w-full bg-transparent text-gray-500 focus:outline-none" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}/>
        </div>
        <div className="flex flex-col col-span-2 border-gray-700 border-t-[1px] p-3">
          <label className="text-xs font-bold text-gray-800">GUEST</label>
          <input type="number" placeholder="1 Adult" className="w-full bg-transparent  hover:text-gray-500 max-w-12 focus:outline-none" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>
      </div>
      <a href="/order" className="flex items-center justify-center rounded-lg h-10 text-white bg-pink-600">Reserve</a>
      <div className="flex items-center justify-center text-xs text-gray-500">You won&apos;t be charged yet</div>
      <div className="grid grid-cols-2 gap-1">
        <div className="underline">500 * 5 nights</div>
        <div className="justify-self-end">$2500</div>
        <div className="underline">Long stay discount</div>
        <div className="justify-self-end text-pink-500">-$300</div>
        <div className="underline">Cleaning fee</div>
        <div className="justify-self-end">$200</div>
        <div className="underline">Service fee</div>
        <div className="justify-self-end">$0</div>
      </div>
      <div className="flex justify-between border-t-[1px] py-3 ">
        <div>Total before taxes</div>
        <div>$2400</div>
      </div>
    </div>
  );
}