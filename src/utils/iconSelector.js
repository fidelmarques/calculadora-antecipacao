import { FaBarcode } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export const iconSelector = (label, color = "grey") => {
  switch (label) {
    case "amount":
      return <MdAttachMoney color={color} />;
    case "installments":
      return <FaBarcode color={color} />;
    case "mdr":
      return <FiPercent color={color} />;

    default:
      return false;
  }
};
