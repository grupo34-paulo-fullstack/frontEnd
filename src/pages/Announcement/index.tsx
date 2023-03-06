import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  MainContent,
  Body,
  Aside,
  BoxImgCarInfoDescription,
  CarSection,
  Comments,
  CommentSection,
  CommentsBox,
} from "./style";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import { AuthContext } from "../../context/AuthContext";

export const AnnouncementPage = () => {
  const {
    retrieveAnnouncement,
    announcementDetail,
    suggestion,
    setSuggestion,
    createComment,
  } = useContext(Context);

  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("@token");

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => retrieveAnnouncement(params.id!), []);

  return (
    <>
      <Header />
      <Body>
        <MainContent>
          <BoxImgCarInfoDescription>
            <figure>
              <img src={announcementDetail?.image} alt="" />
            </figure>
            <CarSection>
              <h6>{announcementDetail?.title}</h6>
              <div className="carInfoBox">
                <div className="yearAndKmBox">
                  <span className="yearKm">{announcementDetail?.year}</span>
                  <span className="yearKm">{`${announcementDetail?.km} KM`}</span>
                </div>

                <p className="price">R$ {announcementDetail?.price}</p>
              </div>

              <button>Comprar</button>
            </CarSection>
            <section className="description">
              <h6>Descrição</h6>
              <p>{announcementDetail?.description}</p>
            </section>
          </BoxImgCarInfoDescription>

          <Aside>
            <section className="photoSection">
              <h6>Fotos</h6>
              <ul className="photoList">
                {announcementDetail?.gallery?.map((photo) => (
                  <li className="photoElement">
                    <img className="asideImg" src={photo.image} alt="" />
                  </li>
                ))}
              </ul>
            </section>
            <section className="userSection">
              <div className="userTag">{}</div>
              <span className="userName">{announcementDetail?.user?.name}</span>
              <p className="userDescription">
                {announcementDetail?.user?.description}
              </p>
              <button
                className="userAds"
                onClick={() =>
                  navigate(`/announcer/${announcementDetail?.user.id}`)
                }
              >
                Ver todos anúncios
              </button>
            </section>
          </Aside>
        </MainContent>

        <CommentsBox>
          <Comments>
            <h6>Comentários</h6>

            <ul className="commentList">
              {announcementDetail?.comments?.map((comment) => (
                <li className="listElement">
                  <div className="userInfo">
                    <span className="userBall">LS</span>
                    <p className="name">{comment?.user?.name}</p>
                    <div className="userDot" />
                    <span className="postedDate">{}</span>
                  </div>
                  <p className="userComment">{comment?.description}</p>
                </li>
              ))}
            </ul>
          </Comments>

          <CommentSection>
            <div className="userInfoComment">
              {token && <span className="userBallComment"></span>}
              <p className="nameComment">{user?.name}</p>
            </div>

            <textarea
              value={suggestion}
              onChange={(event) => setSuggestion(event.currentTarget.value)}
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            ></textarea>
            <button
              className={token ? "button-able" : "button-disabled"}
              onClick={() => token && createComment(suggestion, params.id!)}
            >
              Comentar
            </button>
            <div className="suggestions">
              <p
                id="suggestion-one"
                onClick={(event) =>
                  setSuggestion(event.currentTarget.innerText)
                }
              >
                Gostei muito!
              </p>
              <p
                id="suggestion-two"
                onClick={(event) =>
                  setSuggestion(event.currentTarget.innerText)
                }
              >
                Incrível
              </p>
              <p
                id="suggestion-three"
                onClick={(event) =>
                  setSuggestion(event.currentTarget.innerText)
                }
              >
                Recomendarei para meus amigos!
              </p>
            </div>
          </CommentSection>
        </CommentsBox>
      </Body>
      <Footer />
    </>
  );
};
