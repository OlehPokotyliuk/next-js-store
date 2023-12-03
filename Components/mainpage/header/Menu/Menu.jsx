"use client";
import React, { useState } from "react";
import classes from "./Menu.module.scss";
import Link from "next/link";

const Menu = ({ uniqueCategories }) => {
  return (
    <ul className={classes.menu}>
      {uniqueCategories.map((item, ind) => (
        <Link
          key={ind}
          className={classes.link}
          href={`/categories/${uniqueCategories[ind]}`}
        >
          {item}
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
// const router = useRouter();
// const linkHandler = (item) => {
//   router.push(`/categories/${item}`);
// };
// onClick={() => linkHandler(uniqueCategories[ind])}
