import { Button } from "../Button";
import { ButtonsForAnnouncer, Container, NameIcon, SpanInfo } from "./style";
import { IAnnouncement } from "../../interfaces/context/index"

export interface ICard {
  image: string;
  title: string;
  description: string;
  name: string;
  km: number;
  year: string;
  price: string;
}

function generateColor() {
  const letters = "6789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

export const Card = ({item}: IAnnouncement) => {
  const nameToArray = "Filipe Judiss".split(" ");
  const name = nameToArray[0][0] + nameToArray[1][0];

  return (
    <Container>
      <div className="container-image">
        <img src={item.image} alt="" />
      </div>
      <h5>{item.title}</h5>

      <p className="text-body-2-400">{item.description}</p>

      <div className="container-name text-body-1-400">
        <NameIcon
          className="container-nameIcon-icon text-body-2-400"
          backgroundColor={generateColor()}
        >
          {}
        </NameIcon>
        {name}
      </div>

      <div className="container-infos">
        <SpanInfo>
          <span className="text-body-2-500">{item.km}</span>
          <span className="text-body-2-500">{item.year}</span>
        </SpanInfo>
        <p className="text-body-1-400">R$ {item.price}</p>
      </div>

    </Container>
  );
};
