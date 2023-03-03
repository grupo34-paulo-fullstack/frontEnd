import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AnnouncementsAnnouncerPageStyle } from "./style";
import { Button } from "../../components/Button";
import { cardsAnnouncerPage } from "../../components/CardAuction/database";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { ModalAddAnnouncement } from "../../components/ModalAddAnnouncement";
import { CardForAnnouncer } from "../../components/CardForAnnouncer";
import announcer from "../../assets/announcer_sl.png";
import { CardAuctionForAnnouncer } from "../../components/CardAuctionForAnnouncer";
import { ModalEditAnnouncement } from "../../components/ModalEditAnnouncement";

export const AnnouncementAnnouncerPage = () => {
  const {
    showAddAnnouncementModal,
    setShowAddAnnouncementModal,
    showEditAnnouncementModal,
    announcements,
  } = useContext(Context);

  return (
    <>
      <Header />
      {showAddAnnouncementModal && <ModalAddAnnouncement />}
      {showEditAnnouncementModal && <ModalEditAnnouncement />}
      <AnnouncementsAnnouncerPageStyle>
        <div className="container-page">
          <div className="background-announcer" />

          <div className="information-announcer">
            <figure>
              <img src={announcer} alt="SL" />
            </figure>

            <div className="name-announcer">
              <p id="name">Samuel Leão</p>
              <div className="announcer-icon">
                <p id="announcer">Anunciante</p>
              </div>
            </div>

            <p id="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>

            <Button
              background="#FDFDFD"
              background_hover="#EDEAFD"
              outline_color="#4529E6"
              color="#4529E6"
              children="Criar anúncio"
              width="160px"
              lower_width="160px"
              onClick={() => setShowAddAnnouncementModal(true)}
            />
          </div>

          <div className="content-announcements">
            <h3 id="title-auction">Leilão</h3>

            <ul className="list-auction">
              {cardsAnnouncerPage
                .filter((result) => result.name == "Samuel Leão")
                .map((item) => (
                  <CardAuctionForAnnouncer key={uuid()} item={item} />
                ))}
            </ul>

            <h3 id="title-cars">Carros</h3>

            <ul className="list-cars">
              {announcements.map(
                (item) =>
                  item.type_vehicle == "car" && (
                    <CardForAnnouncer key={uuid()} item={item} />
                  )
              )}
            </ul>

            <h3 id="title-bikes">Motos</h3>

            <ul className="list-bikes">
              {announcements.map(
                (item) =>
                  item.type_vehicle == "motorcycle" && (
                    <CardForAnnouncer key={uuid()} item={item} />
                  )
              )}
            </ul>
          </div>
        </div>
      </AnnouncementsAnnouncerPageStyle>
      <Footer />
    </>
  );
};
