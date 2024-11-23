"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function useActionPlan({ planId, name, subID, endDate }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const userID = session?.user?.id || "";

  const handlePurchase = async () => {
    const res = await fetch(`/api/stripe/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // SEND EMAIL AND ID
      body: JSON.stringify({
        planId,
        userID,
        name,
      }),
    });

    if (!res.ok) {
      console.log(res);
    }

    const json = await res.json();
    router.push(json.url);
  };

  const handleCancel = async () => {
    const response = await fetch(`/api/stripe/cancel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subID,
        userID,
        endDate,
      }),
    });
    if (!response.ok) return false;

    const json = await response.json();
    const { url } = json;
    router.push(url);
  };

  return {
    handlePurchase,
    handleCancel,
  };
}

export default useActionPlan;
