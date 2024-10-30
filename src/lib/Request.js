export const getUserByID = async ({ userID = "66f714cbbc5c047a046b13c7" }) => {
  const response = await fetch(`/api/user/${userID}`, {
    cache: "no-cache",
  });

  return await response.json();
};

// export const getTutorsByID = async ({ userID }) => {
//   ///api/tutors/all
//   // const userID = "66f714cbbc5c047a046b13c7";
//   const response = await fetch("/api/tutors/all", {
//     method: "POST",
//     body: JSON.stringify({
//       userID,
//     }),
//     cache: "no-cache",
//   });
//   const json = await response.json();
//   console.log(json);
//   return json;
// };

export const getTutorsByID = async ({ userID }) => {
  ///api/tutors/all
  // const userID = "66f714cbbc5c047a046b13c7";
  const response = await fetch("/api/tutors/all", {
    method: "POST",
    body: JSON.stringify({
      userID,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  } else {
    const json = await response.json();
    console.log(json, "NEW REQUEST");
    return json;
  }
};

export const getMessagesByID = async ({ ChatID }) => {
  const response = await fetch(`/api/messages/${ChatID}`);
  if (!response.ok) throw new Error("Something went wrong");

  return await response.json();
};

export const getOneTutorByID = async ({ tutorID }) => {
  const response = await fetch(`/api/tutors/${tutorID}`, {
    cache: "no-store",
  });

  if (!response.ok) return { error: true, message: "Not found" };
  return await response.json();
};
