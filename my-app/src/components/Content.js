import React, { useEffect, useState } from "react";
import Image from "./ImageComp";
import Images from "./ImagesComp";
import ImagesComp from "./ImagesComp";
import AppContext from "../store";

export default function Content() {
  const [{ handleNewImage, setnewImageUrl, newImageUrl }] = React.useContext(
    AppContext
  );

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  return (
    <div>
      <ImagesComp />
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
