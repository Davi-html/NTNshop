import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

// img Categorias

import eletrodomesticos from "../../assets/img-categorias/eletrodomesticos.png";
import games from "../../assets/img-categorias/games.png";
import livros from "../../assets/img-categorias/livros.png";
import instrumentosMusicais from "../../assets/img-categorias/musicais.png";
// import relogiosEjoias from "../assets/img-categorias/relogios.png";
// import saude from "../assets/img-categorias/saude.png";

export function Categoria() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 576px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1285px)": {
        slides: { perView: 4, spacing: 5 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div className="titulo">
          <h2>Categorias</h2>
          <a href="">Mostrar todas as categorias</a>

          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
        <div ref={sliderRef} className="keen-slider" id="categoria">
          <div className="keen-slider__slide categoria1">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria2">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria3">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
          <div className="keen-slider__slide categoria4">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider" id="categoria">
          <div className="keen-slider__slide categoria1">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria2">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria3">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
          <div className="keen-slider__slide categoria4">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider" id="categoria">
          <div className="keen-slider__slide categoria1">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria2">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>

          <div className="keen-slider__slide categoria3">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
          <div className="keen-slider__slide categoria4">
            <div className="categoria-img">
              <img src={eletrodomesticos} />
            </div>
            <div className="content">
              <a href="">Eletrodomesticos</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
