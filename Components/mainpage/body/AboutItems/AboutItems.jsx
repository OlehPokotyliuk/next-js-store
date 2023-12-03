import React from "react";
import Image from "next/image";
import classes from "./AboutItems.module.scss";

const AboutItems = () => {
  return (
    <div className={classes.aboutCard}>
      <Image
        className={classes.image}
        src={"/icon/icon_shop.svg"}
        width={50}
        height={50}
        color="#000"
      />
      <h2>10.5k</h2>
      <p>Sallers active our site</p>
    </div>
  );
};

export default AboutItems;
