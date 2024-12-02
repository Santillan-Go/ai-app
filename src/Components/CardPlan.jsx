"use client";

import React from "react";
import useValidatePlanCard from "@/HOOKS/useValidatePlanCard";
import useActionPlan from "@/HOOKS/useActionPlan";

function CardPlan({ plan, spanish }) {
  const { endDate, money, subID, Text, isDisabled } = useValidatePlanCard({
    name: plan.name,
  });
  const { handleCancel, handlePurchase } = useActionPlan({
    name: plan.name,
    planId: plan.stripe_plan_id,
    subID,
    endDate,
  });

  return (
    <div
      key={crypto.randomUUID()}
      className="sm:group sm:hover:border-[0.5px] hover:border-slate-200 bg-gray-700 bg-opacity-25 rounded-3xl p-4 flex flex-col justify-between gap-4 text-slate-300 w-64 h-[500px] hover:bg-opacity-50 hover:shadow-xl sm:hover:scale-105 transition-all duration-200 hover:cursor-pointer mt-1 mb-1 sm:mt-0 sm:mb-0 "
    >
      <div className="flex flex-col gap-1 basis-[35%] items-center">
        <h2 className="group-hover:text-shadow-lg text-center font-semibold text-2xl text-slate-100 transition-all duration-200 flex-1">
          {plan.name}
        </h2>
        <div className="overflow-hidden w-24 h-24 rounded-full">
          <img
            src={plan.img}
            alt="Zoomed star"
            className="transition-transform duration-300 ease-in-out scale-[1.4] object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center basis-[15%]">
        <p className="text-center px-2 text-sm leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="flex flex-col items-center basis-[50%] justify-between">
        <p className="font-semibold text-lg text-slate-200 mb-2 gap-2">
          {spanish ? "Precio" : "Price"}: ${plan.price}
        </p>

        <section className="flex flex-col items-center gap-1 mb-2 mt-1 w-full ">
          {plan.benefits.length > 0 &&
            plan.benefits.map((b) => (
              <div key={b} className="text-sm text-slate-400 text-left w-full">
                <b className="text-green-600 text-xl">✓</b> {b.description}
              </div>
            ))}
          {plan.limitations.length > 0 &&
            plan.limitations.map((b) => (
              <div key={b} className="text-sm text-slate-400 text-left w-full">
                <b className="text-red-600 text-xl">X</b> {b.description}
              </div>
            ))}
        </section>

        <button
          onClick={money ? handleCancel : handlePurchase}
          disabled={isDisabled}
          className="w-4/5 py-2 rounded-2xl border border-slate-300 hover:bg-opacity-70 hover:text-white hover:font-semibold hover:shadow-md transition-all duration-200 justify-items-end disabled:font-normal disabled:bg-opacity-100  disabled:text-gray-500  disabled:border-slate-500"
        >
          {Text}
        </button>
      </div>
    </div>
  );
}

export default CardPlan;
{
  /*
  
money
            ? isCurrent
              ? active
                ? "Cancel"
                : "Cancelado"
              : "Buy"
            : isCurrent
            ? "Current"
            : "Buy"

   money
              ? isCurrent
                ? active
                  ? false
                  : true
                : true
              : isCurrent
              ? true
              : false
   <button
          onClick={handlePurchase}
          disabled={currentPlan.includes(plan.name) ? true : false}
          className="w-4/5 py-2 rounded-2xl border border-slate-300 hover:bg-opacity-70 hover:text-white hover:font-semibold hover:shadow-md transition-all duration-200 justify-items-end disabled:font-normal disabled:bg-opacity-100  disabled:text-gray-500  disabled:border-slate-500"
        >
          {currentPlan.includes(plan.name) ? "Current" : "Buy"}
        </button> 
        
        // const CheckCurrentPlan = () => {
  //   if (money) {
  //     return {
  //       current: currentPlan.includes(plan.name),
  //     };
  //     //disabled other and add current
  //     //IF IT IS PRO OR STANDARD I'M GOING TO CALL THE CURRENT "CANCEL", AND DISABLED THE OTHERS
  //   } else {
  //     //enable other
  //     // THI IS FOR FREE PLAN, I'M GONNA ALLOW THE OTHER BUTTONS TO BE CLICK
  //     return {
  //       current: currentPlan.includes(plan.name),
  //     };
  //   }
  // };

  // const { current } = CheckCurrentPlan();

        */
}
