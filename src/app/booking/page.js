"use client";
import Header from "@/app/layout/header";
import useSWR from "swr";
import LeftPanel from "../layout/bookleftpanel";
import RightPanel from "../layout/bookrightpanel";
import { useSearchParams } from "next/navigation";

const fetcher = async (url) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error('API request failed')
  }
  return response.json()
}

export default function Booking() {
  const searchParams = useSearchParams()

  const location = searchParams.get('location')
  const checkIn = searchParams.get('checkIn')
  const checkOut = searchParams.get('checkOut')
  const guests = searchParams.get('guests')

  const { data: hotels, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels/search?address=${location}`, fetcher)
  // const [searchQuery, setSearchQuery] = useState('')

  // console.log(JSON.stringify(data, null, 2)); 

  if (error) return <div>failed to load: {error.message}</div>
  if (isLoading) 
    return  
      <div className="flex justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>

  return (
    <div>
      <Header />
      <div className="flex w-full min-h-[75rem] bg-white dark:bg-zinc-800">
        <LeftPanel />
        <RightPanel hotels={hotels}/>
      </div>
    </div>
  );
}
