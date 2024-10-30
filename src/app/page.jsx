import GoToConfig from "@/Components/GoToConfig";
import HandleTutorAI from "@/Components/HandleTutorAI";
import HeaderBack from "@/Components/HeaderBack";

import TeachersBack from "@/Components/TeachersBack";
import UserNotLogIn from "@/Components/UserNotLogIn";
import authOptions from "@/lib/authOptions";
import { HeaderSqueleton, TutorsSqueleton } from "@/ui/Squeletons";
import { getServerSession } from "next-auth";
import React, { Suspense } from "react";

async function page() {
  const session = await getServerSession(authOptions);

  console.log(session, "LAYOUT");
  //sm:before:p-4
  return (
    <section className="">
      {session?.user?.name ? (
        <section className="p-2">
          <div className="flex justify-between pt-4 pl-4 pr-4">
            <Suspense fallback={<HeaderSqueleton />}>
              <HeaderBack />

              <GoToConfig />
            </Suspense>
          </div>
          <Suspense fallback={<TutorsSqueleton />}>
            <TeachersBack />
          </Suspense>

          <HandleTutorAI />
        </section>
      ) : (
        <>
          <UserNotLogIn></UserNotLogIn>
        </>
      )}
    </section>
  );
}

export default page;
