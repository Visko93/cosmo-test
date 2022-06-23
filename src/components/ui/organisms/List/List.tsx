import * as React from "react";
import styles from "./List.module.css";

import type { IList } from "./IList.types";

function List({ children, title, subtitle, as = "ul" }: IList) {
  return (
    <div style={{ zIndex: 2 }}>
      <h1>{title}</h1>
      <small>{subtitle}</small>
      {as === "ul" ? <ul>{children}</ul> : <ol>{children}</ol>}
    </div>
  );
}

export { List };
