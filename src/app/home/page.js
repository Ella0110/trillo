import Header from "@/app/layout/header";
import Sidebar from "@/app/layout/sidebar";

export default function home() {
    return (
        <div>
            <div className="max-w-[75rem] min-h-[50rem] mx-auto bg-gray-100 shadow-xl">
                <Header />
                <div className="flex flex-col lg:flex-row">
                    <Sidebar />
                    {/* <HotelView /> */}
                </div>
            </div>
        </div>
    );
}
