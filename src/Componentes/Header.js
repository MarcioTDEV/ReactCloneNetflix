export default function Header() {

    return (
        <header className="Header">
            <div className="HeaderContainer">

                <div className="HeaderNovo">
                    <span className="HeaderNovoSpan">NOVO!</span>
                </div>

                <div className="HeaderDescricao">
                    <span className="HeaderDescricaoSpan">
                        Planos a partir de 
                    </span>
                    <span className="HeaderDescricaoSpanDestaque">
                         R$18,90.

                    </span>
                </div>

                <div className="HeaderSaibaMais">
                    <a href="#">
                    Saiba Mais
                    <i className="HeaderSaibaMaisBotao" class="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}