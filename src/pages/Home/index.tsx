import { useContext, useEffect } from "react";
import { Button } from "../../components/Button";
import { CardAuction } from "../../components/CardAuction";
import { cardsHome } from "../../components/CardAuction/database";
import { CardHome } from "../../components/CardHome";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Context } from "../../context/Context";
import { api } from "../../service/api";
import { Auction, CardCars, Container } from "./style";
import { ModalEditAddress } from "../../components/ModalEditAddress";
import { ModalProfileEditRemove } from "../../components/ModalEditProfile";
import { ModalRemoveUser } from "../../components/ModalRemoveUser";
import { viaCepService } from "../../service/viaCep";

export const Home = () => {
  const cepService = viaCepService();
  const {
    announcements,
    setAnnouncements,
    isModalProfileOpen,
    setModalProfile,
    isModalAddressOpen,
    setModalAddress,
    isModalRemoveUserOpen,
    setModalRemoveUser,
    getAllAnnouncements,
  } = useContext(Context);

  const announCars = announcements.filter(
    (announcement) =>
      announcement.type_vehicle === "car" && announcement.is_active == true
  );

  const announMotors = announcements.filter(
    (announcement) =>
      announcement.type_vehicle === "motorcycle" &&
      announcement.is_active == true
  );

  useEffect(() => {
    const request = async () => {
      await getAllAnnouncements();
      cepService.getAddress("29072265").then((resp) => console.log(resp));
    };

    request();
  }, []);

  useEffect(() => {
    api
      .get("/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isModalProfileOpen && (
        <ModalProfileEditRemove
          setModalProfile={setModalProfile}
          setModalRemoveUser={setModalRemoveUser}
        />
      )}
      {isModalAddressOpen && (
        <ModalEditAddress setModalAddress={setModalAddress} />
      )}
      {isModalRemoveUserOpen && (
        <ModalRemoveUser setModalRemoveUser={setModalRemoveUser} />
      )}
      <Header />
      <Container>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p className="text-body-1-400">
          Um ambiente feito para você explorar o seu melhor
        </p>
        <div>
          <Button
            background="#5126EA"
            color="#FFF"
            border_color="#FFF"
            children="Carros"
            background_hover="#EDEAFD"
            color_hover="#4529E6"
          />
          <Button
            background="#5126EA"
            color="#FFF"
            border_color="#FFF"
            children="Motos"
            background_hover="#EDEAFD"
            color_hover="#4529E6"
          />
        </div>
      </Container>
      <Auction>
        <h5>Leilão</h5>
        <ul>
          {announCars?.length > 0 ? (
            cardsHome.map((item, index) => (
              <CardAuction key={index} item={item} />
            ))
          ) : (
            <>
              <h6>
                Não há anuncios de carros no momento, em breve novas
                atualizações.
              </h6>
            </>
          )}
        </ul>
      </Auction>
      <CardCars>
        <h5>Carros</h5>
        <ul>
          {announCars.map((item, index) => (
            <CardHome key={index} item={item} />
          ))}
        </ul>
      </CardCars>
      <CardCars>
        <h5>Motos</h5>
        <ul>
          {announMotors?.length > 0 ? (
            announMotors.map((item, index) => (
              <CardHome key={index} item={item} />
            ))
          ) : (
            <>
              <h6>
                Não há anuncios de motos no momento, em breve novas
                atualizações.
              </h6>
            </>
          )}
        </ul>
      </CardCars>
      <Footer />
    </>
  );
};
