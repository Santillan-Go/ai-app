import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { Subscription } from "@/lib/Schema";
import { updateUserSubcription } from "@/lib/userRequest";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const ednPointSecret = "whsec_JUpoW3souZPzHuk91B7C2JYTuoR7meIL";
export const POST = async (req) => {
  const data = await req.text();
  const headersList = headers();
  const sigStripe = (await headersList).get("stripe-signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      data,
      sigStripe,
      process.env.END_POINT_SECRET
    );
    // console.log(event);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const { userID, stripe_plan_id, name } = session.metadata;

        if (userID) {
          console.log({ userID });
          console.log(session);
          const updateSubscription = await updateUserSubcription({
            userID,
            planName: name,
            stripe_plan_id,
            subID: session.subscription,
            active: true,
          });
          // Subscription.create({
          //   data: {
          //     userID,
          //     planID: session.subscription_data.items[0].price.id,
          //     stripe_plan_id: session.id,
          //     startDate: new Date(), // When the user is created, set their subscription date
          //     endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)), // One month after the user creates their subscription
          //     planName: data.name,
          //   },
          // });

          console.log(session.metadata);
        } else {
          console.log("No User ID in metadata");
          console.log({ userID });
          // return NextResponse.json({ message: "No User ID in metadata" }, { status: 400 });
        }
        //SAVE ON DB
        return NextResponse.json({ message: "All good!" });
      }
      default: {
        return NextResponse.json({ message: "Error!" });
      }
    }
  } catch (error) {
    console.log({ message: error.message });
    return NextResponse.json({ message: error.message }, { status: 400 });
    console.log(error);
  }
};
