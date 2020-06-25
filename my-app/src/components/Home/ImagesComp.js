import React, { useEffect } from "react";
import ImageComp from "./ImageComp";
import AppContext from "../../store";

export default function ImagesComp() {
  const [{ images }] = React.useContext(AppContext);
  const [myRand, setMyRand] = React.useState(-1);

  useEffect(() => {
    const interval = setInterval(
      () => setMyRand(Math.floor(Math.random() * images.length)),
      1000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-wrap justify-between">
      {images.map((image, i) => (
        <ImageComp image={image} i={i} key={i} myRand={myRand} />
      ))}
    </div>
  );
}
