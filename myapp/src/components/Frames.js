import './Frames.css';
import squareFrameIMG from "./../images/frameAthelets.png";
import { FaFacebook } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaWhatsapp } from "react-icons/fa"; // Importa um ícone do FontAwesome
import { FaInstagram } from "react-icons/fa"; // Importa um ícone do FontAwesome
import oblongFrameIMG from "./../images/frame.png";

function FramesSquare({ children }) {
  return <div id="squareFrames">{children}</div>;
}

function FrameSquare({ name, image, facebook, whatsapp, instagram }) {
  return (
    <div className="square">
      <img alt="" src={squareFrameIMG} />
      <img alt="" src={image} />
      <div className="squareInfo">
        <label>{name}</label>
        <div className="socialMedia">
          {facebook && (
            <a href={`https://www.facebook.com/${facebook}`} target="_blank"  rel="noopener noreferrer">
              <FaFacebook className="facebook icon" />
            </a>
          )}
          {whatsapp && (
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp icon" />
            </a>
          )}
          {instagram && (
            <a href={`https://www.instagram.com${instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="instagram icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function FramesOblong({ children }) {
  return <div id="oblongFrames">{children}</div>;
}

function FrameOblong({ name, image, facebook, whatsapp, instagram }) {
  return (
    <div className="oblong">
      <img alt="" src={oblongFrameIMG} />
      <img alt="" src={image} />
      <div className="oblongInfo">
        <label className="name">Nome do Indíviduo</label>
        <label className="position">Função</label>
        <div className="socialMedia">
          {facebook && (
            <a href={`https://www.facebook.com/${facebook}`} target="_blank" rel="noopener noreferrer">
              <FaFacebook className="facebook icon" />
            </a>
          )}
          {whatsapp && (
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp icon" />
            </a>
          )}
          {instagram && (
            <a href={`https://www.instagram.com${instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram className="instagram icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function FramesImage({ children }) {
  return <div className="framesImage">{children}</div>;
}

function FrameImage({ name, image, description }) {
  return (
    <div className="frameImage">
      <img alt="" src={image} />
      <div className="frameImageInfo">
        <h1>{name}</h1>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

function FramesSelect({ children }) {
  return <div id="framesSelect">{children}</div>;
}

function FrameStatus({ status, children }) {
  return <li className={status === 1 ? "active" : "desactived"}>{children}</li>;
}

function FrameSelect({ name, value, children }) {
  return (
    <div className="frameSelect">
      <h2>{name}</h2>
      <h3>R$ {value}</h3>
      <hr></hr>
      <ul>{children}</ul>
      <a
        href={`https://wa.me/5511994489463?text=Olá, LealTreinos! Estou interessado no plano ${name} que custa ${value}. Poderiam me passar mais informações sobre ele? Obrigado!`}
      >
        <label>Aplicar</label>
      </a>
    </div>
  );
}

export {
  FramesSquare,
  FrameSquare,
  FramesOblong,
  FrameOblong,
  FramesImage,
  FrameImage,
  FramesSelect,
  FrameSelect,
  FrameStatus,
};
