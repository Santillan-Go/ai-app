// import Stripe from "stripe";
import { NextResponse } from "next/server";
import { validatePlan } from "@/errors/Validations";
import { ValidationError } from "@/errors/error";
import { PlansSubscription } from "@/lib/Schema";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const GET = async () => {
  try {
    const results = await PlansSubscription.find();
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    // const prices = await stripe.prices.list();
    // console.log(prices);
    // const products = await stripe.products.list();

    // const productsWithPrices = products.data.map((product) => {
    //   const productPrices = prices.data.filter(
    //     (price) => price.product === product.id
    //   );

    //   return {
    //     id: product.id,
    //     name: product.name,
    //     description: product.description,
    //     img: product.images[0],
    //     prices: productPrices.map((price) => ({
    //       id: price.id,
    //       unit_amount: price.unit_amount,
    //       currency: price.currency,
    //     })),
    //   };
    // });
    // console.log(prices);
    return NextResponse.json(results);
    // Fetch all products

    // // Fetch all prices (you can filter by product id if needed)
    // const prices = await stripe.prices.list();

    // // Map products with their associated prices
    // console.log(products.data);
  } catch (error) {
    console.error({ messageError: error.message });
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

///CREATE YOUR PLANS AND TEST PAYMENT METHOD
export const POST = async (req) => {
  try {
    const data = await req.json();
    const {
      img,
      price,
      isNew,
      benefits,
      limitations,
      name,
      max_queries,
      trial_period_days,
      is_active,
      billing_interval,
      cancellation_policy,
      access_level,
      description,
      currency,
      stripe_plan_id,
      plan_id,
    } = data;
    const { _plan_id, necesary } = data;

    if (isNew) {
      const id = `${crypto.randomUUID()}-${name}`;
      validatePlan({
        img,
        price,
        isNew,
        benefits,
        limitations,
        name,
        max_queries,
        trial_period_days,
        is_active,
        billing_interval,
        cancellation_policy,
        access_level,
        description,
        currency,
        stripe_plan_id,
      });
      //SAVE IT IN THE DB
      const result = await PlansSubscription.create({
        id,
        img,
        price,
        isNew,
        benefits,
        limitations,
        name,
        max_queries,
        trial_period_days,
        is_active,
        billing_interval,
        cancellation_policy,
        access_level,
        stripe_plan_id,
        description,
        currency,
      });
      return NextResponse.json({
        message: "Plans saved successfully!",
        ...result,
      });
    } else {
      const result = await PlansSubscription.updateOne(
        { id: plan_id },
        {
          $set: {
            ...necesary,
          },
        }
      );
      //UPDATE IT
      return NextResponse.json({
        message: "Plans updated successfully!",
      });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
/*
export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const prices = await stripe.prices.list();
  // console.log(prices);

  return NextResponse.json(prices.data);
}

*/

export const DELETE = async (req) => {
  // DELETE FROM DB
  const data = await req.json();
  const result = await PlansSubscription.deleteOne({
    stripe_plan_id: data.stripe_plan_id,
  });

  try {
    return NextResponse.json({ message: "Plans deleted successfully!" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
