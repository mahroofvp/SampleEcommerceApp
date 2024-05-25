import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import NavTwo from './components/NavTwo/NavTwo'
import './App.scss'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <NavTwo/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer  />
      </Router>
    </div>
  )
}

export default App
