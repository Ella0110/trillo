import Image from "next/image";
import Header from "../layout/header";
import Sidebar from "@/app/layout/sidebar";
import HotelView from "../layout/hotelview";

export default function Hotel() {
  return (
    <div>
      <div className="max-w-[75rem] min-h-[50rem] mx-auto bg-gray-100 shadow-xl">
        <Header />
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <HotelView />
        </div>
      </div>
    </div>
  );
}
