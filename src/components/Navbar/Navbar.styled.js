import { NavLink } from "react-router-dom";
import { ReactComponent as ClearCartIcon } from "../../clear-cart.svg";
import styled from "styled-components";

export const StyledSection = styled.section`
  position: fixed;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid #c0c0c03e;
  color: #c0c0c03e;
  background-color: #f4f4f4;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 120px;
  color: #000;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: #87cfeb3b;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;

export const StyledButton = styled.button`
  width: 120px;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid skyblue;
  cursor: pointer;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    outline: none;
    background-color: #87cfeb3b;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 478px) {
    justify-content: space-between;
  }
  width: 100%;
  padding: 0 16px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  width: 150px;
`;

export const Logo = styled.img`
  width: 150px;
  display: block;
`;

export const StyledClearButton = styled.button`
  position: absolute;
  right: 60px;

  @media screen and (max-width: 478px) {
  }

  transform: translate(50%, 225%);
  width: 120px;
  background-color: #fff;
  padding: 5px 10px;
  margin-right: 24px;
  border-radius: 4px;
  color: tomato;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid tomato;
  cursor: pointer;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover {
    outline: none;
    background-color: tomato;
    color: #fff;
  }
`;

export const AuthBlock = styled.div`
  min-width: 300;
  display: flex;
`;

export const MobMenuWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  padding: 8px;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;

  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const BurgerMenuWrapper = styled.div`
  width: 36px;
  position: relative;
  margin-left: auto;
`;

export const MobileBurgerMenuWrapper = styled.div`
  width: 36px;
  position: relative;
`;

export const ClearIcon = styled(ClearCartIcon)`
  position: absolute;
  top: 80px;
  right: 16px;
  width: 42px;
  /* fill: red; */
  fill: #eea7a7;
  cursor: pointer;
  /* stroke: #ffe6f700; */

  transition-property: stroke, fill;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover {
    /* stroke: #ffe6f799; */
    fill: red;
  }
`;
