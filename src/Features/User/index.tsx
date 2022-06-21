import * as React from "react";
import { UserProfile } from "../../components/common/UserProfile";
import { useUserContext } from "../../context/UserContext";
import { Search } from "../Search";

import type { IUser } from "./IUser.types";

export function User() {
  const { handlers, state } = useUserContext();

  React.useEffect(() => {
    console.log(state);
  }, [state.user]);

  return (
    <>
      <UserProfile data={state.user} />
      <Search />
    </>
  );
}
