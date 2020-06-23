import React from "react";
export const ADD_IMAGE = "ADD_IMAGE";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_IMAGE:
      return { ...state, images: [...state.images, payload] };

    case REMOVE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image, index) => index !== payload),
      };

    default:
      return state;
  }
};

const AppContext = React.createContext();

export default AppContext;
