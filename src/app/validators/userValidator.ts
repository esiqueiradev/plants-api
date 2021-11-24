import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import * as Yup from "yup";
import { FormError } from "../../shared/errors/FormError";
import { UserService } from "../services/UserService";

export async function createUserValidator(
  request: Request,
  _response: Response,
  next: NextFunction
) {
  const userService = container.resolve(UserService);
  const errorObject: any = {};
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
  }
  catch (err: any) {
    err.inner.forEach((error: { path: string; message: any; }) => {
      errorObject[error.path] = error.message
    })

    throw new FormError(
      errorObject
    );
  }

  const userExists = await userService.findByEmail(user.email);

  if (userExists) {
    errorObject.email = "Email já cadastrado";

    throw new FormError(
      errorObject
    );
  }

  next();
}
