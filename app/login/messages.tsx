"use client";
import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";

export default function Messages() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  return (
    <>
      {error && (
        <div
          className="my-8 animate-fade-up rounded-md bg-red-50 p-4"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {message && (
        <div
          className="my-8 animate-fade-up rounded-md bg-yellow-50 p-4"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
