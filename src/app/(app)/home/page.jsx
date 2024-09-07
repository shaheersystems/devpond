"use client";
import { Gauge } from "@suyalcinkaya/gauge";
import { useState } from "react";

const HomePage = () => {
  const [tab, setTab] = useState("questions");
  return (
    <main className="relative px-4 space-y-4 md:px-0">
      <div className="flex flex-wrap gap-4 min-h-[40vh] md:min-h-[25vh] items-center justify-between w-full">
        <div>
          <div className="space-y-4">
            <h1 className="text-4xl font-mandai text-secondary">
              Welcome Back, Muhammad!
            </h1>
            <p className="text-neutral-700">
              Continue your journey to get hired and become better developer
              along the way.
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-mandai">Quick Analytics</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
        <div className="col-span-1 p-4 space-y-2 bg-white border rounded-lg shadow md:col-span-3 md:bg-primary">
          <h2 className="text-lg font-semibold">Questions Asked By you</h2>
          <div></div>
        </div>
        <div className="col-span-3 p-4 bg-white border rounded-lg shadow md:bg-primary">
          <h2 className="text-lg font-semibold">Questions Answered By you</h2>
          <div></div>
        </div>
        <div className="col-span-2 p-4 space-y-4 bg-white border rounded-lg shadow md:bg-primary">
          <h2 className="text-lg font-semibold">Your Response Ratio</h2>
          <div className="flex items-center justify-center">
            <Gauge
              size={"xl"}
              primary={"#3d3929"}
              value={50}
              showValue
              showAnimation
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 p-1 rounded-md bg-primary">
          <button
            onClick={() => setTab("questions")}
            className={`px-4 py-2 transition-all text-sm rounded-md ${
              tab === "questions" ? "bg-white font-semibold" : "hover:bg-white"
            }`}
          >
            Questions
          </button>
          <button
            onClick={() => setTab("answers")}
            className={`px-4 py-2 transition-all text-sm rounded-md ${
              tab === "answers" ? "bg-white font-semibold" : "hover:bg-white"
            }`}
          >
            Answers
          </button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
