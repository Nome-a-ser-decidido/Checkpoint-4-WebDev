import React from 'react';
import "../css/header.css";
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <img src={Logo} alt="" />
      <div class="produto-sobre">
        <Link to="/produto">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </header>
  )
}

export default Nav
