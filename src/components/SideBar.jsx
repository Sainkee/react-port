import React, { useState } from "react";
import avatar from "../assets/avatar.jpg";
import {
  ArrowDownUp,
  Hourglass,
  MapPin,
  UserRound,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex gap-10 flex-col my-10 md:my-5 justigy-center  md:w-1/5 relative items-center py-10   border border-black rounded-2xl bg-[#2186A0] w-[90%] mx-auto p-5">
        <span
          onClick={() => setOpen(!open)}
          className="absolute md:hidden text-yellow-500 bg-gradient-to-br from-[#2A5966] to-[#2186A0] hover:bg-gradient-to-br hover:to-black hover:from-yellow-900 hover:ease-in-out hover:duration-300 hover:transition-all px-3 py-2 rounded-bl-2xl rounded-tr-2xl top-0 right-0 "
        >
          <ArrowDownUp />
        </span>
        <span className="flex gap-10  md:flex-col w-full flex-row    justify-center items-center  ">
          <span className=" md:w-[100px] w-[200px]  inline-block">
            <img src={avatar} alt="" className="w-full h-auto rounded-[34%]" />
          </span>

          <span className="flex flex-col gap-5 ">
            <h1 className="text-xl text-white capitalize font-bold">
              santosh kumar
            </h1>
            <span className="text-center border rounded-full px-8 py-1 text-white  text-sm">
              Hello, there!
            </span>
          </span>
        </span>
        <span
          className={`w-full ${
            open ? "hidden" : "block"
          } ease-in-out transition-all duration-700`}
        >
          <div className="border-t border-black w-full mx-auto "></div>
          <div className="flex flex-col gap-5 w-full mx-auto my-10">
            <span className="flex gap-10">
              <span className="p-4 rounded-md text-yellow-500 bg-[#203137]">
                <Hourglass size={25} />
              </span>
              <span className="text-white">
                <p className="text-white/50 uppercase">Age</p>
                <p>29 years old</p>
              </span>
            </span>
            <span className="flex gap-10">
              <span className="p-4 rounded-md text-yellow-500 bg-[#203137]">
                <MapPin size={25} />
              </span>
              <span className="text-white">
                <p className="text-white/50 uppercase">location</p>
                <p>berlin germany</p>
              </span>
            </span>
            <span className="flex gap-10">
              <span className="p-4 rounded-md text-yellow-500 bg-[#203137]">
                <UserRound size={25} />
              </span>
              <span className="text-white">
                <p className="text-white/50 uppercase">personality type</p>
                <p>INTJ-A</p>
              </span>
            </span>
          </div>
          <div className="border-t md:hidden border-black w-full mx-auto "></div>

          <span className="flex mt-10  justify-center items-center ">
            <span className="p-2 text-gray-400">
              <Github />
            </span>{" "}
            <span className="p-2 text-gray-400">
              <Instagram />
            </span>{" "}
            <span className="p-2 text-gray-400">
              <Twitter />
            </span>{" "}
            <span className="p-2 text-gray-400">
              <Linkedin />
            </span>{" "}
          </span>
        </span>
      </div>
    </div>
  );
}
