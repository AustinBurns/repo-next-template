"use client";

import Image from "next/image";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";
import { isNonEmptyString, isNotNil, isNumber } from "@austinburns/type-guards";
import { useRouter } from "next/navigation";

import { useClientSideAuthCheck } from "@lib/supabase/hooks/useClientSideAuthCheck";

import UserDropdown from "./user-dropdown";

export default function NavBar() {
  const [{ y }] = useWindowScroll();
  const router = useRouter();
  const { sessionData, supabase } = useClientSideAuthCheck({
    onUnauthenticated: () => {
      // noop — server components are likely already handling the redirect
      // see app/member/generate-meal-options/page.tsx for reference example
    },
  });

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          isNumber(y) && y > 50
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Precedent</p>
          </Link>
          <div>
            {isNotNil(sessionData) &&
              isNonEmptyString(sessionData.user?.email) && (
                <UserDropdown
                  handleSignOut={async () => {
                    await supabase.auth.signOut();
                    router.refresh();
                  }}
                  email={sessionData.user.email}
                />
              )}
          </div>
        </div>
      </div>
    </>
  );
}
