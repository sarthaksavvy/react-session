import React, { useEffect, useState } from "react";
import Images from "./Images";

export default function Content() {
  const [images, setimages] = React.useState([
    "https://images.unsplash.com/photo-1592421817004-876c579a18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592565277104-7b50f3396105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1592509280917-c8e554d3c711?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1480&q=80",
    "https://images.unsplash.com/photo-1592496753124-b3b0a3903254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1592376995682-0cb77747c619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1592510036678-04750c7ab958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1592508908964-c9a7200b9115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1322&q=80",
  ]);

  const [newImageUrl, setnewImageUrl] = React.useState("");

  function handleNewImage() {
    setimages([...images, newImageUrl]);
    setnewImageUrl("");
  }

  function handleChange(event) {
    setnewImageUrl(event.target.value);
  }

  const [myRand, setMyRand] = useState(-1);

  function handleRemove(removeableIndex) {
    setimages(images.filter((image, index) => index !== removeableIndex));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * images.length);
      setMyRand(rand);
    }, 1000);
    console.log("trigger");
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {images.map((image, i) => (
          <Images
            image={image}
            i={i}
            key={i}
            myRand={myRand}
            handleRemove={handleRemove}
          />
        ))}
      </div>

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
