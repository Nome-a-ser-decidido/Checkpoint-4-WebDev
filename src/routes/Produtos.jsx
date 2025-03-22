import React from 'react'
import '../css/produtos.css'
import Image1 from "/src/assets/vasco1-removebg-preview.png";
import Image2 from "/src/assets/vasco22-removebg-preview.png";

const Produtos = () => {
  return (
    <div className="container">
      <div className="intro-text">
        <h2>Confira nossa coleção</h2>
        <p>Se ser Vasco é ser sofrido, que possamos sofrer com estilo!</p>
      </div>
    <div className="destaque">
      <img src={Image1} alt="Camisa Vasco" className="img-destaque" />
      <div className="info">
        <p>Camisa do Vasco, confortável e moderna.</p>
        <p className="preco">R$ 129.90</p>
        <button className="comprar">COMPRE JÁ</button>
      </div>
    </div>

    <h2 className='titulo-central'>Confira nossas outras camisetas</h2>

    <div className="produtos-grid">
      <div className="produto">
        <img src={Image2} alt="Camisa Vasco" className="img-produto" />
        <p>Camisa Vasco Dourada</p>
        <p className="preco">R$ 129.90</p>
      </div>
      <div className="produto">
        <img src="/src/assets/vasco3-removebg-preview.png" alt="Camisa Vasco Preta" className="img-produto" />
        <p>Camisa Vasco Oficial</p>
        <p className="preco">R$ 179.00</p>
      </div>
      <div className="produto">
        <img src="/src/assets/vasco4-removebg-preview.png" alt="Camisa Vasco " className="img-produto" />
        <p>Camisa Vasco Preta</p>
        <p className="preco">R$ 129.90</p>
      </div>
    </div>
  </div>
    
  )
}

export default Produtos
