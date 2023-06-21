import styled from "styled-components";

export const ContainerMainDetail = styled.main`
  background-color: #5d5d5d;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

export const PokeInfoContainer = styled.div`
  height: 140vh;
  width: 90vw;
  margin: 10px 5vw;
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.colorType};
  border-radius: 10px;
  position: relative;
`;

export const ImageContainer = styled.div`
  align-items: center;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ImgWrapper = styled.img`
  height: 30vh;
  background: #f1f1f1;
  border-radius: 10px;
  margin: 10px;
`;

export const StateContainer = styled.div`
  background: #f1f1f1;
  align-self: center;
  height: 75%;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  z-index: 1;
  border-radius: 10px;
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
  z-index: 1;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10%;
  justify-content: space-around;
  color: white;
`;
export const MovesContainer = styled.div`
  background: #f1f1f1;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
  margin-top: 68px;
  border-radius: 10px;
  p {
    background-color: #ececec;
    max-width: 40%;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    padding-left: 25px;
  }
`;
export const TypeImg = styled.img`
  height: 35px;
  width: 91px;
  margin: 3px;
`;
export const PokeballImg = styled.img`
  position: absolute;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 0;
`;
export const PokeImg = styled.img`
  height: 193px;
  position: absolute;
  top: -55px;
  right: 0px;
`;
export const ProgessContainer = styled.div`
  height: 70%;
  section {
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
  }
`;

export const ProgressDiv = styled.div`
  width: 100%;
`;
export const ProgessBar = styled.div`
  height: 10px;
  background-color: #ff7c2e;
  width: ${(props) => props.widthBar}%;
  border-radius: 10px;
`;

export const PStatsName = styled.p`
  display: flex;
  justify-content: end;
`;
export const PStatsNumber = styled.p`
  display: flex;
  justify-content: center;
`;
