"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import nextConfig from "../../../next.config.mjs";
import Link from "next/link";
import DateInput from "./dateinput";

const SearchBar = () => {
  var date = new Date()
  const today = date.toISOString().split("T")[0];  
  const tomorrow = new Date(date.getTime() + 86400000).toISOString().split("T")[0];  

  const router = useRouter();

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState(1);
  const [errorMessage, setErrorMessage] = useState('')

  const queryString = new URLSearchParams({
    location,
    checkIn,
    checkOut,
    guests,
  }).toString();

  const handleSearch = () => {
    // Check if the location is empty
    if (!location.trim()) {
      setErrorMessage('Please fill in the Destination.');
    } else {
      setErrorMessage(''); // Clear any existing error messages
      router.push(`/booking?${queryString}`)
    }
  };

  return (
    <div className="flex flex-col">
      
    
    <div className="flex item-center justify-center bg-white border shadow-lg text-xs rounded-full w-full max-w-2xl mx-auto">
      <div className="flex justify-between text-gray-700 item-center  w-full">
        <div className="flex flex-col justify-center p-2 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black ">Where</label>
          <input
            type="text"
            placeholder="Destination"
            className="w-full bg-transparent focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
         
        </div>

        <div className="flex flex-col justify-center p-2 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Chech in</label>
          <DateInput value = {checkIn} minDate={today} onChange={setCheckIn} />
        </div>

        <div className="flex flex-col justify-center p-2 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Chech Out</label>
          <DateInput value = {checkOut} minDate={checkIn || today} onChange={setCheckOut} />
        </div>

        <div className="flex flex-col justify-center p-2 px-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Guests</label>
          <input
            type="number"
            placeholder="1 Adult"
            className="w-full bg-transparent text-gray-700 max-w-12 focus:outline-none"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div className="p-2">
            <button
               onClick={handleSearch}
              className="bg-pink-600  p-2 text-white rounded-full shadow-sm hover:bg-pink-700"
            >
              <svg className="h-5 w-5 fill-white">
                <use
                  xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-magnifying-glass`}
                ></use>
              </svg>
            </button>
        </div>
        
      </div>
      
    </div>
    {errorMessage && <p className="text-xs pl-8 pt-2 text-white-500">{errorMessage}</p>}
    </div>
  );
};

export default SearchBar;
