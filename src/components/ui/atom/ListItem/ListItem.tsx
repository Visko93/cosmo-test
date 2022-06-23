import clsx from "clsx";

import styles from "./ListItem.module.css";
import globalStyles from "../../../../global/styles/global.module.css";

import type { IListItem } from "./IListItem.types";

const ListItem = ({ icon, text }: IListItem) => (
  <li className={clsx([globalStyles.flex, styles.item])}>
    <>
      {!!icon ? icon : null}
      <h5>{text ?? "Not found!"}</h5>
    </>
  </li>
);

export { ListItem };
