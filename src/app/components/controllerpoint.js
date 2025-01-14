import nextConfig from "../../../next.config.mjs";

export default function ControllerPoint({
  size = "2", 
  lastsize = "7", 
  color = "fill-gray-200",
  count = 5
}) {
  return (
    <div className={`flex justify-between items-center w-11 h-2`}>
      {Array.from({ length:count }, (_, index) => (
        <svg
          key={index}
          className={`${
            index === count - 1 ? `w-[${lastsize}px] h-[${lastsize}px]` : `w-${size} h-${size}`
          } ${color} z-10`}>

      <use
        xlinkHref={`${nextConfig.basePath}/img/sprite.svg#icon-controller-record`}
      ></use>
        </svg>
      ))}
  </div>

  );
}