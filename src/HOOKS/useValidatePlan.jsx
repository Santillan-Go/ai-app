"use client";
import { useAppSelector } from "@/store/store";

function useValidatePlan() {
  const {
    planName: currentPlan,
    endDate,
    active,
    subID,
  } = useAppSelector((state) => state.userRedux);

  const moneyPlan = ["Pro", "Standard"];

  //return moneyPlan.includes(currentPlan);
  return {
    money: moneyPlan.includes(currentPlan),
    currentPlan,
    endDate,
    active,
    subID,
  };
}

export default useValidatePlan;
