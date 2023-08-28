/**
 * Example BE API route.
 * - note export { handler as GET }; is how we specify the method.
 * - getServerSession is a helper function from next-auth/next that allows us
 *   to get the session from the server. This is useful for when we need to
 *   lock down an API route to only authenticated users.
 * - also note the path to this file is app/api/hello/route.ts
 *   app/api/<endpoint-name>/route.ts
 *   where endpoint-name is the name of the folder holding "route.ts"
 */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { isNotNil } from "@shared/domain/type-guards";

const hello = async () => {
  const session = await getServerSession(authOptions);

  if (
    isNotNil(session) &&
    isNotNil(session.user) &&
    isNotNil(session.user.name)
  ) {
    return NextResponse.json({ name: session.user.name });
  }

  return NextResponse.json({ message: "You are not logged in." });
};

const handler = hello;

export { handler as GET };
