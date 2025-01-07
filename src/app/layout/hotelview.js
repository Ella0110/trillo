"use client"
import Image from "next/image"
import Button from "@/app/components/button"
import ReviewBox from "@/app/components/reviewbox"
import nextConfig from "../../../next.config.mjs"
import useSWR from "swr"
import Reserve from "./reserve"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HotelView() {

    const { data, error, isLoading } = useSWR('http://localhost:5260/api/hotels/4', fetcher)
    console.log(JSON.stringify(data, null, 2)); 
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // console.log(data.name)

    return (
    <div className="flex flex-col basis-5/6 bg-white text-gray-500">
        <div className="flex">
        {[
            `${nextConfig.basePath}/img/hotel-1.jpg`,
            `${nextConfig.basePath}/img/hotel-2.jpg`,
            `${nextConfig.basePath}/img/hotel-3.jpg`,
        ].map((src, index)=>(
            <figure key={index}>
                <Image  src={src} alt="Photo of Hotel" width={400} height={400} className="w-full block" />
            </figure>            
        ))}
        </div>

        <div className="flex items-center border-b-[1px] border-solid border-gray-100">
            <h1 className="text-base lg:text-lg font-light uppercase tracking-tight py-4 px-8">
                {data.name}
            </h1>
            <div className="flex grow">
                {
                    Array(5).fill(0).map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-pink-600">
                            <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}></use>
                        </svg>
                    ))
                }
            </div>
            <div className="text-sm flex align-middle">
                <svg className="w-4 h-4 fill-pink-600 mr-1">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-location-pin`}></use>
                </svg>
                <Button>{data.address}</Button>         
            </div>

            <div className="bg-pink-600 text-white ml-7 px-5 self-stretch flex flex-col justify-center items-center">
                <div className="text-2xl font-light -mb-1">{data.reviews[0]?.rating}</div>
                <div className="text-[10px] uppercase">{data.totalVote} votes</div>
            </div>
        </div>

        <div className="flex p-6 flex-col gap-8 lg:gap-4 lg:flex-row bg-gray-100 border-b-[1px] border-solid border-gray-100 text-gray-500 text-[14px]">
            <div className="flex w-2/3 flex-col gap-5 ">
                <div className="bg-white shadow-lg p-5">
                    <p className="mb-5">
                        {data.description[0]}
                    </p>
                    <p className="mb-5">
                        {data.description[1]}
                    </p>
                    <ul className="my-2 lg:my-8 p-4 lg:p-8 border-y-[1px] border-solid border-gray-100 flex flex-wrap">
                        {[
                            `${data.subDescription[0]}`,
                            `${data.subDescription[1]}`,
                            `${data.subDescription[2]}`,
                            `${data.subDescription[3]}`,
                            `${data.subDescription[4]}`,
                            `${data.subDescription[5]}`,
                            `${data.subDescription[6]}`,
                            `${data.subDescription[7]}`,
                        ].map((src, index)=>(
                            <div key={index} className="flex grow-0 shrink-0 lg:basis-1/2 items-center mb-2">
                                <svg className="w-4 h-4 fill-pink-600 font-thin mr-2">
                                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-chevron-right`}></use>
                                </svg>
                                <li className="">{src}</li>
                            </div>
                        ))}
                    </ul>
                    <div className="text-sm flex flex-col lg:flex-row items-start lg:items-center">
                        <p className="mb-4 lg:mr-auto">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="flex">
                            {[
                                `${nextConfig.basePath}/img/user-3.jpg`,
                                `${nextConfig.basePath}/img/user-4.jpg`,
                                `${nextConfig.basePath}/img/user-5.jpg`,
                                `${nextConfig.basePath}/img/user-6.jpg`,
                            ].map((src, index)=>(
                                <Image key={index} src={src} alt="Friend 1" width={200} height={200} 
                                className="h-10 w-10 rounded-full border-solid border-2 border-white -mr-3" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3 shadow-lg">
                        <ReviewBox
                            reviewText = {`${data.reviews[0]?.body}`}  
                            reviewPhoto = {`${nextConfig.basePath}/img/user-1.jpg`}
                            reviewName = "Nick Smith"
                            reviewDate = "Feb 23rd, 2017"
                            reviewRate = {`${data.reviews[0]?.rating}`}  
                        />

                        <ReviewBox
                            reviewText = {`${data.reviews[1]?.body}`}  
                            reviewPhoto = {`${nextConfig.basePath}/img/user-2.jpg`}
                            reviewName = "Mary Thomas"
                            reviewDate = "Sep 30rd, 2017"
                            reviewRate = {`${data.reviews[1]?.rating}`} 
                        />

                        
                        
                        <a href="" className="flex justify-center items-center w-full text-pink-600 underline bg-white">Show more</a>
                    </div>
                    
                     <div className="bg-white shadow-lg p-5">
                        <div className="text-zinc-800 text-lg font-medium pb-3">Things to know</div>
                        <div className="flex items-center text-xs">
                            <div className="grow ">
                                <div className="text-zinc-800 text-sm font-medium pb-1 ">House rules</div>
                                <div>Check-in after 2:00 pm</div>
                                <div>Checkout before 10:00 am</div>
                                <div>10 guests maximum</div>
                            </div>
                            <div className="grow pl-5 border-l-[1px]">
                                <div className="text-zinc-800 text-sm font-medium pb-1 ">House rules</div>
                                <div>Check-in after 2:00 pm</div>
                                <div>Checkout before 10:00 am</div>
                                <div>10 guests maximum</div>
                            </div>
                            <div className="grow pl-5 border-l-[1px]">
                                <div className="text-zinc-800 text-sm font-medium pb-1 ">House rules</div>
                                <div>Check-in after 2:00 pm</div>
                                <div>Checkout before 10:00 am</div>
                                <div>10 guests maximum</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-1/3 flex flex-col gap-5">
                <Reserve />
                <div className="relative bg-white shadow-lg">
                    <Image  src={`${nextConfig.basePath}/img/map.jpg`} alt="Photo of Hotel" width={400} height={400} className="w-full blur-sm block" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <svg className="w-10 h-10 fill-pink-600 mr-1">
                            <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-location-pin`}></use>
                        </svg>
                        <div className="text-lg font-semibold text-pink-600">SHOW ON MAP</div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="py-9 text-center">
            <h2 className="uppercase text-sm font-thin mb-6">
                Good news we have 4 free rooms for your selected dates!
            </h2>
            <button className="uppercase rounded-full text-white group relative overflow-hidden font-bold cursor-pointer 
            bg-gradient-to-tr from-[rgb(255,51,102)] to-[rgb(186,38,93)] hover:bg-gradient-to-tr hover:from-[rgb(186,38,93)] hover:to-[rgb(255,51,102)]
            focus:pulsate-animation">
                <span className="inline-block py-4 px-16 transition-all duration-300 group-hover:translate-y-full">Book now</span>
                <span className="inline-block absolute py-4 h-full w-full left-0 top-[-100%] transition-all duration-300
                group-hover:top-0">Only 4 rooms left</span>
            </button>
        </div> */}
    </div>
    )
}