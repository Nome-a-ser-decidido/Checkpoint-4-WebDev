import React from 'react'
import '../css/home.css'
import Image from "/src/assets/home_image.png";

const Home = () => {
  return (
    <section>
      <h1 class="text">Preços Rebaixados, você só encontra aqui!</h1>
      <img src={Image} alt="" id='home-image'/>
      <p class="text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis libero velit, sed tempus massa tincidunt eget. Duis ac volutpat quam. Quisque eget volutpat mi. Cras posuere, diam quis ultrices luctus, nibh sem gravida lacus, sed sollicitudin nulla sapien vel sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus fermentum enim eu commodo tincidunt. Aliquam semper, metus quis gravida luctus, nulla lorem posuere nunc, quis feugiat lectus augue quis metus. Morbi at malesuada lorem, sit amet vehicula libero. Etiam elementum nulla nec leo pulvinar iaculis vitae sed justo. Proin porta sapien urna, a vestibulum mi aliquet a. Donec id dui quis lacus vehicula pretium at ac turpis. Sed vel mollis mauris. Donec viverra sem consectetur mi luctus lacinia. Sed magna urna, dapibus quis nunc vitae, elementum scelerisque nulla. Aenean pulvinar purus vel purus dictum gravida.
Cras id odio odio. </p>
    </section>
  )
}

export default Home
