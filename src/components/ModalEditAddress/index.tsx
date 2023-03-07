import { Container, Form } from "./style";
import { Input } from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { modaelEditAddressSchema } from "../../schema/modalEditAddress";
import { IEditUserProfile } from "../../interfaces/components";
import { CgClose } from "react-icons/cg";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Button } from "../Button";

interface ModalProps {
  setModalAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditAddress = ({ setModalAddress }: ModalProps) => {
  const { updateUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditUserProfile>({
    resolver: yupResolver(modaelEditAddressSchema),
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit(updateUser)}>
        <div className="titleBox">
          <span className="title">Editar endereço</span>
          <button className="x" onClick={() => setModalAddress(false)}>
            <CgClose />
          </button>
        </div>

        <span className="info">Informações de endereço</span>
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
            onClick={() => setModalAddress(false)}
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
        </div>
      </Form>
    </Container>
  );
};
