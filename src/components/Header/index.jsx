import { Container } from './styles'
import logo from '../../assets/NTN-logo.webp'

import { Input } from '../Input'

import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";


export function Header(){
    return (
        <Container>
            <div className="header-promocao">
                <p>TODOS OS PRODUTOS COM 30% OFF</p>
            </div>
            <div className='header'>
                <img src={logo} alt="" />
                
                <div className="div-input">
                    <Input placeholder={'O que você está buscando?'}/>  
                </div>

                <div className="icons-header">
                    <div className="user">
                        <CiUser/>
                        <p>Minha conta</p>
                    </div>
                    <div className="carrinho">
                        <MdOutlineShoppingCart />
                        <p>Meu carrinho</p>
                    </div>
                </div>
            </div>
            <div className='div-nav-header'>
                <hr/>
                <nav>
                    <a href="">Inicio</a>
                    <a href="">Produtos<IoIosArrowDown /></a>
                    <a href="">Contato</a>
                </nav>
            </div>
        </Container>
    )
}