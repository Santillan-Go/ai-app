import React from "react";
import useValidatePlan from "./useValidatePlan";

function useValidatePlanCard({ name }) {
  const { active, currentPlan, endDate, money, subID } = useValidatePlan();
  const isCurrent = currentPlan.includes(name);
  const isDisabled = money
    ? isCurrent && active
      ? false
      : true
    : isCurrent
    ? true
    : false;

  const Text = money
    ? isCurrent
      ? active
        ? "Cancel"
        : "Cancelado"
      : "Buy"
    : isCurrent
    ? "Current"
    : "Buy";
  return {
    money,
    endDate,
    subID,
    isDisabled,
    Text,
  };
}

export default useValidatePlanCard;
