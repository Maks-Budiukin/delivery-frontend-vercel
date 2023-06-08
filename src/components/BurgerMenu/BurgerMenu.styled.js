import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  background-color: #87cfeb3b;

  text-decoration: none;
  color: #000;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background-color: skyblue;
    color: #fff;
  }
`;

export const AuthBlock = styled.div`
  min-width: 300;
  display: flex;
`;

export const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 160px;
  background-color: #87cfeb3b;
  padding: 12px 16px;

  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    color: #fff;
    background-color: skyblue;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
  }
`;
