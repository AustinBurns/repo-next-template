import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { isNil, isNonEmptyString } from "@austinburns/type-guards";

import { Database } from "@shared/domain/database.types";

export const dynamic = "force-dynamic";

// todo - convert to "use client" so that we can show loading and success states
// ref: https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations
// todo - implement form validation https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#form-validation
export default async function Settings() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: profileData } = await supabase
    .from("profiles")
    .select()
    .single();

  const { data: sessionData } = await supabase.auth.getSession();

  if (isNil(sessionData?.session)) {
    redirect("/login?callbackUrl=/member/settings");
  }

  console.log({ profileData });

  return (
    <form action="/api/update-profile" method="post" className="z-10 p-8">
      <div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a valid email and phone number so that you can recieve updates
              about your meal options.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  defaultValue={
                    isNonEmptyString(profileData?.first_name)
                      ? profileData?.first_name
                      : undefined
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  defaultValue={
                    isNonEmptyString(profileData?.last_name)
                      ? profileData?.last_name
                      : undefined
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled
                  defaultValue={
                    isNonEmptyString(profileData?.email)
                      ? profileData?.email
                      : undefined
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* todo - come back and implement a way to update password */}
            {/* <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-3">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  defaultValue={
                    isNonEmptyString(profileData?.phone_number)
                      ? profileData?.phone_number
                      : undefined
                  }
                  className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="(555) 987-6543"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 pt-4 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              General information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This will help tailor meal options to your needs. This can always
              be adjusted later.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                What is your current cooking skill level?
              </legend>
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-x-3">
                  <input
                    id="beginner_cooking_skill_level"
                    name="cooking_skill_level"
                    type="radio"
                    value="beginner"
                    defaultChecked={
                      profileData?.cooking_skill_level === "beginner"
                    }
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="beginner_cooking_skill_level"
                    className="block text-sm font-medium leading-6 text-gray-700"
                  >
                    beginner
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="intermediate_cooking_skill_level"
                    name="cooking_skill_level"
                    type="radio"
                    value="intermediate"
                    defaultChecked={
                      profileData?.cooking_skill_level === "intermediate"
                    }
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="intermediate_cooking_skill_level"
                    className="block text-sm font-medium leading-6 text-gray-700"
                  >
                    intermediate
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="advanced_cooking_skill_level"
                    name="cooking_skill_level"
                    type="radio"
                    value="advanced"
                    defaultChecked={
                      profileData?.cooking_skill_level === "advanced"
                    }
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="advanced_cooking_skill_level"
                    className="block text-sm font-medium leading-6 text-gray-700"
                  >
                    advanced
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="col-span-full">
                <label
                  htmlFor="food_allergies"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Do you have any food allergies?
                </label>
                <div className="mt-2">
                  <textarea
                    id="food_allergies"
                    name="food_allergies"
                    placeholder="(e.g., Nuts, Dairy, Seafood)"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={
                      isNonEmptyString(profileData?.food_allergies)
                        ? profileData?.food_allergies
                        : ""
                    }
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="col-span-full">
                <label
                  htmlFor="diet"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Do you follow a specific diet?
                </label>
                <div className="mt-2">
                  <textarea
                    id="diet"
                    name="diet"
                    placeholder="(e.g., Vegan, Keto, Gluten-Free, None)"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={
                      isNonEmptyString(profileData?.diet)
                        ? profileData?.diet
                        : ""
                    }
                  />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <div className="col-span-full">
                <label
                  htmlFor="favorite_cuisines"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  What are your favorite cuisines?
                </label>
                <div className="mt-2">
                  <textarea
                    id="favorite_cuisines"
                    name="favorite_cuisines"
                    placeholder="(e.g., Thai, Mexican, Asian, etc.)"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={
                      isNonEmptyString(profileData?.favorite_cuisines)
                        ? profileData?.favorite_cuisines
                        : ""
                    }
                  />
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
