"use client"

import Header from "./layout/header";
import SearchBar from "./components/searchbar";
import HomeContent from "./layout/homecontent";
import useSWR from "swr"
import { useState } from "react";

const fetcher = async (url) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error('API request failed')
  }
  return response.json()
}

export default function Home() {

  const { data: hotels, error, isLoading } = useSWR('http://localhost:5260/api/hotels/', fetcher)
  const [searchQuery, setSearchQuery] = useState('')

  // console.log(JSON.stringify(data, null, 2)); 

  if (error) return <div>failed to load: {error.message}</div>
  if (isLoading) 
    return  
      <div className="flex justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
      
  return (
    <div>
      <div className="bg-white shadow-xl">

        <Header />

        {/*Trillo Info*/}
        <div className="flex flex-col justify-between items-center gap-4 text-white px-40 py-10
                        bg-gradient-to-br from-[#ff3366] to-[#ba265d]">
          <div className="w-1/2 flex flex-col gap-2 items-center">
            <div className="text-2xl ">Trillo</div>
            <div className="text-center text-sm font-light">A modern, responsive travel booking website built using Next.js, React, 
              and Tailwind CSS. This project is a refactor of the original design from the &quot;Advanced CSS and Sass&quot; course.</div>
            <a 
              href="https://github.com/Ella0110/trillo" 
              className="underline"
              >
                Source code
            </a>
          </div>
          <SearchBar onSearch={setSearchQuery}/>
          
        </div>

        <HomeContent hotels={hotels} searchQuery={searchQuery}/>    
             
      </div>
    </div>
  );
}