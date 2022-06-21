import * as React from "react";
import styles from "./Button.module.css";

import type { IButton } from "./IButton.types";

function Button({ children, onClick, label, ...rest }: IButton) {
  return (
    <button className={styles.button} onClick={onClick} {...rest}>
      {children ? children : label}
    </button>
  );
}

export { Button };
