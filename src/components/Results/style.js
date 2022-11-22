import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FinalResultsContainer = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;

  color: #71a8ed;
  font-style: italic;

  li {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h4 {
    font-weight: bold;
  }
`;

export const TextInfo = styled.span`
  font-size: 1em;
  font-weight: bold;
  color: #686868;
  text-align: center;
`;

export const LoadingIcon = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

export const ResetResultsButton = styled.button`
  width: calc(100% - 20px);
  background-color: #2196f3;
  color: #eef2f4;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;

  cursor: pointer;
`;

export const WarningInfo = styled.span`
  color: orange;
  font-size: 1em;

  display: flex;
  align-items: center;

  div {
    width: 40px;
  }
`;
