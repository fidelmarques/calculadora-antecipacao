import { createContext, useContext, useState } from "react";
import api from "../../api";
import { ResponseContext } from "../Response";

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const { handleResponse } = useContext(ResponseContext);

  const [results, setResults] = useState({});

  const postForm = (data) => {
    api
      .post("/", data)
      .then((response) => {
        console.log(response);
        handleResponse(response);
        setResults(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ResultsContext.Provider value={{ results, postForm }}>
      {children}
    </ResultsContext.Provider>
  );
};
