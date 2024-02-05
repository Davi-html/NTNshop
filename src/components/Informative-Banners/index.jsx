import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

// img informative banners

import shipping from "../../assets/img-informative-banners/shipping-circle.svg";
import promotion from "../../assets/img-informative-banners/promotions-circle.svg";
import whatsapp from "../../assets/img-informative-banners/whatsapp-circle.svg";
import security from "../../assets/img-informative-banners/security-circle.svg";

export function InformativeBanners() {
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
            slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
            slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1285px)":{
            slides: { perView: 4, spacing: 5 },
        },
    },
    slides: { perView: 1 },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider" id="info">
          <div className="keen-slider__slide sliderInfo1">
            <div className="frete">
              <img src={shipping} />
              <div className="desc-info">
                <h3>Frete Gratís</h3>
                <p>Frete gratuito para todo Brasil!</p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide sliderInfo2">
            <div className="preco">
              <img src={promotion} />
              <div className="desc-info">
                <h3>Melhores preços</h3>
                <p>
                  Economize comprando nossos produtos com até com até 30% de
                  desconto!
                </p>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide sliderInfo3">
            <div className="suporte">
              <img src={whatsapp} />
              <div className="desc-info">
                <h3>Precisa de suporte?</h3>
                <p>
                  Obtenha um suporte rápido e eficaz, contate-nos no WhatsApp!
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide sliderInfo4">
            <div className="seguranca">
              <img src={security} />
              <div className="desc-info">
                <h3>Segurança em primeiro lugar</h3>
                <p>
                  Seus dados são processados com total segurança na hora da
                  compra.
                </p>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}
