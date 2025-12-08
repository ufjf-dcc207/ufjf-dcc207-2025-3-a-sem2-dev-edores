import type { KeyboardEvent } from 'react';
import './capa.css';
import Estrelas from './estrelas';

interface CapaProps {
    nome: string;
    imagem: string;
    nota: number;
    cinema: boolean;
    onClick?: () => void; 
}

function Capa({ nome, imagem, nota, cinema, onClick }: CapaProps) {
    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (onClick) onClick();
        }
    };

    return (
        <div
            className='capa'
            role='button'
            tabIndex={0}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
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