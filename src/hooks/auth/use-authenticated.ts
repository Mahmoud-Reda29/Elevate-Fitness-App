import Cookies from "js-cookie";

type UseAuthResult = {
  isAuthenticated: boolean;
  token: string | undefined;
};

/**
 * Custom hook to check user authentication status.
 *
 * @returns {UseAuthResult} An object containing the authentication status and the authentication token.
 * @property {boolean} isAuthenticated - A boolean indicating if the user is authenticated.
 * @property {string | undefined} token - The authentication token if available, otherwise undefined.
 */

export function useAuth(): UseAuthResult {
  const token = Cookies.get("userToken");

  return {
    isAuthenticated: !!token,
    token,
  };
}
