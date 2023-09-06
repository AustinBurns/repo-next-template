import { isNil, isNonEmptyString } from "@austinburns/type-guards";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const { searchParams } = requestUrl;
  const token_hash = String(searchParams.get("token_hash"));
  const type = isNonEmptyString(String(searchParams.get("type")))
    ? String(searchParams.get("type"))
    : "email";

  if (isNonEmptyString(token_hash)) {
    const supabase = createRouteHandlerClient({ cookies });
    const { error } = await supabase.auth.verifyOtp({
      // @ts-ignore
      type,
      token_hash,
    });
    if (isNil(error)) {
      return NextResponse.redirect(
        `${requestUrl.origin}/generate-meal-options`,
        {
          status: 301,
        },
      );
    }
  }

  // return the user to an error page with some instructions
  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
