import { cancelUserSubcription } from "@/lib/userRequest";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const POST = async (req) => {
  const { subID, endDate, userID } = await req.json();

  try {
    //1-DELETE ACOUNTS AND CREATE IT AGAIN
    //2 HOW TO UNABLE THE FEATURES OF THE PLANS ONCE THE FINISH DATE ARRIVE JUST WHEN THE USER CANCEL THE PLAN???
    //YOU'RE GOING TO THIS IN THE FRONT, WITH CONDITIONAL RENDER
    //CHECKING ACTIVE AND BEGIN AND END DATES. AND THEN CONDITIONAL RENDER

    const subscription = await stripe.subscriptions.update(subID, {
      cancel_at_period_end: true,
    });

    await cancelUserSubcription({ userID });

    //CHECK DATE-7 DAYS REFOUND

    // UPDATE SUBSCRIPTION - IN THE PROPERTY CANCEL

    return NextResponse.json({
      message: "Plan has been cancel",
      url: `/plans/cancel?endDate=${endDate}`,
    });
  } catch (error) {
    console.log({ message: error.message });
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
