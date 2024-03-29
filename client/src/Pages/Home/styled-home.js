import styled from "styled-components";

import img from "../../Assets/homebg.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  width: 99.5vw;
  background-image: url(${img});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
`;
