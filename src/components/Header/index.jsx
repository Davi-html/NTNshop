import { Container } from './styles'
import logo from '../../assets/logo.png'

import { Input } from '../Input'

import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown, IoMdMenu, IoIosClose } from "react-icons/io";

import { Link } from "react-router-dom";

export function Header(){

    const openMenu = () => {
        const nav = document.querySelector(".menu-nav");
        const menu = document.querySelector(".menu");
        const menuX = document.querySelector(".menuX")
        
        nav.classList.add('open')
        menu.classList.add('close')
        menuX.classList.add('open')
    }
    const closeMenu = () => {
        const nav = document.querySelector(".menu-nav");
        const menu = document.querySelector(".menu");
        const menuX = document.querySelector(".menuX")
        
        nav.classList.remove('open')
        menu.classList.remove('close')
        menuX.classList.remove('open')
    }

    return (
        <Container>
            <div className="header-promocao">
                <p>📦 <strong>FRETE GRÁTIS</strong> PARA TODO O BRASIL!</p>
            </div>
            <div className='header'>
                <div className='menu'>
                    <IoMdMenu onClick={openMenu}/>
                </div>
                <img src={logo}/>    
                
                    <div className="div-input">
                        <Input placeholder={'O que você está buscando?'}/>  
                    </div>
                    <div className="icons-header">
                        <Link to='/signin'>
                            <div className="user">
                                <CiUser/>
                                <p>Minha conta</p>
                            </div>
                        </Link>
                            <div className="carrinho">
                                <MdOutlineShoppingCart />
                                <p>Meu carrinho</p>
                            </div>
                    </div>
                    <div className="menu-nav">
                        <div className='menuX'>
                            <IoIosClose onClick={closeMenu}/>
                        </div>
                        <Link to='/'>Início</Link>
                        <a id='produto-menu'>Produtos <IoIosArrowDown/></a>
                        <ul className="list-produtos" style={{display: 'none'}}>
                            <li><a href=""><strong>Ver todos os produtos</strong></a></li>
                            <li><a href="">Saúde</a></li>
                            <li><a href="">Eletrodomésticos</a></li>
                            <li><a href="">Games</a></li>
                        </ul>
                        <Link to="contact">Contatos</Link>

                        <div className="login-menu">
                            <CiUser className='user-login-menu'/>
                            <a href=''>Crie uma conta</a>
                            <a href=''>Iniciar sessão</a>
                        </div>
                    </div>
                
            </div>
                <div className="div-input2">
                        <Input placeholder={'O que você está buscando?'}/>  
                </div>
            <div className='div-nav-header'>
                <hr/>
                <nav>
                    <Link to="/">Inicio</Link>
                    <div id='produto'>
                        <a href="">Produtos<IoIosArrowDown /></a>
                        <div className="hover-produto">
                            <div className='a-hover-produto'>
                                <a href="">Celulares</a>
                                <a href="">Cosméticos</a>
                                <a href="">Eletrônicos</a>
                                <a href="">Mobília</a>
                                <a href="">Relógios</a>
                                <a href="">Decoração</a>
                                <a href="">Acessórios</a>
                            </div>
                        </div>
                    </div>
                    <a href="">Contato</a>
                </nav>
            </div>
        </Container>
    )
}
