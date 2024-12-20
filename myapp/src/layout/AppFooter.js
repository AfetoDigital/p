// CSS AND JS
import "./AppFooter.css";
import Container from "./../components/Container.js";
import { Content, ContentText, ContentImage } from "./../components/Content.js";
import { Link as Scroll } from "react-scroll";
import { Faq, Response } from "./../components/Faq.js";
import {
  FramesHorizontal as Frames,
  FrameHorizontal as Frame,
  FramesSelect,
  FrameStatus,
  FrameSelect,
  HorizontalFront,
  HorizontalBack,
} from "./../components/Frames.js";

// ICONS
import { FaFacebook } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWhatsapp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaInstagram } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaArrowUp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaBalanceScale } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWeightHanging } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaBed } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaHeart } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaToilet } from "react-icons/fa"; // Importa um ícone do FontAwesome

// IMAGES
import logo from "./../images/logo.jpg";
import photo from "./../images/photo12.jpg";

import emagrecimento from "./../images/emagrecimento.jpg";
import menopausa from "./../images/menopausa.jpg";
import obesidade from "./../images/balanca.jpg";
import sono from "./../images/sono.jpg";
import intestino from "./../images/intestino.jpg";

function AppFooter() {
  return (
    <div>
      {/* Especialidades */}
      <Container padding="padded-class" backgroundColor="rgb(255 255 255)">
        <i id="especialidades" className="br"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1>Especialidades</h1>
        </div>
        <Frames>
          <Frame image={emagrecimento}>
            <HorizontalFront title="Emagrecimento">
              <FaBalanceScale className="horizontalIcon" />
            </HorizontalFront>
            <HorizontalBack>
              Mude já a sua composição corporal através de um plano fácil e
              prático feito pra você de acordo com a sua rotina. Ganhar músculos
              e perder gordura nunca foi tão fácil!
            </HorizontalBack>
          </Frame>
          <Frame image={menopausa}>
            <HorizontalFront title="SOP, endometriose e menopausa">
              <FaWeightHanging className="horizontalIcon" />
            </HorizontalFront>
            <HorizontalBack>
              Cuidamos da sua saúde de forma estratégica e prática, te fazendo
              alcançar qualidade de vida máxima e regulando seus hormônios
              através de estratégias nutricionais personalizadas para cada caso!
              Vem viver uma nutrição descomplicada e se livrar de dores,
              inchaços e hormônios!
            </HorizontalBack>
          </Frame>
          <Frame image={obesidade}>
            <HorizontalFront title="Obesidade, diabetes, e hipertensão">
              <FaHeart className="horizontalIcon" />
            </HorizontalFront>
            <HorizontalBack>
              Tratamos doenças crônicas através de uma rotina nutricional
              alinhada, planejamento fácil para o seu dia a dia com o objetivo
              de te fazer se livrar de medicamentos e alcançar qualidade de vida
              com bons resultados físicos, bioquímicos e estéticos!
            </HorizontalBack>
          </Frame>
          <Frame image={sono}>
            <HorizontalFront title="Disturbios de sono e libido">
              <FaBed className="horizontalIcon" />
            </HorizontalFront>
            <HorizontalBack>
              Através de uma nutrição personalizada melhoramos sua qualidade de
              vida em todos os aspectos! Alinhamos estratégias nutricionais com
              suplementação estratégica para te levar para a melhor qualidade de
              vida que você possa ter!
            </HorizontalBack>
          </Frame>
          <Frame image={intestino}>
            <HorizontalFront title="Tratamento intestinal e alergias">
              <FaToilet className="horizontalIcon" />
            </HorizontalFront>
            <HorizontalBack>
              Existem estratégias nutricionais específicas para cuidar do seu
              intestino! Desinflamamos o seu intestino e conseguimos bons
              resultados em 15 dias de acompanhamento! Se você não aguenta mais
              estufamentos, gases, dores, inchaço abdominal, constipação ou
              diarreias, vem comigo que eu te ajudo!
            </HorizontalBack>
          </Frame>
        </Frames>
      </Container>

      {/* ABOUT */}
      <Container
        padding="padded-class"
        effect={1}
        backgroundColor="var(--third-color)"
      >
        <i id="about" className="br"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1>Quem é X?</h1>
        </div>

        <Content direction="left" model={2}>
          <ContentText
            title=""
            subtitle=""
            button="Quero agendar minha consulta"
            model={2}
          >
            Especialista em nutrição clínica e esportiva, treinadora de
            comportamento alimentar e pós-graduada em nutrição esportiva e com
            mais de 5 anos de atuação no mercado.
            <br />
            <br />
            Desde muito cedo, por influência da família, sempre procurei me
            alimentar bem, praticar exercícios físicos e cuidar da minha saúde,
            o que se tornou uma paixão por ajudar outras pessoas a transformar
            suas vidas através da mudança de hábito e com a estratégia
            nutricional que atende cada um de forma individualizada.
            <br />
            <br />
            Eu acredito em uma nutrição cheia de possibilidades.
            <br />
            <br />
            Nunca vai ser o fim, sempre é o começo de uma nova oportunidade para
            mudar!
            <br />
            <br />
            Meu propósito é te levar para o próximo nível na sua mente, no seu
            corpo e nos teus hábitos
            <br />
            <br />
            Eu prego e vivo isso.
          </ContentText>
          <ContentImage image={photo} model={2} />
        </Content>
      </Container>

      {/* MENSALIDADES */}
      <Container padding="padded-class" backgroundColor="rgb(255, 255, 255)">
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

      <Container padding="padded-class" backgroundColor="rgb(255, 255, 255)">
        <i id="asks" className="br"></i>
        <div className="containerLegends CLTFC CLSTFC">
          <h1>FAQ</h1>
          <Faq>
            <Response ask="Aceita Plano de saúde?">
              Não aceito plano de saúde, consulta apenas particular.
            </Response>
            <Response ask="De quanto em quanto tempo precisa fazer a consulta?">
              O ideal seria em torno de 45-60 dias, depende do objetivo do
              paciente.
            </Response>
            <Response ask="Quanto tempo recebo o plano alimentar?">
              A dieta é entregue na hora.
            </Response>
            <Response ask="Você pede exames bioquímicos na consulta?">
              Sim, será solicitado exames.
            </Response>
            <Response ask="Está incluso consulta de retorno?">
              As consultas incluem um acompanhamento pós até a próxima consulta.
              Todas as consultas são feitos novo protocolo dietético, novas
              estratégias e tudo novamente, logo, cada consulta tem o seu valor.
            </Response>
          </Faq>
        </div>
      </Container>
      <Container padding="padded-class" backgroundColor="rgb(255, 255, 255)">
        <i id="localizacao" className="br"></i>
        <div className="clinicNutrition CLTFC CLSTFC">
          <h1>Clínica Nutritiva Gabriela Passos</h1>
          <h3>
            Av. Senador Virgílio Távora, 1500 - Aldeota, Fortaleza - CE,
            60170-078, Brasil (Sala: 306)
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.8328750819087!2d-38.494215!3d-3.7389640000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7488614aeb5f1%3A0xf1bcf4e84d71bba4!2sAv.%20Senador%20Virg%C3%ADlio%20T%C3%A1vora%2C%201500%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060170-078%2C%20Brazil!5e0!3m2!1sen!2sus!4v1734705931956!5m2!1sen!2sus"
            width="50%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
