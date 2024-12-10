import { ValidationError } from "@/errors/error";
import { ValidateUser } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";

const {
  createUser,
  getAllUsers,
  getUserByEmail,
  deleteAllUsers,
  createPlanSubcription,
  deleteAllTutors,
  deleteAllMessages,
  createTokensUser,
  deleteAllSubscriptions,
} = require("@/lib/userRequest");
const { NextResponse } = require("next/server");

export const POST = async (req) => {
  const { username, email, password } = await req.json();

  try {
    await dbConnect();
    const _id = crypto.randomUUID();
    //NOT REPEAT THE EMAIL, SO VALIDATE IT
    ValidateUser({ username, email, password });
    const existingUser = await getUserByEmail({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use", exite: true },
        { status: 400 }
      );
    }
    const newUser = await createUser({ username, email, password, _id });
    console.log({ newUser });

    //CREATE THE TOKENS
    const createdTokens = await createTokensUser({ userID: _id });
    console.log({ createdTokens });

    const planUser = await createPlanSubcription({ userID: _id });
    console.log({ planUser });

    return NextResponse.json(newUser, { status: 201 }); // Created successfully
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    await dbConnect();
    const allOnes = await getAllUsers();
    return NextResponse.json(allOnes);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};

export const DELETE = async () => {
  try {
    await dbConnect();
    const allOnes = await deleteAllUsers();
    await deleteAllTutors();
    await deleteAllMessages();
    await deleteAllSubscriptions();

    return NextResponse.json(allOnes);
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
