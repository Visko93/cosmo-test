import * as React from "react";
import clsx from "clsx";

import styles from "./LoadingSphere.module.css";
import globalStyles from "../../../global/styles/global.module.css";

import type { ILoadingSphere } from "./ILoadingSphere.types";

function LoadingSphere({ loading, error }: ILoadingSphere) {
  return (
    <div className={clsx([globalStyles.grid, styles.container])}>
      {error ? <h2>{error.toString()}</h2> : null}
      <div className={clsx([styles.sphere, loading && styles.loading])}></div>
    </div>
  );
}

export { LoadingSphere };
