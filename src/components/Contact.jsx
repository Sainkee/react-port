import NavBar from "./NavBar";
import { useRef } from "react";
import cal from "../assets/calendar.png";
import git from "../assets/socials/github.png";
import insta from "../assets/socials/instagram.png";
import linked from "../assets/socials/linkedin.png";
import twit from "../assets/socials/twitter.png";

import pay from "../assets/paypalme.png";
import coffee from "../assets/coffee-sponsort.png";
import gitSpons from "../assets/github-sponsors.png";
export default function Contact() {
  const inputRef = useRef(null);
  const copyToClipboard = () => {
    const value = inputRef.current.innerText;
    navigator.clipboard.writeText(value);
  };

  const openCalendlyPopup = () => {
    window.open(
      "https://calendly.com/oktayshakirov/30min?hide_landing_page_details=1&hide_gdpr_banner=1",
      "_blank"
    );
  };

  return (
    <>
      <div className=" flex flex-col relative text-white  gap-2  border border-black rounded-2xl bg-[#2186A0]  mx-auto p-5 ">
        <h1 className="text-4xl text-white font-bold  ">Contact Us</h1>
        <div className=" absolute hidden md:block top-0 right-0 ">
          <NavBar />
        </div>

        <div className="h-1 rounded-full bg-gradient-to-tr my-4  from-yellow-400 to-yellow-600 w-[50px]"></div>
        <span className="flex flex-col gap-5">
          <div className=" bg-gradient-to-r shadow-xl  flex flex-col gap-5 text-center rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%] ">
            <p className="text-2xl font-bold ">Email:</p>
            <span className="flex  gap-2 justify-center items-center py-2 bg-[#2E4D57] w-fit mx-auto px-3 rounded-md">
              <p ref={inputRef} className="">
                Sainkee0000@gmail.com
              </p>
              <button
                onClick={() => copyToClipboard()}
                className="bg-black/50 px-3 text-yellow-500 py-1 flex items-center justify-center rounded-md"
              >
                copy
              </button>
            </span>
          </div>
          <div className=" bg-gradient-to-r shadow-xl justify-center items-center  flex flex-col gap-5 text-center rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%] ">
            <p className="text-2xl font-bold ">Schedule Video Call With Me:</p>
            <a href="#" onClick={openCalendlyPopup}>
              <img src={cal} alt="Calendly" />
            </a>
          </div>
          <div className=" bg-gradient-to-r shadow-xl justify-center items-center  flex flex-col gap-5 text-center rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%] ">
            <p className="text-2xl font-bold ">Social Links:</p>
            <span className="flex my-5 gap-5">
              <img
                className="cursor-pointer hover:filter-glow-md shadow-yellow-500"
                src={git}
                alt="GitHub"
              />

              <img
                className="cursor-pointer hover:shadow-2xl shadow-yellow-500"
                src={insta}
                alt="Instagram"
              />
              <img
                className="cursor-pointer hover:shadow-2xl shadow-yellow-500"
                src={linked}
                alt="LinkedIn"
              />
              <img
                className="cursor-pointer hover:shadow-2xl shadow-yellow-500"
                src={twit}
                alt="Twitter"
              />
            </span>
          </div>
          <div className=" bg-[#294959] shadow-xl justify-center items-center  flex flex-col gap-10 text-center rounded-xl py-10 p-6 w-[95%] mx-auto ">
            <p className="text-2xl font-bold ">Support My Work:</p>
            <p>
              With every small donation, you contribute to hostings, domains and
              other essential costs. All my work which is made public on GitHub
              or Figma is open source and free for everyone to use.
            </p>
            <span className="flex flex-col w-[35%] gap-5 justify-center items-center">
              <img
                className="rounded-2xl cursor-pointer "
                src={coffee}
                alt=""
              />
              <img
                className="rounded-2xl cursor-pointer "
                src={gitSpons}
                alt=""
              />
              <img className="rounded-2xl cursor-pointer" src={pay} alt="" />
            </span>
          </div>
        </span>
      </div>
    </>
  );
}
