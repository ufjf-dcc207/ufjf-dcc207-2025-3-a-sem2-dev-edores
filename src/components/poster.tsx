import "./poster.css"
interface PosterProps {
    texto: string;
    imagem: string;
}

function Poster({ texto, imagem }: PosterProps) {

    return (
        <div className='poster'>
            <img src={imagem} alt={texto} />
            <p>{texto}</p>
        </div>
    )
}

export default Poster