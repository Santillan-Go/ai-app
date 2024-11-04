import UserMessage from "@/Components/UserMessage";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function ChatAI({ params }) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }
  return <UserMessage id={id} />;
}

export default ChatAI;
