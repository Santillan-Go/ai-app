"use client";

import { useAppDispatch, useAppSelector } from "@/store/store";
import CardTeacher from "./CardTeacher";
import { useEffect, useState } from "react";
import { getTutors } from "@/store/messagesRedux";
import { TutorsSqueleton } from "@/ui/Squeletons";
import { getTutorsByID } from "@/lib/Request";

function Teachers({ userID }) {
  const dispatch = useAppDispatch();
  const teachers = useAppSelector(
    (store) => store.MessagesReducer.tutorsGlobal ?? []
  );
  const [loading, setLoading] = useState(true); // Loading state
  const [showSqueleton, setShowSqueleton] = useState(true);
  useEffect(() => {
    // if (TutorsUser && TutorsUser.length !== teachers.length) {
    //   dispatch(getTutors({ tutors: TutorsUser }));
    // }
    // Data is ready, turn off loading
    const getTutorsUser = async () => {
      const response = await getTutorsByID({ userID });
      dispatch(getTutors({ tutors: response }));
      setLoading(false);
      setTimeout(() => setShowSqueleton(false), 500);
    };
    if (teachers.length === 0) {
      getTutorsUser();
    } else {
      // Si ya tenemos tutores cargados, no mostramos el esqueleto
      setLoading(false);
      setShowSqueleton(false);
    }
  }, [teachers.length, dispatch]);

  // Mostrar el esqueleto mientras los datos están cargando
  if (loading || showSqueleton) {
    return <TutorsSqueleton fadeOut={loading ? "fade-out" : ""} />;
  }

  // Solo mostrar el mensaje "No tutors available" si no hay tutores
  if (!loading && teachers.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1>No tutors available</h1>
      </div>
    );
  }

  return (
    <article className="flex flex-wrap justify-center gap-6px sm:p-8 sm:gap-8 mt-10 sm:mt-6 mb-6">
      {teachers.map((teacher) => (
        <CardTeacher
          key={teacher._id}
          id={teacher._id}
          name={teacher.name}
          image={teacher.image}
        />
      ))}
    </article>
  );
}

export default Teachers;
