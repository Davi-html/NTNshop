import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export function Signin() {
  return (
    <Container>
        <Header />
        <div className="container">
            <div className="routes">
                <p><Link to='/'>Inicio</Link></p>
                <p>&gt;</p>
                <p>Minha Conta</p>
                <p>&gt;</p>
                <p>Login</p>
            </div>
            <h1>Iniciar sessão</h1>
        </div>
        <form action="" className="form">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha"/>
            <p id="p-esqueceu-senha"><Link to='' className="esqueceu-senha">Esqueceu a senha?</Link></p>
            <Button text={'INICIAR SESSÃO'}/>
            <p className="p-criar-conta">Não possui uma conta ainda? <Link to='/signup' className="criar-conta">Criar uma conta</Link></p>
        </form>
        <Footer/>
    </Container>
  );
}
