import { Axios, AxiosError } from "axios";
import * as React from "react";
import { fetchGetUser, fetchUserRepositories } from "../../services/users";
import { actionTypes } from "./actions";
import type { IUserContext, IUserContextProvider } from "./IUserContext.types";
import { initialState, userReducer } from "./reducer";

interface UserHandlers {
  fetchUser: (userLogin: string) => Promise<string>;
  fetchRepos: (userLogin: string) => void;
}

// Aqui se faz o controle de eventos e chamadas globais do app
const UserContext = React.createContext<{
  state: IUserContext;
  dispatch: React.Dispatch<any>;
  handlers?: UserHandlers;
}>({ state: initialState, dispatch: () => null });

// Adicionando Nome de contexto para facilitar Depuracao
UserContext.displayName = "User Context";

function UserContextProvider({ children }: IUserContextProvider) {
  const [state, dispatch] = React.useReducer(userReducer, initialState);

  // Chama repositiorios baseados no userLogin setado no contexto
  const fetchRepos = async (userLogin: string) => {
    try {
      const req = await fetchUserRepositories(userLogin);
      const sortedRepos = req.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      );

      dispatch({
        type: actionTypes.successRepos,
        payload: { repos: sortedRepos },
      });
    } catch (error) {
      const errorMessage = new Error(
        (error as Error)?.message ?? "Error fetching user"
      );
      dispatch({
        type: actionTypes.error,
        payload: { error: errorMessage },
      });
    } finally {
      dispatch({ type: actionTypes.search, payload: { isLoading: false } });
    }
  };

  //Procura o user pelo login informado pelo usuario e o salva no contexto caso //exista
  const fetchUser = (userLogin: string) => {
    return new Promise<string>(async (resolve, reject) => {
      dispatch({ type: actionTypes.search, payload: { isLoading: true } });
      try {
        const req = await fetchGetUser(userLogin);
        dispatch({ type: actionTypes.successUser, payload: { user: req } });
        resolve(userLogin);
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          const errorMessage = "User Not found, try another one!";
          dispatch({
            type: actionTypes.error,
            payload: { error: errorMessage },
          });
        } else {
          const errorMessage = new Error(
            (error as Error)?.message ?? "Error fetching user"
          );
          dispatch({
            type: actionTypes.error,
            payload: { error: errorMessage },
          });
        }
        reject(userLogin);
      } finally {
        dispatch({ type: actionTypes.search, payload: { isLoading: false } });
      }
    });
  };

  const value = {
    state,
    dispatch,
    handlers: {
      fetchUser,
      fetchRepos,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be wrapped in a UserContext provider");
  }

  return context;
}

export { useUserContext, UserContextProvider, actionTypes };
