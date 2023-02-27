import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AnnouncementsAnnouncerPageStyle } from "./style";
import { Button } from "../../components/Button";
import { CardAuction } from "../../components/CardAuction";
import { database } from "../../components/CardAuction/database";
import { v4 as uuid } from 'uuid'
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { ModallAddAnnouncement } from "../../components/ModalAddAnnouncement";
import { CardForAnnouncer } from "../../components/CardForAnnouncer";
import announcer from '../../assets/announcer_sl.png'
import { CardAuctionForAnnouncer } from "../../components/CardAuctionForAnnouncer";

export const AnnouncementAnnouncerPage = () => {

  const { showAddAnnouncementModal, setShowAddAnnouncementModal } = useContext(Context)
  const [cars, setCars] = useState([
    {
      image:
        "https://s3-alpha-sig.figma.com/img/145c/8aa0/bcdbb2d4ac56bb940506edfe7b7b44c3?Expires=1678060800&Signature=deoINHlEKvA9-Zc~ilQBNNLW2bKMmNCVvUoPLpvdsebMuDmh-dC0gPWzObUWuHlmsx1eJf~g~2wWStwfKaQ3BkZ3DUjDe~AJYd7UMvnnTcYbX7--I6jvXAfTTdNEXrnK98cdPDExIKHMTTQxwhYBG5sJlUkKFAqWtDU-BfnmpOhUaoD4~uwHn5z0vASYgZTzCLLxv38QTGdGOMQfBWo35J9LpkadgHQEiTYMXm3ltWEmHBEhCvN6LhISLSCfZeEKTRXd8t1Faj9UrocXflfcfEVHONKUT9dZ8BBrEgQPWwNsr9TgZT~8Okq0K-fJEnpULyO4zw-K~fBLxeZSgfv~SA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a0f9/185f/5620a782e3ac8677180667405ebe2b98?Expires=1678060800&Signature=J53lgnkK5Rf6fQ90KD85InIIfzU6~mUb0wZIYgu0WbaHQsjcSGQi0PMB1L-evlUOnHkFptxSH~QtCU-oigJc0UhpjXFn9byN5LfmU5QZ8VoQQRptCRG1XIJR9cg~8rbH~wcqBJBQi0gRrWnUb~4zAbPmoOQnIfIkLH9G-Wz-OCUb0P3yVoPFEuBNQf6ROZhyKj5V3~Ec3MBr~~bNxas0YTPkDw2WA5Se-l6RBVq6NQvRUVvHpeupQeVCVvg59c1z~WjbMNj2WV~XbTZoZG6kBv6hb6~ZQPvQjxOGmnJ4zxv~vHPHmfBxzWsBDJvOSi0B~oTzJY4yZY8~~5Qr5o~Vog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/bab6/4bd0/a740a6e0fd9bc2b6b1e52980aa8cb842?Expires=1678060800&Signature=mCfrKdlHhgbYbUe2QBH1nNDjACv1AQJ5K50qun3ZZVIzWSwAeGMy8TycHkV6RmUOWAWw7gT4cUZaozsAo-F-3AP9WtehdtRYZn2w7VOXqqf5KL4qwiK9lz4PJiRu4YP3rp1wNYY7tb9vgnchNLp1NxcWIH~Z25GEpOcQFuMis1f4xLE11spRpSVao4rG2M6hcC2Olq4vpKzX1FeOFSF0H2fy0FH~1QCjGu0bMz8ZLbSc0HINzA98WSW~C4onnsHtf2HCd3ciLFZv0x8UxrsedmMcmn788aDETi1EDQeY9EdRTS7dSts9SlO4Cu5k6icspQj8KbwF6GpsSynojjPFfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/5fe4/70bf/e86afec44dcfc83684fba76e465a0492?Expires=1678060800&Signature=S6834bq2RAeECdNRgpgJGZ721-HYeZL0HCdEcJkSAXaFdhy9kEvolR7aGHKuW19sSwgsH38FkWg4K0JLHUR44J11Eqe2NW8P8Jjyaf89HdKFHs7OJzi52bAKdnAr8jd8vFrZPDvixSFdF-2esQNwcrdve0Vb9P6mg6pZ5S-swLiXc2IFKfT~GL1fv466AXL00sUdElRVyDPX9XJZ1RxlKhJiIIw7g0Bz13xxUyVMv5tI4AL2kb7mzHJfc~OWUfOFkfFa4lC3QSp4l3L0xairYjQdUW8ITneDzDo3smtUjCdlvTncpgYztAGbaDDKWqjk47i~2Ah4Iccy6KoJQcME~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
  ]);

  const [bikes, setBikes] = useState([
    {
      image:
        "https://uploaddeimagens.com.br/images/004/354/094/full/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview_1.png?1676409884",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://uploaddeimagens.com.br/images/004/354/094/full/EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview_1.png?1676409884",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a81b/1c05/574c1fe8006b8b270085a044d5d6f212?Expires=1678060800&Signature=UaZPCr7Zcg87cW4-9SqEspesSzNQlZaD791ihItlHfX8NHXlze6iBI-kuzKgBdI7QxTgMpb-LhMb9EVf71fxtYpKcXxM9Pto2abRMT2CqBZ0RiP6-9634JQ6iT7XK56HLNF5-QOETAAwPUinKocktbChot500M67ysmx0O0FD0jhWMiVrOqdxDTcq~cPZ5lZ5enS6uQfeQSo4sDptnhSsBTS~QsCzxZucpGbUbQqZIVZfHK3Mp2E94zUoervTMlJSLuBkS61f966EclWD8rhdGJdP0gEiAQ7BxtkHtJBzyrIMx47KBS0F-pDFNZZZocaBXJxoilEjF5N51qw99jMJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a81b/1c05/574c1fe8006b8b270085a044d5d6f212?Expires=1678060800&Signature=UaZPCr7Zcg87cW4-9SqEspesSzNQlZaD791ihItlHfX8NHXlze6iBI-kuzKgBdI7QxTgMpb-LhMb9EVf71fxtYpKcXxM9Pto2abRMT2CqBZ0RiP6-9634JQ6iT7XK56HLNF5-QOETAAwPUinKocktbChot500M67ysmx0O0FD0jhWMiVrOqdxDTcq~cPZ5lZ5enS6uQfeQSo4sDptnhSsBTS~QsCzxZucpGbUbQqZIVZfHK3Mp2E94zUoervTMlJSLuBkS61f966EclWD8rhdGJdP0gEiAQ7BxtkHtJBzyrIMx47KBS0F-pDFNZZZocaBXJxoilEjF5N51qw99jMJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Product title stays here - max 1 line",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      name: "Samuel Leão",
      km: "50.156 KM",
      year: "2019",
      price: "R$ 10.541,56",
    },
  ]);

  return (
    <>
      <Header />
      {showAddAnnouncementModal && <ModallAddAnnouncement />}
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
              {database
                .filter((result) => result.name == "Samuel Leão")
                .map((item) => (
                  <CardAuctionForAnnouncer key={uuid()} item={item} />
                ))}
            </ul>

            <h3 id="title-cars">Carros</h3>

            <ul className="list-cars">
              {cars.map((item) => (<CardForAnnouncer key={uuid()} item={item} />) )}
            </ul>

            <h3 id="title-bikes">Motos</h3>

            <ul className="list-bikes">
              {bikes.map((item) => (<CardForAnnouncer key={uuid()} item={item} />))}
            </ul>
          </div>
        </div>
      </AnnouncementsAnnouncerPageStyle>
      <Footer />
    </>
  );
};
