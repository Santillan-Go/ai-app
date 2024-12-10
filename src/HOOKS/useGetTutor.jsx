"use client";

import { getOneTutorByID } from "@/lib/Request";
import { getOneTutor } from "@/store/messagesRedux";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

function useGetTutor({ _id }) {
  const [tutor, setTutor] = useState({
    name: "",
    image: "/robot-teacher.jpg",
    KNOWLEDGE: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const teachers = useAppSelector(
    (state) => state.MessagesReducer.tutorsGlobal ?? []
  );

  const dispatch = useAppDispatch();
  //return the tutor and name

  useEffect(() => {
    const foundTutor = teachers.find((tutor) => tutor._id === _id);
    //console.log(foundTutor, "I FOUND IT!!!");
    if (!foundTutor) {
      //make a request

      const getTutor = async () => {
        try {
          const fetchedTutor = await getOneTutorByID({ tutorID: _id });
          if (fetchedTutor.error) return;
          setTutor(fetchedTutor);

          const existsInState = teachers.some(
            (tutor) => tutor._id === fetchedTutor._id
          );
          if (!existsInState) {
            dispatch(getOneTutor({ tutor: fetchedTutor, _id }));
          }
          // dispatch(getOneTutor({ tutor: fetchedTutor }));
        } catch (err) {
          setError("Failed to fetch tutor");
        } finally {
          setLoading(false);
        }
      };

      getTutor();
    } else {
      //
      setTutor(foundTutor);
      setLoading(false);
    }
  }, [_id, teachers]);

  return {
    name: tutor?.name || "Unknown Tutor",
    image: tutor?.image || "/robot-teacher.jpg",
    KNOWLEDGE: tutor?.KNOWLEDGE || [],
    loading,
    error,
  };
}

export default useGetTutor;
