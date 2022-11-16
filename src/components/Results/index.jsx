import { useContext } from "react";
import { ResponseContext } from "../../providers/Response";
import { ResultsContext } from "../../providers/Results";
import { FinalResultsContainer } from "./style";

export const Results = () => {
  const { results } = useContext(ResultsContext);
  const { success, info } = useContext(ResponseContext);

  return (
    <>
      {info && <h1>Preencha o form</h1>}
      {success && (
        <>
          <h2>Você receberá:</h2>
          <FinalResultsContainer>
            <li>
              <span>Amanhã:</span>
              <span>R$ {results["1"] || "0,00"}</span>
            </li>
            <li>
              <span>Em 15 dias:</span>
              <span>R$ {results["15"] || "0,00"}</span>
            </li>
            <li>
              <span>Em 30 dias:</span>
              <span>R$ {results["30"] || "0,00"}</span>
            </li>
            <li>
              <span>Em 90 dias:</span>
              <span>R$ {results["90"] || "0,00"}</span>
            </li>
          </FinalResultsContainer>
        </>
      )}
    </>
  );
};
