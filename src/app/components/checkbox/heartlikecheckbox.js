import nextConfig from "../../../../next.config.mjs";

export default function HeartLikeCheckBox({
  id, 
  size = "4", 
  color = "white", 
  // activecolor = "fill-pink-600", 
  positionClass = "top-2 right-4"
}) {
  return (
    <>
    <input
        id={id}
        type="checkbox"
        className={`absolute w-${size} h-${size} ${positionClass} z-20 peer bg-clip-text appearance-none`}
      />
      <svg className={`absolute w-${size} h-${size} ${positionClass} z-10 fill-${color} peer-checked:hidden`}>
        <use
          xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-heart-outlined`}
        ></use>
      </svg>
      <svg className={`absolute w-${size} h-${size} ${positionClass} z-10 hidden fill-${color} peer-checked:block peer-checked:fill-pink-700`}>
        <use
          xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-heart`}
        ></use>
      </svg>
      </>
  );
}