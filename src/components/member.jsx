import React from "react";
import person1 from "../assets/icons/person1.png";
import person2 from "../assets/icons/person2.png";
import person3 from "../assets/icons/person3.png";
import person4 from "../assets/icons/person4.png";
const Members = () => {
  return (
    <div className="flex -space-x-2 overflow-hidden ">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={person1}
        alt="{user.handle}"
      />
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={person2}
        alt="{user.handle}"
      />
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={person3}
        alt="{user.handle}"
      />
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src={person4}
        alt="{user.handle}"
      />

      <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-red-200 ring-2 ring-white ">
        <span className=" font-medium text-[#D25B68] ">+2</span>
      </div>
    </div>
  );
};

export default Members;