import Link from "next/link";
import Image from "next/image";
import HeartLikeCheckBox from "../checkbox/heartlikecheckbox";
import nextConfig from "../../../../next.config.mjs";
import ControllerPoint from "../controllerpoint";

export default function HotelCard({
  cardSize = "14rem",
  cardPhoto,
  cardAddress,
  cardRate,
  cardDetailAddress,
  cardPrice,
  textsize
}) {
  return (
    <div className={`relative ${textsize}`}>
      <Link href="/hotel">
        <div className="flex flex-col pb-3">
          <div className="flex justify-center items-center">
            <div style={{ width: cardSize }} className={`rounded-lg h-[11rem] w-[${cardSize}]`}>
              <Image
                src={cardPhoto}
                alt="picture of the hotel"
                width={400}
                height={300}
                className="rounded-lg h-[11rem] object-cover"
              />
            </div>
          </div>
        <div className="flex justify-center items-center -translate-y-4">
          <ControllerPoint />
        </div>

          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between">
              <div>{cardAddress}</div>
              <div className="flex items-center">
                <svg className="w-3 h-3 fill-black-600 dark:fill-gray-300">
                  <use
                    xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-star`}
                  ></use>
                </svg>
                <div>{cardRate}</div>
              </div>
            </div>
            <div className="text-gray-400">{cardDetailAddress}</div>
            <div className="flex gap-1">
              <div className="font-semibold">{cardPrice}</div>
              <div>night</div>
            </div>
          </div>
        </div>
      </Link>

      <HeartLikeCheckBox id = "like 1" />
    </div>
  );
}
