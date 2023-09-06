import { useEffect, useState } from "react";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";
import { isNil } from "@austinburns/type-guards";

import { Database } from "@shared/domain/database.types";
import { Nullable } from "@austinburns/type-utils";

export const useClientSideAuthCheck = ({
  onUnauthenticated,
}: {
  /* endpoint to bring the user back to upon successful login */
  onUnauthenticated: () => void;
}) => {
  const supabase = createClientComponentClient<Database>();

  const [sessionData, setSessionData] = useState<Nullable<Session>>(null);

  useEffect(() => {
    const getSessionData = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      console.log({ sessionData });
      if (isNil(sessionData?.session)) {
        onUnauthenticated();
      }
      setSessionData(sessionData.session);
    };

    getSessionData();
  }, [supabase]);

  return { sessionData, supabase };
};
