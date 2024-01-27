import { Container } from "./styles";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

export function Page() {
  return (
    <Container>
      <Header />
      <Slider />
      <div className="informative-banners">
        <div className="frete">
          <img src="src/assets/shipping-circle.svg" alt="" />
          <div className="desc-info">
            <h3>Frete Gratís</h3>
            <p>Frete gratuito para todo Brasil!</p>
          </div>
        </div>
        <div className="preco">
          <img src="src/assets/promotions-circle.svg" alt="" />
          <div className="desc-info">
            <h3>Melhores preços</h3>
            <p>
              Economize comprando nossos produtos com até com até 30% de
              desconto!
            </p>
          </div>
        </div>
        <div className="suporte">
          <img src="src/assets/whatsapp-circle.svg" alt="" />
          <div className="desc-info">
            <h3>Precisa de suporte?</h3>
            <p>Obtenha um suporte rápido e eficaz, contate-nos no WhatsApp!</p>
          </div>
        </div>
        <div className="seguranca">
          <img src="src/assets/security-circle.svg" alt="" />
          <div className="desc-info">
            <h3>Segurança em primeiro lugar</h3>
            <p>
              Seus dados são processados com total segurança na hora da compra.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
