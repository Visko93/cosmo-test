import { axiosClient } from "..";
import { userAPI } from "../../global/constants/api";
import type { IUser } from "../../global/types/user";
import type { IUserRepositories } from "../../global/types/repos";

export async function fetchGetUser(user: string | undefined): Promise<IUser> {
  if (typeof user === "undefined") {
    return Promise.reject(new Error("Usuario Invalido"));
  }
  const res = await axiosClient.get(userAPI.user(user));
  return res.data;
}

export async function fetchUserRepositories(
  user: string
): Promise<IUserRepositories> {
  const res = await axiosClient.get(userAPI.userRepo(user));
  return res.data;
}
