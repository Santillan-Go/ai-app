import { ValidateFound, ValidationError } from "@/errors/error";
import { validateId } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import { restarTokens } from "@/lib/restarTokens";
import {
  deleteMessagesByUserID,
  deleteTutorByUserID,
  deleteUserByID,
  getSubscriptionsByIdUser,
  getTokensUser,
  getUserByID,
  updateUsername,
  updateUserSubcription,
} from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;

    await dbConnect();
    validateId({ id, message: "id is required" });
    const found = await getUserByID({ userID: id });
    const subcriptionUser = await getSubscriptionsByIdUser({ userID: id });
    const userFound = {
      username: found._doc.username,
      _id: found._doc._id,
      email: found._doc.email,
    };
    console.log({ subcriptionUser });
    //check the fucking date you're saving!!!!
    const currentDate = new Date().toISOString().split("T")[0];
    const endDate = subcriptionUser.endDate;
    if (!subcriptionUser.active && currentDate === endDate) {
      console.log("FINISH DATE");
      const updateSubscription = await updateUserSubcription({
        userID: id,
        planName: "Free",
        stripe_plan_id: "free_plan_43522_22",

        //  subID: session.subscription,
      });
      return NextResponse.json({
        ...userFound,

        planName: "Free",
        stripe_plan_id: "free_plan_43522_22",
        subID: "",
        startDate: "never",
        endDate: "never",
      });
    }

    const responseObject = {
      ...userFound,

      planName: subcriptionUser.planName,
      stripe_plan_id: subcriptionUser.stripe_plan_id,
      subID: subcriptionUser.subID,
      endDate: subcriptionUser.endDate,
      active: subcriptionUser.active,
    };

    const tokens = await restarTokens({
      planName: subcriptionUser.planName,
      userID: id,
    });
    if (tokens) {
      responseObject.tokens = tokens.tokens;
    }

    if (!responseObject.tokens) {
      const tokens = await getTokensUser({ userID: id });
      responseObject.tokens = tokens.tokens;
    }
    //IF PLANNAME===Free
    //UPDATE TOKENS IF IT'S NEXT DAY

    ///IF ACTIVE IS FALSE AND START AND END DATE COINCIDE UPDATE THE  DB
    /// SEE WHAT DATA I'M SAVING
    return NextResponse.json(responseObject);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    if (error instanceof ValidateFound) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const PUT = async (req, { params }) => {
  const { username } = await req.json();
  const { id } = await params;
  try {
    await dbConnect();
    validateId({ id, message: "id is required" });
    const updatedOne = await updateUsername({ userID: id, username });

    return NextResponse.json(updatedOne);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  try {
    await dbConnect();
    validateId({ id, message: "id is required" });
    await deleteUserByID({ userID: id });
    await deleteTutorByUserID({ userID: id });
    await deleteMessagesByUserID({ userID: id });
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
