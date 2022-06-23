import clsx from "clsx";
import * as React from "react";

import ChevronLeft from "virtual:icons/mdi/chevron-left";
import AccountSearch from "virtual:icons/mdi/account-search-outline";

import styles from "./HideableInput.module.css";
import globalStyles from "../../../global/styles/global.module.css";

import type { IHideableInput } from "./IHideableInput.types";
import { Button } from "../../ui/atom/Button";

function HideableInput({
  onSearch,
  collapsed,
  handleCollapse,
}: IHideableInput) {
  const [userInput, setUserInput] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput(value);
  };

  return (
    <div
      className={clsx([styles.container, collapsed && styles.colapsed])}
      data-testid={"hiddleableInput"}
    >
      {collapsed ? null : (
        <>
          <input
            type="text"
            className={clsx([styles.input])}
            value={userInput}
            onChange={handleChange}
          />
          <Button onClick={() => onSearch(userInput)}>Search</Button>
        </>
      )}
      <button
        className={clsx([globalStyles["icon-button"]])}
        onClick={handleCollapse}
        data-testid={"collapse-button"}
      >
        {collapsed ? (
          <AccountSearch style={{ fontSize: "2em", color: "black" }} />
        ) : (
          <ChevronLeft style={{ fontSize: "2em", color: "black" }} />
        )}
      </button>
    </div>
  );
}

export { HideableInput };
