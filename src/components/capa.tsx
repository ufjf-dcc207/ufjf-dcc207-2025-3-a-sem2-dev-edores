import './capa.css';
import Estrelas from './estrelas';
interface CapaProps {
    nome: string;
    imagem: string;
    nota: number;
    cinema: boolean;
}


function Capa({ nome, imagem, nota, cinema }: CapaProps) {
    return (
        <div className='capa'>
            {cinema && (
                <div className='cinema-mae'>
                    <img className='cinema' src='src/assets/cinema.png' alt='Cinema' />
                </div>
            )}
            <img className='cartaz' src={imagem} alt={nome} />
            <div className='estrelas'>
                <Estrelas quantidade={nota} />
            </div>
        </div>
    )
}
export default Capa;   