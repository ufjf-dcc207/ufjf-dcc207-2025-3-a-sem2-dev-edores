import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/react.svg'
import Footer from './components/Footer'
import Matriz from './components/matriz'


const listaDeFilmes = [
  {
    nome: "Interestelar",
    imagem: "https://image.tmdb.org/t/p/original/jSCuXZbwxbUHCvebMzxjY2ccSWy.jpg",
    nota: 5,
    cinema: true
  },
  {
    nome: "Interestelar",
    imagem: "https://image.tmdb.org/t/p/original/jSCuXZbwxbUHCvebMzxjY2ccSWy.jpg",
    nota: 5,
    cinema: true
  },


];

function App() {

  return (
    <>
      <Navbar link_logo={Logo} />
      <Poster texto={"Lorem ipsum dolor sit amet, consectetur elit.\nQuisque ullamcorper nec sit amet aliquet.\nProin fermentum elit eu mollis maximus."} imagem="/public/blur_edges_3.png" />
      <Matriz titulo='melhores da semana' subtitulo='oiiiiiiiiiiii' filmes={listaDeFilmes} />
      <Matriz titulo='melhores da semana' subtitulo='oiiiiiiiiiiii' filmes={listaDeFilmes} />
      <Matriz titulo='melhores da semana' filmes={listaDeFilmes} />

      <Footer />
    </>
  )
}

export default App