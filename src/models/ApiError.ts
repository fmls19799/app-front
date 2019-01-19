export class ApiError {
  message: string;
  errors?: Array<string> = [];
  error: {
    message: string;
  }
}