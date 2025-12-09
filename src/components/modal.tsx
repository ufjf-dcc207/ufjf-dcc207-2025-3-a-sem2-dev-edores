import './modal.css';
import Estrelas from './estrelas';

type Filme = {
    nome: string;
    imagem: string;
    nota: number;
    cinema: boolean;
};


interface ModalProps {
    filme: Filme;
    onClose: () => void;
    isFavorito: boolean;       
    onToggleFavorito: () => void; 
}

export default function Modal({ filme, onClose, isFavorito, onToggleFavorito }: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" type="button" onClick={onClose}>Fechar</button>
                <img className="modal-image" src={filme.imagem} alt={filme.nome} />
                <h2 className="modal-title">{filme.nome}</h2>
                
                <div className="modal-rating">
                    <Estrelas quantidade={filme.nota} />
                </div>

                <button onClick={onToggleFavorito} id='buttonFav' style={{backgroundColor: isFavorito ? '#7c3a31ff' : '#2c3e50',}}>
                    {isFavorito ? "💔 Remover dos Favoritos" : "❤️ Adicionar aos Favoritos"}
                </button>

            </div>
        </div>
    );
}