import dbConnect from "./MongoDB";
import { User, MessagesGlobal, TutorsGlobal, Subscription } from "./Schema";

//GET-READ

export const getUserByID = async ({ userID }) => {
  const foundOne = await User.findOne({
    _id: userID,
  });

  return foundOne ? foundOne : false;
};

export const getAllUsers = async () => {
  const allUsers = await User.find();

  return allUsers;
};

export const getAllTutor = async ({ userID }) => {
  const allTutors = await TutorsGlobal.find({ userID });

  return allTutors;
};
export const getOneTutor = async ({ tutorID }) => {
  const foundOne = await TutorsGlobal.findOne({
    _id: tutorID,
  });

  // if (!foundOne) {
  //   return;
  // }
  return foundOne;
};

export const getUserByEmail = async ({ email }) => {
  const existingUser = await User.findOne({ email });
  return existingUser;
};
//JUST RETURN THE ONE THAT THE USER WANTS
export const getAllMessages = async ({ userID }) => {
  const allTutors = await MessagesGlobal.find({ userID });

  return allTutors;
};

export const getMessagesByID = async ({ chatID }) => {
  const foundOne = await MessagesGlobal.findOne({
    _id: chatID,
  });

  return foundOne;
};

export const getSubscriptionsByIdUser = async ({ userID }) => {
  const allUsers = await Subscription.findOne({ userID });
  return allUsers;
};
export const getSubscriptionsUser = async () => {
  const allUsers = await Subscription.find();
  return allUsers;
};
//CREATE
export const createNewTutor = async ({
  userID,
  name,
  image,
  tutorID,
  id_1,
  id_2,
  id_3,
}) => {
  try {
    // Use await for the async operation

    /* 
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
*/
    //CREATE TUTOR
    // const _id = crypto.randomUUID();

    const createUserTutor = await TutorsGlobal.create({
      name,
      _id: tutorID,
      image,
      userID,
      KNOWLEDGE: [
        { name: "add knowledge", _id: id_1 },
        { name: "add knowledge", _id: id_2 },
        { name: "add knowledge", _id: id_3 },
      ],
    });

    const createUserMessage = await MessagesGlobal.create({
      _id: tutorID,
      messageAll: [],
      userID,
    });
    //CREATE MESSAGES

    // if (updatedUserTutor.nModified === 0) {
    //   throw new Error("User not found or message not added");
    // }

    return createUserTutor;
  } catch (error) {
    console.log("Error updating messages:", error.message);
  }
};
//________

export const createUser = async ({ username, email, password, _id }) => {
  const newOne = new User({
    username,
    email,
    password, // optional if password is not required
    _id,
  });
  const response = await newOne.save();

  return response;
};

export const registerUserWithOutPassword = async ({ email, username, _id }) => {
  await dbConnect();
  const userFound = await User.findOne({
    email,
  });
  if (!userFound) {
    //CREATE NEW USER

    const newOne = new User({
      username,
      email,
      _id,
      // optional if password is not required
    });
    const response = await newOne.save();
    await createPlanSubcription({ userID: _id });

    console.log(response, "NEW ONE");
    return { ...response, user: true };
  } else {
    return { message: "User already exits", user: true };
  }
};

//________
export const createNewMessagesGlobal = async ({
  userID,
  chatID,
  content,
  role,
}) => {
  //ID_USER

  //ID MESSAGE==>ID=ID TUTOR
  try {
    const newMessage = await MessagesGlobal.updateOne(
      {
        _id: chatID,
      },
      {
        $push: {
          messageAll: {
            role,
            content,
          },
        },
      }
    );

    return newMessage;
  } catch (error) {
    console.log("Error updating messages:", error.message);
  }
};

export const createPlanSubcription = async ({ userID }) => {
  try {
    const newPlanSub = await Subscription.create({
      planName: "Free",
      userID,
      stripe_plan_id: "free_plan_43522_22",
      startDate: "never",
      endDate: "never",
    });
    console.log(newPlanSub);
  } catch (error) {
    console.log({ messagError: error.message });
  }
};

//UPDATE
export const updateKnowledge = async ({
  tutorID,

  knowledgeID,
  name,
}) => {
  try {
    const updatedKnowledgeTutor = await TutorsGlobal.updateOne(
      {
        _id: tutorID, // Match the specific tutor by its _id
        "KNOWLEDGE._id": knowledgeID, // Match the specific knowledge item inside the tutor
      },
      {
        $set: {
          "KNOWLEDGE.$.name": name, // Update the name of the matched knowledge item
        },
      }
    );

    return updatedKnowledgeTutor;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserSubcription = async ({
  planName,
  stripe_plan_id,
  userID,
  subID,
}) => {
  const startDate = new Date();

  // Set the end date to one month from the start date
  const endDate = new Date(startDate);
  endDate.setMonth(startDate.getMonth() + 1);

  console.log("Start Date:", startDate.toISOString());
  console.log("End Date:", endDate.toISOString());
  // stripe_plan_id
  const updatedSubcription = await Subscription.updateOne(
    { userID }, // filter
    {
      $set: {
        planName,
        stripe_plan_id,
        subID,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        active: true, // Set the active status to true to indicate the user is active
      },
    }
  );

  console.log(updatedSubcription);
};

export const cancelUserSubcription = async ({ userID }) => {
  // stripe_plan_id
  const updatedSubcription = await Subscription.updateOne(
    { userID }, // filter
    {
      $set: {
        active: false,
      },
    }
  );

  console.log(updatedSubcription);
};

export const updateUsername = async ({ userID, username }) => {
  const updatedName = await User.updateOne(
    {
      _id: userID,
    },
    {
      $set: {
        username,
      },
    }
  );

  return updatedName;
};

//DELETE

export const deleteUserByID = async ({ userID }) => {
  const deletedUser = await User.deleteOne({
    _id: userID,
  });

  console.log(deletedUser);
  return deletedUser;
};

//DELETE MESSAGES AND TUTOR WHEN A USER DELETE THEIR ACOUNT BY USERID
export const deleteTutorByUserID = async ({ userID, tutorID }) => {
  const deletedTutor = await TutorsGlobal.deleteMany({ userID });

  return deletedTutor;
};

export const deleteMessagesByUserID = async ({ userID, tutorID }) => {
  const deletedTutor = await MessagesGlobal.deleteMany({ userID });

  return deletedTutor;
};

//_______

export const deleteTutor = async ({ userID, tutorID }) => {
  const deletedTutor = await TutorsGlobal.deleteOne({ _id: tutorID });

  return deletedTutor;
};

export const deleteMessages = async ({ userID, tutorID }) => {
  const deletedTutor = await MessagesGlobal.deleteOne({ _id: tutorID });

  return deletedTutor;
};

export const deleteAllUsers = async () => {
  const deletedAllUsers = await User.deleteMany();

  return deletedAllUsers;
};

export const deleteAllTutors = async () => {
  const deletedAllTutors = await TutorsGlobal.deleteMany();
  return deletedAllTutors;
};

export const deleteAllMessages = async () => {
  const deletedAllMessages = await MessagesGlobal.deleteMany();
  return deletedAllMessages;
};
