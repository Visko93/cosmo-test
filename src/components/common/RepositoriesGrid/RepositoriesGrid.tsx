import * as React from "react";
import clsx from "clsx";

import { RepositoryCard } from "../RepositoryCard";
import styles from "./RepositoriesGrid.module.css";
import globalStyles from "../../../global/styles/global.module.css";

import { IUserRepositories } from "../../../global/types/repos";
import type { IRepositoriesGrid } from "./IRepositoriesGrid.types";

function RepositoriesGrid({ repos, error, loading }: IRepositoriesGrid) {
  return (
    <div className={clsx([globalStyles.grid, styles.container])}>
      {!!repos ? (
        (repos as IUserRepositories)?.map((item) => (
          <RepositoryCard
            key={item?.id}
            data={{
              language: item?.language,
              lastUpdated: item?.updated_at,
              repoName: item?.name,
              stars: item?.stargazers_count,
            }}
          />
        ))
      ) : (
        <p>Nao encotramos nenhum repositorio :/ . Tente outro usuario!</p>
      )}
    </div>
  );
}

export { RepositoriesGrid };
