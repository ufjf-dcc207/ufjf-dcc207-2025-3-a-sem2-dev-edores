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
}

export default function Modal({ filme, onClose }: ModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="modal-close" type="button" onClick={onClose}>Fechar</button>
                <img className="modal-image" src={filme.imagem} alt={filme.nome} />
                <h2 className="modal-title">{filme.nome}</h2>
                <div className="modal-rating">
                    <Estrelas quantidade={filme.nota} />
                </div>
            </div>
        </div>
    );
}
