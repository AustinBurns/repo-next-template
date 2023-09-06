import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Database } from "@shared/domain/database.types";
import { EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { isNonEmptyString, isNotNil } from "@austinburns/type-guards";

export default async function Home({
  params,
  searchParams,
}: {
  // https://nextjs.org/docs/app/api-reference/file-conventions/page
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createServerComponentClient<Database>({ cookies });
  console.log({ params, searchParams });
  const { token_hash, type } = searchParams;
  if (isNonEmptyString(token_hash) && isNonEmptyString(type)) {
    const typedArg = type as EmailOtpType;
    const { data, error } = await supabase.auth.verifyOtp({
      token_hash,
      type: typedArg,
    });
    if (isNotNil(data?.session)) {
      redirect("/member/generate-meal-options");
    }
  }

  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>AI-Jeff</Balancer>
      </h1>
      <p
        className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <Balancer>
          Simplify Your Life, One Meal at a Time and Minimize Waste with
          AI-Crafted Meal Plans.
        </Balancer>
      </p>
      <div className="mx-auto flex items-center justify-center gap-2">
        <div
          className="mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/login"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4 group-hover:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>Login</p>
          </Link>
        </div>
        <div
          className="mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
            href="/registration"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Register</p>
          </Link>
        </div>
      </div>
      {Boolean(searchParams["displayConfirmEmailToast"]) && (
        <div
          className="my-8 animate-fade-up rounded-md bg-blue-50 p-4"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Confirm your email address
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  Almost there! Please confirm your email address to complete
                  your registration. Check your inbox for the confirmation link.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
