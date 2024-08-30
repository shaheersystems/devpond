import {
  BookmarkIcon,
  ChatBubbleLeftIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { Button } from "./base/button";

const Question = () => {
  return (
    <div className="p-4 space-y-4 bg-white border rounded-lg shadow md:bg-primary">
      <div className="flex items-center gap-2">
        <p>
          Asked at <span className="font-semibold text-secondary">Google</span>
        </p>
        •<span className="text-sm text-neutral-500">2 days ago</span>
      </div>
      <div>
        <h2 className="text-2xl font-mandai text-secondary">
          How would you respond if your team disagreed with your ideas?
        </h2>
      </div>
      <div>
        <span className="px-2 py-1 text-xs border rounded-md cursor-pointer hover:bg-neutral-100">
          Product Management
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button plain>
          <BookmarkIcon />
          Save
        </Button>
        <Button plain>
          <ChatBubbleLeftIcon />
          Add Answer
        </Button>
        <Button plain>
          <PlusCircleIcon />I was asked this
        </Button>
      </div>
      <div className="flex items-center p-4 border rounded-lg text-neutral-600">
        <p className="text-xs italic truncate">
          "My favorite product is tandem partner. I came to know about this
          product when I was learning German language and one of my German
          teachers suggested me to join this group where like minded people
          share thoughts and learn languages."
        </p>
        <div>
          <span className="text-xs whitespace-nowrap">213 answers</span>
        </div>
      </div>
    </div>
  );
};

export default Question;
