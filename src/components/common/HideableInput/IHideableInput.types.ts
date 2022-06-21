interface IHideableInput {
  onSearch: (input: string) => void;
  collapsed: boolean;
  handleCollapse: () => void;
}

export type { IHideableInput };
