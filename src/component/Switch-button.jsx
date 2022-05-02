import { useState, useRef, useContext } from "react";
import styled from "@emotion/styled";

// context
import { appContext } from "../App";
const Contain = styled.div`
  font-size: 40px;
  display: inline-block;

  input[type="checkbox"].toggle {
    opacity: 0;
    position: absolute;
    left: -5000px;
    top: -5000px;
  }
  input[type="checkbox"].toggle + label {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  input[type="checkbox"].toggle + label::before {
    content: "";
    width: 2em;
    height: 1em;
    background: #bbb;
    border-radius: 50px;
    transition: 0.3s;
  }
  input[type="checkbox"].toggle + label::after {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0.1em;
    content: "日";
    font-size: 0.5em;
    width: 1.8em;
    height: 1.8em;
    background: #f08984;
    border-radius: 50%;
    transition: 0.3s;
  }
  input[type="checkbox"].toggle:checked + label::after {
    left: 2em;
    content: "夜";
    color: white;
    background: black;
  }
  input[type="checkbox"].toggle:checked + label {
    color: red;
  }
  @media(max-width:768px){
    font-size: 20px;
  }
`;

export default function SwitchButton() {
  const { handleLight, themeState, setThemeState } = useContext(appContext);
  return (
    <Contain>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onClick={() => {
          handleLight(themeState);
        }}
      />
      <label htmlFor="check"></label>
    </Contain>
  );
}
