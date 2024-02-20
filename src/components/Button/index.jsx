import { Container } from "./styles";

export function Button({text}){
    return(
        <Container className="button">
            {text}
        </Container>
    )
}