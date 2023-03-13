import * as yup from "yup";

export const modaelEditAddressSchema = yup.object().shape({
  cep: yup.string(),
  state: yup.string().max(2, "máximo de 2 caracteres"),
  city: yup.string(),
  street: yup.string(),
  number: yup.string(),
  complement: yup.string(),
});
