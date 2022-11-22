import { createContext, useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import api from "../../api";
import { ResponseContext } from "../Response";

export const ResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const { handleResponse, isLoading } = useContext(ResponseContext);
  const {
    formState: { errors },
  } = useFormContext();

  const [results, setResults] = useState({});

  const checkErrors = () => {
    return Object.keys(errors).length === 0;
  };

  const postForm = async (data) => {
    isLoading(true);
    await api
      .post("/", data)
      .then((response) => {
        setResults(response.data);
        handleResponse(response.status);
      })
      .catch((err) => {
        handleResponse(err.response.status);
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return (
    <ResultsContext.Provider value={{ results, postForm, checkErrors }}>
      {children}
    </ResultsContext.Provider>
  );
};
