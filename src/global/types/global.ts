import * as React from "react";

export interface CustomCSS extends React.CSSProperties {
  [key: `--${string}`]: number | string;
}
