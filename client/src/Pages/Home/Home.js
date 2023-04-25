import { Container } from "./styled-home";
import { StyledCardContainer } from "../../Components/CardsContainer/StyledCardContainer";

import Pagination from "../../Components/Pagination/Pagination";

export default function Home() {
  return (
    <Container>
      <StyledCardContainer>
        <Pagination></Pagination>
      </StyledCardContainer>
    </Container>
  );
}
