import { Container } from "./styles";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Destaque } from "../components/Destaque";
import { Input } from "../components/Input";

import banner from '../assets/img-slider/slider3.webp'
import ps5 from '../assets/img-cards/ps5.png'

import logo from '../assets/logo.png'

import { IoIosArrowForward } from "react-icons/io";
import { Cards } from "../components/Cards";
import { InformativeBanners } from "../components/Informative-Banners";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Categoria } from "../components/SliderCategoria";


export function Page() {

  return (
    <Container>
      <Header />
      <Slider />
      <InformativeBanners/>
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

      <div className="div-categoria">
        <Categoria/>
      </div>

      <div className="oferta">
        <p id="nome-loja">NEWSLETTER</p>
        <h1>Receba detalhes do seu pedido</h1>
        <p>Quer receber nossas ofertas? Cadastre-se e comece a recebê-las!</p>
        <div className="div-input2">
          <Input placeholder={"E-mail"} Icon={<FaArrowRightLong/>}/>
        </div>
      </div>
      <div className="sobre-nos">
        <div className="sobre-nos-info">
          <h2>Sobre nós</h2>
          <p>Olá, somos da equipe da NTN SHOP, o site foi criado em 28/12/2023, 
          Dono da loja: Natan dos Santos Andrade. E sempre estaremos vendendo produtos para você
          e toda a família. Muitos descontos, frete gratís e muito mais!!!!</p>
        </div>

        <div className="link-sobre-nos">
          <a href="">Início</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </div>
      </div>

      <footer>
        <h3>Siga-nos nas redes!</h3>
        <div className="social-link">
          <a href=""><FaFacebookF/></a>
          <a href=""><FaInstagram/></a>
          <a href=""><FaXTwitter/></a>
          <a href=""><FaYoutube/></a>
        </div>
        <img src={logo}/>
        <div className="copy">
          <p>Copyright NTN SHOP - 2024. Todos os direitos reservados.</p>
        </div>
      </footer>
    </Container>
  );
}
