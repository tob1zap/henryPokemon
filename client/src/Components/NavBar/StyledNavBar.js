import styled from "styled-components";

export const Bar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: small;
  border-radius: 10px;
  background-color: transparent;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const DivNavBar = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 600px;
  height: 50px;
  font-family: "Press Start 2P";
  background-color: #fa0032;
  text-shadow: 4px 4px 6px #252525;
  box-shadow: 6px 6px 1px #252525;
  opacity: 90%;
  left: 50px;
`;

export const HomeAbout = styled.div`
  z-index: 1000;
  color: #ffffff;
  margin-right: 20px;
  margin-left: 20px;
  border: none;
  background-color: #3c3c3c00;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #e23e57;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  }
`;

export const LogoPoke = styled.img`
  position: absolute;
  z-index: 100;
  height: 140px;
  width: 370px;
  border-radius: 50px;
  right: -1200px;
`;

export const Gif = styled.img`
  display: inline-block;
  position: absolute;
  height: auto;
  right: 500px;
  top: 10px;
  height: 150px;
`;
