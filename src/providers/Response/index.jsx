import { createContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export const ResponseContext = createContext();

export const ResponseProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isFormEnabled, setIsFormEnabled] = useState(true);

  const {
    formState: { isDirty },
  } = useFormContext();

  useEffect(() => {
    checkForm();
  }, [success, error, loading]);

  useEffect(() => {
    setInfo(isDirty ? false : true);
    setWarning(isDirty ? true : false);
  }, [isDirty]);

  const checkForm = () => {
    setIsFormEnabled(!(success || error || loading));
  };

  const resetStates = () => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setInfo(true);
  };

  const isLoading = (prop) => {
    setInfo(false);
    setLoading(prop);
  };

  const handleResponse = (status) => {
    setSuccess(false);
    setError(false);
    setWarning(false);
    setInfo(false);
    setResponse(status);
  };

  const setResponse = (status) => {
    return (
      (status === 200 && setSuccess(true)) || (status === 400 && setError(true))
    );
  };

  return (
    <ResponseContext.Provider
      value={{
        success,
        error,
        warning,
        info,
        loading,
        isFormEnabled,
        handleResponse,
        isLoading,
        resetStates,
      }}
    >
      {children}
    </ResponseContext.Provider>
  );
};
