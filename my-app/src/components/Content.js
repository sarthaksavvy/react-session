import React from "react";
import ImagesComp from "./ImagesComp";
import AppContext, { ADD_IMAGE } from "../store";

export default function Content() {
  const [, dispatch] = React.useContext(AppContext);
  const [newImageUrl, setnewImageUrl] = React.useState("");

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  function addNewImage() {
    dispatch({ type: ADD_IMAGE, payload: newImageUrl });
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
          onClick={addNewImage}
        >
          Add Image
        </button>
      </div>
    </div>
  );
}
