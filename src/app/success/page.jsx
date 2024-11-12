import BackToHome from "@/Components/BackToHome";
import Link from "next/link";
import React from "react";

function page() {
  // COMMIT AND  CHNAGE THE URL ON STRIPE AND THEN TEST IT.
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <article className="flex flex-col items-center gap-2">
        <h2 className="text-green-500 font-bold text-3xl text-center ">
          Payment was successfully!
        </h2>
        <p className="text-white font-semibold text-2xl text-center ">
          Thank you!
        </p>
        <BackToHome />
      </article>
    </section>
  );
}

export default page;
