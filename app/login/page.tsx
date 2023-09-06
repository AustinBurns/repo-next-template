import Link from "next/link";
import Messages from "./messages";
import { isNonEmptyString, isNotNil } from "@austinburns/type-guards";

export default function Login({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="z-10 flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
      <Link
        href="/"
        className="text-foreground bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-12 flex items-center rounded-md px-4 py-2 text-sm no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="text-foreground flex w-full flex-1 flex-col justify-center gap-2"
        action={
          isNonEmptyString(searchParams["callbackUrl"])
            ? `/auth/login?callbackUrl=${searchParams["callbackUrl"]}`
            : `/auth/login`
        }
        method="post"
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="mb-6 rounded-md border bg-inherit px-4 py-2"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <button className="mb-2 rounded bg-indigo-700 px-4 py-2 text-white">
          Sign In
        </button>
        <Link
          href="/registration"
          className="mb-2 rounded border border-indigo-700 px-4 py-2 text-center  text-indigo-700 hover:bg-indigo-700 hover:text-white"
        >
          Sign Up
        </Link>
        <Messages />
      </form>
    </div>
  );
}
