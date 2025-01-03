"use client";

import {useState} from "react";

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log({location, checkIn, checkOut, guests});
  };

  return (
    <div className="flex item-center justify-center bg-white border shadow-lg text-xs rounded-full w-full max-w-3xl mx-auto">
      <div className="flex justify-between item-center w-full">

        <div className=" p-4 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black ">Where</label>
          <input type="text" placeholder="Destination" className="w-full bg-transparent hover:text-gray-700 focus:outline-none" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>

        <div className="p-4 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Chech in</label>
          <input type="date" placeholder="Add Dates" className="w-full bg-transparent hover:text-gray-700 focus:outline-none" value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>
        </div>  

        <div className="p-4 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Chech Out</label>
          <input type="date" className="w-full bg-transparent hover:text-gray-700 focus:outline-none" value={checkOut} onChange={(e) => setCheckOut(e.target.value)}/>
        </div>
        
        <div className="p-4 pl-8 rounded-full cursor-pointer hover:bg-gray-100">
          <label className="block text-black">Guests</label>
          <input type="number" className="w-full bg-transparent hover:text-gray-700 max-w-12 focus:outline-none" value={guests} onChange={(e) => setGuests(e.target.value)} />
        </div>

        <div className="p-4">
          <button onClick={handleSearch} className="bg-red-500 text-white p-2 rounded-full shadow-sm hover:bg-red-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
