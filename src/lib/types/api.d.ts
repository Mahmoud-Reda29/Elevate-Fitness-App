declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type SuccessfulForgotPassword = {
  message: "success";
  info: string;
};

declare type ForgotPasswordResponse = SuccessfulForgotPassword | ErrorResponse;
