import { ValidationError } from "@/errors/error";
import { validateKnowledge } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";

const { updateKnowledge } = require("@/lib/userRequest");
const { NextResponse } = require("next/server");

export const POST = async (req) => {
  const { tutorID, knowledgeID, name } = await req.json();

  console.log({ tutorID, knowledgeID, name });
  try {
    await dbConnect();
    validateKnowledge({ tutorID, knowledgeID, name });
    const response = await updateKnowledge({
      tutorID,

      knowledgeID,
      name,
    });

    return NextResponse.json({
      message: "knowledge updated successfully",
      updated: true,
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message });
  }
};
