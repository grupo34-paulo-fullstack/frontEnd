import { IComment } from "../../interfaces/components";
import { Container } from "./styles";
import { TiEdit } from "react-icons/ti";
import { CgClose } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { toast } from "react-hot-toast";

export const CardComments = ({
  id,
  description,
  createdAt,
  user,
  paramsId
}: IComment) => {
  const { deleteComment, updateComment } = useContext(Context);

  const [showEditComment, setShowEditComment] = useState<boolean>(false);

  const [text, setText] = useState<string>(description);

  const token = localStorage.getItem("@token");

  const userLogged = JSON.parse(localStorage.getItem("@user")!);

  const minutesAgo = () => {
    const time = new Date(createdAt).getTime();
    const now = new Date().getTime();

    const minutes = Number((now - time) / (1000 * 60));

    if (minutes > 1440) return `há ${Math.floor(minutes / 1440)} dias`;
    if (minutes < 1440 && minutes > 120)
      return `há ${Math.floor(minutes / 60)} horas`;
    if (minutes < 120 && minutes >= 60)
      return `há ${Math.floor(minutes / 60)} hora`;
    if (minutes < 60 && minutes >= 2)
      return `há ${Math.floor(minutes)} minutos`;
    if (minutes < 2 && minutes > 1) return `há ${Math.floor(minutes)} minuto`;
    if (minutes < 1) return `há segundos`;
  };

  return (
    <Container>
      <div className="userInfo">
        <div className="userData">
          <span className="userBall">
            {user.name
              .split(" ")
              .map((name: string, index: number) =>
                index <= 1 ? name[0].toUpperCase() : undefined
              )}
          </span>{" "}
          <p className="name">{user.name}</p> <div className="userDot"></div>{" "}
          <span className="postedDate">{minutesAgo()}</span>{" "}
        </div>

        {token && user.id == userLogged?.id && (
          <div className="button-settings">
            <button id="delete-comment" onClick={() => deleteComment(paramsId! ,id!)}> <MdDeleteForever /> </button>
            <button onClick={() => setShowEditComment(!showEditComment)}>
              {showEditComment == false ? <TiEdit /> : <CgClose />}
            </button>
          </div>
        )}
      </div>
      {showEditComment == false ? (
        <p className="userComment">{description}</p>
      ) : (
        <div className="textarea-button">
          <textarea
            id="updateComment-textarea"
            defaultValue={description}
            onChange={(event) => setText(event.currentTarget.value)}
          />
          <button
            id="updateComment-button"
            onClick={() => {
              if (description == text) {
                toast.error("Não pode ser atualizado com o mesmo texto!");
              } else {
                updateComment(text, id!);
                setShowEditComment(false);
              }
            }}
          >
            Editar
          </button>
        </div>
      )}
    </Container>
  );
};
