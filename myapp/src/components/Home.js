import AppMain from "./../layout/AppMain.js";
import Container from "./Container.js";
import "./Home.css";
import backgroundIMG from "./../images/background.jpg";

function Home() {
  return (
    <AppMain>
      {/* LEGENDAS */}
      <Container padding="padded-class" background={backgroundIMG}>
        <i id="start" className="br"></i>
        <div className="legends">
          <h1>Supere seus limites, transforme sua vida.</h1>
          <h3>Resultados não mentem. O esforço começa hoje!</h3>
          <h4>Força, foco e lealdade: seu corpo no melhor nível.</h4>
          <a href="#plans">
            <label>CONQUISTE</label>
          </a>
        </div>
      </Container>
    </AppMain>
  );
}

export default Home;
