import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 100%;

  label {
    color: grey;
  }
`;
export const InputField = styled.input``;

export const InputContainer = styled.div`
  border: 1px solid #eef2f4;
  border-radius: 5px;
  padding: 10px;

  gap: 5px;

  display: flex;
  align-items: center;

  &:focus-within {
    border-color: #b1d6f4;
  }
`;

export const ErrorForm = styled.span`
  color: red;
  font-size: 12px;

  font-weight: bold;
`;

export const RuleForm = styled.span`
  color: #dbdbdb;
  font-size: 12px;
`;
