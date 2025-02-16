"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/config/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DashboardPage = () => {
  const [loading, setLoading] = useState(false);
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
  return (
    <div className="font-space">
      <div className="p-4 border-b justify-between flex items-center">
        <h2>Devpond</h2>
        <Button onClick={handleLogout} disabled={loading}>
          {loading ? (
            <span className="animate-pulse">Loading...</span>
          ) : (
            "Logout"
          )}
        </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
