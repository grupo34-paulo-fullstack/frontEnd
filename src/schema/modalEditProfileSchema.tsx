import * as yup from "yup";

export const modalEditProfileSchema = yup.object().shape({
  name: yup.string().min(3, "mínimo 3 caracteres"),
  email: yup.string().email("Precisa ser um e-mail válido"),
  cpf: yup.string(),
  phone: yup.string(),
  birthdate: yup.string(),
  description: yup.string(),
});
