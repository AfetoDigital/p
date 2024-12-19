// CSS AND JS
import "./AppFooter.css";
import Container from "./../components/Container.js";
import { Link as Scroll } from "react-scroll";
import {
  FramesOblong as Frames,
  FrameOblong as Frame,
  FramesImage,
  FrameImage,
  FramesSelect,
  FrameStatus,
  FrameSelect,
} from "./../components/Frames.js";
import LatestYouTubeVideo from "./../components/LatestYouTubeVideo.js";

// ICONS
import { FaFacebook } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWhatsapp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaInstagram } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaArrowUp } from "react-icons/fa"; // Importa um ícone do FontAwesome

// IMAGES
import logo from "./../images/logo.jpg";
import user from "./../images/photo1.jpg";
import background2IMG from "./../images/background2.jpg";
import fighter from "./../images/box.jpg";
import crossfit from "./../images/crossfit.jpg";
import fitdance from "./../images/fitdance.jpg";
import bodybuilding from "./../images/muscle.jpg";
import podcast from "./../images/background4.jpg";

function AppFooter() {
  return (
    <div>
      {/* Treinadores */}
      <Container
        padding="padded-class"
        backgroundColor="rgb(255 255 255 / 13%)"
      >
        <i id="trainers" className="br"></i>
        <div className="containerLegends CLTSC CLSTSC">
          <h1>Equipe</h1>
          <h3>
            Cada membro da equipe é fundamental para o nosso sucesso. Vamos
            crescer, conquistar e alcançar grandes resultados juntos!
          </h3>
        </div>
        <Frames>
          <Frame
            name="Teste"
            image={user}
            whatsapp="123"
            facebook="123"
          ></Frame>
          <Frame name="Teste" image={user} whatsapp="123"></Frame>
          <Frame
            name="Teste"
            image={user}
            whatsapp="123"
            facebook="123"
            instagram="123"
          ></Frame>
        </Frames>
      </Container>

      <Container backgroundColor="rgb(20 20 20)" padding="padded-class">
        <i id="podcast" className="br"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1 style={{ fontFamily: "cursive", margin: "0px" }}>
            Pode+
            <br />
            Chora-
          </h1>
          <h3>Assista ao último vídeo do nosso PodCast</h3>
          <div id="podcastContent">
            <div className="video">
              <LatestYouTubeVideo />
            </div>
            <div className="videoImage">
              <img alt="" src={podcast} />
            </div>
          </div>
        </div>
      </Container>

      {/* MODALIDADES */}
      <Container padding="padded-class" background={background2IMG}>
        <i id="modalities" className="br"></i>
        <FramesImage>
          <FrameImage
            name="Musculação"
            image={bodybuilding}
            description="Cada repetição te leva mais perto dos seus objetivos!"
          />
          <FrameImage
            name="CrossFit"
            image={crossfit}
            description="Supere seus limites, um WOD de cada vez!"
          />
          <FrameImage
            name="Fit Dance"
            image={fitdance}
            description="Dance como se ninguém estivesse olhando e sinta a energia!"
          />
          <FrameImage
            name="Luta"
            image={fighter}
            description="Domine a arte, vença o medo e descubra sua força!s"
          />
        </FramesImage>
      </Container>

      {/* MENSALIDADES */}
      <Container
        padding="padded-class"
        backgroundColor="linear-gradient(90deg, rgb(203, 31, 27) 0%, rgb(232, 95, 94) 100%)"
      >
        <i id="plans" className="br"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1>Plano(s)</h1>
          <h3>
            Escolha o plano que se adapta às suas necessidades e venha fazer
            parte de uma comunidade que está sempre em busca de evolução.
          </h3>
        </div>

        <FramesSelect>
          <FrameSelect name="Mensal" value="69.99">
            <FrameStatus status={1}>Musculação</FrameStatus>
            <FrameStatus status={1}>Cross</FrameStatus>
            <FrameStatus status={0}>Dança</FrameStatus>
            <FrameStatus status={0}>Luta</FrameStatus>
          </FrameSelect>
          <FrameSelect name="Trimestral" value="149.99">
            <FrameStatus status={1}>Musculação</FrameStatus>
            <FrameStatus status={1}>Cross</FrameStatus>
            <FrameStatus status={1}>Dança</FrameStatus>
            <FrameStatus status={0}>Luta</FrameStatus>
          </FrameSelect>
          <FrameSelect name="Semestral" value="199.99">
            <FrameStatus status={1}>Musculação</FrameStatus>
            <FrameStatus status={1}>Cross</FrameStatus>
            <FrameStatus status={1}>Dança</FrameStatus>
            <FrameStatus status={1}>Luta</FrameStatus>
          </FrameSelect>
        </FramesSelect>
      </Container>
      <footer>
        <Scroll to="start" smooth={true} duration={500}>
          <FaArrowUp className="upset" />
        </Scroll>
        <div id="footer">
          <section className="footerFFrame footerFrame">
            <label>Endereço</label>
            <div>
              <div className="logoFooter">
                <img alt="" src={logo} />
              </div>
              R. das Hortências, 384 - Belem Capela, Francisco Morato - SP,
              07991-000
            </div>
          </section>

          <section className="footerSFrame footerFrame">
            <i id="contacts"></i>
            <label>Contatos</label>
            <div className="footerSocialMedia">
              <a href="https://www.facebook.com/Academialealtreinos/?locale=pt_BR">
                <FaFacebook className="facebook icon" />
              </a>
              <a href="https://wa.me/5511987808866">
                <FaWhatsapp className="whatsapp icon" />
              </a>
              <a href="https://www.instagram.com/lealtreinos/">
                <FaInstagram className="instagram icon" />
              </a>
            </div>
          </section>

          <section className="footerTFrame footerFrame">
            <i id="horarys"></i>
            <label>Horários</label>
            <div className="horarys">
              <p>Sabado 07:00 às 12:00</p>
              <p>Segunda-Feira 06:00 às 22:00</p>
              <p>Terça-Feira 06:00 às 22:00</p>
              <p>Quarta-Feira 06:00 às 22:00</p>
              <p>Quinta-Feira 06:00 às 22:00</p>
              <p>Sexta-Feira 06:00 às 22:00</p>
              <p>Domingo Fechado</p>
            </div>
          </section>
        </div>
        <p id="copyright">
          Copyright ©2024 All rights reserved | Website create by StatsHub
        </p>
      </footer>
    </div>
  );
}

export default AppFooter;
