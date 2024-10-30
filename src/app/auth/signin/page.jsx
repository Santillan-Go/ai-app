import React from "react";

import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";

import SignIn from "@/Components/SignIn";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user?.name) {
    redirect("/");
  }

  return <SignIn />;
}

export default page;
