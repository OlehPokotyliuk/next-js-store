import React from "react";
import classes from "./ContactText.module.scss";
import Image from "next/image";
const ContactText = ({ path, spanText, paragraphText, secondParagraph }) => {
  return (
    <div className={classes.contact}>
      <p className={classes.contactParagraph}>
        <Image
          className={classes.image}
          src={path}
          width={40}
          height={40}
          color="#000"
        />
        <span className={classes.contactSpan}>{spanText}</span>
      </p>
      <p>{paragraphText}</p>
      <p>{secondParagraph}</p>
    </div>
  );
};

export default ContactText;
