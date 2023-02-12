import React from "react";

export default function Pergunta ({titulo, resp1, resp2}){

    const[estado, setEstado] = React.useState(false)

    return (
        <>
        <div className="FAQPergunta">

                <h2 className="FAQTituloPergunta">
                    {titulo}
                </h2>

                <span className="FAQTituloBotao"
                onClick={()=>setEstado(!estado)}
                >
                {estado?"x":"+"}
                </span>

            </div>

            {estado && (
                <div className="FAQResposta">
                    
                  <p>  {resp1}</p>
                    {resp2 && (
                        <>
                        <br>
                        </br>
                    <p>    {resp2}</p>
                        </>
                    )}
                </div>
            )}


            </>

    )
    

}