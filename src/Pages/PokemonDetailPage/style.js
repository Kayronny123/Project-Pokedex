import styled from "styled-components";

export const PokeInfoContainer = styled.main`
  height: 80vh;
  margin: 20px 10vw;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.colorType};
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ImgWrapper = styled.img`
  height: 25vh;
  background: #f1f1f1;
`;
export const TypeImg = styled.img`
  height: 30px;
  width: 91px;
  margin: 7px;
`;
export const StateContainer = styled.div`
  background: #f1f1f1;
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const TitleContainer = styled.h2`
  align-self: center;
`;

export const TypeAndMoveContainer = styled.div`
  align-self: center;
  height: 75%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  display: flex;
  justify-content: space-around;
`;
export const MovesContainer = styled.div`
  background: #f1f1f1;
  height: 85%;
  display: flex;
  flex-direction: column;
`;
