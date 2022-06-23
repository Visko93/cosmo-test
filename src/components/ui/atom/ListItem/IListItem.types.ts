import React from "react";

interface IListItem extends React.LiHTMLAttributes<HTMLDListElement> {
  icon: React.SVGProps<SVGSVGElement>;
  text: string | number | undefined;
}

export type { IListItem };
