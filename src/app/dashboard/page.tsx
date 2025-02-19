"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/config/auth-client";
import { BrainCircuit } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
  const { data: session, isPending, error } = useSession();
  console.log();
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
    setLoading(false);
  };
  console.log(session?.user);
  return (
    <div className="font-space space-y-4 w-full">
      <h2 className="text-4xl">Welcome! {session?.user?.name}!</h2>
      <div className="flex items-center rounded-md">
        <div className="p-4 flex-1 bg-primary border"></div>
        <div className="p-4 flex-1 bg-primary border"></div>
        <div className="p-4 flex-1 bg-primary border"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
