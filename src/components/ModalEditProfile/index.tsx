import { Container, Form } from "./style";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modalEditProfileSchema } from "../../schema/modalEditProfileSchema";
import { IEditUserProfile } from "../../interfaces/components";
import { CgClose } from "react-icons/cg";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Button } from "../Button";

interface ModalProps {
  setModalProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setModalRemoveUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProfileEditRemove = ({
  setModalProfile,
  setModalRemoveUser,
}: ModalProps) => {
  const { updateUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUserProfile>({
    resolver: yupResolver(modalEditProfileSchema),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit(updateUser)}>
        <div className="titleBox">
          <span className="title">Editar perfil</span>
          <button className="x" onClick={() => setModalProfile(false)}>
            <CgClose />
          </button>
        </div>

        <span className="info">Informações pessoais</span>
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
          {...register("cpf")}
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
          // onBlur={checkCep}
          error={errors?.description}
          type="text"
        />

        <div className="buttonBox">
          <Button
            color="var(--colors-white)"
            border_color="var(--colors-brand-1)"
            children="Salvar alterações"
            background_hover="var(--colors-brand-2)"
            color_hover="var(--colors-white)"
            border_hover="var(--colors-brand-1)"
            width="193px"
            height="48px"
            background="var(--colors-brand-1)"
          />
          <Button
            onClick={() => setModalProfile(false)}
            color="var(--colors-grey-0)"
            border_color="var(--colors-grey-7)"
            children="Cancelar"
            background_hover="var(--colors-grey-5)"
            color_hover="var(--colors-white)"
            border_hover="var(--colors-grey-5)"
            width="126px"
            height="48px"
            background="var(--colors-grey-7)"
          />

          <Button
            onClick={() => setModalRemoveUser(true)}
            color="var(--colors-grey-0)"
            border_color="var(--colors-alert-2)"
            children="Remover Conta"
            background_hover="var(--colors-alert-1)"
            color_hover="var(--colors-white)"
            border_hover="var(--colors-alert-1)"
            width="90px"
            height="48px"
            background="var(--colors-alert-2)"
          />
        </div>
      </Form>
    </Container>
  );
};
