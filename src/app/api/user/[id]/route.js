import { ValidationError } from "@/errors/error";
import { validateId } from "@/errors/Validations";
import dbConnect from "@/lib/MongoDB";
import {
  deleteMessagesByUserID,
  deleteTutorByUserID,
  deleteUserByID,
  getUserByID,
  updateUsername,
} from "@/lib/userRequest";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { id } }) => {
  try {
    await dbConnect();
    validateId({ id, message: "id is required" });
    const found = await getUserByID({ userID: id });

    if (!found) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(found);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const PUT = async (req, { params: { id } }) => {
  const { username } = await req.json();
  try {
    await dbConnect();
    validateId({ id, message: "id is required" });
    const updatedOne = await updateUsername({ userID: id, username });

    return NextResponse.json(updatedOne);
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};

export const DELETE = async (req, { params: { id } }) => {
  try {
    await dbConnect();
    validateId({ id, message: "id is required" });
    await deleteUserByID({ userID: id });
    await deleteTutorByUserID({ userID: id });
    await deleteMessagesByUserID({ userID: id });
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
