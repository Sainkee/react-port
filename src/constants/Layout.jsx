import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return (
    <div className="flex w-[80%] flex-col lg:flex-row  gap-5 lg:gap-20 relative mx-auto">
      <span className="lg:w-[20%] w-full">
        {" "}
        <Sidebar />
      </span>
      <div className="flex relative flex-col w-full lg:w-[80%]">
        <div className="absolute"></div>
        <div className="py-5">
    <div className="flex flex-col relative text-white  gap-2  border border-black rounded-2xl bg-[#2186A0]  mx-auto p-5">
      <div className=" absolute hidden md:block top-0 right-0 ">
        <NavBar />
      </div>
          <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
