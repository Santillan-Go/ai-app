import { ValidationError } from "@/errors/error";
import { validateChat } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import { createNewMessagesGlobal, updateTokensByOne } from "@/lib/userRequest";

const { NextResponse } = require("next/server");

export const POST = async (req, { params }) => {
  const { userID, chatID, content, role, money } = await req.json();
  try {
    await dbConnect();
    validateChat({ userID, chatID, content, role });
    const newMessageUser = await createNewMessagesGlobal({
      chatID,
      userID,
      content,
      role,
    });
    console.log({ money, role });
    if (!money && role === "you") {
      await updateTokensByOne({ userID });
    }
    //await updateTokensByOne({userID});
    return NextResponse.json(newMessageUser);
  } catch (error) {
    console.error(error, "ERROR");
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message, error: true });
  }
};
