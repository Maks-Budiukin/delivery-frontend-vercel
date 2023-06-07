import { NavLink } from "react-router-dom";
import styled from "styled-components";

// export const StyledLink = styled(NavLink)`
//   display: block;
//   width: 120px;

//   margin: 8px;
//   color: #000;
//   background-color: #fff;
//   padding: 15px 10px;
//   /* margin-right: 24px; */
//   border-radius: 4px;
//   text-decoration: none;
//   text-align: center;
//   font-size: 14px;
//   font-weight: 500;

//   transition-property: color, background-color, border;
//   transition-duration: 250ms;
//   transition-timing-function: ease;

//   &:visited {
//     color: black;
//   }
//   &:hover,
//   &:focus {
//     color: #fff;
//     outline: none;
//     background-color: #87cfeb3b;
//   }
//   &.active {
//     /* color: #fff;
//     background-color: skyblue; */
//   }
// `;

export const StyledLink = styled(NavLink)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* margin-bottom: 16px; */
  /* margin-left: 16px;
  margin-right: 16px; */
  width: 120px;
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
