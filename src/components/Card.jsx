import React from "react";
import { v4 as uid } from "uuid";
export default function Card({  skill }) {
  return (
    <>
      <div
        key={uid()}
        className="flex gap-4 justify-center items-start bg-gradient-to-r shadow-xl  rounded-xl from-[#2C525C] mx-auto to-[#206377] p-6 w-[95%]"
      >
        <span className="text-yellow-500 pt-2">{skill.img}</span>
        <span className="flex-col gap-2">
          <p className="text-xl font-semibold">{skill.title}</p>
          <p>{skill.subtitle}</p>
        </span>
      </div>
    </>
  );
}
