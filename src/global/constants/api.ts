export const GITHUB_BASE_API = "https://api.github.com/";

/**
 * Funcao para gerar o slug da API
 */
export const userAPI = {
  user: (user: String) => `users/${user}`,
  userRepo: (user: String, perPage: number = 100) =>
    `users/${user}/repos?per_page=${perPage}`,
};
