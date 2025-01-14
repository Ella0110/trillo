import { useState, useRef, useEffect } from "react";

export default function PriceRangeSlider() {
  const [price, setPrice] = useState(0);
  const pageviewsInput = useRef(null);
  const priceInput = useRef(null);

  function calculatePrice(pageviews) {
    return (Math.ceil(pageviews).toFixed(2));
  }

  function updatePriceAndPageviews(pageviews) {
    const calculatedPrice = calculatePrice(pageviews);
    setPrice(calculatedPrice); // 使用 React 状态来更新价格
    if (priceInput.current) {
      priceInput.current.value = calculatedPrice; // 更新 priceInput 的值
    }
  }

  function handleInput(event) {
    const pageviews = event.target.value;
    updatePriceAndPageviews(pageviews);
  }

  useEffect(() => {
    if (pageviewsInput.current) {
      pageviewsInput.current.addEventListener("input", handleInput);
    }

    return () => {
      if (pageviewsInput.current) {
        pageviewsInput.current.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
     <div className="flex flex-col my-2">
            <div className="flex justify-between items-center mb-2">
              <div className="">Price Range</div>
              <span className="tracking-tight w-10 text-white flex"
              >$<input
                  type="text"
                  id="price"
                  value={price}
                  readOnly
                  className="w-auto border-none bg-transparent p-0 pointer-events-none"
                /></span>
            </div>
            <div className="">
              <input
                type="range"
                id="pageviews"
                min="0"
                max="1000"
                step="50"
                value={price}
                onChange={handleInput}
                className="w-full mt-2 appearance-none rounded-full h-1.5 slider-custom outline-none"
              />
            </div>
          </div> 
  );
}
