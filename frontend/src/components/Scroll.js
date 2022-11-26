import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import { secondaryColor, secondaryDarkColor } from "./../constants/constants";

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  // console.log(showBelow);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);

      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <>
      {show && (
        <BackToTop onClick={handleClick}>
          <ArrowIcon />
        </BackToTop>
      )}
    </>
  );
};

export default Scroll;

const BackToTop = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 999;
  width: 50px;
  height: 60px;
  border-radius: 50px;
  background-color: ${secondaryDarkColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s, box-shadow 0.5s;
  cursor: pointer;
  color: #fff;
  font-size: 32px;

  :hover {
    background-color: ${secondaryColor};
    box-shadow: 0 0 20px rgba(225, 225, 225, 0.5);
  }
`;

const ArrowIcon = styled(BiUpArrowAlt)``;
