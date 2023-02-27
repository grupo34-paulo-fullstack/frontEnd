import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { RegisterMain, Form } from "./style";
import { registerSchema } from "../../schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces/context";

export const RegisterPage = () => {
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
        <Form>
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

          <Input
            id="state"
            placeholder="Ex: ES"
            label="Estado"
            {...register("state")}
            error={errors?.state}
            type="text"
          />

          <Input
            id="city"
            placeholder="Digitar cidade"
            label="Cidade"
            {...register("city")}
            error={errors?.city}
            type="text"
          />

          <Input
            id="street"
            placeholder="Digitar Rua"
            label="Rua"
            {...register("street")}
            error={errors?.street}
            type="text"
          />

          <Input
            id="description"
            placeholder="Digite aqui seu nome"
            label="Descrição"
            {...register("description")}
            error={errors?.description}
            type="text"
          />

          <Input
            id="description"
            placeholder="Digite aqui seu nome"
            label="Descrição"
            {...register("description")}
            error={errors?.description}
            type="text"
          />
        </Form>
      </RegisterMain>
      <Footer />
    </>
  );
};
