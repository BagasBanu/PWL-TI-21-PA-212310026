import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <p>Atendimento</p>
        <p>Contato: mimospet@exapmle.com</p>
      </div>
      <div className="social">
        <p>Redes Sociais</p>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <div className="policy">
        <p>Política de Privacidade</p>
        <p>Política de Entrega e Devolução</p>
        <p>Política de Compra</p>
      </div>
    </footer>
  );
}

export default Footer;
