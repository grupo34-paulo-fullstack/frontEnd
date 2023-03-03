import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "mínimo 3 caracteres"),
  email: yup
    .string()
    .email("Precisa ser um e-mail válido")
    .required("Campo obrigatório"),
  cpf: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  birthdate: yup.string().required("Campo obrigatório"),
  description: yup.string(),
  cep: yup.string().required("Campo obrigatório"),
  state: yup
    .string()
    .max(2, "máximo de 2 caracteres")
    .required("Campo obrigatório"),
  city: yup.string().required("Campo obrigatório"),
  street: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  complement: yup.string(),
  is_announcer: yup.boolean(),
  password: yup.string().required("deve conter uma senha")
  .matches(/(\d)/, "deve conter ao menos 1 número")
  .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  .min(8, "deve conter ao menos 8 caracteres"),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não estão iguais"),
});
