import React from "react";
import avatarLogo from "../../images/avatar-logo.svg";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        src={avatarLogo}
        alt="sidebar__avatar"
        className="sidebar__avatar-image"
      />
      <p className="sidebar__avatar-name">Elliott Richard</p>
    </div>
  );
}
export default SideBar;
