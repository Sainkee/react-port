import { NavLink } from "react-router-dom";
import { navBar } from "../constants";
import { v4 as uid } from "uuid";

export default function NavBar() {
  return (
    <ul className="flex gap-5 py-3 rounded-tr-2xl px-4 rounded-bl-2xl bg-[#294047]">
      {navBar.map((item) => (
        <li key={uid()} className=" text-md">
          <NavLink
            className={(isActive) =>
              `${isActive ? "text-yellow-500" : "text-gray-500"} `
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
