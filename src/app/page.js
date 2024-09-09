import Image from "next/image";
import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import HotelView from "./layout/hotelview";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[75rem] min-h-[50rem] my-20 mx-auto bg-gray-300 shadow-xl">
        <Header />
        <div className="flex">
          <Sidebar />
          <HotelView />
        </div>
      </div>
    </div>
  );
}
