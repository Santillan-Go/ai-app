import { ValidationError } from "@/errors/error";
import { validateId } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import { getAllTutor } from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userID } = await req.json();

  try {
    await dbConnect();
    validateId({ id: userID, message: "userID is requiered" });
    const tutorsUser = await getAllTutor({ userID });

    return NextResponse.json(tutorsUser);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
