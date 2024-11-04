"use client";
import useTutorAI from "@/HOOKS/useTutorAI";
import ButtonAdd from "./ButtonAdd";
import ModalTutorAI from "./ModalTutorAI";
import useTheme from "@/HOOKS/useTheme";
import { useAppSelector } from "@/store/store";

function HandleTutorAI() {
  const { Change, Submit, handleModal, modal, tutor } = useTutorAI();
  const tutors = useAppSelector(
    (state) => state.MessagesReducer.tutorsGlobal ?? []
  );
  const Theme = useTheme();

  /*
  gradient-container
  blue-fade-bg
  */
  const getColorBG = () => {
    if (Theme.theme === "default")
      return " bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10 ";
    if (Theme.theme === "blue fade")
      return " bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10 ";
    if (Theme.theme === "dark mode")
      return " bg-gray-light bg-opacity-15 backdrop-blur-md border border-white-10 ";
  };
  return (
    <>
      <ModalTutorAI
        Change={Change}
        Submit={Submit}
        handleModal={handleModal}
        modal={modal}
        tutor={tutor}
        colorBG={getColorBG}
      />

      {tutors.length < 8 && <ButtonAdd handleTutor={handleModal} />}
    </>
  );
}

export default HandleTutorAI;
