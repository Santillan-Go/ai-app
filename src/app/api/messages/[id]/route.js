import { ValidationError } from "@/errors/error";
import { validateId } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import { getMessagesByID } from "@/lib/userRequest";

const { NextResponse } = require("next/server");

export const GET = async (req, { params: { id } }) => {
  try {
    await dbConnect();
    validateId({ id, message: "id is requiered" });
    const messagesTutorID = await getMessagesByID({ chatID: id });

    if (!messagesTutorID)
      return NextResponse.json(
        { message: "Messages not found", found: false },
        { status: 404 }
      );
    return NextResponse.json(messagesTutorID);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
