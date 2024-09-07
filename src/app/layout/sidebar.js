import SideItem from "../components/sideitem"

export default function Sidebar() {
    return (
        <nav className="bg-zinc-800 text-white basis-[18%] shrink-0 grow-0 flex flex-col justify-between">  
            <ul className="text-base mt-9">
                <SideItem iconName = {"icon-home"} itemName = {"Hotel"}/>

                <SideItem iconName = {"icon-aircraft-take-off"} itemName = {"Flight"}/>

                <SideItem iconName = {"icon-key"} itemName = {"Car rental"}/>

                <SideItem iconName = {"icon-map"} itemName = {"Tours"}/>
            </ul>
            <div className="text-sm text-gray-200 text-center p-6">
                &copy;2017 by trillo. All rights reserved.
            </div>
        </nav>



    )
}