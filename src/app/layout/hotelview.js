import Image from "next/image"
import Button from "../components/button"
import ReviewBox from "../components/reviewbox"
import nextConfig from "../../../next.config.mjs"

export default function HotelView() {
    return (
    <main className="grow bg-white text-gray-500">
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
            <h1 className="text-base lg:text-xl font-light uppercase tracking-tight py-4 px-8">
                Hotel XX
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
                <Button>Auckland, New Zealand</Button>         
            </div>

            <div className="bg-pink-600 text-white ml-7 px-5 self-stretch flex flex-col justify-center items-center">
                <div className="text-2xl font-light -mb-1">8.6</div>
                <div className="text-[10px] uppercase">429 votes</div>
            </div>
        </div>

        <div className="flex p-11 flex-col lg:flex-row bg-gray-100 border-b-[1px] border-solid border-gray-100 text-gray-500 text-[14px]">
            <div className="bg-white grow-0 shrink-0 basis-3/5 lg:mr-11 shadow-lg p-7">
                <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolorum nihil eos voluptatibus consequuntur, voluptates fuga. Iusto quia reiciendis, non nihil quam tenetur, saepe, illo omnis aspernatur quo dolor.
                </p>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ullam dolorum nihil eos voluptatibus consequuntur, voluptates fuga. Iusto quia reiciendis, non nihil quam tenetur, saepe, illo omnis aspernatur quo dolor.
                </p>
                <ul className="my-2 lg:my-8 p-4 lg:p-8 border-y-[1px] border-solid border-gray-100 flex flex-wrap">
                    {[
                        'Close to the beach',
                        'Breakfast included',
                        'Free airport shuttle',
                        'Free wifi in all room',
                        'Air conditioning and heating',
                        'Pets allowed',
                        'We speak all language',
                        'Perfect for families',
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
            <div className="grow flex flex-col items-center">

                <ReviewBox
                    reviewText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse fuga ipsam, deleniti expedita quo quae odit eius facere vel debitis culpa consequuntur voluptatum nam libero quisquam accusamus dolores reprehenderit!"  
                    reviewPhoto = {`${nextConfig.basePath}/img/user-1.jpg`}
                    reviewName = "Nick Smith"
                    reviewDate = "Feb 23rd, 2017"
                    reviewRate = "7.8"
                />

                <ReviewBox
                    reviewText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse fuga ipsam, deleniti expedita quo quae odit eius facere vel debitis culpa consequuntur voluptatum nam libero quisquam accusamus dolores reprehenderit!"  
                    reviewPhoto = {`${nextConfig.basePath}/img/user-2.jpg`}
                    reviewName = "Mary Thomas"
                    reviewDate = "Sep 30rd, 2017"
                    reviewRate = "9.3"
                />
                
                <Button>Show all <span>&rarr;</span></Button>
            </div>
        </div>

        <div className="py-9 text-center">
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
        </div>
    </main>
    )
}