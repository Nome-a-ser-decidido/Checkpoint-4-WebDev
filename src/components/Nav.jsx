import React from 'react';
import "../css/header.css";
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to="/" class='tlink'>
      <img src={Logo} alt="Logo" />
      </Link>
      <div class="produto-sobre">
      <Link to="/" class='tlink'>Home</Link>
        <Link to="/produto" class='tlink'>Produtos</Link>
        <Link to="/sobre" class='tlink'>Sobre</Link>
      </div>
    </header>
  )
}

export default Nav
