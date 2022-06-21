import { AxiosError } from "axios";
import { IUserRepositories } from "../../global/types/repos";
import { IUser } from "../../global/types/user";
import { initialState } from "./reducer";

type ActionInterface<T extends string, U> = {
  type: T;
  value: U;
};

type Reducer<S, A> = (prevState: S, action: A) => S;
interface FectchResponse {
  key: string;
  results: IUser | null;
}

type AllActions =
  | ActionInterface<"SUCCESS", FectchResponse>
  | ActionInterface<"SEARCH", boolean>
  | ActionInterface<"ERROR", Error | null | string>
  | ActionInterface<"RESET", typeof initialState>
  | ActionInterface<"UPDATE", typeof initialState>;

interface IUserContext {
  user?: IUser | null;
  repos?: IUserRepositories | null;
  isLoading: boolean;
  error: Error | null | string;
}

interface IUserContextProvider {
  children: React.ReactElement;
}
interface PayloadOptions {
  user?: IUser | null;
  repos?: IUserRepositories | null;
  isLoading?: boolean;
  error?: Error | null | string;
}
interface ReducerProps {
  type: string;
  payload?: PayloadOptions;
}

export type { IUserContext, IUserContextProvider, ReducerProps, AllActions };
