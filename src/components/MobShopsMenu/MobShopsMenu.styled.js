import styled from "styled-components";

export const MobMenuWrapper = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  padding: 8px;
  width: (100vw - 8px);

  background-color: #fff;
  border-radius: 8px;

  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;

  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const MenuCloseButton = styled.button`
  position: absolute;
  right: 16px;
  bottom: 8px;

  border: 1px solid skyblue;
  border-radius: 4px;
  background-color: #fff;
  color: skyblue;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    border: 1px solid tomato;
    color: tomato;
  }
`;
