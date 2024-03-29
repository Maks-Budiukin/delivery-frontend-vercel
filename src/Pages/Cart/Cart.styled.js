import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 106px 16px 36px 16px;
  flex-wrap: wrap;
  gap: 40px;
  @media screen and (max-width: 890px) {
    gap: 80px;
  }
`;

export const StyledButton = styled(NavLink)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
  width: 140px;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
  color: #000;
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

export const EmptyCartImageThumb = styled.div`
  text-align: center;
`;

export const EmptyCartInfoHeader = styled.div`
  font-size: "24px";
  font-weight: "bold";
`;

export const EmptyCartInfoText = styled.div`
  color: silver;
`;

export const StyledEmptyPicture = styled.img`
  width: 200px;
  margin: 24px;
  transform: translateX(-16px);
`;
