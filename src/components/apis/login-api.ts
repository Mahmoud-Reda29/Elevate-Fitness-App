import axios from "axios";
export async function LoginAuth(value: LoginFields) {
  const response = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/signin",
    value,
  );

  const payload: ApiResponse<SignInResponse> =response.data

  if ("error" in payload) {
    throw new Error("Failed Login");
  }

  localStorage.setItem("userToken", payload.token);  

  return payload;
}
