import React from "react";
import useValidatePlan from "./useValidatePlan";
import useLanguage from "./useLanguage";

function useValidatePlanCard({ name }) {
  const { active, currentPlan, endDate, money, subID } = useValidatePlan();
  const { spanish } = useLanguage();
  const isCurrent = currentPlan.includes(name);
  const isDisabled = money ? !(isCurrent && active) : isCurrent;
  /*
  const isDisabled = money
    ? isCurrent && active
      ? false
      : true
    : isCurrent
    ? true
    : false;


*/

  /*
   const Text = money
    ? isCurrent
      ? active
        ? spanish
          ? "Cancelar"
          : "Cancel"
        : spanish
        ? "Cancelado"
        : "Canceled"
      : spanish
      ? "Comprar"
      : "Buy"
    : isCurrent
    ? spanish
      ? "Actual"
      : "Current"
    : spanish
    ? "Comprar"
    : "Buy";
  */
  const getText = () => {
    if (money) {
      if (isCurrent) {
        if (active) {
          return spanish ? "Cancelar" : "Cancel";
        }
        return spanish ? "Cancelado" : "Canceled";
      }
      return spanish ? "Comprar" : "Buy";
    } else {
      if (isCurrent) {
        return spanish ? "Actual" : "Current";
      }
      return spanish ? "Comprar" : "Buy";
    }
  };
  const Text = getText();

  return {
    money,
    endDate,
    subID,
    isDisabled,
    Text,
  };
}

export default useValidatePlanCard;
