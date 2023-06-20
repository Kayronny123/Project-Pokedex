import styled from "styled-components";

export const PokeCardContainer = styled.div`
  height: 210px;
  width: 440px;
  margin: 20px;
  background-color: red;
  position: relative;
  color: white;
`;
export const InfoPoke = styled.section`
  display: flex;
  flex-direction: column;
  background-color: blue;
  height: 75%;
`;

export const ImgContainer = styled.div`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeImg = styled.img`
  height: 193px;
  /* width: 193px; */
  position: absolute;
  top: -55px;
  right: 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25%;
`;
export const ButtonCapture = styled.div`
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  color: black;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ButtonDetails = styled.h3`
  margin-left: 15px;
  cursor: pointer;
`;
