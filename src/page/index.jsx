import { Container } from "./styles";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Destaque } from "../components/Destaque";

import banner from '../assets/img-slider/slider3.webp'
import ps5 from '../assets/img-cards/ps5.png'

// img Categorias

import eletrodomesticos from "../assets/img-categorias/eletrodomesticos.png";
import games from "../assets/img-categorias/games.png";
import livros from "../assets/img-categorias/livros.png";
import instrumentosMusicais from "../assets/img-categorias/musicais.png";
import relogiosEjoias from "../assets/img-categorias/relogios.png";
import saude from "../assets/img-categorias/saude.png";

import { IoIosArrowForward } from "react-icons/io";
import { Cards } from "../components/Cards";
import { InformativeBanners } from "../components/Informative-Banners";

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
        <h1>Compre nas <span id="titulo-categoria">principais categorias</span></h1>
        <div className="categoria-container">
          <div className="categoria eletronico">
            <img src={eletrodomesticos}/>
            <p>Eletrodomésticos</p>
          </div>
          <div className="categoria eletronico">
            <img src={saude}/>
            <p>Saúde</p>
          </div>
          <div className="categoria eletronico">
            <img src={games}/>
            <p>Games</p>
          </div>
          <div className="categoria eletronico">
            <img src={livros}/>
            <p>Livros</p>
          </div>
          <div className="categoria eletronico">
            <img src={instrumentosMusicais}/>
            <p>Instrumentos Musicais</p>
          </div>
          <div className="categoria eletronico">
            <img src={relogiosEjoias}/>
            <p>Joias e Relógios</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
