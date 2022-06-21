import * as React from "react";
import clsx from "clsx";

import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactElement;
}
export function Layout({ children }: LayoutProps) {
  return (
    <main>
      <header className={clsx([styles.header, "flex"])}>
        <a className={styles.link} href="/">
          Github Explorer
        </a>
      </header>
      <section className={styles.container}>{children}</section>
    </main>
  );
}
