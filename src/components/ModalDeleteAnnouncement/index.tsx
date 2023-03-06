import { useContext } from "react";
import { Context } from "../../context/Context";
import { Button } from "../Button";
import { DeleteAnnouncementStyle } from "./style";
import { CgClose } from "react-icons/cg";

export const ModalDeleteAnnouncement = () => {
  const { announcementId, deleteAnnouncement, setShowModalDeleteAnnouncement } =
    useContext(Context);

  return (
    <DeleteAnnouncementStyle>
      <div className="container-modal">
        <div className="header-modal">
          <h3>Excluir anúncio</h3>
          <button onClick={() => setShowModalDeleteAnnouncement(false)}>
            <CgClose />
          </button>
        </div>

        <div className="content-modal">
          <h4>Tem certeza que deseja remover este anúncio?</h4>

          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </div>

        <div className="buttons">
          <Button
            id="button-cancel"
            background="#DEE2E6"
            background_hover="#CED4DA"
            border_hover="#CED4DA"
            border_color="#DEE2E6"
            color="#495057"
            width="126px"
            height="48px"
            children="Cancelar"
            onClick={() => setShowModalDeleteAnnouncement(false)}
          />
          <Button
            width="211px"
            lower_width="211px"
            height="48px"
            background="#FFE5E5"
            border_color="#FFE5E5"
            background_hover="#FDD8D8"
            border_hover="#FDD8D8"
            color="#CD2B31"
            children="Sim, excluir anúncio"
            onClick={() => deleteAnnouncement(announcementId)}
          />
        </div>
      </div>
    </DeleteAnnouncementStyle>
  );
};
