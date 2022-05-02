import styled from "@emotion/styled";
import React, { useEffect, useState, useContext } from "react";

//component
import PopText from "../component/pop/Text";

// context
import { appContext } from "../App";
const Container = styled.div`
  height: calc(100vh - 60px);
  ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomColor};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.wrapperBGColor};
  width: 100vw;
  height: 500px;
  margin-left: ${({ slide }) => (slide ? 200 : 2000)}px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Content = styled.div`
  width: 600px;
  height: 300px;
  padding: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  border-radius: 20px;
  position: absolute;
  left: 3%;
  top: calc(50% - 150px);
  p {
    width: 600px;
    height: 290px;
    overflow: hidden;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 300px;
    position: static;

    p {
      font-size: 18px;
      width: 300px;
    }
  }
`;
const Continue = styled.div`
  background: ${({ theme }) => theme.buttonBg};
  display: inline-block;
  padding: 5px 15px;
  border-radius: 10px;
  color: ${({ theme }) => theme.buttonTextBg};
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
    bottom: 100px;
    right: 25px;
  }
`;
export default function SlidRight({ slide }) {
  const { textData } = useContext(appContext);
  //控制彈窗
  const [handlePop, setHandlePop] = useState(false);
  return (
    <Container>
      <Wrapper slide={slide}>
        <Content>
          <p>
            {textData}
            <Continue
              onClick={() => {
                setHandlePop(!handlePop);
              }}
            >
              繼續閱讀
            </Continue>
          </p>
        </Content>
      </Wrapper>
      {/* 彈出視窗 */}
      {handlePop ? (
        <PopText data={textData} setHandlePop={setHandlePop} />
      ) : null}
    </Container>
  );
}
