import { Container } from "./styles";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Destaque } from "../components/Destaque";

import shipping from '../assets/img-informative-banners/shipping-circle.svg'
import promotion from '../assets/img-informative-banners/promotions-circle.svg'
import whatsapp from '../assets/img-informative-banners/whatsapp-circle.svg'
import security from '../assets/img-informative-banners/security-circle.svg'
import banner from '../assets/img-slider/slider3.webp'
import ps5 from '../assets/img-cards/ps5.png'


import { IoIosArrowForward } from "react-icons/io";
import { Cards } from "../components/Cards";

export function Page() {

  return (
    <Container>
      <Header />
      <Slider />
      <div className="informative-banners">
        <div className="frete">
          <img src={shipping}/>
          <div className="desc-info">
            <h3>Frete Gratís</h3>
            <p>Frete gratuito para todo Brasil!</p>
          </div>
        </div>
        <div className="preco">
          <img src={promotion}/>
          <div className="desc-info">
            <h3>Melhores preços</h3>
            <p>
              Economize comprando nossos produtos com até com até 30% de
              desconto!
            </p>
          </div>
        </div>
        <div className="suporte">
          <img src={whatsapp}/>
          <div className="desc-info">
            <h3>Precisa de suporte?</h3>
            <p>Obtenha um suporte rápido e eficaz, contate-nos no WhatsApp!</p>
          </div>
        </div>
        <div className="seguranca">
          <img src={security}/>
          <div className="desc-info">
            <h3>Segurança em primeiro lugar</h3>
            <p>
              Seus dados são processados com total segurança na hora da compra.
            </p>
          </div>
        </div>
      </div>
      <Destaque/>
      <div className="banner">
        <img src={banner} className="img-banner"/>
      
        <div className="content-banner">
          <p>IMPERDIVEL</p>
          <h1>LIQUIDAÇÃO COM ATÉ 30% OFF</h1>

          <a href="">Aproveite <IoIosArrowForward/></a>
        </div>
      </div>
      <div className="div-cards">
        <Cards img={ps5}/>  
        <Cards img={ps5}/>  
        <Cards img={ps5}/>  
        <Cards img={ps5}/>  
      </div>
    </Container>
  );
}
