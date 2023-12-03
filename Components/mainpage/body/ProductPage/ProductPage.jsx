"use client";
import React from "react";
import TodaysSection from "../todaysSection/TodaysSection";
import Menu from "../../header/Menu/Menu";
import classes from "./ProductPage.module.scss";
import Banner from "../../header/banner/Banner";
import { useGetAllProductsQuery } from "@/store/slice/api";

const ProductPage = () => {
  const { data } = useGetAllProductsQuery("products");
  const category = data?.map((item) => item?.category);
  const uniqueCategories = Array.from(new Set(category));
  const rating = data
    ?.filter((item) => item?.rating?.rate)
    .sort((a, b) => b?.rating?.rate - a?.rating?.rate);
  const count = data
    ?.filter((item) => item?.rating?.count)
    .sort((a, b) => b?.rating?.count - a.rating.count);

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <Menu uniqueCategories={uniqueCategories} />
        <Banner />
      </div>
      <TodaysSection
        data={data}
        text={"Today’s"}
        title={"Flash Sales"}
        button={true}
        headButton={true}
        count={4}
      />
      <TodaysSection
        data={count}
        text={"This Month"}
        title={"Best Selling Products"}
        button={true}
        count={4}
        viewAll={true}
      />
      <TodaysSection
        data={rating}
        text={"Our Products"}
        title={"Explore Our Products"}
        button={true}
        count={8}
        headButton={true}
      />
    </div>
  );
};

export default ProductPage;
