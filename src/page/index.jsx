import { Container } from './styles'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

export function Page(){
    return(
        <Container>
            <Header/>
            <Slider/>
        </Container>
    )
}