import { useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import { SuccessStyle } from "./style";
import { CgClose } from "react-icons/cg";

export const ModalAddAnnouncementSuccess = () => {
  const { setShowModalAddAnnouncementSuccess } = useContext(Context);

  setTimeout(() => {
    setShowModalAddAnnouncementSuccess(false);
  }, 4000);

  return (
    <SuccessStyle>
      <div className="container-modal">
        <div className="header-modal">
          <h3>Sucesso!</h3>
          <button onClick={() => setShowModalAddAnnouncementSuccess(false)}>
            <CgClose />
          </button>
        </div>

        <p id="message-success">Seu anúncio foi criado com sucesso!</p>

        <p id="message-information">
          Agora você poderá ver seus negócios crescendo em grande escala
        </p>
      </div>
    </SuccessStyle>
  );
};
