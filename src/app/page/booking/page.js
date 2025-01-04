"use client"
import nextConfig from "../../../../next.config.mjs";
import Card from "@/app/components/card";
import ButtonGroup from "@/app/components/pilltable";
import PriceRangeSlider from "@/app/components/slide";
import Header from "@/app/layout/header";


export default function Booking() {

  return (
    <div>
    <Header />
    <div className="flex w-full bg-white dark:bg-zinc-800 min-h-[75rem]">
      {/* Left Panel */}
      <div className="flex flex-col  text-xs font-normal text-gray-300 bg-zinc-800 dark:text-gray-300   basis-1/5 border-r-[1px]">
        <div className="flex flex-col m-[12%] mt-7 mb-[5%] ">
          <div className="flex items-center mb-2">
            <input id="checkbox_1" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_1" className="ms-2 peer-checked:text-gray-100">Free Cancellation</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox_2" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_2" className="ms-2 peer-checked:text-gray-100">Pet friendly</label>
          </div>
        </div>
        <div className="mx-[12%] mb-[5%]  border-t-[1px] border-gray-200">
        <div className="flex text-gray-100 items-center my-2">
            Property type
          </div>
          <div className="flex items-center mb-2">
            <input id="checkbox_3" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_3" className="ms-2 peer-checked:text-gray-100">Apartments</label>
          </div>
          <div className="flex items-center mb-2">
            <input id="checkbox_4" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_4" className="ms-2 peer-checked:text-gray-100">House</label>
          </div>
          <div className="flex items-center mb-2">
            <input id="checkbox_5" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_5" className="ms-2 peer-checked:text-gray-100">Hotel</label>
          </div>
          <div className="flex items-center">
            <input id="checkbox_6" type="checkbox" value="" className="peer w-4 h-4 accent-pink-600" />
            <label htmlFor="checkbox_6" className="ms-2 peer-checked:text-gray-100">Homestay</label>
          </div>
        </div>
        <div className="mx-[12%] border-t-[1px] border-gray-200">
          <PriceRangeSlider />
        </div>
      </div>
      {/* Right Panel */}
      <div className="flex flex-col mx-10 mt-5 text-sm font-normal text-gray-600 dark:text-gray-300 h-full  basis-4/5">
        <div className="flex justify-between  items-center mb-8">
          <div className="">1000 Properties in California</div>
          <ButtonGroup />
        </div>
        <div className="grid grid-cols-3 gap-10 mx-10">

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

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-3.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-1.jpg`}
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
            cardPhoto = {`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />

          <Card 
            cardPhoto = {`${nextConfig.basePath}/img/hotel-1.jpg`}
            cardAddress = "Groveland, California"
            cardRate = "4.91"
            cardDetailAddress = "Yosemite National Park"
            cardPrice = "$289"
          />
        </div>
      </div>

    </div>
    </div>
  );
}