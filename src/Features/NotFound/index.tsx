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
      <h1>NOT FOUND</h1>
    </div>
  );
}
