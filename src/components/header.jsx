import React from "react";
import EditIcon from "../assets/icons/edit.png";
import LinkIcon from "../assets/icons/link.png";
import CreateIcon from "../assets/icons/create.png";
import FilterIcon from "../assets/icons/filter.png";
import DateIcon from "../assets/icons/today_date.png";
import GridIcon from "../assets/icons/menu.png";
import PauseIcon from "../assets/icons/pause.png";
import ShareIcon from "../assets/icons/profile-2user.png";
import ArrowDownIcon from "../assets/icons/arrow-down.png";
import Members from "./member";

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10">
        <div className="flex gap-[17px] items-center md:self-start">
          <span className="font-semibold text-black -mt-3 text-3xl lg:text-[46px]">
            Mobile App
          </span>
          <img src={EditIcon} alt="Edit" />
          <img src={LinkIcon} alt="Link" />
        </div>
        <div className="flex items-center justify-around md:self-start">
          <img src={CreateIcon} alt="Create" />
          <span className="text-base font-medium text-indigo-600 ml-2 mr-3 -mt-1">
            Invite
          </span>
          <Members />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-5 md:gap-0 lg:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center border w-[122px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={FilterIcon} alt="FilterIcon" className="mr-3" />
            <span className="text-base mr-4">Filter</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
          <div className="flex items-center border w-[125px] h-[40px] rounded-md py-4 pr-5 pl-3 border-solid border-gray-400">
            <img src={DateIcon} alt="DateIcon" className="mr-3" />
            <span className="text-base mr-4">Today</span>
            <img src={ArrowDownIcon} alt="ArrowDownIcon" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center border w-[97px] h-[40px] rounded-md py-4 pl-3 pr-3 border-solid border-gray-400">
            <img src={ShareIcon} alt="DateIcon" className="mr-2" />
            <span className="text-base mr-4">Share</span>
          </div>
          <div className="border border-solid border-gray-400 h-[28px] mx-5"></div>
          <div className="flex items-center justify-center bg-[#5030E5] mr-5 w-[40px] h-[40px] rounded-md">
            <img src={PauseIcon} alt="PauseIcon" />
          </div>
          <img src={GridIcon} alt="GridIcon" />
        </div>
      </div>
    </>
  );
};

export default Header;