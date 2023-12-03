"use client";
import { useParams } from "next/navigation";
import { useGetAllProductsQuery } from "@/store/slice/api";
import TodaysSection from "@/Components/mainpage/body/TodaysSection/TodaysSection";
import Image from "next/image";
import classes from "./page.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { quantityCart } from "@/store/slice/CartSlice/cartSlice";
export default function Page() {
  const { id } = useParams();
  const { data } = useGetAllProductsQuery(`products`);
  const [quantity, setQuantity] = useState(1);
  const [itemId, setItemId] = useState(id);

  const dispatch = useDispatch();
  const handleDecrease = (itemPrice) => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    dispatch(
      quantityCart({
        id: itemId,
        price: (itemPrice * newQuantity).toFixed(2),
      }),
    );
  };

  const handleIncrease = (itemPrice) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      quantityCart({
        id: itemId,
        price: (itemPrice * newQuantity).toFixed(2),
      }),
    );
  };

  const filteredValue = data?.filter((item) => Number(item.id) === Number(id));
  return (
    <div className={classes.wrapper}>
      {filteredValue?.map((item) => (
        <div className={classes.wrapperCard} key={item.id}>
          <Image src={item?.image} width={280} height={400} alt={item?.title}/>
          <div className={classes.card}>
            <p className={classes.title}>{item?.title}</p>
            <p className={classes.rating}>
              {"⭐".repeat(Math.round(item?.rating?.rate))}
            </p>
            <p className={classes.price}>{(item?.price * quantity).toFixed(2)}$</p>
            <p className={classes.description}>{item?.description}$</p>
            <div className={classes.buttonBlock}>
              <button
                className={classes.btn}
                onClick={() => handleDecrease(item?.price)}
                disabled={quantity === 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className={classes.btn}
                onClick={() => handleIncrease(item?.price)}
              >
                +
              </button>
              <button
                className={classes.buyButton}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
      <TodaysSection
        data={data}
        text={"Related Item"}
        button={false}
        headButton={false}
        count={4}
      />
    </div>
  );
}
