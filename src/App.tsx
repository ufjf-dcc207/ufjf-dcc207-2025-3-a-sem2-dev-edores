import { useState } from 'react'
import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/logo.jpg'
import Footer from './components/Footer'
import Matriz from './components/matriz'
import Modal from './components/modal'

type FilmeTupleType = [string, string, number, boolean];
type MatrizesTupleType = [string, FilmeTupleType[], string?];

const listaDeFilmes1: FilmeTupleType[] = [
  ["Vivre Sa Vie", "https://image.tmdb.org/t/p/original/u6mHCZ0Pm3aiN5m5qVaBTtw0zY5.jpg", 5, false],
  ["O poderoso Chefão", "https://image.tmdb.org/t/p/original/d6LbJZO8ruvXgOjjGRgjtdYpJS4.jpg", 4, false],
  ["Pulp Fiction", "https://image.tmdb.org/t/p/original/lmenG02ILZN904Tc4XFc5WfJFbd.jpg", 4, false],
  ["A Bruxa", "https://image.tmdb.org/t/p/original/x8WMBRSiyzh9kx7dTUbOUyyeznX.jpg", 4, true],
  ["Before Sunrise", "https://image.tmdb.org/t/p/original/5NdQMVesitx4IlBEmFok5PxTYOx.jpg", 5, true],
  ["O Iluminado", "https://image.tmdb.org/t/p/original/p88OIQzLGFWFIuel5eZWlrADel7.jpg", 5, true],
];

const listaDeFilmes2: FilmeTupleType[] = [
  ["Psicose", "https://image.tmdb.org/t/p/original/nXjkXxpsE7ZGRCVd6PKkrf9tgsL.jpg", 5, true],
  ["Parasita", "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", 4, true],
  ["Laranja Mecanica", "https://image.tmdb.org/t/p/original/4sHeTAp65WrSSuc05nRBKddhBxO.jpg", 4, true],
  ["La Chinoise", "https://image.tmdb.org/t/p/original/1ihKkAL83EJBAX8ELCpbBOBpilG.jpg", 4, true],
  ["Fallen Angels", "https://image.tmdb.org/t/p/original/hNl9wZiVrvuN4RDIXPG5cGUEtBy.jpg", 2, true],
  ["A Viagem de Chiriro", "https://image.tmdb.org/t/p/original/qH2f0e19oklRgiq8vpnRuaXkuT.jpg", 5, true],
];

const listaDeFilmes3: FilmeTupleType[] = [
  ["Suspiria", "https://image.tmdb.org/t/p/original/5ya8jTbNZTrCFUx9OwpNBjCivXY.jpg", 4, false],
  ["Interestelar", "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg", 4, true],
  ["Batman", "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 4, false],
  ["Star Wars", "https://image.tmdb.org/t/p/original/lesQwNHiSdauuo1xrtLP8uBUlIu.jpg", 4, false],
  ["Black Swan", "https://image.tmdb.org/t/p/original/viWheBd44bouiLCHgNMvahLThqx.jpg", 4, true],
  ["O agente Secreto", "https://image.tmdb.org/t/p/original/oPh7oIPWmedG8AikWuLBC4k3OQu.jpg", 4, false],
];

const MatrizesFixas: MatrizesTupleType[] = [
  ["Melhores da semana", listaDeFilmes1, "Os filmes mais assistidos da semana"],
  ["Lançamentos", listaDeFilmes2, "Os filmes recém-chegados ao catálogo"],
  ["Em alta", listaDeFilmes3],
];

const TodosOsFilmes = [...listaDeFilmes1, ...listaDeFilmes2, ...listaDeFilmes3];

const sinopsesPorTitulo: { [titulo: string]: string } = {
  "Vivre Sa Vie": "Nana busca independencia em Paris e sente o peso de cada escolha.",
  "O poderoso Chefão": "Michael assume os negócios da familia Corleone e paga o preço do poder.",
  "Pulp Fiction": "Criminosos de Los Angeles se cruzam em encontros violentos e ironicos.",
  "A Bruxa": "Familia puritana enfrenta medo e supersticao na Nova Inglaterra isolada.",
  "Before Sunrise": "Dois jovens vagam por Viena e compartilham sonhos ate o amanhecer.",
  "O Iluminado": "Jack guarda um hotel vazio e sucumbe a visoes que o levam a loucura.",
  "Psicose": "Marion encontra um dono de motel enigmático e segredos mortais.",
  "Parasita": "A familia Kim ocupa a casa dos Park e escancara desigualdades profundas.",
  "Laranja Mecanica": "Alex lidera atos ultraviolentos ate sofrer um experimento de controle.",
  "La Chinoise": "Estudantes parisienses transformam um apartamento em laboratorio revolucionario.",
  "Fallen Angels": "Noites de Hong Kong conectam solitarios em busca de afeto e fuga.",
  "A Viagem de Chiriro": "Chihiro enfrenta espiritos para salvar os pais presos em um banho termal.",
  "Suspiria": "Bailarina descobre uma irmandade sombria por trás de sua escola de danca.",
  "Interestelar": "Exploradores cruzam um buraco de minhoca tentando salvar a humanidade.",
  "Batman": "Bruce Wayne vigia Gotham mascarado enquanto encara criminosos incansaveis.",
  "Star Wars": "Luke se une a Rebelião para enfrentar o Imperio opressor na galaxia.",
  "Black Swan": "Nina disputa papel e mergulha em paranoia durante montagem de ballet.",
  "O agente Secreto": "Infiltrado tenta impedir ataque em Londres sem revelar identidade real."
};

type Filme = {
  nome: string;
  imagem: string;
  nota: number;
  cinema: boolean;
  sinopse: string;
};

const tupleParaFilme = ([nome, imagem, nota, cinema]: FilmeTupleType): Filme => ({
  nome,
  imagem,
  nota,
  cinema,
  sinopse: sinopsesPorTitulo[nome] ?? 'Sinopse indisponivel.'
});

function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | null>(null);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const alternarFavorito = (nomeFilme: string) => {
    if (favoritos.includes(nomeFilme)) {
      setFavoritos(favoritos.filter(nome => nome !== nomeFilme));
    } else {
      setFavoritos([...favoritos, nomeFilme]);
    }
  };

  const abrirModal = (filme: Filme) => {
    setFilmeSelecionado(filme);
    setModalAberto(true);
  };


  const fecharModal = () => {
    setModalAberto(false);
    setFilmeSelecionado(null);
  };

  const matrizesPadraoTratadas = MatrizesFixas.map(([titulo, filmesTuple, subtitulo]) => ({
    titulo,
    subtitulo,
    filmes: filmesTuple.map(tupleParaFilme)
  }));

  const minhaListaTratada = favoritos.length > 0 ? [{
    titulo: "Minha Lista",
    subtitulo: "Filmes que você favoritou",
    filmes: TodosOsFilmes.filter(([nome]) => favoritos.includes(nome)).map(tupleParaFilme)
  }] : [];

  const todasAsMatrizes = [
    ...minhaListaTratada,
    ...matrizesPadraoTratadas
  ];

  const titulosNav = todasAsMatrizes.map(m => m.titulo);

  return (
    <>
      <Navbar link_logo={Logo} link_nav={titulosNav} />
      <Poster texto={"Acompanhe os filmes que você assistiu,\n salve aqueles que você quer ver \n e diga aos seus amigos o que é bom."} imagem="/public/blur_edges_3.png" />

      {todasAsMatrizes.map((matriz) => (
        <Matriz 
          key={matriz.titulo} 
          titulo={matriz.titulo} 
          subtitulo={matriz.subtitulo} 
          filmes={matriz.filmes} 
          onFilmeClick={abrirModal} 
        />
      ))}
      
      <Footer />

      {modalAberto && filmeSelecionado && (
        <Modal 
          filme={filmeSelecionado} 
          onClose={fecharModal}
          isFavorito={favoritos.includes(filmeSelecionado.nome)}
          onToggleFavorito={() => alternarFavorito(filmeSelecionado.nome)}
        />
      )}
    </>
  )
}

export default App