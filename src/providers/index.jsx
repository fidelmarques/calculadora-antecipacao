import { ResponseProvider } from "./Response";
import { ResultsProvider } from "./Results";

const Providers = ({ children }) => {
  return (
    <ResponseProvider>
      <ResultsProvider>{children}</ResultsProvider>
    </ResponseProvider>
  );
};

export default Providers;
