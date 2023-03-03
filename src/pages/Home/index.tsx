import { useContext } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardAuction } from "../../components/CardAuction";
import { cardsHome } from "../../components/CardAuction/database";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Context } from "../../context/Context";
import { Auction, CardCars, Container } from "./style";

export const Home = () => {
  const { announcements } = useContext(Context);

  return (
    <>
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
            outline_color="#FFF"
            children="Carros"
            background_hover="#EDEAFD"
            color_hover="#4529E6"
          />
          <Button
            background="#5126EA"
            color="#FFF"
            outline_color="#FFF"
            children="Motos"
            background_hover="#EDEAFD"
            color_hover="#4529E6"
          />
        </div>
      </Container>
      <Auction>
        <h5>Leilão</h5>
        <ul>
          {cardsHome.map((item) => (
            <CardAuction item={item} />
          ))}
        </ul>
      </Auction>
      <CardCars>
        <h5>Carros</h5>
        <ul>
          {announcements
            .filter((value) => value.type_vehicle === "car")
            .map((item) => (
              <Card item={item} />
            ))}
        </ul>
      </CardCars>
      <CardCars>
        <h5>Motos</h5>
        <ul>
          {announcements
            .filter((value) => value.type_vehicle === "motorcycle")
            .map((item) => (
              <Card item={item} />
            ))}
        </ul>
      </CardCars>
      <Footer />
    </>
  );
};
