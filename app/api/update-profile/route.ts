import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { Database } from "@shared/domain/database.types";
import { isNonEmptyString, isNotNil } from "@austinburns/type-guards";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const first_name = String(formData.get("first_name"));
  const last_name = String(formData.get("last_name"));
  const cooking_skill_level = String(formData.get("cooking_skill_level"));
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data } = await supabase.auth.getUser();

  if (isNotNil(data?.user)) {
    const userData = data.user;
    await supabase
      .from("profiles")
      .update({
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
      })
      .eq("user_id", userData.id)
      .select();
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/member/generate-meal-options`,
    {
      status: 301,
    },
  );
}
