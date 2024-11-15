"use client";
import { getUserByID } from "@/lib/Request";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  updateEndDate,
  updatePlanName,
  updateSubID,
  updateUsername,
} from "@/store/userRedux";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

function GetInfoUser() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  // console.log({ session });
  // console.log(data);
  const userID = session?.user?.id || "";

  /*
  {
    "username": "Juan Santillan",
    "_id": "100165359541167784939",
    "email": "santillango10405@gmail.com",
    "planName": "Free",
    "stripe_plan_id": "free_plan_43522_22"
}
  */
  const GetUser = async () => {
    const result = await getUserByID({ userID });
    dispatch(updateUsername({ username: result.username }));
    dispatch(updatePlanName({ planName: result.planName }));

    dispatch(updateEndDate({ endDate: result.endDate }));
    dispatch(updateSubID({ subID: result.subID }));

    //UPDATE THE STATE
    //SET A GLOBAL LOADING STATE TO SHOW THE SKELETON
    console.log(result);
  };
  useEffect(() => {
    if (userID) {
      GetUser();
    }
    // GET THE FUCKING INFO!!!! CREATE THE FUNCTION FOR BOTH
  }, []);

  return null; // or return the user info or loading state here.
}

export default GetInfoUser;
