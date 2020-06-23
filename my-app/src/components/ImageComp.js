import React from "react";
import AppContext, { REMOVE_IMAGE } from "../store";

export default function ImageComp({ image, i, myRand }) {
  const [, dispatch] = React.useContext(AppContext);
  const [isHovering, setIsHovering] = React.useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function removeImage() {
    dispatch({ type: REMOVE_IMAGE, payload: i });
  }

  return (
    <div
      key={i}
      className="w-1/4 flex justify-center my-2"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative ${isHovering ? "" : "hidden"}`}>
        <i
          className="fas fa-times absolute right-0 cursor-pointer"
          onClick={removeImage}
        ></i>
      </div>
      <img
        src={image}
        width="200"
        className={`border ${myRand === i ? "opcaity-100" : "opacity-50"}`}
      />
    </div>
  );
}
