import { useContext } from "react";
import { ResponseContext } from "../../providers/Response";
import { ResultsContext } from "../../providers/Results";
import {
  FinalResultsContainer,
  LoadingIcon,
  ResetResultsButton,
  TextInfo,
} from "./style";
import { FcInfo, FcOk, FcTodoList, FcHighPriority } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useFormContext } from "react-hook-form";
import { ErrorMessages } from "../ErrorMessages";

export const Results = () => {
  const { results } = useContext(ResultsContext);
  const { success, info, error, loading, warning, resetStates, returnToForm } =
    useContext(ResponseContext);

  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {info && (
        <>
          <FcInfo size="2em" />
          <TextInfo>
            Após enviar o formulário, os valores da sua simulação serão exibidos
            aqui.
          </TextInfo>
        </>
      )}
      {warning && (
        <>
          <FcTodoList size="2em" />
          <TextInfo>Validação dos campos</TextInfo>
          {Object.entries(errors).map(([key, value]) => (
            <p key={key}>
              {key}: {value.message}
            </p>
          ))}
        </>
      )}
      {loading && (
        <>
          <LoadingIcon>
            <AiOutlineLoading3Quarters size="2em" />
          </LoadingIcon>

          <h1>Por favor aguarde...</h1>
        </>
      )}
      {success && (
        <>
          <FcOk size="2em" />
          <h1>Sucesso!</h1>
          <h2>Você receberá:</h2>
          <FinalResultsContainer>
            <li>
              <h3>Amanhã:</h3>
              <h4>{`R$ ${results["1"] || "0"},00`}</h4>
            </li>
            <li>
              <h3>Em 15 dias:</h3>
              <h4>{`R$ ${results["15"] || "0"},00`}</h4>
            </li>
            <li>
              <h3>Em 30 dias:</h3>
              <h4>{`R$ ${results["30"] || "0"},00`}</h4>
            </li>
            <li>
              <h3>Em 90 dias:</h3>
              <h4>{`R$ ${results["90"] || "0"},00`}</h4>
            </li>
          </FinalResultsContainer>
          <ResetResultsButton onClick={resetStates}>
            Novo cálculo
          </ResetResultsButton>
        </>
      )}
      {error && (
        <>
          <FcHighPriority size="2em" />
          <h1>Erro!</h1>
          <ErrorMessages errors={errors} />
          <ResetResultsButton onClick={returnToForm}>Voltar</ResetResultsButton>
        </>
      )}
    </>
  );
};
