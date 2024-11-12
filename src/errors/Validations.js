import { ValidateFound, ValidationError } from "./error";

export const ValidateUser = ({ username, email, password }) => {
  if (!username) {
    throw new ValidationError("Username is requiered");
  }
  if (!email || !validateEmail(email)) {
    throw new ValidationError("Email is invalid");
  }
  if (!password || password.length < 8) {
    throw new ValidationError("Password must be at least 8 characters long");
  }
};

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const validateId = ({ id, message }) => {
  if (!id) {
    throw new ValidationError(message);
  }
};

export const validateName = ({ name }) => {
  if (!name) {
    throw new ValidationError("Name is required");
  }
};
export const validateTutor = ({
  image,
  name,
  userID,
  tutorID,
  id_1,
  id_2,
  id_3,
}) => {
  if (!image) {
    throw new ValidationError("Image is required");
  }
  if (!name) {
    throw new ValidationError("Name is required");
  }
  if (!userID) {
    throw new ValidationError("UserID is required");
  }
  if (!tutorID) {
    throw new ValidationError("tutorID is requiered");
  }
  if (!id_1) {
    throw new ValidationError("id_1 is required");
  }

  if (!id_2) {
    throw new ValidationError("id_2 is required");
  }
  if (!id_3) {
    throw new ValidationError("id_3 is required");
  }
};

export const validateBothId = ({ userID, tutorID }) => {
  if (!userID) {
    throw new ValidationError("UserID is required");
  }
  if (!tutorID) {
    throw new ValidationError("TutorID is required");
  }
};

export const validateKnowledge = ({ tutorID, knowledgeID, name }) => {
  if (!name) {
    throw new ValidationError("Name is required");
  }
  if (!knowledgeID) {
    throw new ValidationError("knowledgeID is required");
  }
  if (!tutorID) {
    throw new ValidationError("TutorID is required");
  }
};

export const validateChat = ({ userID, chatID, content, role }) => {
  if (!userID) throw new ValidationError("UserID is requiered");
  if (!chatID) throw new ValidationError("chatID is requiered");
  if (!content) throw new ValidationError("content is requiered");
  if (!role) throw new ValidationError("role is requiered");
};

export const validateTutorFound = ({ foundOne }) => {
  if (!foundOne) {
    throw new ValidateFound("Tutor not found");
  }
};

export const validatePlan = ({
  img,
  price,
  isNew,
  benefits,
  limitations,
  name,
  max_queries,
  trial_period_days,
  is_active,
  billing_interval,
  cancellation_policy,
  access_level,
  description,
  currency,
}) => {
  if (!img) {
    throw new ValidationError("Image is required");
  }
  if (typeof price === "undefined" || price === null || price < 0) {
    throw new ValidationError("Price is required");
  }
  if (!name) {
    throw new ValidationError("Name is required");
  }
  if (!description) {
    throw new ValidationError("Description is required");
  }
  if (!currency) {
    throw new ValidationError("Currency is required");
  }
  if (!access_level) {
    throw new ValidationError("Access level is required");
  }
  // if (!trial_period_days) {
  //   throw new ValidationError("Trial period days is required");
  // }
  if (typeof is_active === "undefined" || is_active === null) {
    throw new ValidationError("Is active is required");
  }
  if (!billing_interval) {
    throw new ValidationError("Billing interval is required");
  }
  // if (!cancellation_policy) {
  //   throw new ValidationError("Cancellation policy is required");
  // }
  if (!max_queries) {
    throw new ValidationError("Max queries is required");
  }
  if (!benefits) {
    throw new ValidationError("Benefits is required");
  }
  if (!limitations) {
    throw new ValidationError("Limitations is required");
  }
  if (typeof isNew === "undefined" || isNew === null) {
    throw new ValidationError("Is new is required");
  }
};
