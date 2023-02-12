import React from "react";
import Button from "./Button"
import logo from "../Assets/netflix-logo-5.png"
import iconWolrd from "../Assets/icon-world.png"
import iconArrow from "../Assets/arrowdown.png"

export default function Footer() {

    const [idioma, setIdioma] = React.useState("Português")
    const [options, setOptions] = React.useState(false)


    function handleClick (){
        setOptions(!options)
    }

    return (
        <footer className="Footer">
            <h2 className="FooterTitulo">
                Dúvidas? Ligue 0800 591 8942
            </h2>

            <div className="FooterLinks">
                <ul className="FooterLinksUl">

                    <li className="FooterLinksLi">
                        <a href="#">Perguntas Frequentes</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Media Center</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Resgatar cartão pré pago</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Termos de Uso</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Informações corporativas</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Avisos legais</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Central de Ajuda</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Relações com investidores</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Comprar cartão pré pago</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Privacidade</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Entre em contato</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Só na Netflix</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Conta</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Carreiras</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Formas de assistir</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Preferências de cookies</a>
                    </li>

                    <li className="FooterLinksLi">
                        <a href="#">Teste de velocidade</a>
                    </li>

                </ul>
            </div>

            <div className="AreaBotaoFooter">

                
                    <div className="BotaoFooter" onClick={handleClick}>
                        <img className="BotaoFooterIconWorld" src={iconWolrd} alt="icone"></img>
                        <h2 className="BotaoFooterTitulo"> {idioma} </h2>
                        <img className="BotaoFooterIcoArrow" src={iconArrow} alt="icone"></img>

                    </div>

                    {options &&(
                        <div className="OpcoesBotaoFooter">
                        <span className="OpcaoFooter">Português</span>
                        <span className="OpcaoFooter">English</span>
                    </div>
                    )}

                
            </div>

            <a href="" className="Netflix">Netflix Brasil</a>
        </footer>
    )
}