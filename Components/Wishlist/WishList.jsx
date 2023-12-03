"use client";
import React from "react";
import classes from "./WishList.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
  addToCartWish,
  deleteFromWish,
} from "@/store/slice/CartSlice/cartSlice";
import { useDispatch } from "react-redux";

const WishList = () => {
  const wishItem = useSelector((state) => state?.counter?.wish);
  const dispatch = useDispatch();
  return (
    <div className={classes.wrapper}>
      {wishItem?.length ? (
        wishItem?.map((item) => (
          <div className={classes.card} key={item.id}>
            <div className={classes.imageWrapper}>
              <Link href={`${item.id}`} className={classes.link}>
                <Image
                  src={item.image}
                  width={250}
                  height={250}
                  style={{ width: "60%", height: "80%" }}
                  alt={item.title}
                />
              </Link>
              <div className={classes.btnBlock}>
                <button
                  className={classes.delete}
                  onClick={() => dispatch(deleteFromWish(item?.id))}
                  
                >
                  <Image
                    className={classes.image}
                    src={"/icon/delete.svg"}
                    width={30}
                    height={20}
                    alt={'delete item'}
                  ></Image>
                </button>
              </div>
            </div>
            <p className={classes.paragraphInfo}>{item.name}</p>
            <button
              className={classes.btn}
              onClick={() => dispatch(addToCartWish(item))}
            >
              add to cart
            </button>
            <p className={classes.title}>{item?.title}</p>
            <p className={classes.paragraphPrice}>
              <span className={classes.price}>$ {item?.price}</span>
            </p>
            <p className={classes.rating}>
              <span className={classes.star}>⭐⭐⭐⭐</span>
              <span className={classes.rating}>(4)</span>
            </p>
          </div>
        ))
      ) : (
        <div className="">The wish list is empty, click on the icon ♡ to add a product.</div>
      )}
    </div>
  );
};

export default WishList;
