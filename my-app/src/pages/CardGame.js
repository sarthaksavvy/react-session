import React, { useState, useEffect } from "react";
import Auth from "../middleware/Auth";

function CardGame() {
  const images = [
    "https://images.unsplash.com/photo-1592421817004-876c579a18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1592565277104-7b50f3396105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ];

  const [cardImages, setcardImages] = useState([]);
  useEffect(() => {
    setcardImages(
      images
        .concat(images)
        .sort(() => 0.5 - Math.random())
        .map((image) => {
          return {
            src: image,
            isShowing: false,
            isMatched: false,
            id: Math.floor(Math.random() * 10000),
          };
        })
    );
  }, []);

  const [flippedCards, setflippedCards] = useState([]);

  function flip(imageId) {
    setcardImages(
      cardImages.map((image) => {
        if (image.id === imageId) {
          image.isShowing = true;
          setflippedCards([...flippedCards, image]);
        }
        return image;
      })
    );
  }

  useEffect(() => {
    if (flippedCards.length > 2) {
      setcardImages(
        cardImages.map((image) => {
          if (
            image.src === flippedCards[0].src ||
            image.src === flippedCards[0].src
          ) {
            if (flippedCards[0].src === flippedCards[1].src) {
              image.isMatched = true;
            } else {
              image.isShowing = false;
            }
          } else {
            image.isShowing = false;
          }
          return image;
        })
      );
      setflippedCards([]);
    }
  }, [flippedCards]);

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {cardImages.map((image, i) => (
          <Card image={image} key={i} flip={flip} />
        ))}
      </div>
    </div>
  );
}

function Card({ image, flip }) {
  const jokerLink =
    "https://specials-images.forbesimg.com/imageserve/5dae0ad2c538200007810d63/960x0.jpg?fit=scale";

  function handleFlip() {
    if (image.isMatched) return;
    flip(image.id);
  }

  return (
    <div className="w-1/4 my-2" onClick={handleFlip}>
      {image.isMatched ? (
        <img src={image.src} width="200" className="h-64 opacity-25" />
      ) : image.isShowing ? (
        <img src={image.src} width="200" className="h-64" />
      ) : (
        <img src={jokerLink} width="200" className="h-64" />
      )}
    </div>
  );
}

export default Auth(CardGame);
