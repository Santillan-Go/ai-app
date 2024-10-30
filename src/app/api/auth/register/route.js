import { NextResponse } from "next/server";

const {
  createNewUser,
  findUser,
  createUser,
  getUserByID,
} = require("@/lib/userRequest");

export const POST = async (req, { params }) => {
  const Data = await req.json();

  try {
    console.log({ ...Data });
    // const newOne = await createNewUser();

    // console.log(newOne);

    const newOne = await createUser({ ...Data });

    return NextResponse.json(newOne);
  } catch (error) {
    console.log(error);
  }
};

export const GET = async () => {
  try {
    const found = await getUserByID();

    return NextResponse.json(found);
  } catch (error) {
    console.log(error);
  }
};
