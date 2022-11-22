import { iconSelector } from "../../utils/iconSelector";
import { ErrorContainer } from "./style";

export const ErrorMessages = (errors) => {
  return (
    <ErrorContainer>
      {console.log(errors)}
      {Object.entries(errors.errors).map(([key, value]) => (
        <div>
          {iconSelector(key, "red", "2em")}
          <p key={key}>{value.message}</p>
        </div>
      ))}
    </ErrorContainer>
  );
};
