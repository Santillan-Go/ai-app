import dbConnect from "@/lib/MongoDB";

const { ValidateFound } = require("@/errors/error");
const { validateTutorFound } = require("@/errors/Validations");
const { getOneTutor } = require("@/lib/userRequest");
const { NextResponse } = require("next/server");

export const GET = async (req, { params }) => {
  try {
    const { id } = await params;
    await dbConnect();
    const foundTutor = await getOneTutor({ tutorID: id });

    validateTutorFound({ foundOne: foundTutor });
    return NextResponse.json(foundTutor);
  } catch (error) {
    if (error instanceof ValidateFound) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
