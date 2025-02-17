"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/config/auth-client";
import { Session } from "better-auth";
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
    <div className="font-space">
      <div className="p-4 border-b justify-between flex items-center">
        <div className="flex items-center gap-4">
          <BrainCircuit />
          <h2>Devpond</h2>
        </div>
        <Button onClick={handleLogout} disabled={loading}>
          {loading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            "Logout"
          )}
        </Button>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {!error && !loading && session && (
        <div className="max-w-4xl py-4 mx-auto">
          <h1 className="text-4xl">Welcome, {session.user.name}</h1>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
