import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;

  flex: 1;
  height: 100%;
  width: 100%;
`;

export const FormSubmitButton = styled.button`
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

  ${(props) =>
    props.disabled
      ? "background-color: lightgrey;"
      : ("background-color: #2196f3;", "cursor: pointer;")};
`;
