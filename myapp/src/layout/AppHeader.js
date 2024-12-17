import "./AppHeader.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./../components/Home.js";
import logo from "./../images/logo.jpg";

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
              <a href="#legends">
                <li>Inicio</li>
              </a>
              <a href="#trainers">
                <li>Equipe</li>
              </a>
              <a href="#plans">
                <li>Planos</li>
              </a>
              <a href="#horarys">
                <li>Horários</li>
              </a>
              <a href="#contacts">
                <li>Contatos</li>
              </a>
            </ul>
          </nav>
        </div>
      </header>

      {/* Definindo as rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default AppHeader;
