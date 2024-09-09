import Image from "next/image"
import nextConfig from "../../../next.config.mjs"

export default function Header() {
    return (
        <header class="text-sm h-20 bg-white border-b-[1px] border-solid border-gray-100 flex justify-between items-center">
            <Image src={`${nextConfig.basePath}/img/logo.png`} alt="Logo" width={50} height={50} className="ml-5"></Image>
            <form action="#" className="basis-2/5 flex justify-center items-center">
                <input type="text" placeholder="Search hotels" className="text-sm bg-gray-100 text-gray-600 rounded-full 
                border-none py-1.5 px-5 w-[90%] transition-all duration-[30] -mr-8 focus:w-full focus:bg-gray-[150] focus:outline-none
                 placeholder:font-thin placeholder:text-gray-300" />
                <button className="bg-gray-100 active:translate-y-[2px]">
                    <svg className="h-5 w-5 fill-gray-400">
                        <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-magnifying-glass`}></use>
                    </svg>
                </button>
            </form>

            <nav className="flex items-center cursor-pointer self-stretch">
                <div className="px-5 flex items-center relative h-full hover:bg-gray-200">
                    <svg className="h-5 w-5 fill-gray-500">
                        <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-bookmark`}></use>
                    </svg>
                    <span className="text-white bg-pink-600 h-4 w-4 rounded-full absolute top-[1.3rem] right-3 
                    flex justify-center items-center">7</span>
                </div>

                <div className="px-5 flex items-center relative h-full hover:bg-gray-200">
                    <svg className="h-5 w-5 fill-gray-500">
                        <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-chat`}></use>
                    </svg>
                    <span className="text-white bg-pink-600 h-4 w-4 rounded-full absolute top-[1.3rem] right-3 
                    flex justify-center items-center">13</span>
                </div>

                <div className="px-5 flex items-center h-full hover:bg-gray-200">
                    <Image src={`${nextConfig.basePath}/img/image.png`} alt="User photo" height={30} width={30} className="rounded-[100%] mr-2" />
                    <span className="text-gray-600">Ada</span>
                </div>
            </nav>
    </header>
    )
}