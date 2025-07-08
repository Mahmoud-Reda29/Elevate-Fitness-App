import axiosInstance from "../baseUrl";

/**
 * Sends a forgot password request to the backend.
 *
 * @async
 * @function forgetAction
 * @param {ForgetPasswordFields} fields - The email or credentials required to initiate the password reset.
 * @returns {Promise<ForgotPasswordResponse>} A promise that resolves with the server's response, typically containing a success message or instructions.
 *
 * @throws {AxiosError} Throws an error if the request fails (e.g., network error, validation issue).
 *
 * @example
 * const response = await forgetAction({ email: 'user@example.com' });
 */
export async function forgetAction(fields: ForgetPasswordFields) {
  const response = await axiosInstance.post(`/auth/forgotPassword`, fields);

  const payload: ForgotPasswordResponse = response.data;

  return payload;
}
