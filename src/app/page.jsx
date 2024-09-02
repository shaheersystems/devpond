"use client";
import { Button } from "@/components/base/button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (auth) {
      redirect("/home");
    }
  }, [auth]);
  return (
    <main>
      <div className="max-w-4xl px-2 mx-auto min-h-[100vh] text-center flex flex-col items-center justify-center">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-center">
            <Link className="flex items-center gap-2 text-secondary" href={"/"}>
              <svg
                id="logo-36"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent"
              >
                {" "}
                <path
                  d="M18.9523 11.0726C18.5586 7.69873 18.1429 4.13644 18.1429 0H21.8571C21.8571 4.08998 21.4434 7.64774 21.0502 11.0254C20.7299 13.778 20.4235 16.411 20.3666 19.115C22.2316 17.1697 23.863 15.107 25.572 12.9463C27.6791 10.2823 29.9043 7.46945 32.829 4.54464L35.4554 7.17104C32.5633 10.0631 29.7547 12.2861 27.0884 14.3966L27.0859 14.3985C24.9141 16.1178 22.8365 17.7624 20.885 19.6334C23.579 19.5765 26.1911 19.2717 28.9272 18.9524C32.3011 18.5586 35.8636 18.1429 40 18.1429V21.8571C35.9102 21.8571 32.3524 21.4432 28.9749 21.0502L28.9724 21.05C26.2204 20.7298 23.5882 20.4236 20.885 20.3666C22.829 22.2302 24.8906 23.8609 27.0499 25.5687L27.0533 25.5716C29.7174 27.6789 32.5304 29.9039 35.4554 32.829L32.829 35.4554C29.9369 32.5634 27.714 29.755 25.6038 27.0889L25.5988 27.082L25.5946 27.0765C23.8775 24.9081 22.2349 22.8338 20.3666 20.885C20.4235 23.589 20.7299 26.222 21.0502 28.9746C21.4434 32.3523 21.8571 35.91 21.8571 40H18.1429C18.1429 35.8636 18.5586 32.3013 18.9523 28.9274L18.9531 28.9219C19.272 26.1877 19.5765 23.5772 19.6334 20.885C17.7651 22.8338 16.1225 24.9081 14.4054 27.0765L14.4012 27.082L14.3962 27.0889C12.286 29.755 10.0631 32.5634 7.17104 35.4554L4.54464 32.829C7.46959 29.9039 10.2826 27.6789 12.9467 25.5716L12.9501 25.5687C15.1094 23.8609 17.171 22.2302 19.115 20.3666C16.411 20.4237 13.7779 20.73 11.0251 21.0502C7.6476 21.4432 4.08984 21.8571 0 21.8571V18.1429C4.13644 18.1429 7.69894 18.5586 11.0728 18.9524C13.8089 19.2717 16.421 19.5765 19.115 19.6334C17.1627 17.7617 15.0843 16.1166 12.9116 14.3966C10.2453 12.2861 7.43666 10.0631 4.54464 7.17104L7.17104 4.54464C10.0957 7.46945 12.3209 10.2823 14.428 12.9463C16.137 15.1069 17.7684 17.1696 19.6334 19.1148C19.5765 16.4227 19.272 13.8123 18.9531 11.0781L18.9523 11.0726Z"
                  class="ccustom"
                  fill="currentColor"
                ></path>{" "}
              </svg>
              <span>
                <span className="text-3xl font-mandai">Devpond</span>
              </span>
            </Link>
          </div>
          <h2 className="text-2xl md:text-4xl text-secondary font-mandai">
            Interview Challenges, Curated by Engineers Who’ve Been Through the
            Grind
          </h2>
          <p className="text-sm md:text-md text-neutral-700">
            Devpond is a community-driven platform where developers who've faced
            the toughest tech interviews share their insights. Join the waitlist
            to get early access and learn from those who've been there.
          </p>
          <div className="flex flex-wrap items-center justify-center max-w-lg gap-4 mx-auto md:flex-nowrap">
            <Button
              onClick={() => setAuth(!auth)}
              color="indigo"
              className="w-full md:w-auto"
            >
              <span className="whitespace-nowrap">Start your Journey</span>
              <ArrowRightIcon />
            </Button>
            <Button
              onClick={() => setAuth(!auth)}
              outline
              className="w-full md:w-auto"
            >
              <span className="whitespace-nowrap">Login</span>
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-12 bg-white min-h-[40vh] items-center justify-center px-8 py-2 text-center flex-col">
        <h2 className="text-2xl md:text-4xl text-secondary font-mandai">
          Questions asked by Top Companies in Pakistan
        </h2>
        <div className="flex flex-wrap items-center justify-between w-full gap-4">
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://cdn.prod.website-files.com/65e9d802e7334ec910a26e59/65e9dc44087cee387ed320b5_Devsinc_Logo-removebg-preview%20(1).png"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://static-cdn.i2cinc.com/wp-content/themes/i2cinc-2023/assets/images/logo.svg"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://illuminatechnology.com/wp-content/uploads/2023/03/Asset-1@2x.png"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://www.dubizzlelabs.com/static/DUBIZZLELABS-FULL-COLOUR-ee0ffcb14214e71e72b13e4b83fe856a.png"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://linkedmatrix.com/common/logo.svg"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://code-graphers.com/wp-content/uploads/2022/05/apple-touch-icon-2-e1653393163339.png"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://codedistrict.com/wp-content/themes/codedistrict/assets/images/logo.svg"
            alt=""
          />
          <img
            className="h-8 hover:grayscale-0 int grayscale object-fit"
            src="https://nextbridge.com/wp-content/uploads/2022/02/Group-187.svg"
            alt=""
          />
        </div>
      </div>
      <div className="p-4 bg-primary"></div>
    </main>
  );
}
