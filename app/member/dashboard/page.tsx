import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@api/auth/[...nextauth]/route";
import { isNil } from "@austinburns/type-guards";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (isNil(session)) {
    redirect("/?callbackUrl=/member/dashboard");
  }

  return (
    <div className="z-10 p-10 text-neutral-700">
      members only dashboard page
    </div>
  );
}
