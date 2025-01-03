import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Body from "./layout/searchbar";
import SearchBar from "./layout/searchbar";

export default function Home() {
  return (
    <div>
      <div className="max-w-[75rem] min-h-[50rem]  bg-white shadow-xl">
        <Header />
        
          {/* <Sidebar /> */}
          {/* <HotelView /> */}
          <SearchBar />
          <div className="flex flex-col border-t-[1px] mt-8 lg:flex-row">
        </div>
      </div>
    </div>
  );
}