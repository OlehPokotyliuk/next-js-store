"use client";
import React, { useState } from "react";
import classes from "./TodaysSection.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import {
  addToCart,
} from "@/store/slice/CartSlice/cartSlice";
import Link from "next/link";
import Button from "@/UI/Button/Button";

const TodaysSection = ({ data, count, text, title, headButton, viewAll }) => {
  const [counter, setCounter] = useState(0);
  const [handler, setHandler] = useState(false);
  const [buyClick, setBuyClick] = useState(false);
  const [childProp, setChildProp] = useState("");
  const dispatch = useDispatch();
  const getAllProducts = () => {
    
    {
      handler ? setCounter(data?.length) : setCounter(0);
    }
    setHandler(!handler);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <div className={classes.sectionTitle}>
          <div className={classes.section}>
            <p className={classes.text}>
              <span>{text}</span>
            </p>
            <p className={classes.titleHead}>{title}</p>
          </div>

          <div className={classes.optionComponent}>
            {headButton && (
              <>
                <button
                  className={classes.btn}
                  onClick={() => setCounter((prev) => prev - 1)}
                  disabled={counter === 0}
                >
                  ◄
                </button>
                <button
                  className={classes.btn}
                  onClick={() => setCounter((prev) => prev + 1)}
                  disabled={count + counter === data?.length - 1}
                >
                  ►
                </button>
              </>
            )}
            {viewAll && (
              <button className={classes.btn} onClick={getAllProducts}>
                view all
              </button>
            )}
          </div>
        </div>
      </div>
      <div className={classes.wrapperCard}>
        {data
          ?.slice(counter + count < data?.length && counter, count + counter)
          .map((item) => (
            <div className={classes.card} key={item.id}>
              <div className={classes.imageWrapper}>
                <Link href={`/categories/${item.category}/${item.id}`} className={classes.link}>
                  <Image
                    className={classes.image}
                    src={item.image}
                    width={250}
                    height={250}
                    style={{ width: "60%", height: "80%" }}
                    alt={item?.title}
                  />
                </Link>
                <div className={classes.btnBlock}>
                  <Button
                    text={"♡"}
                    padding="0 0"
                    item={item}
                    background={"none"}
                    add={"wish"}
                    color={"#000"}
                  />
                </div>
              </div>
              <p className={classes.paragraphInfo}>{item.name}</p>

              <Button
                text={"add to cart"}
                padding="0 0"
                item={item}
                background={"#000"}
                width={"100%"}
                height={40}
                add={"cart"}
              />

              <p className={classes.title}>{item?.title}</p>
              <p className={classes.paragraphPrice}>
                <span className={classes.price}>$ {item?.price}</span>
              </p>
              <p className={classes.rating}>
                <span className={classes.star}>
                  {"⭐".repeat(Math.round(item?.rating?.rate))}
                </span>
                <span className={classes.rating}>({item?.rating?.count})</span>
              </p>
            </div>
          ))}
      </div>
      {headButton && (
        <button
          className={[classes.btnBottom, classes.btn].join(" ")}
          onClick={getAllProducts}
        >
          View All Products
        </button>
      )}
    </div>
  );
};

export default TodaysSection;
