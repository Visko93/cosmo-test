import { ReactElement, ReactNode } from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string | ReactNode;
  onClick: () => void;
  label?: string;
}

export type { IButton };
