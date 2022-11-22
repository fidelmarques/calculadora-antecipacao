import { Fieldset, InputContainer, InputField } from "./style";
import { iconSelector } from "../../utils/iconSelector";

export const FormSection = ({
  text,
  label,
  rule,
  register,
  required,
  errors = false,
}) => {
  return (
    <Fieldset>
      <label>{text}</label>
      <InputContainer>
        {iconSelector(label)}
        <InputField name={label} {...register(label, { required })} />
      </InputContainer>
    </Fieldset>
  );
};
