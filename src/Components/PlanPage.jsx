"use client";
import React, { useEffect, useState } from "react";
import BackToCustom from "./BackToCustom";
import CardPlan from "./CardPlan";
import useLanguage from "@/HOOKS/useLanguage";

function PlanPage() {
  const [plans, setPlans] = useState([]);
  const { languageName, spanish } = useLanguage();
  const lang = languageName === "spanish" ? "es" : "en";
  const getPlans = async () => {
    const plans = await fetch(`/api/stripe/plans?lang=${lang}`);
    if (!plans.ok) return [];
    return await plans.json();
  };

  useEffect(() => {
    getPlans().then((data) => setPlans(data));
  }, []);

  return (
    <section className="h-screen sm:h-screen w-full  items-center pt-2">
      <BackToCustom />
      <article className="flex justify-center items-center flex-wrap  gap-4 overflow-y-auto scrollbar-thin w-full h-full mt-2 mb-2">
        {plans
          .sort((a, b) => a.price - b.price)

          .map((plan) => (
            <CardPlan plan={plan} spanish={spanish} key={plan.stripe_plan_id} />
          ))}
      </article>
    </section>
  );
}

export default PlanPage;
