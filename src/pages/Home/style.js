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
  gap: 20px;

  background-color: #ffffff;
`;

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;

  background-color: #f7f9fa;
`;

export const MainHeader = styled.header``;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;
