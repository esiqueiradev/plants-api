import { AppError } from "./AppError";

export class FormError extends AppError {
  constructor(errorObject: any) {
    super(
      "Houve um erro ao preencher o formulário",
      400,
      errorObject
    );
  }
}
