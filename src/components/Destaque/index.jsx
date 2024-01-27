import { Container } from "./styles";

import phoneOfertaDoDia from '../../assets/phone.png'

export function Destaque(){
    return(
        <Container>
            <h1>Destaques</h1>
            <div className="container">
                <div className="oferta-do-dia1">
                    <h3>Ofertas do dia</h3>
                    <div className="content">
                        <div className="content-img">
                            <img src={phoneOfertaDoDia} alt="" />    
                        </div>
                        <div className="content-info">
                            <div className="div-info-name">
                                <p className="info-name">
                                    Smartphone Samsung Galaxy A04e 64gb Preto 3gb Ram
                                </p>
                            </div>
                            <div className="div-preco-off">
                                <p className="preco-off">R$ 1.099</p>
                            </div>
                            <div className="div-preco">
                                <p className="preco">R$ 589</p>
                                <p className="porcentagem-preco">46% OFF</p>
                            </div>
                            <div className="div-juros">
                                <p className="juros">em <span>10x R$ 58,90 sem juros</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="oferta-do-dia2">
                    
                </div>
            </div>
        </Container>
    )
}