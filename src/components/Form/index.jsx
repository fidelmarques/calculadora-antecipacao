import { FormSection } from "../FormSection";
import { FormContainer } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ResultsContext } from "../../providers/Results";

export const Form = () => {
  const { postForm } = useContext(ResultsContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    postForm(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormSection
        text="Informe o valor da venda *"
        label="amount"
        register={register}
        required
      />
      <FormSection
        text="Em quantas parcelas *"
        rule="Máximo de 12 parcelas"
        label="installments"
        register={register}
        required
      />
      <FormSection
        text={"Informe o percentual de MDR *"}
        label="mdr"
        register={register}
        required
      />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
};
