import styled from "@emotion/styled";
import { useEffect, useState, useContext } from "react";
// icon
import { Menu } from "@emotion-icons/boxicons-regular/Menu";
// component
import SwitchButton from "../component/Switch-button";
// context
import { appContext } from "../App";
const Contain = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 60px;
  background: ${({ theme }) => theme.headerBgColor};
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  border-bottom:1px solid ${({ theme }) => theme.borderBottomColor};
  ul {
    ${"" /* width: 100%; */}
    display: flex;
    justify-content: center;
    position: relative;
  }
  li {
    list-style: none;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    margin: 0 50px;
    font-size: 32px;
    > ul {
      display: block;
      position: absolute;
      top: 51px;
      li {
        margin: 0;
        overflow: hidden;
        transition: 0.5s;
        height: 0;
      }
      li:hover {
        text-decoration: underline ${({ theme }) => theme.textColor};
        text-decoration-thickness: 1px;
      }
    }
  }
  li:hover ul li {
    height: 50px;
  }
  @media (max-width: 768px) {
    ul {
      display: none;
    }
  }
`;
const ButtonWrapper = styled.div`
  padding: 0 10px;
`;
const MenuIcon = styled(Menu)`
  width: 26px;
  display: none;
  cursor: pointer;
  color: ${({ isMenu }) => (isMenu ? "#f08984" : "black")};
  @media (max-width: 768px) {
    display: block;
  }
`;
export default function Header() {
  const { isMenu, setIsMenu } = useContext(appContext);

  return (
    <Contain>
      <div>
        <MenuIcon
          isMenu={isMenu}
          onClick={() => {
 
            setIsMenu(!isMenu);

          }}
        />
      </div>
      <ul>
        <li>
          home
          <ul>
            <li>account</li>
          </ul>
        </li>
        <li>
          shop
          <ul>
            <li>steak</li>
            <li>ramen</li>
            <li>drink</li>
          </ul>
        </li>
        <li>
          about
          <ul>
            <li>email</li>
            <li>address</li>
            <li>company</li>
          </ul>
        </li>
      </ul>
      <ButtonWrapper>
        <SwitchButton />
      </ButtonWrapper>
    </Contain>
  );
}
