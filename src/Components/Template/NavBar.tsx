import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
const NavContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #2b394f;
  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

const NavLogoContainer = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavLogo = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const Hamberger = styled.img`
  width: 30px;
  height: 30px;
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

const NavList = styled.div`
  padding: 0px 16px;
  @media only screen and (max-width: 700px) {
    padding: 0px 8px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0px 4px;
  }
`;

const NavListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 600;
  ${NavList}:first-child {
    margin-left: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    ${NavList} {
      margin-top: 10px;
    }
    ${NavList}:first-child {
      margin-left: 0px;
    }
  }
`;

const NavImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const NavIcon = styled.img`
  width: 30px;
  height: 30px;
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <NavContainer>
      <NavLogoContainer>
        <NavLogo>
          <NavIcon style={{ marginRight: "10px" }} src="./favicon.ico" alt="" />
          <span>DreamCoding</span>
        </NavLogo>
        <Hamberger onClick={handleOpen} src="./hamberger.png" alt="" />
      </NavLogoContainer>
      {(windowSize > 576 || isOpen) && (
        <>
          <NavListContainer>
            <NavList>Home</NavList>
            <NavList>Gallery</NavList>
            <NavList>Weddings</NavList>
            <NavList>FAQ</NavList>
            <NavList>Bookings</NavList>
          </NavListContainer>
          <NavImgContainer>
            <NavIcon
              style={{ marginRight: "10px" }}
              src="./facebook.jpeg"
              alt=""
            />
            <NavIcon src="./twitter.png" alt="" />
          </NavImgContainer>
        </>
      )}
    </NavContainer>
  );
}

export default NavBar;
