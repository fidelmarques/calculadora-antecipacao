import { createContext, useContext, useState } from "react";
import api from "../../api";
import { ResponseContext } from "../Response";

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const { handleResponse, isLoading } = useContext(ResponseContext);

  const [results, setResults] = useState({});

  const postForm = async (data) => {
    isLoading(true);
    await api
      .post("/", data)
      .then((response) => {
        setResults(response.data);
        handleResponse(response.status);
        console.log("THEN");
        console.log(response);
      })
      .catch((err) => {
        console.log("CATCH");
        console.log(err);
        handleResponse(err.response.status);
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return (
    <ResultsContext.Provider value={{ results, postForm }}>
      {children}
    </ResultsContext.Provider>
  );
};
