import React from "react";
import classes from "./Section.module.css";

function Section({ Icon, title, color, selected }) {
  const sectionClass = `${classes.section} ${selected ? classes.selected : ""}`;
  return (
    <div
      className={sectionClass}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected ? color : ""}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default Section;
