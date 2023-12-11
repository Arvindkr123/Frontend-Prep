import { useEffect, useRef, useState } from "react";

const widthDimension = (Component) => {
  return function WidthDimensions(props) {
    const compRef = useRef();
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);
    return <Component width={width} height={height} ref={compRef} {...props} />;
  };
};

export default widthDimension;
