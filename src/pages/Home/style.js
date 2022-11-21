import { useContext } from "react";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 80%;
  height: 50vh;
  margin: 0 auto;

  border: 1px solid #e2e9ed;
  box-shadow: 3px 3px 6px #e2e9ed;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 25px;

  width: 60%;

  background-color: #ffffff;
  ${(props) => !props.enableForm && "pointer-events:none;"};

  ${(props) => !props.enableForm && "filter: blur(3px);"};
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  padding: 25px;

  width: 40%;

  background-color: #f7f9fa;

  h1 {
    font-size: 1.3em;
    font-weight: bold;
    color: #686868;
  }

  h2 {
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    color: #71a8ed;
    /* font-style: italic; */
  }
`;

export const MainHeader = styled.header`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #686868;

  display: flex;

  width: 100%;
`;
