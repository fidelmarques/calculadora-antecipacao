import styled from "styled-components";

export const ErrorContainer = styled.div`
  color: red;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  div {
    width: 100%;
    display: flex;
    gap: 10px;

    align-items: center;

    p {
      font-size: 12px;
      text-align: justify;
    }
  }
`;
