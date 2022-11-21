export const formInfo = [
  {
    text: "Informe o valor da venda: *",
    label: "amount",
  },
  {
    text: "Em quantas parcelas? *",
    rule: "Máximo de 12 parcelas",
    label: "installments",
  },
  {
    text: "Informe o percentual de MDR: *",
    label: "mdr",
  },
];

export const formDefaultValues = { amount: "", installments: "", mdr: "" };

export const formShortValidationMessage = { amount: "Valor da venda válido." };
