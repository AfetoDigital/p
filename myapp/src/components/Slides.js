import React, { useState } from "react";
import "./Slides.css";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";

const images = [photo1, photo2, photo3];

function Slides() {
  // Estado para os índices atuais (esquerda, centro, direita)
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2]);

  // Atualiza os índices com base na direção
  const rotateSlide = (direction) => {
    if (direction === "left") {
      // Rotação para a esquerda: move o último índice para o início
      setCurrentIndices((prev) => [prev[2], prev[0], prev[1]]);
    } else if (direction === "right") {
      // Rotação para a direita: move o primeiro índice para o final
      setCurrentIndices((prev) => [prev[1], prev[2], prev[0]]);
    }
  };

  return (
    <div className="slide-container">
      {/* Imagem da esquerda */}
      <div className="left-image" onClick={() => rotateSlide("left")}>
        <img src={images[currentIndices[0]]} alt="Imagem Esquerda" />
      </div>

      {/* Imagem do centro */}
      <div className="center-image">
        <img src={images[currentIndices[1]]} alt="Imagem Central" />
      </div>

      {/* Imagem da direita */}
      <div className="right-image" onClick={() => rotateSlide("right")}>
        <img src={images[currentIndices[2]]} alt="Imagem Direita" />
      </div>
    </div>
  );
}

export default Slides;
