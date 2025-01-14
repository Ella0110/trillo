"use client"

import Image from "next/image";
// import Header from "../page/layout/header";
import Header from "../layout/header";
import Sidebar from "@/app/layout/sidebar";
import HotelView from "../layout/hotelview";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

const fetcher = async (url) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error('API request failed')
  }
  return response.json()
}

export default function Hotel() {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log(id)

  const { data:hotel, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels/${id}`, fetcher)
  // console.log(JSON.stringify(hotel, null, 2)); 

  if (error) return <div>failed to load: {error.message}</div>
  if (isLoading) 
    return  
      <div className="flex justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>

  return (
    <div className="">
        <Header />
        <div className="flex flex-col lg:flex-row max-w-full">
          <Sidebar />
          <HotelView hotel={hotel}/>
        </div>
    </div>
  );
}
