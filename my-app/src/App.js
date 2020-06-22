import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import AppContext from "./store";

function App() {
  const [title] = useState("My React App");

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

  function reducer(state, action) {
    return state;
  }

  // const ACTION_UPDATE_EMAIL = {
  //   type: "UPDATE_EMAIL",
  //   payload: "sarthak1@bitfumes.com",
  // };
  // console.log(dispatch(ACTION_UPDATE_EMAIL));

  function handleRemove(removeableIndex) {
    setimages(images.filter((image, index) => index !== removeableIndex));
  }

  function handleNewImage() {
    setimages([...images, newImageUrl]);
    setnewImageUrl("");
  }
  const [newImageUrl, setnewImageUrl] = React.useState("");

  // const [state, dispatch] = React.useReducer(reducer, {
  //   images,
  //   setimages,
  //   handleRemove,
  //   handleNewImage,
  //   newImageUrl,
  //   setnewImageUrl,
  // });
  const state = {
    images,
    setimages,
    handleRemove,
    handleNewImage,
    newImageUrl,
    setnewImageUrl,
  };

  return (
    <>
      <Header title={title} />
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-10/12 text-center mt-10">
            <AppContext.Provider value={[state]}>
              <Content />
            </AppContext.Provider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
