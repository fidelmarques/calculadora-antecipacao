import { InputContainer } from "./style";

export const FormSection = ({ text, label, rule, register, required }) => {
  return (
    <InputContainer>
      <label>{text}</label>
      <input {...register(label, { required })} />
      {rule && <h2>{rule}</h2>}
    </InputContainer>
  );
};
