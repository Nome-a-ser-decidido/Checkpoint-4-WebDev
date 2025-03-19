import React from 'react'
import '../css/produtos.css'

const Produtos = () => {
  return (
    <div className="container">
    <div className="destaque">
      <img src="../src/assets/vasco1-removebg-preview.png" alt="Camisa Vasco" className="img-destaque" />
      <div className="info">
        <p>Camisa do Vasco, confortável e moderna.</p>
        <p className="preco">R$ 129.90</p>
        <button className="comprar">COMPRE JÁ</button>
      </div>
    </div>

    <div className="produtos-grid">
      <div className="produto">
        <img src="../src/assets/vasco22-removebg-preview.png" alt="Camisa Vasco" className="img-produto" />
        <p>Camisa Vasco Dourada</p>
        <p className="preco">R$ 129.90</p>
      </div>
      <div className="produto">
        <img src="../src/assets/vasco3-removebg-preview.png" alt="Camisa Vasco Preta" className="img-produto" />
        <p>Camisa Vasco Oficial</p>
        <p className="preco">R$ 179.00</p>
      </div>
      <div className="produto">
        <img src="../src/assets/vasco4-removebg-preview.png" alt="Camisa Vasco " className="img-produto" />
        <p>Camisa Vasco Preta</p>
        <p className="preco">R$ 129.90</p>
      </div>
    </div>
  </div>
    
  )
}

export default Produtos
