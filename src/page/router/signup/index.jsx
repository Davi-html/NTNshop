import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <Container>
        <Header />
        <div className="container">
            <div className="routes">
                <p><Link to='/'>Inicio</Link></p>
                <p>&gt;</p>
                <p><Link to='/signin'>Minha Conta</Link></p>
                <p>&gt;</p>
                <p>Cadastre-se</p>
            </div>
            <h1>Iniciar sessão</h1>
            <p>Compre mais rápido e acompanhe seus pedidos em um só lugar!</p>
        </div>
        <form action="" className="form">
            <label htmlFor="text">Nome completo</label>
            <input type="text" name="text" placeholder="ex.: Maria Perez"/>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="ex.: seunome@email.com.br"/>
            <label htmlFor="email">Telefone (opcional)</label>
            <input type="email" name="email" id="email" placeholder="ex.: seunome@email.com.br"/>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha"/>
            <label htmlFor="senha">Confirmar senha</label>
            <input type="password" name="senha" id="senha"/>
            <Button text={'CRIAR UMA CONTA'}/>
            <p className="p-criar-conta">Já possui uma conta? <Link to='/signin' className="criar-conta">iniciar sessão</Link></p>
        </form>
        <Footer/>
    </Container>
  );
}