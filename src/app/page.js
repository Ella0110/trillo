import Header from "./layout/header";
import SearchBar from "./components/searchbar";
import HomeContent from "./layout/homecontent";

export default function Home() {
  return (
    <div>
      <div className="bg-white shadow-xl">

        <Header />

        {/*Trillo Info*/}
        <div className="flex flex-col justify-between items-center gap-4 text-white px-40 py-10
                        bg-gradient-to-br from-[#ff3366] to-[#ba265d]">
          <div className="w-1/2 flex flex-col gap-2 items-center">
            <div className="text-2xl ">Trillo</div>
            <div className="text-center text-sm font-light">A modern, responsive travel booking website built using Next.js, React, 
              and Tailwind CSS. This project is a refactor of the original design from the &quot;Advanced CSS and Sass&quot; course.</div>
            <a 
              href="https://github.com/Ella0110/trillo" 
              className="underline"
              >
                Source code
            </a>
          </div>
          <SearchBar />
        </div>

        <HomeContent />    
             
      </div>
    </div>
  );
}