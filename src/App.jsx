import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import NavTwo from './components/NavTwo/NavTwo'
import SignIn from './pages/Signin/SignIn'
import './App.scss'
import Login from './pages/Login/Login'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <NavTwo/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
