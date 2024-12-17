import "./AppFooter.css";
import { FaFacebook } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWhatsapp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaInstagram } from "react-icons/fa"; // Importa um ícone do FontAwesome
import logo from "./../images/logo.jpg";

function AppFooter() {
  return (
    <footer>
      <div id="footer">
        <section className="footerFFrame footerFrame">
          <label>Endereço</label>
          <div>
            <div className="logoFooter">
              <img alt="" src={logo} />
            </div>
            Av. Arcilio Federzoni, 229, Jardim Silvia Francisco Morato/SP
          </div>
        </section>

        <section className="footerSFrame footerFrame">
        <i id="contacts"></i>
          <label>Contatos</label>
          <div className="footerSocialMedia">
            <FaFacebook className="facebook icon" />
            <FaWhatsapp className="whatsapp icon" />
            <FaInstagram className="instagram icon" />
          </div>
        </section>

        <section className="footerTFrame footerFrame">
          <i id="horarys"></i>
          <label>Horários</label>
          <div className="horarys">
            <p>Sabado 06:00 às 12:00</p>
            <p>Segunda-Feira 06:00 às 22:00</p>
            <p>Terça-Feira 06:00 às 22:00</p>
            <p>Quarta-Feira 06:00 às 22:00</p>
            <p>Quinta-Feira 06:00 às 22:00</p>
            <p>Sexta-Feira 06:00 às 22:00</p>
            <p>Domingo Fechado</p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default AppFooter;
