import { ReactElement, ReactNode } from "react";

interface IButton {
  children: ReactElement | string | ReactNode;
  onClick: () => void;
  label?: string;
}

export type { IButton };
