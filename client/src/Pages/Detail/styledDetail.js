import styled from "styled-components";
import img from "../../Assets/detailbg-01.png";

export const DetailBackground = styled.div`
  background-color: #fa0032;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const DetailContainer = styled.div`
  background-color: #fa0032;
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${img});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const PokedexDisplay1 = styled.img`
  display: flex;
  position: absolute;
  right: 55.2%;
  top: 42%;
  height: 12%;
  width: 11%;
`;

export const PokedexDisplay2 = styled.div`
  text-align: left;
  display: block;
  position: absolute;
  font-size: x-small;
  font-family: "Press Start 2P";
  right: 31%;
  top: 34.5%;
  height: 20%;
  width: 14%;
  column-count: 2;
  column-gap: 10px;
`;

export const H3 = styled.p`
  font-family: "Press Start 2P";
  color: green;
  font-size: xx-small;
`;
