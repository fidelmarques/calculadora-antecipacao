import * as yup from "yup";

export const formSchema = yup
  .object()
  .shape({
    amount: yup
      .number()
      .typeError("O valor da venda precisa ser um número válido.")
      .min(1000, "O valor da venda precisa ser maior ou igual a R$1000,00.")
      .max(
        100000000,
        "O valor da venda precisa ser menor ou igual a R$100000000,00."
      )
      .required("O valor da venda é um campo obrigatório."),
    installments: yup
      .number()
      .typeError("O número de parcelas precisa ser um número válido.")
      .integer("O número de parcelas precisa ser um inteiro.")
      .min(1, "O número de parcelas precisa ser maior ou igual a 1.")
      .max(12, "O número de parcelas precisa ser menor ou igual a 12.")
      .required("O número de parcelas é um campo obrigatório."),
    mdr: yup
      .number()
      .typeError("O valor da venda precisa ser um número válido.")
      .min(0, "O percentual de MDR precisa ser maior ou igual a 0%.")
      .max(100, "O percentual de MDR precisa ser menor ou igual a 100%.")
      .required("O percentual de MDR é um campo obrigatório."),
  })
  .required();

export const amountValidation = yup
  .number()
  .typeError("O valor da venda precisa ser um número válido.")
  .min(1000, "O valor da venda precisa ser maior ou igual a R$1000,00.")
  .max(
    100000000,
    "O valor da venda precisa ser menor ou igual a R$100000000,00."
  );

export const installmentsValidation = yup
  .number()
  .typeError("O número de parcelas precisa ser um número válido.")
  .integer("O número de parcelas precisa ser um inteiro.")
  .min(1, "O número de parcelas precisa ser maior ou igual a 1.")
  .max(12, "O número de parcelas precisa ser menor ou igual a 12.");

export const mdrValidation = yup
  .number()
  .typeError("O percentual de MDR precisa ser um número válido.")
  .min(0, "O percentual de MDR precisa ser maior ou igual a 0%.")
  .max(100, "O percentual de MDR precisa ser menor ou igual a 100%.");

export const validateInput = {
  amount: amountValidation,
  installments: installmentsValidation,
  mdr: mdrValidation,
};
