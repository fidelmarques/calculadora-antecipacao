import { createContext, useState } from "react";

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(true);

  const handleResponse = (response) => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setInfo(false);
    setResponse(response.status);
  };

  const setResponse = (status) => {
    console.log(status);
    return (
      (status === 200 && setSuccess(true)) || (status === 400 && setError(true))
    );
  };

  return (
    <ResponseContext.Provider
      value={{ success, error, warning, info, handleResponse }}
    >
      {children}
    </ResponseContext.Provider>
  );
};
