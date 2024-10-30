import { ValidationError } from "@/errors/error";
import { validateBothId, validateTutor } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import { createNewTutor, deleteMessages, deleteTutor } from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { image, name, userID, tutorID, id_1, id_2, id_3 } = await req.json();
  try {
    await dbConnect();
    validateTutor({ image, name, userID, tutorID, id_1, id_2, id_3 });
    const newTutor = await createNewTutor({
      image,
      name,
      userID,
      tutorID,
      id_1,
      id_2,
      id_3,
    });

    return NextResponse.json(newTutor);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  const { userID, tutorID } = await req.json();
  try {
    //PASS USERID && TUTORID
    await dbConnect();
    validateBothId({ userID, tutorID });
    const deletedOne = await deleteTutor({ tutorID, userID });
    const deleteMessagesTutor = await deleteMessages({ tutorID, userID });
    return NextResponse.json({ message: "Tutor deleted successfully!" });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
