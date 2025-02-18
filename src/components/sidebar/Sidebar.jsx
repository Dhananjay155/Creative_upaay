import React from 'react'
import SidebarImage from '../sidebarItem/SidebarImage'
import logo from "../../assets/icons/logo.png"
import AddIcon from '../../assets/icons/add-square.png'
import Arrow from "../../assets/icons/arrow.png"
import HomeIcon from "../../assets/icons/category.png"
import MessageIcon from "../../assets/icons/message.png";
import TaskIcon from "../../assets/icons/task-square.png";
import GroupIcon from "../../assets/icons/profile-2user.png";
import SettingIcon from "../../assets/icons/setting-2.png";
import SidebarCard from './SidebarCard'
import SidebarContent from './SidebarContent'

const Sidebar = () => {
  return (
    <div className="flex-1 border-r sticky top-0 left-0 border-gray-300 min-h-screen bg-white w-[50px] sm:min-w-[250px] xl:min-w-[280px]">
      <header className="h-20 flex justify-between items-center px-[13px] sm:px-[22px]">
        <span className="flex text-xl sm:text-lg font-semibold text-black gap-[9px]">
          <img src={logo} alt="Project M." />
          <span className="opacity-0 md:opacity-100">Project M.</span>
        </span>
        <img src={Arrow} alt="arrow" className="mr-3 hidden sm:block" />
      </header>

      <hr className="border-t border-gray-300" />

      <ul className="my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1">
        <SidebarImage icon={HomeIcon} text="Home" />
        <SidebarImage icon={MessageIcon} text="Messages" />
        <SidebarImage icon={TaskIcon} text="Tasks" />
        <SidebarImage icon={GroupIcon} text="Members" />
        <SidebarImage icon={SettingIcon} text="Settings" />
      </ul>

      <header className="hidden sm:flex justify-between items-center mt-[30px] mb-5 mx-[22px]">
        <span className="text-xs text-[#787486] font-bold">MY PROJECTS</span>
        <img src={AddIcon} alt="add" />
      </header>
      <SidebarContent />
      <SidebarCard />
    </div>
    
  );
};

export default Sidebar;