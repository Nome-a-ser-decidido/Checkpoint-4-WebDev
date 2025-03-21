import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './routes/Error';

import Home from './routes/Home';
import Produto from './routes/Produtos';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Sobre from "./routes/Sobre"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="*" element={<Error />} /> {/* Rota padrão para erros */}
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>

  )
}

export default App
