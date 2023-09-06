import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

import { Database } from "@shared/domain/database.types";
import { isNonEmptyString, isNotNil } from "@austinburns/type-guards";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const first_name = String(formData.get("first_name"));
  const last_name = String(formData.get("last_name"));
  const cooking_skill_level = String(formData.get("cooking_skill_level"));
  // using SUPABASE_SECRET_KEY here so that we can bypass the email confirmation
  // in order to create the user profile while we're still pending their email confirmation
  // this method should be used sparingly and most other places should use import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
  );

  const { data } = await supabase.auth.signUp({
    email,
    password,
    // ignoring options.emailRedirectTo which maps to {{ .ConfirmationURL }}
    // and using {{ .SiteURL }} instead for confirmation flow
    // ref: https://supabase.com/docs/guides/auth/server-side/email-based-auth-with-pkce-flow-for-ssr
    // where to find email templates: https://supabase.com/dashboard/project/<supabase-project-id>/auth/templates
    // options: {
    // emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    // },
  });

  if (isNotNil(data?.user)) {
    // insert member profile
    await supabase
      .from("profiles")
      .insert([
        {
          user_id: data.user.id,
          email,
          first_name,
          last_name,
          cooking_skill_level,
          phone_number: isNonEmptyString(formData.get("phone_number"))
            ? String(formData.get("phone_number"))
            : undefined,
          food_allergies: isNonEmptyString(formData.get("food_allergies"))
            ? String(formData.get("food_allergies"))
            : undefined,
          diet: isNonEmptyString(formData.get("diet"))
            ? String(formData.get("diet"))
            : undefined,
          favorite_cuisines: isNonEmptyString(formData.get("favorite_cuisines"))
            ? String(formData.get("favorite_cuisines"))
            : undefined,
        },
      ])
      .select();
  }

  return NextResponse.redirect(
    `${requestUrl.origin}?displayConfirmEmailToast=true`,
    {
      status: 301,
    },
  );
}
