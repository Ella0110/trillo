import Image from "next/image";
// import Header from "../page/layout/header";
import Header from "../layout/header";
import Sidebar from "@/app/layout/sidebar";
import HotelView from "../layout/hotelview";

export default function Hotel() {
  return (
    <div className="">
        <Header />
        <div className="flex flex-col lg:flex-row max-w-full">
          <Sidebar />
          <HotelView />
        </div>
    </div>
  );
}
