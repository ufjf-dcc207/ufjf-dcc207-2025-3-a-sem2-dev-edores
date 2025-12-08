import "./modal.css";
import Estrelas from "./estrelas";

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
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="botao-fechar" onClick={onClose}>✖</button>
                
                <img src={filme.imagem} alt={filme.nome} className="modal-imagem" />
                <h2>{filme.nome}</h2>
                <Estrelas quantidade={filme.nota} />
                
                <p style={{marginTop: '10px', color: '#ccc'}}>
                    {filme.cinema ? "Disponível nos cinemas 🎟️" : "Disponível em streaming 📺"}
                </p>
                <p style={{marginTop: '10px'}}>Sinopse.</p>
            </div>
        </div>
    );
}