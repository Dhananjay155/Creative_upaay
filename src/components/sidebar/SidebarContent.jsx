import SidebarDot from "../sidebarItem/SidebarDot";
import React from "react"
const SidebarContent = () => {
  return (
    <ul className="hidden sm:flex flex-col gap-[10px]">
      <SidebarDot color="bg-green-500" text="Mobile App" />
      <SidebarDot color="bg-orange-500" text="Website Redesign" />
      <SidebarDot color="bg-purple-200" text="Design System" />
      <SidebarDot color="bg-blue-400" text="Wireframes" />
    </ul>
  );
};

export default SidebarContent;