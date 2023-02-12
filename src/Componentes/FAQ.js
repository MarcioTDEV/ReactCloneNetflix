import React from "react"
import Pergunta from "./Pergunta"

export default function FAQ() {

    return (
        <div className="FAQ">

            <div className="FAQTitulo">
                <h2>Perguntas frequentes</h2>
            </div>

        <div className="FAQPerguntaBox">
            <Pergunta
                titulo="O que é a Netflix?"
                resp1="A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet."
                resp2="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
            />

            <Pergunta
                titulo="Quanto custa a Netflix?"
                resp1="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras."
                />
            <Pergunta
                titulo="O que muda no plano Básico com anúncios?"
                resp1="O plano Básico com anúncios é uma excelente maneira de assistir a séries e filmes por um preço mais baixo. Você pode assistir a seus títulos favoritos em qualquer aparelho e com intervalos limitados para anúncios. Este plano não permite downloads nem contém determinados filmes e séries com restrições de licenciamento. Há também algumas restrições de localização e aparelho. Saiba mais."
                />
            <Pergunta
                titulo="Onde posso assistir?"
                resp1="Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames."
                resp2="Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
                />
            <Pergunta
                titulo="Como faço para cancelar?"
                resp1="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
                />
            <Pergunta
            titulo="O que posso assistir na Netflix?"
            resp1="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
            />
            <Pergunta
            titulo="A Netflix é adequada para crianças?"
            resp1="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis."
            resp2="O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
            />
        </div>
        </div>
    )
}