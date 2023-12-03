"use client";
import React, { useState } from "react";
import classes from "./Button.module.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWish,
} from "@/store/slice/CartSlice/cartSlice";

const Button = ({
  text,
  background = "#DB4444",
  color = "#fff",
  width,
  height,
  padding = "16px 48px",
  item,
  add,
}) => {
  const [clickHandler, setClickHandler] = useState(false);
  const dispatch = useDispatch();
  const handler = () => {
    add === "cart" ? dispatch(addToCart(item)) : dispatch(addToWish(item));
    setClickHandler(true);
  };
  return (
    <button
      className={classes.btn}
      onClick={handler}
      style={{
        color: clickHandler ? "#db4444" : color,
        padding: padding,
        width: width,
        height: height,
        background: background,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
