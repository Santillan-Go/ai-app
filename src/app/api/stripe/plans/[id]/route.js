import { PlansSubscription } from "@/lib/Schema";
import { NextResponse } from "next/server";

/*

action:(necesary-whatever)|limitations|benefits

*/

const ACTIONS = {
  necesary: async (necesary, PlanID) => {
    console.log("NECESARY");

    const Updated = await PlansSubscription.updateOne(
      {
        _id: PlanID,
      },
      {
        $set: {
          ...necesary,
        },
      }
    );
  },
  upLimitations: async ({ limitID, limit }, PlanID) => {
    //HOW TO UPDATE FOR AN EXPECIFYC OBECT OF LIMITATIONA || BENEFITS
    console.log("LIMITATION");

    const result = await PlansSubscription.updateOne(
      { _id: PlanID, "limitations._id": limitID }, // Match plan and the benefit by their IDs
      {
        $set: {
          "limitations.$.description": limit, // Update the specific field
          //"benefits.$.isActive": updatedData.isActive, // You can add more fields
        },
      }
    );
  },
  upBenefits: async ({ benefitID, benefit }, PlanID) => {
    console.log({ benefitID, benefit, PlanID });
    const result = await PlansSubscription.updateOne(
      { _id: PlanID, "benefits._id": benefitID }, // Match plan and the benefit by their IDs
      {
        $set: {
          "benefits.$.description": benefit, // Update the specific field
          //"benefits.$.isActive": updatedData.isActive, // You can add more fields
        },
      }
    );
    console.log("BENEFITS");
  },
  addLimitations: async ({ limit }, PlanID) => {
    //HOW TO UPDATE FOR AN EXPECIFYC OBECT OF LIMITATIONA || BENEFITS
    console.log("LIMITATION");
    //ADD ANOTHER ITEM TO LIMITATIONS
    const result = await PlansSubscription.updateOne(
      { _id: PlanID }, // Match the plan
      {
        $push: {
          limitations: {
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
            description: limit, // Add the new benefit
          },
        },
      }
    );
  },
  addBenefits: async ({ benefit }, PlanID) => {
    //HOW TO UPDATE FOR AN EXPECIFYC OBECT OF LIMITATIONA || BENEFITS
    console.log("LIMITATION");
    //ADD ANOTHER ITEM TO LIMITATIONS
    const result = await PlansSubscription.updateOne(
      { _id: PlanID }, // Match the plan
      {
        $push: {
          benefits: {
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
            description: benefit, // Add the new benefit
          },
        },
      }
    );
  },
};
export const PUT = async (req, { params }) => {
  //REMEMBER TO UPDATE THE SCHEMA
  // Retrieve the data from the request body
  const { id } = await params;
  const { necesary, action } = await req.json();
  console.log({ id });
  /*
  WHAT IS NECESARY??
 {namePlan, description, whatever but not limitations or benefits}
 ||["whatever"]==> UPDATEONE(benefits(...necesary))



 EDIT ONE- HOW???
  */
  try {
    await ACTIONS[action](necesary, id);
    return NextResponse.json({ message: "Plan updated successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
};
