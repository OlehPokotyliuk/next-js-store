import React from "react";
import classes from "./page.module.scss";
import Image from "next/image";
import CartItems from "@/Components/mainpage/CartItems/CartItems";
import AboutItems from "@/Components/mainpage/body/AboutItems/AboutItems";
import AboutPersonCard from "@/Components/mainpage/body/AboutPersonCard/AboutPersonCard";
const page = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.about}>
        <div className={classes.text}>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from co
          </p>
        </div>
        <Image src={"/image/side.jpg"} width={705} height={609} alt={'image'}/>
      </div>
      <div className={classes.ourStore}>
        <AboutItems />
        <AboutItems />
        <AboutItems />
        <AboutItems />
      </div>
      <div className={classes.aboutPersonCard}>
        <AboutPersonCard
          title={"Tom Cruise"}
          paragraph={"Founder & Chairman"}
        />
        <AboutPersonCard
          title={"Emma Watson"}
          paragraph={"Managing Director"}
        />
        <AboutPersonCard title={"Will Smith"} paragraph={"Product Designer"} />
      </div>
      <div className={classes.delivery}>
        <AboutItems />
        <AboutItems />
        <AboutItems />
      </div>
    </div>
  );
};

export default page;
