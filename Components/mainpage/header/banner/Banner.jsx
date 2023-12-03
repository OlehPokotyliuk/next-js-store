import React, { useState } from "react";
import classes from "./Banner.module.scss";
import { useGetAllProductsQuery } from "@/store/slice/api";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const [element, setElement] = useState(1);
  const { data } = useGetAllProductsQuery("products");
  const uniqueCategories = new Set(data?.map((item) => item?.category));

  const firstProductsByCategory = [...uniqueCategories].reduce(
    (result, category) => {
      const firstProductInCategory = data.find(
        (item) => item.category === category,
      );
      if (firstProductInCategory) {
        result.push(firstProductInCategory);
      }
      return result;
    },
    [],
  );
  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.text}>
        <p className={classes.bannerParagraph}>Best prices in category</p>
        <h2 className={classes.bannerTitle}>Up to 10% off Voucher</h2>
        <Link className={classes.bannerLink} href={`/categories/${firstProductsByCategory[element]?.category}`}>Shop now →</Link>
      </div>
      <div className={classes.image}>
      <button
            className={classes.btn}
            disabled={element === 0}
            onClick={() => setElement((prev) => prev - 1)}
          >
            ◄
          </button>
        {firstProductsByCategory.slice(element, element + 1).map((item) => (
          <div className={classes.imageWrapper} key={item.id}>
            <Image src={item.image} width={220} height={300} alt={item?.title}/>
          </div>
        ))}
         
          <button
            className={classes.btn}
            disabled={element === firstProductsByCategory.length - 1}
            onClick={() => setElement((prev) => prev + 1)}
          >
            ►
          </button>
      </div>
    </div>
  );
};

export default Banner;
