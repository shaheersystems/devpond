"use client";
import ProblemCard from "@/components/problem-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { signOut, useSession } from "@/config/auth-client";
import {
  RiAiGenerate,
  RiAmazonFill,
  RiBookmark2Fill,
  RiCheckboxCircleFill,
  RiGoogleFill,
  RiLinkedinBoxFill,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
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
      <div className="flex gap-2 items-center rounded-md">
        <div className="text-sm text-neutral-600 cursor-pointer hover:underline">
          Problems / Dashboard / Home
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Card className="p-4">
            <CardTitle>Filters</CardTitle>
          </Card>
        </div>
        <div className="space-y-4 col-span-3">
          <ProblemCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
