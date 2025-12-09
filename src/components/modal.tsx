import './modal.css';
import Estrelas from './estrelas';

type Filme = {
    nome: string;
    imagem: string;
    nota: number;
    sinopse: string;
};


type ModalProps = {
    filme: Filme;
    onClose: () => void;
    isFavorito: boolean;
    onToggleFavorito: () => void;
}

export default function Modal({ filme, onClose, isFavorito, onToggleFavorito }: ModalProps) {
    return (
        <div className="modal-sobreposicao">
            <div className="modal-caixa">
                <button className="modal-fechar" type="button" onClick={onClose}>X</button>
                <img className="modal-imagem" src={filme.imagem} alt={filme.nome} />
                <h2 className="modal-titulo">{filme.nome}</h2>
                <div className="modal-avaliacao">
                    <Estrelas quantidade={filme.nota} />
                </div>
                <p className="modal-sinopse">{filme.sinopse}</p>
                <button
                    onClick={onToggleFavorito}
                    id='buttonFav'
                    style={{ backgroundColor: isFavorito ? '#7c3a31' : '#2c3e50' }}
                >
                    {isFavorito ? "💔 Remover dos Favoritos" : "❤️ Adicionar aos Favoritos"}
                </button>
            </div>
        </div>
    );
}