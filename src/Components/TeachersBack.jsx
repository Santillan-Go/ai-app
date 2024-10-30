import React from "react";
import Teachers from "./Teachers";
import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
// import { getTutorsByID } from "@/lib/Request";

// export const revalidate = 60;

// export const getTutorsByID = async ({ userID }) => {
//   //http://localhost:4000/api/tutors/all
//   // const userID = "66f714cbbc5c047a046b13c7";
//   const response = await fetch("http://localhost:4000/api/tutors/all", {
//     method: "POST",
//     body: JSON.stringify({
//       userID,
//     }),

//     next: { revalidate: 60 },
//   });

//   if (!response.ok) {
//     return [];
//   } else {
//     const json = await response.json();
//     console.log(json);
//     return json;
//   }
// };

async function TeachersBack() {
  const session = await getServerSession(authOptions);
  // const TutorsUser = await getTutorsByID({ userID: session.user.id });
  // noStore();
  return <Teachers  userID={session.user.id} />;
}

export default TeachersBack;
