import styled from "styled-components";
import bg from "../../Assets/landingbg2.jpg";

export const FormStyle = styled.form`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  // componente general
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 82vh;
  max-height: 98vh;
  width: 80%;
  overflow: hidden;
`;

export const Container = styled.div`
  // contenedor del form
  width: 100%;
  height: 50%;
  padding-top: 50px;
`;

export const Container2 = styled.div`
  // contenedor de la preview
  width: 100%;
  height: 50%;
  margin-top: 120px;
`;

export const Input = styled.input`
  font-family: "Press Start 2P";
  align-items: flex-start;
  color: white;
  background-color: transparent;
  margin-top: 20px;
  & {
    border: none;
    border-bottom: 1px solid white;
  }
`;

export const Label = styled.label`
  font-family: "Press Start 2P";
  color: white;
  font-size: small;
  margin-top: auto;
  text-shadow: 2px 2px 2px black;
`;

export const IMG = styled.img`
  height: 350px;
  width: 250px;
`;

export const Button = styled.button`
  background-color: white;
  padding: 15px;
  margin-top: 20px;
  border-radius: 50px;
  border: none;
  box-shadow: 5px 5px 2px #252525;
  text-shadow: 4px 4px 10px #252525;
  font-family: "Press Start 2P";
  color: red;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`;

export const Select = styled.select`
  background-color: white;
  border-radius: 50px;
  color: red;
  margin-top: 20px;
  width: 250px;
  height: 40px;
  text-shadow: 4px 4px 10px #252525;
  text-align: center;
  font-family: "Press Start 2P";
  box-shadow: 5px 5px 2px #252525;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    transform: translateY(4px);
  }
`;
