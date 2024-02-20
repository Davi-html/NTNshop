import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Button } from "../../../components/Button";


export function Contact() {
  return (
    <Container>
        <Header />
        <div className="container">
            <h1>Contact</h1>
        </div>
        <form action="" className="form">
            <label htmlFor="text">Nome completo</label>
            <input type="text" name="text"/>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email"/>
            <label htmlFor="tel">Telefone</label>
            <input type="tel" name="tel"/>
            <label htmlFor="textarea">Mensagem</label>
            <textarea name="textarea" rows="7"></textarea>
            <Button text={'ENVIAR'}/>
        </form>
        <Footer/>
    </Container>
  );
}