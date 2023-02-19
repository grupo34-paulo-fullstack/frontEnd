import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { AnnouncementsAnnouncerPageStyle } from "./style";
import announcer from "../../assets/announcer_sl.png";
import { Button } from "../../components/Button";

export const AnnouncementAnnouncerPage = () => (
  <>
    <Header />
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

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <Button background="#FDFDFD" background_hover="#EDEAFD" outline_color="#4529E6" color="#4529E6" children="Criar anúncio" />
        </div>

        <div className="content-announcements">
          <h3>Leilão</h3>

          <ul>
            <li>Card</li>
            <li>Card</li>
          </ul>


        </div>
      </div>
    </AnnouncementsAnnouncerPageStyle>
    <Footer />
  </>
);