import { IUserRepositories } from "../../../global/types/repos";

interface IRepositoriesGrid {
  repos?: IUserRepositories | null;
  loading: boolean;
  error: any;
}

export type { IRepositoriesGrid };
