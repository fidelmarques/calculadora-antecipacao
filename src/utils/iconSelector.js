import { FaBarcode } from "react-icons/fa";
import { FiPercent } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

export const iconSelector = (label, color = "grey", size = "1em") => {
  switch (label) {
    case "amount":
      return <MdAttachMoney color={color} size={size} />;
    case "installments":
      return <FaBarcode color={color} size={size} />;
    case "mdr":
      return <FiPercent color={color} size={size} />;

    default:
      return false;
  }
};
