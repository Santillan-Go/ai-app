"use client";
import { newtutor } from "@/store/apiCalls";
import { useAppSelector } from "@/store/store";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const tutorImages = [
  "https://storage.vivago.ai/image/p_66b91a20-7864-11ef-84d5-829606c855ef.jpg?width=512",
  "https://storage.vivago.ai/image/p_f88e26d0-7863-11ef-ae35-f271045b19aa.jpg?width=512",
  "https://storage.vivago.ai/image/p_6d4c55d8-7863-11ef-9826-ee9908222d46.jpg?width=512",

  "https://storage.vivago.ai/image/p_dc66c7a6-7862-11ef-85f4-aac38811e8c2.jpg?width=512 ",
  "https://storage.vivago.ai/image/p_1f9cdf14-7864-11ef-b19a-ae89e71256f4.jpg?width=512",

  "https://storage.vivago.ai/image/p_bb09040a-7864-11ef-8803-aac38811e8c2.jpg?width=512",

  "https://storage.vivago.ai/image/p_410fe3f2-7865-11ef-aa84-0ab00016590f.jpg?width=512",
  "https://storage.vivago.ai/image/p_9b5d94c6-7865-11ef-b11e-4651a841d960.jpg?width=512",
  "https://storage.vivago.ai/image/p_f97b809c-7863-11ef-9a9d-0ab00016590f.jpg?width=512",
];

function useTutorAI() {
  const { data: session, status } = useSession();

  // console.log({ session });
  // console.log(data);
  const userID = session?.user?.id || "";
  //  console.log({ userID });
  const tutors = useAppSelector((state) => state.MessagesReducer.tutorsGlobal);

  console.log(userID);
  const [tutor, setTutor] = useState("");
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const Submit = async (event, id) => {
    event.preventDefault();
    // const message = { content: event.target.content.value, who: "you" };
    if (!tutor) return;
    // CREATE URL IMAGE-TUTOR HERE-------
    const usedImages = tutors.map((tutor) => tutor.image);

    const BackImageNotEqual = () => {
      for (let i = 0; i < tutorImages.length; i++) {
        if (!usedImages.includes(tutorImages[i])) {
          return tutorImages[i];
        }
      }
      // let randomIndex = Math.floor(Math.random() * tutorImages.length);
      // while (tutorImages[randomIndex] === state.tutorsGlobal[findIndex].image) {
      //   randomIndex = Math.floor(Math.random() * tutorImages.length);
      // }
      // return tutorImages[randomIndex];
    };
    setTutor("");
    setModal(!modal);
    await newtutor({
      dispatch,
      name: tutor,
      userID,
      image: BackImageNotEqual(),
    });
  };
  const Change = (event, id) => {
    setTutor(event.target.value);

    // const newThings = KNOWLEDGE.map((thing, index) =>
    //   index === position? {...thing, name: event.target.value } : thing
    // );
    // setKNOWLEDGE(newThings);

    // setIsModalOpen(false);
    // event.target.name.value = "";
  };

  const handleModal = () => {
    setModal(!modal);
    setTutor("");
  };

  return {
    Submit,
    Change,
    tutor,
    handleModal,
    modal,
  };
}

export default useTutorAI;
