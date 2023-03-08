import { Container } from "./style";
import { CgClose } from "react-icons/cg";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Button } from "../Button";

interface ModalProps {
  setModalRemoveUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveUser = ({ setModalRemoveUser }: ModalProps) => {
  const { deleteUser } = useContext(Context);
  return (
    <Container>
      <div className="removeUserBox">
        <div className="titleBox">
          <span className="title">Excluir Usuário</span>
          <button className="x" onClick={() => setModalRemoveUser(false)}>
            <CgClose />
          </button>
        </div>
        <span className="secondTitle">
          Tem certeza que deseja remover sua conta?
        </span>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>

        <div className="buttonBox">
          <Button
            onClick={() => setModalRemoveUser(false)}
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
            onClick={() => deleteUser()}
            color="var(--colors-alert-1)"
            border_color="var(--colors-alert-2)"
            children="Sim, excluir conta"
            background_hover="var(--colors-alert-1)"
            color_hover="var(--colors-white)"
            border_hover="var(--colors-alert-1)"
            width="155px"
            height="48px"
            background="var(--colors-alert-2)"
          />
        </div>
      </div>
    </Container>
  );
};
