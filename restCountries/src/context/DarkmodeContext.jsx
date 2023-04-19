import React, { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

const reducerFunction = (state, { type }) => {
  switch (type) {
    case "dark":
      return {
        bgFlag: "dark",
        elements: "hsl(209, 23%, 22%)",
        background: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
      };
    case "light":
      return {
        bgFlag: "light",
        elements: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 98%)",
        text: "hsl(200, 15%, 8%)",
      };
    default:
      return state;
  }
};

const DarkModeProvider = ({ children }) => {
  //   const [isDarkModer, setisDarkModer] = useState(false);

  const initialState = {
    bgFlag: "light",
    elements: "hsl(0, 0%, 100%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(200, 15%, 8%)",
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const data = {
    state,
    dispatch,
  };

  return (
    <DarkModeContext.Provider value={data}>{children}</DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
