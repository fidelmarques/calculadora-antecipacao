import { MainFormProvider } from "./MainForm";
import { ResponseProvider } from "./Response";
import { ResultsProvider } from "./Results";

const Providers = ({ children }) => {
  return (
    <MainFormProvider>
      <ResponseProvider>
        <ResultsProvider>{children}</ResultsProvider>
      </ResponseProvider>
    </MainFormProvider>
  );
};

export default Providers;
