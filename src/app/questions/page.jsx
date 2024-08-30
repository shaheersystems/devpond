import { Button } from "@/components/base/button";
import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/16/solid";
import QuestionPagination from "@/components/pagination";
import Question from "@/components/question";

const Questions = () => {
  return (
    <main className="relative px-4 md:px-0">
      <div className="flex flex-wrap gap-4 min-h-[40vh] md:min-h-[25vh] items-center justify-between w-full">
        <div className="">
          <div className="space-y-4">
            <h1 className="text-4xl font-mandai text-secondary">
              Interview Questions
            </h1>
            <p className="text-neutral-700">
              Review this list of 3,160 interview questions and answers verified
              by hiring managers and candidates.
            </p>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-4 py-2 bg-primary md:bg-white">
        <div className="flex items-center gap-4">
          <Button outline>
            Role
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
          <Button outline>
            Company
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
          <Button outline>
            Category
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="py-2">
        <div className="grid grid-cols-1 gap-4 text-secondary md:grid-cols-6">
          <div className="col-span-1 space-y-2 md:col-span-4">
            {Array.from({ length: 15 }, (_, i) => `${++i}`).map((item) => {
              return <Question />;
            })}
            <div className="py-4">
              <QuestionPagination />
            </div>
          </div>
          <div className="col-span-1 space-y-4 md:col-span-2">
            <div className="p-4 space-y-2 bg-white border rounded-lg md:bg-primary">
              <h2 className="text-2xl font-mandai">
                Contribute to the Community
              </h2>
              <p>Share your interview experience and help other job seekers.</p>
              <Button className="w-full" color="indigo">
                Add Question
              </Button>
            </div>
            <div className="p-4 space-y-2 bg-white border rounded-lg md:bg-primary">
              <h2 className="text-2xl font-mandai">Support this project</h2>
              <p>
                Help us keep this platform free by contributing to our open
                source project.
              </p>
              <Button className="w-full" color="white">
                Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Questions;
