import React, { useRef, useState } from "react";
import styled from "@emotion/styled";

const BackDrop = styled.div`
  background: rgba(0, 0, 0, 0.8);
  z-index: 200;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
  padding: 45px;
  border-radius: 15px;
  width: 100%;
  max-width: 836px;
  display: flex;
  animation: 0.3s PopLogin;
  overflow: auto;

  scrollbar-color: #505861 #000;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 3px;
    margin-right: 4px;
  }
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-thumb:hover {
    background: #f08984;
  }
  ::-webkit-scrollbar-track {
    background: #000;
  }
  @keyframes PopLogin {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    width: 320px;
    height: 50%;
    font-size: 18px;
    overflow: auto;
  }
`;
export default function Text({ data, setHandlePop }) {
  //點選 modal以外關閉彈跳視窗
  const modalRef = useRef(null);
  return (
    <BackDrop
      onClick={(e) => {
        if (!modalRef.current.contains(e.target)) {
          setHandlePop(false);
        }
      }}
    >
      <Modal ref={modalRef}>{data}</Modal>
    </BackDrop>
  );
}
