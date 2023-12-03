import React from "react";
import Button from "../Button/Button";

const Arrow = ({ headButton }) => {
  return (
    <div className="">
      {headButton ? (
        <>
          
        </>
      ) : (
        <>
          <Button text={"view all"} width={159} />
        </>
      )}
    </div>
  );
};

export default Arrow;
