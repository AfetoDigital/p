import "./AppHeader.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Home from "./../components/Home.js";
import logo from "./../images/logo.jpg";
import { HashLink } from "react-router-hash-link";

function AppHeader() {
  document.addEventListener("scroll", function () {
    const headerID = document.querySelector("#header"); // Certifique-se de que existe um ID "header" no HTML
    const header = document.querySelector("header"); // Certifique-se de que existe um ID "header" no HTML

    if (window.scrollY > 20) {
      headerID.classList.add("HID"); // Adiciona a classe "scrolled"
      header.classList.add("HE"); // Adiciona a classe "scrolled"
    } else {
      headerID.classList.remove("HID"); // Remove a classe "scrolled"
      header.classList.remove("HE"); // Remove a classe "scrolled"
    }
  });

  return (
    <Router>
      <header>
        <div id="header">
          <div className="logo">
            <img alt="" src={logo} />
          </div>
          <nav id="menu">
            <ul>
              <HashLink smooth to="/#start">
                <li>Inicio</li>
              </HashLink>
              <Scroll to="especialidades" smooth={true} duration={500}>
                <li>Especialidades</li>
              </Scroll>
              <Scroll to="about" smooth={true} duration={500}>
                <li>Quem sou?</li>
              </Scroll>
              <Scroll to="plans" smooth={true} duration={500}>
                <li>Planos</li>
              </Scroll>
              <Scroll to="asks" smooth={true} duration={500}>
                <li>Perguntas Frequentes</li>
              </Scroll>
              <Scroll to="localizacao" smooth={true} duration={500}>
                <li>Localização</li>
              </Scroll>
              <Scroll to="contacts" smooth={true} duration={500}>
                <li>Contatos</li>
              </Scroll>
            </ul>
          </nav>
        </div>
      </header>

      {/* Definindo as rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppHeader;
