import React, { useEffect, useState } from "react";
import Image from "./ImageComp";
import Images from "./ImagesComp";
import ImagesComp from "./ImagesComp";

export default function Content({ images, setimages }) {
  const [newImageUrl, setnewImageUrl] = React.useState("");

  function handleNewImage() {
    setimages([...images, newImageUrl]);
    setnewImageUrl("");
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  function handleRemove(removeableIndex) {
    setimages(images.filter((image, index) => index !== removeableIndex));
  }

  return (
    <div>
      <ImagesComp images={images} handleRemove={handleRemove} />

      <div className="my-5">
        <input
          type="text"
          className="p-2 rounded shadow border border-gray-800"
          value={newImageUrl}
          onChange={handleChange}
        />
        <button
          className="p-2 bg-yellow-600 text-white rounded mx-2"
          onClick={handleNewImage}
        >
          Add Image
        </button>
      </div>
    </div>
  );
}
