import React from "react";
import classes from "./SectionTitle.module.scss";
import Arrow from "../Arrow/Arrow";

const SectionTitle = ({ text, title, headButton }) => {
  return (
    <div className={classes.sectionTitle}>
      <div className={classes.section}>
        <p className={classes.text}>
          <span>{text}</span>
        </p>
        <p className={classes.title}>{title}</p>
      </div>

      <div className={classes.optionComponent}>
        <Arrow headButton={headButton}/>
      </div>
    </div>
  );
};

export default SectionTitle;
