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

const TokensUserSchema = new Schema({
  tokens: { type: Number, required: true },
  userID: { type: String, required: true },
  lastupdate: { type: String, required: true },
});

const SubscriptionSchema = new Schema({
  userID: { type: String, required: true, ref: "User" },
  planName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  stripe_plan_id: { type: String, required: true },
  subID: { type: String, required: false },
  active: { type: Boolean, required: false },
});

// const ItemArray = new Schema({
//   description: { type: String, requiered: true },
// });

const BenefitSchema = new Schema({
  description: {
    type: Map, // Stores key-value pairs for translations
    of: String, // The value is a string for each language
  },
});

const PlansSubscriptionSchema = new Schema(
  {
    id: { type: String, required: true },
    stripe_plan_id: { type: String, required: true },
    name: { type: String, required: true },
    description: {
      type: Map,
      of: String, // Translations for description
    },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    img: { type: String, required: true },
    benefits: [BenefitSchema],
    limitations: [BenefitSchema],
    max_queries: { type: String, required: true },
    access_level: {
      type: String,
      required: true,
      enum: ["Basic", "Standard", "Pro"],
    }, // Example enum
    trial_period_days: { type: Number, required: false },
    is_active: { type: Boolean, required: true },
    billing_interval: {
      type: String,
      required: true,
      enum: ["monthly", "annually"],
    }, // Example enum
    cancellation_policy: { type: String, required: false },
  },
  { timestamps: true }
); // Automatically manages `createdAt` and `updatedAt` fields

export const User = models.User || model("User", UserSchema);

export const MessagesGlobal =
  models.MessagesGlobal || model("MessagesGlobal", MessageGlobalSchema);

export const TutorsGlobal =
  models.TutorsGlobal || model("TutorsGlobal", TutorSchema);

export const Subscription =
  models.Subscription || model("Subscription", SubscriptionSchema);

export const PlansSubscription =
  models.PlansSubscription ||
  model("PlansSubscription", PlansSubscriptionSchema);

export const TokensUser =
  models.TokensUser || model("TokensUser", TokensUserSchema);

/*
https://photos.fife.usercontent.google.com/pw/AP1GczMtAuqlPOqScL5qkmftnQ3EjKNXt5XWmT6_k62aHIeEPfoVgWk9bG8=w233-h232-s-no-gm?authuser=0  


  */
