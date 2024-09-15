const SideItem = ({iconName, itemName}) => {
  return (
    <li className="relative py-2 lg:mb-1 w-full hover:bg-[rgb(235,47,100)] active:bg-[rgb(255,51,102)] transition-all duration-75">
      <a
        href="#"
        className="text-gray-200 uppercase block  py-2 lg:py-4 lg:px-7 flex flex-col md:flex-row justify-center lg:justify-start items-center"
      >
        <svg className="w-4 h-4 mr-5 fill-white">
          <use xlinkHref={`img/sprite.svg#${iconName}`}></use>
        </svg>
        <span className="">{itemName}</span>
      </a>
    </li>
  )
}

export default SideItem
