import {
  ButtonsForAnnouncer,
  CardContainer,
  Container,
  NameIcon,
  SpanInfo,
  Timer,
} from "./style";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Button } from "../Button";

interface ICardAuction {
  title: string;
  image: string;
  description: string;
  name: string;
  km: string;
  year: string;
  price: string;
}

export const CardAuctionForAnnouncer = (props: { item: ICardAuction }) => {
  function generateColor() {
    const letters = "123456789AB";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 11)];
    }
    return color;
  }

  return (
    <CardContainer url={props.item.image}>
      <div className="card-background">
        <Container>
          <Timer>
            <AiOutlineClockCircle />
            <span>01:58:00</span>
          </Timer>
          <h6>{props.item.title}</h6>
          <p className="text-body-2-400">{props.item.description}</p>
          {props.item.name != "Samuel Leão" ? (
            <div className="container-name text-body-1-400">
              <NameIcon
                className="container-nameIcon-icon text-body-2-400"
                backgroundColor={generateColor()}
              >
                {props.item.name[0]}
              </NameIcon>{" "}
              {props.item.name}
            </div>
          ) : (
            <div className="container-name text-body-1-400"></div>
          )}
          <div className="container-infos">
            <SpanInfo>
              <span className="text-body-2-500">{props.item.year}</span>
              <span className="text-body-2-500">{props.item.km} KM</span>
            </SpanInfo>
            <p className="card-price text-body-1-400">R$ {props.item.price}</p>
          </div>
        </Container>
      </div>
      <ButtonsForAnnouncer>
        <Button
          width="80px"
          height="38px"
          color="#FDFDFD"
          outline_color="#FDFDFD"
          background="#4529E6"
          children="Editar"
        />
        <Button
          width="105px"
          height="38px"
          color="#FDFDFD"
          outline_color="#FDFDFD"
          background="#4529E6"
          children="Ver como"
        />
      </ButtonsForAnnouncer>
    </CardContainer>
  );
};
