import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

export default function Card({cardPhoto, cardAddress, cardRate, cardDetailAddress, cardPrice}) {
  return(
    <div className="flex flex-col ">
            <div className="rounded-lg relative h-[11rem] bg-gray-300">
              <Image src={cardPhoto} alt="card 1" width={400} height={300} className="rounded-lg h-[11rem] object-cover" />
              <input id="heart" type="checkbox" className="peer/heart w-4 h-4 bg-clip-text appearance-none absolute top-2 z-20  right-2" />
              <svg className="w-4 h-4 absolute top-2 right-2 fill-white z-10 peer-checked/heart:hidden">
                  <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-heart-outlined`}></use>
              </svg>
              <svg className="w-4 h-4 absolute top-2 right-2 hidden fill-white peer-checked/heart:block z-10 peer-checked/heart:fill-pink-600">
                  <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-heart`}></use>
              </svg>
              <div className="flex justify-between items-center w-11 h-2 absolute bottom-2 left-24">
                <svg className="w-2 h-2  fill-gray-100 z-10">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}></use>
                </svg>
                <svg className="w-2 h-2  fill-gray-200 z-10">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}></use>
                </svg>
                <svg className="w-2 h-2  fill-gray-200 z-10">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}></use>
                </svg>
                <svg className="w-2 h-2 fill-gray-200 z-10">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}></use>
                </svg>
                <svg className="w-[7px] h-[7px]  fill-gray-200 z-10">
                    <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}></use>
                </svg>

              </div>
              
              
            </div>
            
            <div className="flex flex-col gap-1 mt-2">
              <div className="flex justify-between">
                <div>{cardAddress}</div>
                <div className="flex items-center">
                  <svg className="w-3 h-3 fill-black-600 dark:fill-gray-300">
                      <use xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}></use>
                  </svg>
                  <div>{cardRate}</div>
                </div>
              </div>
              <div className="text-gray-400">{cardDetailAddress}</div>
             <div className="flex gap-1">
              <div className="font-normal">{cardPrice}</div>
              <div>night</div>
             </div>
            </div>
          </div>
  );
};