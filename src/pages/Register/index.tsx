import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { RegisterMain, Form } from "./style";
// import { registerSchema } from "../../schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ICreateUser } from "../../interfaces/context";
import { AuthContext } from "../../context/AuthContext";
import { Context } from "../../context/Context";
import { useContext } from "react";
import * as yup from "yup";

const registerSchema = yup.object().shape({
  // name: yup
  //   .string()
  //   .required("Campo obrigatório")
  //   .min(3, "mínimo 3 caracteres"),
  // email: yup
  //   .string()
  //   .email("Precisa ser um e-mail válido")
  //   .required("Campo obrigatório"),
  // cpf: yup.string().required("Campo obrigatório"),
  // phone: yup.string().required("Campo obrigatório"),
  // birthdate: yup.string().required("Campo obrigatório"),
  // description: yup.string(),
  // cep: yup.string().required("Campo obrigatório"),
  // state: yup
  //   .string()
  //   .max(2, "máximo de 2 caracteres")
  //   .required("Campo obrigatório"),
  // city: yup.string().required("Campo obrigatório"),
  // street: yup.string().required("Campo obrigatório"),
  // number: yup.string().required("Campo obrigatório"),
  // complement: yup.string(),
  // is_announcer: yup.boolean(),
  // password: yup.string().required("deve conter uma senha"),
  // .matches(/(\d)/, "deve conter ao menos 1 número")
  // .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
  // .min(8, "deve conter ao menos 8 caracteres"),
  // passwordCheck: yup
  //   .string()
  //   .oneOf([yup.ref("password")], "As senhas não estão iguais"),
});

export const RegisterPage = () => {
  const { handleRegister } = useContext(AuthContext);
  const { checkCep } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <Header />
      <RegisterMain>
        <Form onSubmit={handleSubmit(handleRegister)}>
          <h5>Cadastro</h5>
          <span>informações pessoais</span>
          <Input
            {...register("name")}
            id="user"
            placeholder="Ex: Samuel Leão"
            label="Nome"
            error={errors?.name}
            type="text"
          />
          <Input
            {...register("email")}
            id="email"
            placeholder="Ex: samuel@mymail.com.br"
            label="Email"
            error={errors?.email}
            type="text"
          />
          <Input
            {...register("phone")}
            id="cpf"
            placeholder="000.000.000-00"
            label="CPF"
            error={errors?.name}
            type="text"
          />
          <Input
            {...register("phone")}
            id="phone"
            placeholder="(DDD) 90000-0000"
            label="Celular"
            error={errors?.phone}
            type="text"
          />
          <Input
            {...register("birthdate")}
            id="date"
            placeholder="00/00/00"
            label="Data de nascimento"
            error={errors?.birthdate}
            type="text"
          />
          <Input
            {...register("description")}
            id="description"
            placeholder="Digitar descrição"
            label="Descrição"
            onBlur={checkCep}
            error={errors?.description}
            type="text"
          />

          <span> Informações de endereço</span>

          <Input
            {...register("cep")}
            id="CEP"
            placeholder="00000.000"
            label="CEP"
            error={errors?.cep}
            type="text"
          />
          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <Input
                {...register("state")}
                id="state"
                placeholder="Ex: ES"
                label="Estado"
                error={errors?.state}
                type="text"
              />
            </div>

            <div className="boxSecondHalf">
              <Input
                {...register("city")}
                id="city"
                placeholder="Digitar cidade"
                label="Cidade"
                error={errors?.city}
                type="text"
              />
            </div>
          </div>
          <Input
            {...register("street")}
            id="street"
            placeholder="Digitar Rua"
            label="Rua"
            error={errors?.street}
            type="text"
          />

          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <Input
                {...register("number")}
                id="number"
                placeholder="Digitar número"
                label="Número"
                error={errors?.number}
                type="text"
              />
            </div>
            <div className="boxSecondHalf">
              <Input
                {...register("complement")}
                id="complement"
                placeholder="Ex: apart 307"
                label="Complemento"
                error={errors?.complement}
                type="text"
              />
            </div>
          </div>
          <span>Tipo de conta</span>
          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <input
                {...register("is_announcer")}
                className="adInput"
                value="Comprador"
                id="Comprador"
                type="radio"
                name="is_announcer"
              />
              <label className="adLabel" htmlFor="Comprador">
                {" "}
                Comprador
              </label>
            </div>
            <div className="boxSecondHalf">
              <input
                {...register("is_announcer")}
                className="adInput"
                value="Anunciante"
                id="Anunciante"
                type="radio"
                name="is_announcer"
              />
              <label className="adLabel" htmlFor="Anunciante">
                {" "}
                Anunciante
              </label>
            </div>
          </div>

          <Input
            {...register("password")}
            id="password"
            placeholder="Digitar senha"
            label="Senha"
            error={errors?.password}
            type="password"
          />

          <Input
            {...register("passwordCheck")}
            id="confirmPassword"
            placeholder="Digitar senha"
            label="Confirmar Senha"
            error={errors?.passwordCheck}
            type="password"
          />

          <button type="submit">Finalizar Cadastro</button>
        </Form>
      </RegisterMain>
      <Footer />
    </>
  );
};
