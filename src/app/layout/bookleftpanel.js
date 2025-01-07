import SideBarCheckBox from "../components/checkbox/sidebarcheckbox";
import PriceRangeSlider from "../components/slide";

export default function LeftPanel() {
  return (
    <div className="flex flex-col basis-1/5 text-xs font-normal text-gray-300 bg-zinc-800 dark:text-gray-300 border-r-[1px]">
      <div className="flex flex-col gap-2 m-[12%] mt-9 mb-[5%]">
        <SideBarCheckBox 
          id = "checkbox_1"
          content = "Free cancellation"
        />
        <SideBarCheckBox 
          id = "checkbox_2"
          content = "Pet friendly"
        />
      </div>

      <div className="flex flex-col gap-2 mx-[12%] mb-[5%] border-t-[1px] border-gray-200">
        <div className="flex items-center mb-1 mt-3 text-gray-100">
          Property type
        </div>
        <SideBarCheckBox 
          id = "checkbox_3"
          content = "Apartments"
        />
        <SideBarCheckBox 
          id = "checkbox_4"
          content = "House"
        />
        <SideBarCheckBox 
          id = "checkbox_5"
          content = "Hotel"
        />
        <SideBarCheckBox 
          id = "checkbox_6"
          content = "Homestay"
        />
      </div>

      <div className="mx-[12%] border-t-[1px] border-gray-200">
        <PriceRangeSlider />
      </div>
    </div>
  );
}