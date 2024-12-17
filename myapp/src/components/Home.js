import AppMain from "./../layout/AppMain.js";
import Container from "./Container.js";
import frameIMG from "./../images/frame.png";
import photo1 from "./../images/photo1.jpg";
import backgroundIMG from "./../images/background.jpg";
import background2IMG from "./../images/background2.jpg";
import "./Home.css";
import { FaFacebook } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWhatsapp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaInstagram } from "react-icons/fa"; // Importa um ícone do FontAwesome
import fighter from "./../images/box.jpg";
import crossfit from "./../images/crossfit.jpg";
import fitdance from "./../images/fitdance.jpg";
import bodybuilding from "./../images/muscle.jpg";

function Home() {
  return (
    <AppMain>
      {/* LEGENDAS */}
      <Container padding="padded-class" background={backgroundIMG}>
        <i id="legends"></i>
        <div className="legends">
          <h1>Supere seus limites, transforme sua vida.</h1>
          <h3>Resultados não mentem. O esforço começa hoje!</h3>
          <h4>Força, foco e lealdade: seu corpo no melhor nível.</h4>
          <a href="#plans">
            <label>CONQUISTE</label>
          </a>
        </div>
      </Container>

      {/* Treinadores */}
      <Container
        padding="padded-class"
        backgroundColor="rgb(255 255 255 / 13%)"
      >
        <i id="trainers"></i>
        <div className="containerLegends CLTSC CLSTSC">
          <h1>Teste</h1>
          <h3>Nossos valores exclusivos</h3>
        </div>
        <div id="frames">
          <div className="frame">
            <img alt="" src={frameIMG} />
            <img alt="" src={photo1} />
            <div className="frameInfo">
              <label className="name">Nome do Indíviduo</label>
              <label className="position">Função</label>
              <div className="socialMedia">
                <a href="https://www.facebook.com" target="on_blank">
                  <FaFacebook className="facebook icon" />
                </a>
                <a href="https://wa.me/??">
                  <FaWhatsapp className="whatsapp icon" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="instagram icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="frame">
            <img alt="" src={frameIMG} />
            <img alt="" src={photo1} />
            <div className="frameInfo">
              <label className="name">Nome do Indíviduo</label>
              <label className="position">Função</label>
              <div className="socialMedia">
                <a href="https://www.facebook.com" target="on_blank">
                  <FaFacebook className="facebook icon" />
                </a>
                <a href="https://wa.me/??">
                  <FaWhatsapp className="whatsapp icon" />
                </a>
                <a href="https://www.instagram.com">
                  <FaInstagram className="instagram icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* MODALIDADES */}
      <Container padding="padded-class" background={background2IMG}>
        <div className="modalities">
          <div className="modality">
            <img alt="" src={fighter} />
            <div className="modalityInfo">
              <h1>CrossFit</h1>
              <h4>Bla bla bla</h4>
            </div>
          </div>
          <div className="modality">
            <img alt="" src={crossfit} />
            <div className="modalityInfo">
              <h1>CrossFit</h1>
              <h4>Bla bla bla</h4>
            </div>
          </div>
          <div className="modality">
            <img alt="" src={fitdance} />
            <div className="modalityInfo">
              <h1>CrossFit</h1>
              <h4>Bla bla bla</h4>
            </div>
          </div>
          <div className="modality">
            <img alt="" src={bodybuilding} />
            <div className="modalityInfo">
              <h1>CrossFit</h1>
              <h4>Bla bla bla</h4>
            </div>
          </div>
        </div>
      </Container>
      {/* MENSALIDADES */}
      <Container
        padding="padded-class"
        backgroundColor="linear-gradient(90deg, rgb(203, 31, 27) 0%, rgb(232, 95, 94) 100%)"
      >
        <i id="plans"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1>Teste</h1>
          <h3>Nossos valores exclusivos</h3>
        </div>
        <div id="plans">
          <div className="plan">
            <h2>Plano 1</h2>
            <h3>$50.00</h3>
            <hr></hr>
            <ul>
              <li className="active">Plano 1</li>
              <li className="active">Plano 2</li>
              <li className="active">Plano 3</li>
              <li className="desactived">Plano 4</li>
            </ul>
            <label>Aplicar</label>
          </div>
          <div className="plan">
            <h2>Plano 1</h2>
            <h3>$50.00</h3>
            <hr></hr>
            <ul>
              <li className="active">Plano 1</li>
              <li className="active">Plano 2</li>
              <li className="active">Plano 3</li>
              <li className="desactived">Plano 4</li>
            </ul>
            <label>Aplicar</label>
          </div>
          <div className="plan">
            <h2>Plano 1</h2>
            <h3>$50.00</h3>
            <hr></hr>
            <ul>
              <li className="active">Plano 1</li>
              <li className="active">Plano 2</li>
              <li className="active">Plano 3</li>
              <li className="desactived">Plano 4</li>
            </ul>
            <label>Aplicar</label>
          </div>
        </div>
      </Container>
    </AppMain>
  );
}

export default Home;
