import { Input } from "@/components/base/input";
import LeaderCard from "@/components/leader-card";

const Leaderboard = () => {
  return (
    <main className="relative px-4 space-y-8 md:px-0">
      <div className="flex flex-wrap gap-4 min-h-[40vh] md:min-h-[25vh] items-center justify-between w-full">
        <div className="">
          <div className="space-y-4">
            <h1 className="text-4xl font-mandai text-secondary">Leaderboard</h1>
            <p className="text-neutral-700">
              Review this list of top contributors and their contributions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Input placeholder="Search for a user" />
      </div>
      <div className="border divide-y-2 rounded-lg">
        {Array.from({ length: 15 }, (_, i) => `${++i}`).map((item) => {
          return <LeaderCard item={item} />;
        })}
      </div>
    </main>
  );
};

export default Leaderboard;
