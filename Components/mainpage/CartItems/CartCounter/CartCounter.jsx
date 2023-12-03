"use client";
import React, { useState } from "react";
import classes from "./CartCounter.module.scss";
import Image from "next/image";
import { quantityCart } from "@/store/slice/CartSlice/cartSlice";
import { useDispatch } from "react-redux";
const CartCounter = ({ price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemId, setItemId] = useState(id);
  const dispatch = useDispatch();

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    dispatch(
      quantityCart({
        id: itemId,
        price: (itemPrice * newQuantity).toFixed(2),
      }),
    );
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      quantityCart({
        id: itemId,
        price: (itemPrice * newQuantity).toFixed(2),
      }),
    );
  };

  return (
    <div className={classes.cartCounter}>
      <p className={classes.paragraphPrice}>
        <span className={classes.price}>
          {`$ ${(itemPrice * quantity).toFixed(2)}`}
        </span>
      </p>
      <p className={classes.rating}>
        <span className={classes.quantity}>{quantity}</span>
        <div className={classes.btnBlock}>
          <button className={classes.btn} onClick={handleIncrease}>
            <Image
              width={20}
              height={20}
              src={"/icon/arrow.svg"}
              style={{ transform: "rotate(180deg)" }}
              alt={"arrow"}
            />
          </button>
          <button className={classes.btn} onClick={handleDecrease}>
            <Image
              width={20}
              height={20}
              src={"/icon/arrow.svg"}
              alt={"arrowImage"}
            />
          </button>
        </div>
      </p>
    </div>
  );
};

export default CartCounter;
