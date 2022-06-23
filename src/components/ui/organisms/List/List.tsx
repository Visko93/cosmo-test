import * as React from "react";
import styles from "./List.module.css";

import type { IList } from "./IList.types";
import clsx from "clsx";

function List({ children, title, subtitle, as = "ul" }: IList) {
  return (
    <div style={{ zIndex: 2 }}>
      <h1 className={clsx([styles.title])}>{title}</h1>
      <small className={clsx([styles.inner])}>{subtitle}</small>
      {as === "ul" ? <ul>{children}</ul> : <ol>{children}</ol>}
    </div>
  );
}

export { List };
