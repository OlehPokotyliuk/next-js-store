"use client";
import React from "react";
import classes from "./CartItems.module.scss";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "@/store/slice/CartSlice/cartSlice";
import CartCounter from "./CartCounter/CartCounter";

const CartItems = () => {
  const cartItem = useSelector((state) => state?.counter?.cart);
  const totalSum = cartItem?.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0,
  );
  const total = totalSum.toFixed(2);
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      {cartItem?.length &&
        cartItem?.map((item) => (
          <div className={classes.card} key={item.id}>
            <div className={classes.imageWrapper}>
              <Link href={`${item.id}`} className={classes.link}>
                <Image
                  src={item.image}
                  width={40}
                  height={55}
                  alt={item?.title}
                />
              </Link>
            </div>
            <p className={classes.paragraphInfo}>{item.name}</p>

            <p className={classes.title}>{item?.title}</p>
            <CartCounter price={item?.price} id={item.id} />
            <button
              onClick={() => dispatch(deleteFromCart(item))}
              className={classes.close}
            >
              x
            </button>
          </div>
        ))}
      {cartItem?.length && (
        <div className={classes.cartTotal}>
          <h2>Cart Total</h2>
          <p className={classes.paragraph}>
            Subtotal: <span>$ {total}</span>
          </p>
          <p className={classes.paragraph}>
            Shipping: <span> Free</span>
          </p>
          <p className={classes.paragraph}>
            Total: <span> $ {total}</span>
          </p>
          <div className={classes.toCheckout}>
            <button className={classes.btn}>Process to checkout</button>
          </div>
        </div>
      )}
      {!cartItem?.length && (
        <div className="">
          The wish list is empty, click on the icon ♡ to add a product.
        </div>
      )}
    </div>
  );
};
export default CartItems;
