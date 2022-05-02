import styled from "@emotion/styled";
import React, { useEffect, useState, useContext } from "react";
//component
import SliderRight from "../component/Slid-Right";
import SliderLeft from "../component/Slid-Left";
import TimeCarousel from "../component/TimeCarousel";
import PopText from "../component/pop/Text";
// context
import { appContext } from "../App";
const Contain = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  position: relative;
`;
const PageOne = styled.div`
  height: calc(100vh - 100px);
  ${({ theme }) => theme.backgroundColor};
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderBottomColor};
`;
const Wrapper = styled.div`
  background: ${({ theme }) => theme.wrapperBGColor};
  width: 100vw;
  height: 500px;
  margin-right: ${({ slide }) => (slide ? 200 : 2000)}px;
  transition: 0.8s;
  position: relative;
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
  position: absolute;
  border-radius: 20px;
  color: ${({ theme }) => theme.textColor};
  right: 3%;
  top: calc(50% - 170px);
  p {
    width: 600px;
    height: 290px;
    overflow: hidden;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    width: 300px;
    position: static;
  p{
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
  font-size:18px; 
  @media (max-width: 768px){
  font-size:16px; 
  bottom: 100px;
  right: 25px;
  }
`;
export default function Home() {
  const { textData } = useContext(appContext);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  //控制彈窗
  const [handlePop, setHandlePop] = useState(false);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (offset < 400) {
      setPage2(false);
      setPage(true);
    }
    if (offset > 400) {
      setPage2(true);
      setPage(false);
    }
    if (offset < 1300) {
      setPage3(false);
    }
    if (offset > 1300) {
      setPage3(true);
    }
  }, [offset]);
  // console.log(offset);

  return (
    <Contain>
<TimeCarousel/>
      <PageOne>
        <Wrapper slide={page}>
          <Content>
            <p>
              {textData}
              <Continue onClick={() => {
                  setHandlePop(!handlePop)
              }}>繼續閱讀</Continue>
            </p>
          </Content>
        </Wrapper>
      </PageOne>
      <SliderRight slide={page2} />
      <SliderLeft slide={page3} />
      {/* 彈出視窗 */}
      {handlePop ? <PopText data={textData} setHandlePop={setHandlePop} /> : null}
    </Contain>
  );
}
