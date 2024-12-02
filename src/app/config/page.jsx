import BackTo from "@/Components/BackTo";
import Config from "@/Components/Config";
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }
  return (
    <section className="max-h-screen w-full flex p-2  flex-col sm:flex-row ">
      <BackTo LINK={"/"} />
      <div className="flex justify-center w-full p-4">
        <Config />
      </div>
    </section>
  );
}

export default page;
