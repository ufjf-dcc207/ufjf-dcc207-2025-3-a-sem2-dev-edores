import './estrelas.css'
interface EstrelasProps {
    quantidade?: number;
}

function Estrelas({ quantidade }: EstrelasProps) {
    if (quantidade === undefined || quantidade < 0) {
        quantidade = 0;
    } else if (quantidade > 5) {
        quantidade = 5;
    }
    let estrelas = [];
    for (let i = 0; i < quantidade; i++) {
        estrelas.push(<span className="estrela" key={i}>★</span>);
    }
    return (
        <div className='estrelas-mae'>{estrelas}</div>
    );
}
export default Estrelas;