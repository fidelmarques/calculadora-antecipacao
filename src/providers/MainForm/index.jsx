import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formDefaultValues } from "../../utils/formInfo";
import { formSchema } from "../../utils/formSchema";

export const MainFormProvider = ({ children }) => {
  const methods = useForm({
    defaultValues: formDefaultValues,
    resolver: yupResolver(formSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
