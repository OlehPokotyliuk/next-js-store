"use client";
import React from "react";
import classes from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.categoryImage}>
        <Link className={classes.link} href={"categories/men's clothing"}>
          <Image
            className={classes.image}
            src={"/image/mens_clothing.jpg"}
            width={250}
            height={400}
            alt={"mens clothing"}
          />
          <p className={classes.paragraph}>men's clothing</p>
        </Link>
        <Link className={classes.link} href={"categories/jewelery"}>
          <Image
            className={classes.image}
            src={"/image/jewelery.jpg"}
            width={250}
            height={400}
            alt={"jewelery"}
          />
          <p className={classes.paragraph}>jewelery</p>
        </Link>
        <Link className={classes.link} href={"categories/electronics"}>
          <Image
            className={classes.image}
            src={"/image/electronic.jpg"}
            width={250}
            height={400}
            alt={"electronic"}
          />
          <p className={classes.paragraph}>electronics</p>
        </Link>
        <Link className={classes.link} href={"categories/women's clothing"}>
          <Image
            className={classes.image}
            src={"/image/womans_clothing.jpg"}
            width={250}
            height={400}
            alt={"womans clothing"}
          />
          <p className={classes.paragraph}>women's clothing</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
