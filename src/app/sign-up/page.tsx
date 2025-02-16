import { SignUpForm } from "@/components/signup-form";
import { BrainCircuit } from "lucide-react";

const SingUpPage = () => {
  return (
    <div className="font-space flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <BrainCircuit className="w-5 h-5" />
          Devpond.
        </a>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SingUpPage;
