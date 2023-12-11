import React, { forwardRef } from "react";
import widthDimension from "./WidthDimension";

const Comp1 = (props, ref) => {
  return (
    <div ref={ref} className="comp1">
      hey I am Comp1 and my width is : {props.width} {props.height} and random
      number is : {props.randomNumber}
    </div>
  );
};

export default widthDimension(forwardRef(Comp1));
