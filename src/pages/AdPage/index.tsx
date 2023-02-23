import { Header } from "../../components/Header";

import {
  MainContent,
  Body,
  Aside,
  BoxImgCarInfoDescription,
  CarSection,
  Comments,
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
            <section className="description">
              <h6>Descrição</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </section>

            <Comments>
              <h6>Comentários</h6>

              <ul className="commentList">
                <li className="listElement">
                  <div className="userInfo">
                    <span className="userBall">LS</span>{" "}
                    <p className="name"> Luís Santos</p>{" "}
                    <div className="userDot"></div>{" "}
                    <span className="postedDate">há 3 dias</span>{" "}
                  </div>
                  <p className="userComment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li className="listElement">
                  <div className="userInfo">
                    <span className="userBall">LS</span>{" "}
                    <p className="name"> Luís Santos</p>{" "}
                    <div className="userDot"></div>{" "}
                    <span className="postedDate">há 3 dias</span>{" "}
                  </div>
                  <p className="userComment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li className="listElement">
                  <div className="userInfo">
                    <span className="userBall">LS</span>{" "}
                    <p className="name"> Luís Santos</p>{" "}
                    <div className="userDot"></div>{" "}
                    <span className="postedDate">há 3 dias</span>{" "}
                  </div>
                  <p className="userComment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
                <li className="listElement">
                  <div className="userInfo">
                    <span className="userBall">LS</span>{" "}
                    <p className="name"> Luís Santos</p>{" "}
                    <div className="userDot"></div>{" "}
                    <span className="postedDate">há 3 dias</span>{" "}
                  </div>
                  <p className="userComment">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
              </ul>
            </Comments>
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
            <section className="userSection">
              <div className="userTag">SL</div>
              <span className="userName">Samuel Leão</span>
              <p className="userDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <button className="userAds">Ver todos anúncios</button>
            </section>
          </Aside>
        </MainContent>
      </Body>
    </>
  );
};
