import React from "react"
import "./App.css"
import Header from "./Componentes/Header"
import Main from "./Componentes/Main"
import StoryCard from "./Componentes/StoryCard"
import img01 from "./Assets/storycard01.png"
import img02 from "./Assets/storycard02.png"
import img03 from "./Assets/storycard03.png"
import img04 from "./Assets/storycard04.png"
import FAQ from "./Componentes/FAQ"
import BoxLead from "./Componentes/BoxLead"
import Footer from "./Componentes/Footer"


export default function App() {

  return (
    <>
      <Header />
      <Main />
      <div className="ContainerStoryCard">
      <div className="StoryCardBg">
      <StoryCard
        titulo="Aproveite na TV."
        texto="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        imagem={img01}
      />
      </div>
      <div className="StoryCardBg reverse">
      <StoryCard
      
        titulo="Assista quando quiser."
        texto="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        imagem={img02}
      />
      </div>
      <div className="StoryCardBg">
      <StoryCard
        titulo="Crie perfis para crianças."
        texto="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        imagem={img03}
      />
      </div>
      <div className="StoryCardBg reverse">
      <StoryCard
        titulo="Baixe séries para assistir offline."
        texto="Disponível em todos os planos, exceto no Básico com anúncios."
        imagem={img04}
      />
      </div>
      </div>
      
    <FAQ/>
    <BoxLead/>
      <hr className="separador"></hr>
      <Footer/>
    </>
  )
}