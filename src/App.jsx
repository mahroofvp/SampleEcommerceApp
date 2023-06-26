import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
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
