import Capa from "./capa";
import './matriz.css';
interface FilmeProps {
    nome: string;
    imagem: string;
    nota: number;
    cinema: boolean;
}

interface MatrizProps {
    filmes: FilmeProps[];
    titulo: string;
    subtitulo?: string;
}

function Matriz({ filmes, titulo, subtitulo }: MatrizProps) {
    return (
        <div className="matriz-mae">
            <div className="titulo-matriz">
                <h1>{titulo}</h1>
                {subtitulo && <h2>{subtitulo}</h2>}
            </div>
            <div className="matriz">
                {filmes.map(filme => (
                    <Capa
                        key={filme.nome}
                        nome={filme.nome}
                        imagem={filme.imagem}
                        nota={filme.nota}
                        cinema={filme.cinema}
                    />
                ))}
            </div >
        </div>

    )
}

export default Matriz;