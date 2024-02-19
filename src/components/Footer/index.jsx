import { Container } from "./styles";

import logo from '../../assets/logo.png'

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export function Footer(){
    return(
        <Container>
            <div className="sobre-nos">
            <div className="sobre-nos-info">
            <h2>Sobre nós</h2>
            <p>
                Olá, somos da equipe da NTN SHOP, o site foi criado em 28/12/2023,
                Dono da loja: Natan dos Santos Andrade. E sempre estaremos vendendo
                produtos para você e toda a família. Muitos descontos, frete gratís
                e muito mais!!!!
            </p>
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
            <a href="">
                <FaFacebookF />
            </a>
            <a href="">
                <FaInstagram />
            </a>
            <a href="">
                <FaXTwitter />
            </a>
            <a href="">
                <FaYoutube />
            </a>
            </div>
            <img src={logo} />
            <div className="copy">
            <p>Copyright NTN SHOP - 2024. Todos os direitos reservados.</p>
            </div>
        </footer>
        </Container>
    )
}