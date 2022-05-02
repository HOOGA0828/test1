import React, { useState, useEffect, createContext } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

// theme
import { theme } from "./theme/theme.js";

// component
import Home from "./pages/Home";
import Header from "./pages/Header";
import SideNav from "./component/pop/SideNav";



//context
export const appContext = createContext();

const textData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor tempor varius. Duis ut lorem non ipsum finibus tincidunt. Morbi ac feugiat dolor. Sed varius ante est, id vestibulum metus hendrerit et. Quisque gravida posuere massa et vestibulum. Curabitur venenatis, felis id facilisis pretium, augue tellus ullamcorper massa, eget egestas orci tellus quis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse nisl odio, bibendum id finibus nec, venenatis vitae est. Nam sapien ligula, faucibus ac accumsan et, finibus suscipit tortor. Sed euismod velit eget diam hendrerit, sit amet lacinia ligula ullamcorper. Fusce posuere tortor ut arcu tempor, ac fermentum mauris vehicula. Etiam enim orci, luctus eget mattis vitae, posuere id urna. Nullam faucibus diam cursus, mattis dolor sed, suscipit lorem."
function App() {
  // 控制日夜模式
  const [themeState, setThemeState] = useState("light");
  const handleLight = (state) => {
    if (state === "light") {
      setThemeState("dark");
    } else {
      setThemeState("light");
    }
  };
  //控制sideNav
  const [isMenu, setIsMenu] = useState(false);

  //context
  const theContext = {
    handleLight,
    themeState,
    setThemeState,
    textData,
    setIsMenu,
    isMenu,
  };
  return (
    <appContext.Provider value={theContext}>
      <ThemeProvider theme={theme[themeState]}>
        <Header/>
        <Home/>
        <SideNav/>

      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
