import React, { useEffect } from "react";
import Image from "./ImageComp";
import ImageComp from "./ImageComp";
import AppContext from "../store";

export default function ImagesComp({ images, handleRemove }) {
  const context = React.useContext(AppContext);

  useEffect(() => {
    console.log(context);
  }, []);

  const [myRand, setMyRand] = React.useState(-1);
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * images.length);
      setMyRand(rand);
    }, 1000);
    console.log("trigger");
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-wrap justify-between">
      {images.map((image, i) => (
        <ImageComp
          image={image}
          i={i}
          key={i}
          myRand={myRand}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
}
