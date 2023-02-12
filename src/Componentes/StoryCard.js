export default function StoryCard ({imagem, titulo, texto}){

    return (
        <div className="StoryCard">
            <div className="StoryCardBoxImg">
                <img src={imagem} alt="imagem story card"/>
            </div>
            <div className="StoryCardBoxTexto">
            <h2>{titulo}</h2>
            <h3>{texto}</h3>

            </div>
            
        </div>
    )
}