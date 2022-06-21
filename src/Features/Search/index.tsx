import * as React from "react";
import { LoadingSphere } from "../../components/common/LoadingSphere";
import { RepositoriesGrid } from "../../components/common/RepositoriesGrid";
import { useUserContext } from "../../context/UserContext";

export function Search({ noRepos }: { noRepos?: boolean }) {
  const { handlers, state } = useUserContext();

  const fetchRepositoriesMemo = React.useCallback(
    () => state?.user?.login && handlers?.fetchRepos(state?.user?.login),
    [state?.user?.login]
  );

  React.useEffect(() => {
    fetchRepositoriesMemo();
  }, [state?.user?.login]);

  return (
    <>
      {noRepos ? (
        <LoadingSphere loading={state.isLoading} error={state.error} />
      ) : (
        <RepositoriesGrid
          repos={state?.repos}
          loading={state.isLoading}
          error={state.error}
        />
      )}
    </>
  );
}
