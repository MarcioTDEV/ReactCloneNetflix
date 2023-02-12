import React from "react";


export default function BoxLead() {

    return (
        <div className="BoxLead">
            <h2 className="BoxLeadTitulo">
                Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
            </h2>

<div className="GroupBox">
            <input type="email"
                placeholder="Email"
                className="BoxLeadInput"
            />
            <div className="BoxLeaeBotaoDiv">
            <button
                className="BoxLeadBotao"
            >
                Vamos Lá &gt;
            </button>
            </div>
        </div>
        </div>
    )
}