const SideItem = ({iconName, itemName}) => {
  return (
    <li className="relative mb-1 hover:bg-[rgb(235,47,100)] active:bg-[rgb(255,51,102)] transition-all duration-75">
      <a
        href="#"
        className="text-gray-200 uppercase block py-4 px-7 flex items-center"
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
