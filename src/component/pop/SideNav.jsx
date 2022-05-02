import React, { useEffect, useState, useContext, useRef } from "react";
import styled from "@emotion/styled";
// context
import { appContext } from "../../App";
//hook
import useClickOutsideDetector from "../../hook/useClickOutsideDetector";

const Contain = styled.div`
  max-width: 100px;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.headerBgColor};
  position: fixed;
  top: 60px;
  left: ${({ isMenu }) => (isMenu ? 0 : -100)}px;
  z-index: 20;
  transition: 0.5s;
  display: none;
  > ul {
    min-width: 100px;
    li {
      list-style: none;
      ${"" /* color: ${({ theme }) => theme.textColor}; */}
      font-size: 20px;
      text-align: center;
      margin: 30px 0 0 0;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const HomeList = styled.ul`
  z-index: 20;
  background: ${({ theme }) => theme.navListBg};
  overflow: hidden;
  animation: home 0.3s linear;
  @keyframes home {
    0% {
      height: 0px;
    }
    100% {
      height: 47px;
    }
  }
  li {
    margin: 10px 0 !important;
    color: #f08984;
  }
`;
const ShopList = styled.ul`
  z-index: 20;
  background: ${({ theme }) => theme.navListBg};
  overflow: hidden;
  animation: shop 0.5s linear;
  @keyframes shop {
    0% {
      height: 0px;
    }
    100% {
      height: 121px;
    }
  }
  li {
    margin: 10px 0 !important;
    color: #f08984;
  }
`;
const AboutList = styled.ul`
  z-index: 20;
  background: ${({ theme }) => theme.navListBg};
  ${"" /* min-height: 0px; */}
  overflow: hidden;
  animation: about 0.5s linear;
  @keyframes about {
    0% {
      height: 0px;
    }
    100% {
      height: 121px;
    }
  }
  li {
    margin: 10px 0 !important;
    color: #f08984;
  }
`;
export default function SideNav() {
  const { isMenu, setIsMenu } = useContext(appContext);
  const [navChoose, setNavChoose] = useState("");
  // 控制sideNav
  //   const menuRef = useRef(null);
  //   useClickOutsideDetector(menuRef, () => {
  //      setIsMenu(false);
  //   });
  useEffect(() => {
    setNavChoose("");
  }, [isMenu]);
  return (
    <Contain isMenu={isMenu}>
      <ul>
        <li
          onClick={() => {
            if (navChoose === "homeList") setNavChoose("");
            else setNavChoose("homeList");
          }}
          style={
            navChoose === "homeList" ? { color: "red" } : { color: "#f08984" }
          }
        >
          home
        </li>
        {navChoose === "homeList" ? (
          <HomeList>
            <li>account</li>
          </HomeList>
        ) : null}
        <li
          onClick={() => {
            if (navChoose === "shopList") setNavChoose("");
            else setNavChoose("shopList");
          }}
          style={
            navChoose === "shopList" ? { color: "red" } : { color: "#f08984" }
          }
        >
          shop
        </li>
        {navChoose === "shopList" ? (
          <ShopList>
            <li>steak</li>
            <li>ramen</li>
            <li>drink</li>
          </ShopList>
        ) : null}
        <li
          onClick={() => {
            if (navChoose === "aboutList") setNavChoose("");
            else setNavChoose("aboutList");
          }}
          style={
            navChoose === "aboutList" ? { color: "red" } : { color: "#f08984" }
          }
        >
          about
        </li>
        {navChoose === "aboutList" ? (
          <AboutList navChoose={navChoose === "aboutList"}>
            <li>email</li>
            <li>address</li>
            <li>company</li>
          </AboutList>
        ) : null}
      </ul>
    </Contain>
  );
}
