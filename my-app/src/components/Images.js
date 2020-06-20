import React from "react";

export default function Images({ image, i, myRand, handleRemove }) {
  const [isHovering, setIsHovering] = React.useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
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
          onClick={() => handleRemove(i)}
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
