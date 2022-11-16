import { Form } from "../../components/Form";
import { Results } from "../../components/Results";
import {
  MainContainer,
  MainHeader,
  Title,
  AsideContainer,
  HomeContainer,
} from "./style";

export const Home = () => {
  return (
    <HomeContainer>
      <MainContainer>
        <MainHeader>
          <Title>Simule sua antecipação</Title>
        </MainHeader>
        <Form />
      </MainContainer>
      <AsideContainer>
        <Results />
      </AsideContainer>
    </HomeContainer>
  );
};
