import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNotFound = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: url("https://timeweb.com/ru/community/article/67/67d62d1e0bc27de113cc0e25239705e2.png");
  background-position: center;
  background-size: cover;
  max-width: 600px;
  height: 80vh;
`;

export const StyledButton = styled(NavLink)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  width: 140px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  background-color: #87cfeb3b;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    background-color: skyblue;
    color: #fff;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: #fff;
  }
`;
