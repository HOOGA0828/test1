import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import moment from "moment";
const Contain = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.textColor};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  p {
    width: 100%;
    :nth-of-type(1) {
      animation: scroll1 15s linear infinite;
    }

    ${
      "" /* :nth-of-type(2) {
      animation: scroll2 15s linear infinite;
    } */
    }
    @keyframes scroll1 {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-50%);
      }
    }

    ${
      "" /* @keyframes scroll2 {
      from {
        transform: translateX(200%);
      }
      to {
        transform: translateX(-200%);
      }
    } */
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
    p {
      :nth-of-type(1) {
        animation: scroll1 8s linear infinite;
        @keyframes scroll1 {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      }
    }
  }
`;
export default function TimeCarousel() {
  const [timeNow, setTimeNow] = useState("");
  useEffect(() => {
    const countTimer = setInterval(() => {
      setTimeNow(moment().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);
    return () => {
      clearInterval(countTimer);
    };
  }, []);
  //   console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
  return (
    <Contain>
      <p>現在時間 : {timeNow}</p>
      {/* <p>現在時間2 : {timeNow}</p> */}
    </Contain>
  );
}
