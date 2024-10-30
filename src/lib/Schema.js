import { Schema as _Schema, model, models } from "mongoose";
const Schema = _Schema;

console.log(models, "Existing Models");
// Knowledge Schema
const KnowledgeSchema = new Schema({
  name: { type: String, required: true },
  _id: { type: String, required: true },
});

// Tutor Schema
const TutorSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String },
  KNOWLEDGE: [KnowledgeSchema],
  userID: { type: String, required: true },
});

// Message Schema
const MessageSchema = new Schema({
  content: { type: String, required: true },
  role: { type: String, enum: ["you", "AI"], required: true },
  _id: { type: String, required: true },
});

// MessageGlobal Schema
const MessageGlobalSchema = new Schema({
  _id: { type: String, required: true },
  messageAll: [MessageSchema],
  userID: { type: String, required: true },
});

// User Schema
const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // optional if password is not required
  _id: { type: String, required: true },
});

export const User = models.User || model("User", UserSchema);

export const MessagesGlobal =
  models.MessagesGlobal || model("MessagesGlobal", MessageGlobalSchema);

export const TutorsGlobal =
  models.TutorsGlobal || model("TutorsGlobal", TutorSchema);
