"use client";
import React from "react";
import Link from "next/link";
import classes from "./Navigation.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
const Navigation = () => {
  const wish = useSelector((state) => state?.counter?.wish);
  const cart = useSelector((state) => state?.counter?.cart);

  return (
    <div className={classes.wrapper}>
      <div className={classes.menuWrapper}>
        <Link href={"/"}>
          <p className={classes.logo}>Exclusive</p>
        </Link>

        <nav className={classes.menu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/signup"}>SignUp</Link>
        </nav>

        <div className={classes.search}>
          <div className={classes.searchBlock}>
            <input
              className={classes.inputSearch}
              type="text"
              placeholder="What are you looking for?"
            />
            <Image
              className={classes.image}
              src={"/icon/searchIcon.svg"}
              width={18}
              height={18}
              alt={"search icon"}
            />
          </div>
          <div className={classes.wishAndCart}>
            <Link href={"/wish"} className={classes.wish}>
              ♡
              {wish?.length > 0 && (
                <span className={classes.wishSpan}>{wish?.length}</span>
              )}
            </Link>
            <Link href={"/cart"} className={classes.cart}>
              🛒
              {cart?.length > 0 && (
                <span className={classes.cartSpan}>{cart?.length}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
