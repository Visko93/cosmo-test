import { ReactElement } from "react";

interface IList {
  children: ReactElement[];
  title?: string;
  subtitle?: string;
  as?: "ul" | "li";
}

export type { IList };
