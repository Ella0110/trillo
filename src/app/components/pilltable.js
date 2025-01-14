"use client"
import { useState } from "react"

const ButtonGroup = () => {
  const [selectButton, setSelectButton] = useState(null)

  const handleButtonClick = (id) => {
    setSelectButton(id)
  }


  return (
    <div className="flex basis-3/5 rounded-full bg-gray-100 self-stretch dark:text-gray-600 items-center">
      <button 
        id="button-1" 
        type="button" 
        className={`flex-1 flex p-2 rounded-full justify-center items-center ${selectButton == "button-1" ? 'text-white bg-pink-500' :  'focus:text-white focus:bg-pink-500'}`}
        onClick={() => handleButtonClick('button-1')}
        >
          Favourite
      </button>

      <button 
        id="button-2" 
        type="button" 
        className={`flex-1 flex p-2 rounded-full justify-center items-center ${selectButton == "button-2" ? 'text-white bg-pink-500' :  'focus:text-white focus:bg-pink-500'}`}
        onClick={() => handleButtonClick('button-2')}
        >
          Lowest Price
      </button>

      <button 
        id="button-3" 
        type="button" 
        className={`flex-1 flex p-2 rounded-full justify-center items-center  ${selectButton == "button-3" ? 'text-white bg-pink-500' :  'focus:text-white focus:bg-pink-500'}`}
        onClick={() => handleButtonClick('button-3')}
        >
          Best Location
      </button>

      <button 
        id="button-4" 
        type="button" 
        className={`flex-1 flex p-2 rounded-full justify-center items-center ${selectButton == "button-4" ? 'text-white bg-pink-500' :  'focus:bg-pink-500'}`}
        onClick={() => handleButtonClick('button-4')}
        >
          Deals
      </button>
    </div>
  );
}

export default ButtonGroup