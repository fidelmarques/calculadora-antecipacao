import { FormSection } from "../FormSection";
import { FormContainer, FormSubmitButton } from "./style";
import { useFormContext } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ResultsContext } from "../../providers/Results";
import { formInfo } from "../../utils/formInfo";
import { ResponseContext } from "../../providers/Response";

export const Form = () => {
  const { postForm } = useContext(ResultsContext);
  const { triggerError } = useContext(ResponseContext);

  const { register, handleSubmit, reset, formState } = useFormContext();

  const onError = () => {
    triggerError();
  };

  const onSubmit = (data) => {
    postForm(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
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
      <FormSubmitButton type="submit">Enviar</FormSubmitButton>
    </FormContainer>
  );
};
