declare type SuccessfulResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type ApiResponse<T> = SuccessfulResponse<T> | ErrorResponse;
