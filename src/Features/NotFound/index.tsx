import clsx from "clsx";
import * as React from "react";
import { useUserContext } from "../../context/UserContext";
import globalStyles from "../../global/styles/global.module.css";

export function NotFound() {
  const {
    state: { error },
  } = useUserContext();
  return (
    <div
      className={clsx([globalStyles.container, globalStyles.centerized])}
      style={{ textAlign: "center" }}
    >
      {error ? <h2>{error.toString()}</h2> : null}
    </div>
  );
}
