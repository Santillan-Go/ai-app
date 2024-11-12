import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  try {
    const { planId, userID, name } = await request.json();
    // console.log({ userID });
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: planId,
          quantity: 1,
        },
      ],
      metadata: {
        userID,
        name,
      },
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/plans`,
    });

    ///UPDATE USER, PLAN
    /*
    //PLANS=> basic, medium, premium 
    {date:11/06/2024, finish:12/06/2024, }
    */

    // if (session.url) {
    // Subscription.create({
    //   data: {
    //     userID,
    //     planId,
    //     stripeId: session.id,
    //     startDate: new Date(), // When the user is created, set their subscription date
    //     finishDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // One month after the user creates their subscription
    //   },
    // });
    // }
    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

/*
import { NextResponse } from "next/server";
import { Stripe } from "stripe";
export async function POST(res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const id = await res.json();
  //SESSION
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: id.id,
        quantity: 1,
      },
    ],
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/pricing`,
  });
  return NextResponse.json({ url: session.url });
}

*/
