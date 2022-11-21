import { useEffect, useState } from "react";
import {
  ErrorForm,
  Fieldset,
  InputContainer,
  InputField,
  RuleForm,
} from "./style";
import { MdAttachMoney } from "react-icons/md";
import { FaBarcode, FaPercent } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { iconSelector } from "../../utils/iconSelector";

export const FormSection = ({
  text,
  label,
  rule,
  register,
  required,
  errors = false,
}) => {
  const [inputData, setInputData] = useState(0);

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  return (
    <Fieldset>
      <label>{text}</label>
      <InputContainer>
        {iconSelector(label)}
        <InputField name={label} {...register(label, { required })} />
      </InputContainer>
      {(errors[label] && <ErrorForm>{errors[label].message}</ErrorForm>) ||
        (rule && <RuleForm>{rule}</RuleForm>)}
    </Fieldset>
  );
};
