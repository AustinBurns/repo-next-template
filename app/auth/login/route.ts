import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { Database } from "@shared/domain/database.types";
import { isNonEmptyString } from "@austinburns/type-guards";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const callbackUrl = requestUrl.searchParams.get("callbackUrl");
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (isNonEmptyString(error?.message)) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?message=${error?.message}`,
      {
        status: 301,
      },
    );
  }

  if (isNonEmptyString(callbackUrl)) {
    return NextResponse.redirect(requestUrl.origin + callbackUrl, {
      status: 301,
    });
  }

  return NextResponse.redirect(`${requestUrl.origin}/member/dashboard`, {
    status: 301,
  });
}
