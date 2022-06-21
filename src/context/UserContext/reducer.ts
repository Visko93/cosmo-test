import { actionTypes } from "./actions";
import { IUserContext, ReducerProps } from "./IUserContext.types";

export const initialState = {
  user: null,
  repos: null,
  error: null,
  isLoading: false,
};

export const userReducer = (
  state: IUserContext,
  { payload, type }: ReducerProps
) => {
  switch (type) {
    case actionTypes.search: {
      return {
        ...state,
        isLoading: payload?.isLoading ?? false,
      };
    }
    case actionTypes.successUser: {
      return { ...state, user: payload?.user };
    }
    case actionTypes.successRepos: {
      return { ...state, repos: payload?.repos };
    }
    case actionTypes.error: {
      return {
        ...state,
        error: payload?.error ?? null,
        user: null,
        repos: null,
      };
    }
    case actionTypes.update: {
      return { ...state };
    }
    case actionTypes.reset: {
      return { ...initialState };
    }
    default: {
      throw new Error(`Unsupported type: ${type}`);
    }
  }
};
