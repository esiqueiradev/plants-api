export class AppError {
  readonly message: string;

  readonly statusCode: number;

  readonly formErrors: any;

  constructor(message: string, statusCode = 400, formErrors: any = undefined) {
    this.message = message;
    this.statusCode = statusCode;
    this.formErrors = formErrors;
  }
}
