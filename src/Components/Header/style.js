import styled from "styled-components";

export const HeaderConteiner = styled.header`
  height: 20vh;
  min-height: 160px;
  max-height: 300px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
`;

export const LeftHeaderButton = styled.h2`
  position: absolute;
  left: 10px;
  cursor: pointer;
`;
export const RightHeaderButton = styled.button`
  right: 10px;
  position: absolute;
  width: 187px;
  height: 64px;
  background: ${(props) => (props.red ? "#FF6262;" : "#33A4F5;")};
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 25px;
`;
export const PokeLogo = styled.img`
  width: 307px;
  height: 113px;
  position: absolute;
`;
