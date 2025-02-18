import PropTypes from "prop-types";
import React from "react";

const SidebarImage = ({ icon, text }) => {
  return (
    <li className="flex font-medium text-base text-[#787486] gap-[14px] sm:ml-[9px]">
      <img src={icon} alt={text} />
      <span className="hidden sm:block">{text}</span>
    </li>
  );
};

SidebarImage.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default SidebarImage;