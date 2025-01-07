"use client";
import Header from "@/app/layout/header";
import LeftPanel from "../layout/bookleftpanel";
import RightPanel from "../layout/bookrightpanel";

export default function Booking() {
  return (
    <div>
      <Header />
      <div className="flex w-full min-h-[75rem] bg-white dark:bg-zinc-800">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
