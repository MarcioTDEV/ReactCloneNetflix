import React from "react"
import Button from "./Button"
import logo from "../Assets/netflix-logo-5.png"
import iconWolrd from "../Assets/icon-world.png"
import iconArrow from "../Assets/arrowdown.png"

export default function Main (){
    const [idioma, setIdioma] = React.useState("Português")
    const [dropIdiomas, setDropIdiomas] = React.useState(false)

    function handleclick (){
        setDropIdiomas(!dropIdiomas)
    }
    function optionIdiomaHandleClick (e){
        setIdioma(e)
        setDropIdiomas(!dropIdiomas)
    }

    return (

        // box que engloba toda área principal do site
        
        <main className="Main">
            <div className="transparent-container">
            
            <div className="MainHeader">

                <div className="MainHeaderLogo">
                    <img src={logo} />
                </div>

                <div className="MainHeaderBotoes">

                    <div className="idioma" onClick={handleclick}>

                        <div className="idiomaDisplay">
                            <div className="group">
                            <img className="iconIdiomaWorld" src={iconWolrd}/>
                            <span className="iconIdiomaText"> {idioma} </span>
                            </div>


                            <img className="iconIdiomaArrow" src={iconArrow}/>
                            </div>



                           {dropIdiomas && (
                             <div className="idiomaOptions">

                             <span 
                             className="idiomaOption1"
                             onClick={()=>optionIdiomaHandleClick("Português")}
                             >
                                Português
                                
                            </span>

                             <span className="idiomaOption2"
                             onClick={()=>optionIdiomaHandleClick("English")}
                             >English</span>
                         </div>
                           )}

                        </div> 
                        
                       
                    <Button conteudo="Entrar" style="padrao MainHeaderBotaoEntrar"/>
                </div>


            </div>


            <div className="MainPrincipal">
                <div className="MainPrincipalBox">
                <h1 className="MainPrincipalH1">Filmes, séries e muito mais. Sem limites.</h1>
                <h2 className="MainPrincipalH2">Assista onde quiser. Cancele quando quiser.</h2>
                <h3 className="MainPrincipalh3">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>

                <input type="text" className="MainPrincipalInput" placeholder="Email"></input>

                <Button conteudo="Vamos lá &gt;"           
 style="MainPrincipalBotao"/>
            </div>
            </div>

            </div>

        </main>
    )
}