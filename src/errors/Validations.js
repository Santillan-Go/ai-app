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
