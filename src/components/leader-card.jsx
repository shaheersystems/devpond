"use client";
import { TrophyIcon } from "@heroicons/react/16/solid";
import { Avatar } from "./base/avatar";
import Link from "next/link";
import { Gauge } from "@suyalcinkaya/gauge";

const LeaderCard = ({ leader, item }) => {
  return (
    <div className="relative flex items-center justify-between p-4 transition-all bg-white cursor-pointer md:hover:bg-white hover:bg-primary md:bg-primary">
      {Number(item) <= 3 && (
        <span className="absolute -left-2 -top-4 -rotate-12">
          <TrophyIcon
            className={`w-8 h-8 ${
              Number(item) === 1
                ? "text-yellow-400"
                : Number(item) === 2
                ? "text-gray-400"
                : "text-yellow-600"
            }`}
          />
        </span>
      )}
      <div className="flex items-center gap-2">
        <span>
          <span className="text-2xl font-mandai text-secondary">#{item}</span>
        </span>
        <div>
          <Avatar
            className={"size-10 bg-white"}
            src="https://api.dicebear.com/9.x/croodles-neutral/svg"
          />
        </div>
        <div>
          <Link
            href="/"
            className="text-2xl hover:underline text-secondary font-mandai"
          >
            @shaheergg
          </Link>
          <p className="text-xs text-neutral-700">100 answered / 50 asked</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Gauge
          primary={"#3d3929"}
          secondary={"#f5f4ef"}
          showAnimation
          showValue
          value={50}
          size={"30"}
        />
      </div>
    </div>
  );
};

export default LeaderCard;
