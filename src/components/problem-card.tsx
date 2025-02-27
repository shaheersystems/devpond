import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  RiAiGenerate,
  RiBookmark2Line,
  RiThumbDownLine,
  RiThumbUpLine,
} from "@remixicon/react";
import Link from "next/link";

const ProblemCard = () => {
  return (
    <Card className="p-4 space-y-2">
      <CardTitle className="flex items-center justify-between">
        <Link className="hover:underline" href={"/problems/maximum-subarray"}>
          Find the subarray with maximum sum.
        </Link>
        <Button size="icon">
          <RiAiGenerate />
        </Button>
      </CardTitle>
      <CardDescription>
        Given an integer array nums, find the contiguous subarray (containing at
        least one number) which has the largest sum and return its sum.
      </CardDescription>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-pretty">Asked at:</span>
          <div className="flex text-sm font-semibold items-center gap-1">
            <span className="hover:underline cursor-pointer">i2c</span>,
            <span className="hover:underline cursor-pointer">Arbisoft</span>,
            <span className="hover:underline cursor-pointer">SSI</span>,
            <span className="hover:underline cursor-pointer">NetSol</span>
          </div>
        </div>
        <div className="py-0.5 flex items-center gap-2 justify-end">
          <Button variant={"ghost"} size={"icon"}>
            <RiBookmark2Line />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <RiThumbUpLine />
          </Button>{" "}
          <Button variant={"ghost"} size={"icon"}>
            <RiThumbDownLine />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProblemCard;
