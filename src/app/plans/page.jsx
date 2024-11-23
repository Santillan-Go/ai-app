import BackTo from "@/Components/BackTo";
import BackToCustom from "@/Components/BackToCustom";
import CardPlan from "@/Components/CardPlan";
import React from "react";

const getPlans = async () => {
  const plans = await fetch(`${process.env.BASE_URL}/api/stripe/plans`);
  if (!plans.ok) return [];
  return await plans.json();
};
async function page() {
  const plans = await getPlans();

  return (
    <section className="h-screen w-full  items-center pt-2">
      <BackToCustom />
      <article className="flex justify-center flex-wrap  gap-4 ">
        {plans
          .sort((a, b) => a.price - b.price)

          .map((plan) => (
            <CardPlan plan={plan} />
          ))}
      </article>
    </section>
  );
}

export default page;
