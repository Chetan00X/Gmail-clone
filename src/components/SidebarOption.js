import React from "react";
import classes from "./SidebarOption.module.css";

function SidebarOption({ Icon, title, number, selected }) {
  const sidebarOptionClasses = `${classes.sidebarOption} ${
    selected ? classes.active : ""
  }`;
  return (
    <div className={sidebarOptionClasses}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
