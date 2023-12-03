"use client";
import React, { useState, useEffect } from "react";
import { useGetCategoryQuery } from "@/store/slice/api";
import TodaysSection from "@/Components/mainpage/body/TodaysSection/TodaysSection";


const Page = () => {
  
  const [link, setLink] = useState("");
  useEffect(() => {
    const currentPath = window.location.pathname;
    const cleanPath = currentPath.replace("%20", " ").split("/").slice(2);
    setLink(cleanPath);
  }, []);
  const { data } = useGetCategoryQuery(link);
  return (
    <TodaysSection
      data={data}
      text={link}
      title={"Flash Sales"}
      button={true}
      headButton={false}
      count={data?.length}
    />
  );
};

export default Page;
