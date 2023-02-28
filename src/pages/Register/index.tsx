import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { RegisterMain, Form } from "./style";
import { registerSchema } from "../../schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces/context";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const RegisterPage = () => {
  const { handleRegister } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
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
            id="user"
            placeholder="Ex: Samuel Leão"
            label="Nome"
            {...register("name")}
            error={errors?.name}
            type="text"
          />
          <Input
            id="email"
            placeholder="Ex: samuel@mymail.com.br"
            label="Email"
            {...register("email")}
            error={errors?.email}
            type="text"
          />
          <Input
            id="cpf"
            placeholder="000.000.000-00"
            label="CPF"
            {...register("phone")}
            error={errors?.name}
            type="text"
          />
          <Input
            id="phone"
            placeholder="(DDD) 90000-0000"
            label="Celular"
            {...register("phone")}
            error={errors?.phone}
            type="text"
          />
          <Input
            id="date"
            placeholder="00/00/00"
            label="Data de nascimento"
            {...register("birthdate")}
            error={errors?.birthdate}
            type="text"
          />
          <Input
            id="description"
            placeholder="Digitar descrição"
            label="Descrição"
            {...register("description")}
            error={errors?.description}
            type="text"
          />

          <span> Informações de endereço</span>

          <Input
            id="CEP"
            placeholder="00000.000"
            label="CEP"
            {...register("cep")}
            error={errors?.cep}
            type="text"
          />
          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <Input
                id="state"
                placeholder="Ex: ES"
                label="Estado"
                {...register("state")}
                error={errors?.state}
                type="text"
              />
            </div>

            <div className="boxSecondHalf">
              <Input
                id="city"
                placeholder="Digitar cidade"
                label="Cidade"
                {...register("city")}
                error={errors?.city}
                type="text"
              />
            </div>
          </div>
          <Input
            id="street"
            placeholder="Digitar Rua"
            label="Rua"
            {...register("street")}
            error={errors?.street}
            type="text"
          />

          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <Input
                id="number"
                placeholder="Digitar número"
                label="Número"
                {...register("number")}
                error={errors?.number}
                type="text"
              />
            </div>
            <div className="boxSecondHalf">
              <Input
                id="complement"
                placeholder="Ex: apart 307"
                label="Complemento"
                {...register("complement")}
                error={errors?.complement}
                type="text"
              />
            </div>
          </div>
          <span>Tipo de conta</span>
          <div className="boxTwoInfos">
            <div className="boxFirstHalf">
              <input
                className="adInput"
                value="False"
                id="False"
                type="radio"
                {...register("is_announcer")}
              />
              <label className="adLabel" htmlFor="False">
                {" "}
                Comprador
              </label>
            </div>
            <div className="boxSecondHalf">
              <input
                className="adInput"
                value="True"
                id="True"
                type="radio"
                {...register("is_announcer")}
              />
              <label className="adLabel" htmlFor="True">
                {" "}
                Anunciante
              </label>
            </div>
          </div>

          <Input
            id="password"
            placeholder="Digitar senha"
            label="Senha"
            {...register("password")}
            error={errors?.password}
            type="password"
          />

          <Input
            id="confirmPassword"
            placeholder="Digitar senha"
            label="Confirmar Senha"
            {...register("passwordCheck")}
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
