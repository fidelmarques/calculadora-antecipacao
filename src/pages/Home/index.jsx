import { useContext } from "react";
import { Form } from "../../components/Form";
import { Results } from "../../components/Results";
import { ResponseContext } from "../../providers/Response";
import {
  MainContainer,
  MainHeader,
  Title,
  AsideContainer,
  HomeContainer,
} from "./style";

export const Home = () => {
  const { isFormEnabled } = useContext(ResponseContext);

  return (
    <HomeContainer>
      <MainContainer enableForm={isFormEnabled}>
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
