import styled from "styled-components";

export const StyledGallery = styled.ul`
  /* padding: 16px; */
  display: flex;

  /* @media screen and (max-width: 708px) {
    justify-content: space-around;
  } */

  flex-basis: 100%;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-left: auto;
  margin-right: auto; */
  /* padding-top: 12px; */
  gap: 32px;
`;

export const SpaceFiller = styled.div`
  width: 250px;
  height: 0;
  /* margin-left: 18px;
  margin-right: 18px; */
`;
