import { Container } from "./styles";

export function Cards({img}){
    return(
        <Container>
            <div className="div-pai">
                <div className="content-card">
                    <p>DIVERSÃO GARANTIDA</p>
                    <h1>O MELHOR DO MUNDO GAMER</h1>
                    <a href="">Ver Mais</a>
                </div>
                <div className="img">
                    <img src={img}/>
                </div>  
            </div>
        </Container>
    )
}