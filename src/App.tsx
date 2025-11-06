import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/logo.jpg'
import Footer from './components/Footer'
import Matriz from './components/matriz'


type FilmeTupleType = [string, string, number, boolean];
type MatrizesTupleType = [string, FilmeTupleType[], string?];

const listaDeFilmes1: FilmeTupleType[] = [
  ["Vivre Sa Vie", "https://image.tmdb.org/t/p/original/u6mHCZ0Pm3aiN5m5qVaBTtw0zY5.jpg", 5, false],
  ["O poderoso Chefão", "https://image.tmdb.org/t/p/original/d6LbJZO8ruvXgOjjGRgjtdYpJS4.jpg", 4, true],
  ["Pulp Fiction", "https://image.tmdb.org/t/p/original/lmenG02ILZN904Tc4XFc5WfJFbd.jpg", 4, false],
  ["A Bruxa", "https://image.tmdb.org/t/p/original/x8WMBRSiyzh9kx7dTUbOUyyeznX.jpg", 4, false],
  ["Before Sunrise", "https://image.tmdb.org/t/p/original/5NdQMVesitx4IlBEmFok5PxTYOx.jpg", 5, true],
  ["O Iluminado", "https://image.tmdb.org/t/p/original/p88OIQzLGFWFIuel5eZWlrADel7.jpg",5, false],

];

const listaDeFilmes2: FilmeTupleType[] = [
  ["Psicose", "https://image.tmdb.org/t/p/original/nXjkXxpsE7ZGRCVd6PKkrf9tgsL.jpg", 5, false],
  ["Parasita", "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", 4, false],
  ["Laranja Mecanica", "https://image.tmdb.org/t/p/original/4sHeTAp65WrSSuc05nRBKddhBxO.jpg", 4, true],
  ["La Chinoise", "https://image.tmdb.org/t/p/original/1ihKkAL83EJBAX8ELCpbBOBpilG.jpg", 4, false],
  ["Fallen Angels", "https://image.tmdb.org/t/p/original/hNl9wZiVrvuN4RDIXPG5cGUEtBy.jpg", 2, true],
  ["A Viagem de Chiriro", "https://image.tmdb.org/t/p/original/qH2f0e19oklRgiq8vpnRuaXkuT.jpg",5, true],];

const listaDeFilmes3: FilmeTupleType[] = [
  ["Suspiria", "https://image.tmdb.org/t/p/original/5ya8jTbNZTrCFUx9OwpNBjCivXY.jpg", 4, true],
  ["Interestelar", "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg", 4, false],
  ["Batman", "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 4, true],
  ["Star Wars", "https://image.tmdb.org/t/p/original/lesQwNHiSdauuo1xrtLP8uBUlIu.jpg", 4, false],
  ["Black Swan", "https://image.tmdb.org/t/p/original/viWheBd44bouiLCHgNMvahLThqx.jpg", 4, false],
  ["O agente Secreto", "https://image.tmdb.org/t/p/original/oPh7oIPWmedG8AikWuLBC4k3OQu.jpg", 4, false],

];

const Matrizes: MatrizesTupleType[] = [
  ["Melhores da semana", listaDeFilmes1, "Os filmes mais assistidos da semana"],
  ["Lançamentos", listaDeFilmes2, "Os filmes recém-chegados ao catálogo"],
  ["Em alta", listaDeFilmes3],
];

function App() {

  return (
    <>
      <Navbar link_logo={Logo} link_nav={Matrizes.map(([titulo]) => titulo)} />
      <Poster texto={"Lorem ipsum dolor sit amet, consectetur elit.\nQuisque ullamcorper nec sit amet aliquet.\nProin fermentum elit eu mollis maximus."} imagem="/public/blur_edges_3.png" />
      {Matrizes.map(([titulo, filmes, subtitulo]) => (
        <Matriz key={titulo} titulo={titulo} subtitulo={subtitulo} filmes={filmes.map(([nome, imagem, nota, cinema]) => ({
          nome,
          imagem,
          nota,
          cinema
        }))} />
      ))}

      <Footer />
    </>
  )
}

export default App