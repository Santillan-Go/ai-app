//export default mongoose.models.Post || mongoose.model('Post', postSchema)

// Compile the model
// const User = model("User", UserSchema);

// export default models.User || User;

// const User = model("User", UserSchema);

// export default models.User || User;

//---HERE

// import { Schema as _Schema, model, models } from "mongoose";
// const Schema = _Schema;

// // Knowledge Schema
// const KnowledgeSchema = new Schema({
//   name: { type: String, required: true },
// });

// // Tutor Schema
// const TutorSchema = new Schema({
//   _id: { type: String, required: true },
//   name: { type: String, required: true },
//   image: { type: String },
//   KNOWLEDGE: [KnowledgeSchema],
// });

// // Message Schema
// const MessageSchema = new Schema({
//   content: { type: String, required: true },
//   role: { type: String, enum: ["you", "AI"], required: true },
// });

// // MessageGlobal Schema
// const MessageGlobalSchema = new Schema({
//   _id: { type: String, required: true },
//   messageAll: [MessageSchema],
// });

// // User Schema
// const UserSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: false }, // optional if password is not required
//   messagesGlobal: [MessageGlobalSchema],
//   tutorsGlobal: [TutorSchema],
// });

// Compile the model
// const User = model("User", UserSchema);

// export default models.User || User;

// const User = model("User", UserSchema);

// export default models.User || User;

// const User = models.User || model("User", UserSchema);

// export default User;

//export default mongoose.models.Post || mongoose.model('Post', postSchema)

// FUNCTIONS DB

/*

export const createNewMessagesGlobal = async ({
  userId,
  chatID,
  content,
  role,
}) => {
  //ID_USER

  //ID MESSAGE==>ID=ID TUTOR
  try {
    const updatedUser = await User.updateOne(
      {
        _id: userId,
        "messagesGlobal._id": chatID,
      }, // Match the user and the specific message group
      {
        $push: {
          "messagesGlobal.$.messageAll": {
            // Use positional operator `$` to target the correct message group
            // Assuming you're generating a unique ID for each message
            content, // The content of the message
            role, // The role (either "you" or "AI")
          },
        },
      }
    );

    if (updatedUser.nModified === 0) {
      throw new Error("User not found or message not added");
    }

    return updatedUser;
  } catch (error) {
    console.log("Error updating messages:", error.message);
  }

  // try {
  //   const newMessgaesUser = await User.updateOne({
  //     _id: "66f382df4e207bb382092411",
  //     $push: {
  //       messagesGlobal: {
  //         role: "AI",
  //         content: "Hi, How Can I help you today?",
  //       },
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

//UPDATE
export const updateKnowledge = async ({ tutorID, userID, knowledgeID }) => {
  try {
    const updatedUser = await User.updateOne(
      {
        _id: userID, // Match the user
        "tutorsGlobal._id": tutorID, // Match the specific tutor
        "tutorsGlobal.KNOWLEDGE._id": knowledgeID, // Match the specific knowledge item
      },
      {
        $set: {
          "tutorsGlobal.$.KNOWLEDGE.$[knowledgeItem].name": "ALGEBRA!", // Update the specific knowledge item
        },
      },
      {
        arrayFilters: [{ "knowledgeItem._id": knowledgeID }], // Filter to target the specific knowledge entry
      }
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};


CREATE 


export const createNewTutor = async ({ userId, name, image }) => {
  try {
    // Use await for the async operation

    const _id = crypto.randomUUID();
    const updatedUserTutor = await User.updateOne(
      { _id: userId }, // Matching the user by the provided userId
      {
        $push: {
          tutorsGlobal: {
            name,
            _id,
            image:
              "https://storage.vivago.ai/image/p_f88e26d0-7863-11ef-ae35-f271045b19aa.jpg?width=512",
            KNOWLEDGE: [
              { name: "add knowledge" },
              { name: "add knowledge" },
              { name: "add knowledge" },
            ],
          },
          messagesGlobal: {
            _id,
            messageAll: [],
          },
        },
      }
    );

    if (updatedUserTutor.nModified === 0) {
      throw new Error("User not found or message not added");
    }

    return updatedUserTutor;
  } catch (error) {
    console.log("Error updating messages:", error.message);
  }
};

*/
