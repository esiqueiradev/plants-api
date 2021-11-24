import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { FormError } from "../../shared/errors/FormError";

export async function createUserValidator(
  request: Request,
  _response: Response,
  next: NextFunction
) {
  const user = request.body;

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    confirmPassword: Yup.string().equalTo(Yup.ref("password"), 'Senhas não correspondem'),
  });

  try {
    await schema.validate(user, { abortEarly: false });
    next();
  }
  catch (err: any) {
    const errorObject: any = {};

    err.inner.forEach((error: { path: string; message: any; }) => {
      errorObject[error.path] = error.message
    })

    throw new FormError(
      errorObject
    );
  }
}
