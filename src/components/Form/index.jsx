import { FormSection } from "../FormSection";
import { FormContainer, FormSubmitButton } from "./style";
import { useFormContext } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ResultsContext } from "../../providers/Results";
import { formSchema } from "../../utils/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { formInfo } from "../../utils/formInfo";

export const Form = () => {
  const { postForm } = useContext(ResultsContext);
  const { register, handleSubmit, reset, formState } = useFormContext();

  const onSubmit = (data) => {
    postForm(data);
  };

  useEffect(() => {
    console.log(formState);
    console.log(formState.errors);
  }, [formState]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {formInfo.map((item, index) => (
        <FormSection
          key={index}
          text={item.text}
          label={item.label}
          rule={item.rule}
          required
          register={register}
          errors={formState.errors}
        />
      ))}
      <FormSubmitButton
        type="submit"
        // disabled={!formState.isDirty || !formState.isValid}
      >
        Enviar
      </FormSubmitButton>
    </FormContainer>
  );
};
