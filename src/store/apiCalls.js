import {
  deleteTutor,
  newKnowledge,
  newMessage,
  newTutor,
} from "./messagesRedux";
import { updateUsername } from "./userRedux";

export const newmessages = async ({ dispatch, id, message, userID }) => {
  dispatch(newMessage({ id, message }));

  //here when ai response, update the state
  //http://localhost:4000/api/messages/

  // { userID, chatID, content, role }
  const response = await fetch("/api/messages/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userID,
      chatID: id,
      content: message.content,
      role: message.role,
    }),
  });

  const json = await response.json();
  console.log(json);
};

export const newtutor = async ({ dispatch, name, userID, image }) => {
  //W SHOULD RECEIVE NAME, DISPATCH AND ID(userID)
  const id_1 = crypto.randomUUID();
  const id_2 = crypto.randomUUID();
  const id_3 = crypto.randomUUID();

  const tutorID = crypto.randomUUID();
  dispatch(newTutor({ name, tutorID, image, id_1, id_2, id_3 }));
  //CALL THE API
  const response = await fetch("/api/tutors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      userID,
      image,
      tutorID,
      id_1,
      id_2,
      id_3,
    }),
    cache: "no-store",
  });

  const json = await response.json();
  console.log(json);
};

export const newknowledge = async ({ dispatch, knowledge, id, tutorID }) => {
  console.log({ id });
  dispatch(newKnowledge({ knowledge, tutorID, id }));
  ///update knowledge  with idKNOWLEDGE NOT INDEX
  ///api/tutors/knowlegde
  // { tutorID, knowledgeID, name }
  const response = await fetch("/api/tutors/knowledge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: knowledge,
      tutorID,
      knowledgeID: id,
    }),
  });

  const json = await response.json();
  console.log(json);
};

export const deletetutor = async ({ dispatch, _id, userID }) => {
  dispatch(deleteTutor({ _id }));
  //SHOULD RECEIVE { userID, tutorID }
  // call to api

  const response = await fetch("/api/tutors", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userID, // should be userId
      tutorID: _id,
    }),
    cache: "no-store",
  });

  const json = await response.json();
  console.log(json);
};

export const updateusername = async ({ dispatch, username, userID }) => {
  dispatch(updateUsername({ username }));

  // call to api and update username
  const response = await fetch(`/api/user/${userID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
    }),
  });

  const json = await response.json();

  console.log(json);
};

/*
import { NEXTAUTH_URL } from "@/config";
import { addToCart, removeOneFromCart, RemoveFromCart } from "./cartRedux";
import { CartProduct } from "@/types";

interface Props {
  dispatch: (action: any) => void;
  product: CartProduct;
  userId: string;
}

export const addtocart = async ({ dispatch, product, userId }: Props) => {
  const { id, price, quantity, title, category, image } = product;
  dispatch(addToCart({ id, price, quantity, title, category, image }));
  const res = await fetch(`${NEXTAUTH_URL}/api/cart/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, price, quantity, title, category, image }),
  });
};

export const removeonefromcart = async ({
  dispatch,
  product,
  userId,
}: Props) => {
  const { id } = product;

  dispatch(removeOneFromCart({ id }));
  const res = await fetch(`${NEXTAUTH_URL}/api/cart/deleteone/${userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
};

export const removefromcart = async ({ dispatch, product, userId }: Props) => {
  const { id } = product;
  dispatch(RemoveFromCart({ id }));
  const res = await fetch(`${NEXTAUTH_URL}/api/cart/deleteall/${userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
};


*/
