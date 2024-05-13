import { useState } from "react";
import { MoveDown, MoveUp } from "lucide-react";
import { skills, creative, human } from "../constants";
import Card from "./Card";
import NavBar from "./NavBar";
import { v4 as uid } from "uuid";
import { codind } from "../constants";
export default function About() {
  const [open, setOpen] = useState(false);
  return (
<>      <h1 className="text-4xl text-white font-bold  ">About Me</h1>

      <div className="h-1 rounded-full bg-gradient-to-tr my-4  from-yellow-400 to-yellow-600 w-[50px]"></div>
      <div className=" bg-gradient-to-r shadow-xl  rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%] ">
        <span>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work{" "}
          <span className={`${open ? "block" : "hidden"}`}>
            {" "}
            Growing up bilingual, I developed a love for languages and I
            currently speak four of them fluently. I believe that this skill has
            given me a unique perspective and allows me to communicate
            effectively with clients from all over the world. One of my
            strengths is adding a personal touch to my projects by adding the
            client's identity and message into the design, creating meaningful
            and beautiful end products that are both eye-catching and
            user-friendly. In my free time, I enjoy exploring my other passions,
            such as photography and music production, which provide me with
            creative outlets. I am also very passionate about Web3 and
            everything related to crypto, NFTs and blockchain technology as I
            believe they have the potential to revolutionize business and online
            interactions. If you have an innovative idea for a project that
            needs to be developed, I would love to hear from you. Your vision
            can be turned into a real product. Don't hesitate to reach out and
            let's start a conversation about your concept. I'm excited to
            collaborate and help bring your ideas to life.
          </span>
        </span>
        {!open ? (
          <div className="flex gap-5 justify-center my-10 text-white">
            <MoveDown />
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? "Hide" : "Read More"}
            </button>
            <MoveDown />
          </div>
        ) : (
          <div className="flex gap-5 justify-center my-10 text-white">
            <MoveUp />
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? "Hide" : "Read More"}
            </button>
            <MoveUp />
          </div>
        )}
      </div>

      <h1 className="text-4xl my-10 text-center text-white font-bold  ">
        Primary Focus
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        {skills.map((skill) => (
          <Card key={uid()} skill={skill} />
        ))}
      </div>

      {/* Similarly for the 'creative' array */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        {creative.map((skill) => (
          <Card key={uid()} skill={skill} />
        ))}
      </div>
      <h1 className="text-4xl my-10 text-center text-white font-bold  ">
        Languages
      </h1>

      <div className="bg-gradient-to-r shadow-xl rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl my-10 text-center text-white font-bold">
              Coding Languages
            </h1>
            <div className="flex flex-col gap-4 p-4 capitalize">
              {codind.map((item, index) => (
                <span className="flex flex-col" key={index}>
                  <label htmlFor={item.label}>
                    {item.label}: {item.value}
                  </label>
                  <input
                    className="slider"
                    type="range"
                    name={item.label}
                    id={item.label}
                    value={item.value}
                  />
                </span>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-2xl  my-10 text-center text-white font-bold">
              Human Languages
            </h1>
            <span className="flex flex-col gap-6 p-4 capitalize">
              {human.map((item) => (
                <span className="flex flex-col" key={uid()}>
                  <label htmlFor={item.label}>
                    {item.label}: {item.level}
                  </label>
                  <input
                    type="range"
                    name={item.label}
                    id={item.label}
                    value={item.value}
                  />
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
