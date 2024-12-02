"use client";
import useLanguage from "@/HOOKS/useLanguage";
import BackTo from "./BackTo";
import BtnDeleteTutor from "./BtnDeleteTutor";
import Link from "next/link";
import Knowledge from "./Knowledge";
import useTheme from "@/HOOKS/useTheme";

import useGetTutor from "@/HOOKS/useGetTutor";
import { TutorSqueleton } from "@/ui/Squeletons";
import { useAppSelector } from "@/store/store";

export default function Teacher({ id }) {
  const { error, image, loading, name, KNOWLEDGE } = useGetTutor({ _id: id });
  const teachers = useAppSelector(
    (state) => state.MessagesReducer.tutorsGlobal
  );
  const language = useLanguage();
  const Theme = useTheme();

  const getColor = () => {
    if (Theme.theme === "default") return "bg-main-purple ";
    if (Theme.theme === "blue fade") return " bg-blue-900 border border-black";
    if (Theme.theme === "dark mode")
      return "text-white bg-gray-dark hover:bg-white hover:text-gray-dark";
  };
  ///CHECK IF IT IS IN THE STATE IF NOT MAKE A REQUEST , AND SAVE TO THE STATE
  // const filterTutor = () => {
  //   // Filter teachers by a specific criteria (e.g., by subject)
  //   const tutor = teachers.filter((tutor) => tutor._id === id); // Replace "Mathematics" with the desired subject

  //   if (tutor[0]) {
  //     return tutor[0].image;
  //   } else {
  //     return "/robot-teacher.jpg";
  //   }
  // };
  // //BEST THING TO DO IS: GET THE TUTOR NAME.
  // const findNumberPosition = () => {
  //   // Find the position of the current tutor in the array
  //   const index = teachers.findIndex((tutor) => tutor._id === id);
  //   if (index !== -1) return index + 1;

  //   return 8;
  // };

  return (
    <section className="text-main-white p-2 min-h-screen overflow-hidden">
      {loading ? (
        <TutorSqueleton BackTo={<BackTo LINK={"/"} />} />
      ) : (
        <>
          <div className="flex justify-between p-2">
            <BackTo LINK={"/"} />

            <BtnDeleteTutor id={id} />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <img
              src={image}
              className="rounded-full w-64 h-64 object-cover "
              alt=""
              loading="LOADING"
            />

            <article className="w-full sm:w-1/2 flex justify-around sm:justify-between ">
              <h1 className="sm:text-2xl text-xl text-main-white">
                {language.teacher.h1}: {name}
              </h1>
              <Link
                href={`/chat/${id}`}
                className={`${getColor()}  sm:p-2  rounded-2xl font-bold text-xl sm:text-2xl  text-center pl-1 pr-1 `}
              >
                {language.teacher.link}
              </Link>
            </article>
          </div>

          <h1 className="sm:text-3xl mt-4 sm:mt-0 text-2xl font-extrabold">
            {language.teacher.h1_2}
          </h1>

          <Knowledge tutorID={id} Theme={Theme} KNOWLEDGE={KNOWLEDGE} />
        </>
      )}
    </section>
  );
}
