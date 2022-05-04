import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "teal" : "white",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <Container>
      <NavContainer>
        <NavLink to="/" style={navLinkStyles}>
          <LogoHold>
            <HomeLogo>
              <AiOutlineHome />
            </HomeLogo>
            <HomeText>RNP..</HomeText>
          </LogoHold>
        </NavLink>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </MobileIcon>

        <NavBarHolder onClick={handleClick} click={click}>
          <NavLinks>
            <NavLink to="/contact" style={navLinkStyles}>
              Contact
            </NavLink>{" "}
          </NavLinks>
          <NavLinks>
            <NavLink to="/product" style={navLinkStyles}>
              Product
            </NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink to="/gallary" style={navLinkStyles}>
              Gallary
            </NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink to="/services" style={navLinkStyles}>
              Services
            </NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink to="/blog" style={navLinkStyles}>
              Blog
            </NavLink>
          </NavLinks>
        </NavBarHolder>
      </NavContainer>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  color: white;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0px 4px 4px 4px rgba(225, 225, 225, 0.5);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  height: 80px;
  z-index: 1;
  background-color: black;
  color: white;
  align-items: center;
`;
const LogoHold = styled.div`
  margin-left: 20px;
  display: flex;
  text-align: center;
  align-items: center;
`;
const HomeLogo = styled.span`
  font-size: 24px;
`;
const HomeText = styled.span``;

const NavBarHolder = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 500px;
  justify-content: space-between;
  padding-right: 30px;
  font-weight: bold;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-right: 0;
    padding-left: 0;
    top: 50px;
    height: 30vh;
    width: 100%;
    justify-content: flex-start;
    background: #101522;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    gap: 10px;
  }
`;

const NavLinks = styled.div``;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 850px) {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;
