import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import {
  MainContent,
  Body,
  Aside,
  BoxImgCarInfoDescription,
  CarSection,
} from "./style";

export const AdPage = () => {
  return (
    <>
      <Header />
      <Body>
        <MainContent>
          <BoxImgCarInfoDescription>
            <figure>
              <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
            </figure>
            <CarSection>
              <h6>Lamborghini Gallardo</h6>
              <div className="carInfoBox">
                <div className="yearAndKmBox">
                  <span className="yearKm">2015</span>
                  <span className="yearKm">25</span>
                </div>

                <p className="price">R$ 00.000,00</p>
              </div>

              <button>Comprar</button>
            </CarSection>
            <div></div>
          </BoxImgCarInfoDescription>

          <Aside>
            <section className="photoSection">
              <h6>Fotos</h6>
              <ul className="photoList">
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
                <li className="photoElement">
                  <img src="https://wallpapercave.com/wp/PV1fKeQ.jpg" alt="" />
                </li>
              </ul>
            </section>
            <div></div>
          </Aside>
        </MainContent>
      </Body>
    </>
  );
};
