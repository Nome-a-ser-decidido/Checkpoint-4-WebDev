import React from 'react'
import '../css/sobre.css'
import Image from "/src/assets/Vasco.png"


const Sobre = () => {
  return (
    <section>
      <div class="texto">
        <h1 class="titulovascao">Sobre</h1>
        <div class="text">
          <img class="vascao" src={Image} alt="VascaoDoPeito" />
          <p class="textovascao">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br></br>
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
          </p>
      </div>
      

          
     
      </div>
    </section>
  )
}

export default Sobre
