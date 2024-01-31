import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";


import microondasMEO44branco34LElectrolux127V from "../../assets/img-slider-produtos2/Micro-ondas MEO44 branco 34L Electrolux 127V.png";
import TvSmartLGLed4k from "../../assets/img-slider-produtos2/Tv Smart LG Led 43 4k .png";


export function SliderDestaque (){
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
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },

      "(max-width: 614px)": {
        slides: { perView: 1 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div>
      <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide slide1">
        <div className="content">
          <div className="content-img">
            <img src={microondasMEO44branco34LElectrolux127V} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Micro-ondas MEO44 branco 34L Electrolux 127V
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 799</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 649</p>
              <p className="porcentagem-preco">18% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 64,90 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="keen-slider__slide slide2">
        <div className="content">
          <div className="content-img">
            <img src={TvSmartLGLed4k} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi…
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 2.915</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 1.807</p>
              <p className="porcentagem-preco">38% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 180,73 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="keen-slider__slide slide3">
      <div className="content">
          <div className="content-img">
            <img src={TvSmartLGLed4k} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi…
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 2.915</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 1.807</p>
              <p className="porcentagem-preco">38% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 180,73 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="keen-slider__slide slide4">
      <div className="content">
          <div className="content-img">
            <img src={TvSmartLGLed4k} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi…
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 2.915</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 1.807</p>
              <p className="porcentagem-preco">38% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 180,73 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="keen-slider__slide slide5">
      <div className="content">
          <div className="content-img">
            <img src={TvSmartLGLed4k} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi…
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 2.915</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 1.807</p>
              <p className="porcentagem-preco">38% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 180,73 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="keen-slider__slide slide6">
      <div className="content">
          <div className="content-img">
            <img src={TvSmartLGLed4k} alt="" />
          </div>
          <div className="content-info">
            <div className="div-info-name">
              <p className="info-name">
                Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi…
              </p>
            </div>
            <div className="div-preco-off">
              <p className="preco-off">R$ 2.915</p>
            </div>
            <div className="div-preco">
              <p className="preco">R$ 1.807</p>
              <p className="porcentagem-preco">38% OFF</p>
            </div>
            <div className="div-juros">
              <p className="juros">
                em <span>10x R$ 180,73 sem juros</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
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
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
