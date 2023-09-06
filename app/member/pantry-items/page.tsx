import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { isNil } from "@austinburns/type-guards";

import { Database } from "@shared/domain/database.types";

export const dynamic = "force-dynamic";

export default async function PantryItems() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: profileData } = await supabase
    .from("profiles")
    .select()
    .single();

  const { data: sessionData } = await supabase.auth.getSession();

  if (isNil(sessionData?.session)) {
    redirect("/login?callbackUrl=/member/pantry-items");
  }

  console.log({ profileData });

  return (
    <div className="z-10 p-10 text-neutral-700">members only pantry-items</div>
  );
}
