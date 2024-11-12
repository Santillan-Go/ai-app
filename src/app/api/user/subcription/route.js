import dbConnect from "@/lib/MongoDB";
import { getSubscriptionsUser } from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const GET = async () => {
  // Connect to your MongoDB database

  try {
    await dbConnect();
    const result = await getSubscriptionsUser();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
