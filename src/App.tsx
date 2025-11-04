import './App.css'
import Poster from './components/poster'
import Navbar from './components/navbar'
import Logo from './assets/react.svg'
import Footer from './components/footer'


function App() {

  return (
    <>
      <Navbar link_logo={Logo} />
      <Poster texto={"Lorem ipsum dolor sit amet, consectetur elit.\nQuisque ullamcorper nec sit amet aliquet.\nProin fermentum elit eu mollis maximus."} imagem="/public/blur_edges_3.png" />
      <Footer />
    </>
  )
}

export default App