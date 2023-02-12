import React from "react"


export default function Button ({style, conteudo}){
    return (
        <button className={style}>{conteudo}</button>
    )
}