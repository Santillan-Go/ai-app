import Teacher from "@/Components/Teacher";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page({ params: { id } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }
  return <Teacher id={id} />;
}
export default page;
