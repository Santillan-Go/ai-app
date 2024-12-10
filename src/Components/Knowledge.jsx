"use client";

import { useEffect, useState } from "react";
import ModalChange from "./ModalChange";
import { newknowledge } from "@/store/apiCalls";
import { useAppDispatch, useAppSelector } from "@/store/store";

function Knowledge({ tutorID, Theme, KNOWLEDGE }) {
  // const Tutors = useAppSelector((state) => state.MessagesReducer.tutorsGlobal);

  // const [KNOWLEDGE, setKNOWLEDGE] = useState([]);

  // useEffect(() => {
  //   setKNOWLEDGE(() => {
  //     const tutor = Tutors.find((tutor) => tutor._id === tutorID);
  //     return tutor?.KNOWLEDGE || [];
  //   });
  // }, [tutorID, Tutors]);

  // useEffect(() => {
  //   console.log(KNOWLEDGE);
  //   console.log(Tutors);
  // }, [KNOWLEDGE]);

  const getColorText = () => {
    if (Theme.theme === "default")
      return "text-main-purple bg-white hover:bg-main-purple hover:text-main-white";
    if (Theme.theme === "blue fade")
      return "text-blue-900 hover:bg-blue-900 hover:text-white";
    if (Theme.theme === "dark mode")
      return "text-white bg-gray-dark hover:bg-white hover:text-gray-dark";
  };
  /*
  

  const {id}=action.payload
      const find = state.tutorsGlobal.find(tutor => tutor.id === id).KNOWLEDGE
  */
  // const KNOWLEDGE = Tutors.find(
  //   (tutor) => tutor.id === Number(tutorID)
  // ).KNOWLEDGE;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setvalue] = useState("");
  const [id, setID] = useState(null);
  const dispatch = useAppDispatch();
  const handleModal = (value, idIN) => {
    setIsModalOpen(!isModalOpen);
    setvalue(value);
    setID(idIN);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setvalue("");
    setID(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const copy = [...KNOWLEDGE];
    // copy[position].name = event.target.name.value;
    // setKNOWLEDGE(copy);
    newknowledge({ dispatch, knowledge: value, id, tutorID });
    setvalue("");
    setIsModalOpen(false);
  };
  const handleInputChange = (event) => {
    // const newThings = KNOWLEDGE.map((thing, index) =>
    //   index === position ? { ...thing, name: event.target.value } : thing
    // );
    setvalue(event.target.value);
    // setKNOWLEDGE(newThings);

    // const copy = [...KNOWLEDGE];
    // copy[position].name = event.target.value;
    // setKNOWLEDGE(copy);
  };

  return (
    <>
      <article className="flex flex-wrap justify-center gap-4 mt-12">
        {KNOWLEDGE.map((knowledgeIN, index) => (
          <div
            key={index}
            className={`${getColorText()}
              font-bold text-xl w-52 text-center rounded-3xl  
          sm:text-2xl   hover:cursor-pointer`}
            onClick={() => handleModal(knowledgeIN.name, knowledgeIN._id)}
          >
            {knowledgeIN.name}
          </div>
        ))}
      </article>

      <ModalChange
        Submit={handleSubmit}
        show={isModalOpen}
        value={value}
        Change={handleInputChange}
        hidden={handleCloseModal}
      ></ModalChange>
    </>
  );
}

export default Knowledge;
