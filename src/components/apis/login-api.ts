import axios from "axios";
import Cookies from "js-cookie";

export async function LoginAuth(value: LoginFields) {
  const response = await axios.post(
    "https://fitness.elevateegy.com/api/v1/auth/signin",
    value,
  );

  const payload: ApiResponse<SignInResponse> =response.data

  if ("error" in payload) {
    throw new Error("Failed Login");
  }

  // Store token in cookies
  Cookies.set("userToken", payload.token,{
    secure:true
  })

  return payload;
}
