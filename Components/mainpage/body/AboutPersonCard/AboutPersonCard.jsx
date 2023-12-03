import React from "react";
import Image from "next/image";
import classes from "./AboutPersonCard.module.scss";

const AboutPersonCard = ({ title, paragraph }) => {
  return (
    <div className={classes.personCardWrapper}>
      <div className={classes.image}>
        <Image src={"/image/photo.jpg"} width={236} height={391} alt={'image'} />
      </div>

      <h2 className={classes.title}>{title}</h2>
      <p className={classes.paragraph}>{paragraph}</p>
    </div>
  );
};

export default AboutPersonCard;
