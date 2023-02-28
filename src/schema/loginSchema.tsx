import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Precisa ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Deve conter uma senha")
  // .matches(/(\d)/, "deve conter ao menos 1 número")
  // .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  // .min(8, "deve conter ao menos 8 caracteres"),
});