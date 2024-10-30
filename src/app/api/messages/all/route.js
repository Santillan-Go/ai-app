import dbConnect from "@/lib/MongoDB";
import { getAllMessages } from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  const { userID } = await req.json();
  try {
    await dbConnect();
    const messagesUser = await getAllMessages({ userID });
    return NextResponse.json(messagesUser);
  } catch (error) {
    return NextResponse.json({ message: error.message, error: true });
  }
};
