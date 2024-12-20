import AppMain from "./../layout/AppMain.js";
import Container from "./Container.js";
import "./Home.css";
import backgroundIMG from "./../images/background.jpg";
import photo from "./../images/photo1.jpg";
import { Content, ContentText, ContentImage } from "./Content.js";

function Home() {
  return (
    <AppMain>
      {/* LEGENDAS */}
      <Container padding="padded-class" background={backgroundIMG} effect={1}>
        <i id="start" className="br"></i>
        <Content direction="left">
          <ContentText
            title=""
            subtitle="Transforme Seu Corpo, Mente e Hábitos com Gabi Passos, Nutricionista Clínica e esportiva e Treinadora de Comportamento Alimentar"
            description="Está cansada de dietas que não funcionam e soluções temporárias que não trazem resultados definitivos?

Aqui você encontrará uma nutrição inteligente, personalizada e uma transformação completa para o corpo, mente e hábitos.

Eu serei o seu GPS nessa jornada!"
            button="Quero agendar minha consulta"
          />
          <ContentImage image={photo} />
        </Content>
      </Container>
    </AppMain>
  );
}

export default Home;
