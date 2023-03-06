import { Link } from "react-router-dom";
import { Container, NameIcon, SpanInfo } from "./style";

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

export const CardHome = ({ item }) => {
  return (
    <Container>
      <Link to={`/announcement/${item.id}`}>
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
          {item.name}
        </div>

        <div className="container-infos">
          <SpanInfo>
            <span className="text-body-2-500">{item.km}</span>
            <span className="text-body-2-500">{item.year}</span>
          </SpanInfo>
          <p className="text-body-1-400">R$ {item.price}</p>
        </div>
      </Link>
    </Container>
  );
};
