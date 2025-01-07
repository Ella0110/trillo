import Header from "../layout/header";

import Image from "next/image";
import nextConfig from "../../../next.config.mjs";
export default function Order() {
  return (
    <>
      <Header />
      <div className="flex gap-8 w-full  p-8 bg-gray-100">
        <div className="flex flex-col basis-3/5 gap-5 p-10 bg-white shadow-lg">
          {/*Trip details*/}
          <div className="flex flex-col gap-3">
            <div className="text-2xl">Trip Details</div>
            <div className=" flex flex-col gap-2 text-sm ">
              {/*First line*/}
              <div className="flex gap-6">
                <div className="flex gap-1">
                  <div className="font-semibold">Guest:</div>
                  <div className="">1 Adult</div>
                </div>
                <div className="underline text-gray-500">Edit</div>
              </div>
              {/*Second line*/}
              <div className="flex gap-6">
                <div className="flex gap-1">
                  <div className="font-semibold">Check in:</div>
                  <div className="">Sat 4 Jan 2025</div>
                </div>
                <div className="underline text-gray-500">Edit</div>
              </div>
              {/*Third line*/}
              <div className="flex gap-6">
                <div className="flex gap-1">
                  <div className="font-semibold">Check out:</div>
                  <div className="">Sat 9 Jan 2025</div>
                </div>
                <div className="underline text-gray-500">Edit</div>
              </div>
              {/*Forth line*/}
              <div className="flex gap-6">
                <div className="flex gap-1">
                  <div className="font-semibold">Free cancellation:</div>
                  <div className="">Before 1 Jan 2025</div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact details*/}
          <div className="flex flex-col gap-3">
            <div className="text-2xl">Contact Details</div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">Email</div>
              <input className="col-span-2 border-[1px] outline-none p-1 rounded-lg"></input>
              <div>First name</div>
              <div>Last name</div>
              <input className="border-[1px] outline-none p-1 rounded-lg"></input>
              <input className="border-[1px] outline-none p-1 rounded-lg"></input>
              <div>Phone number</div>
              <div>Country</div>
              <input className="border-[1px] outline-none p-1 rounded-lg"></input>
              <input className="border-[1px] outline-none p-1 rounded-lg"></input>
            </div>
          </div>
          {/*Special request*/}
          <div className="flex flex-col gap-2">
            <div className="text-2xl">Special Requests</div>
            <div className="text-gray-400">
              Special requests cannot be guaranteed – but the property will do
              its best to meet your needs. You can always make a special request
              after your booking is complete!
            </div>
            <input className="border-[1px] outline-none p-1 h-20 rounded-lg"></input>
          </div>
        </div>

        {/*Book*/}
        <div className="flex flex-col gap-5 basis-2/5">
          <div className="flex flex-col gap-4 p-10 bg-white">
            <div className="flex gap-2">
              <Image
                src={`${nextConfig.basePath}/img/hotel-2.jpg`}
                alt="hotel picture "
                width={100}
                height={100}
                className="bg-gray-400 rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="text-xs text-gray-500">Entire Cabin</div>
                  <div>Glacier Pines Cabin (New Hot Tub Installed!)</div>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1 items-center">
                    <svg className="w-4 h-4 fill-gray-600">
                      <use
                        xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}
                      ></use>
                    </svg>
                    <div className="text-gray-700 ">4.99 </div>
                    <div className="text-gray-500 ">(110 reviews)</div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg className="w-4 h-4 fill-gray-600">
                      <use
                        xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-user`}
                      ></use>
                    </svg>
                    <div className="text-gray-700 ">Superhost</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex text-gray-500">
              <p>Your booking is protected by &nbsp;</p>
              <div className="text-pink-600 font-bold">air</div>
              <div className="text-black font-bold">cover</div>
            </div>
            {/*Price Detail*/}
            <div className="text-xl font-semibold border-t-[1px] pt-3">
              Price Detail
            </div>
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
            <div className="flex justify-between border-t-[1px] pt-3 ">
              <div>Total (USD)</div>
              <div>$2400</div>
            </div>
          </div>
          <a className="flex items-center justify-center rounded-lg h-10 text-white bg-pink-600">
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
