import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import './App.scss'
import Login from './pages/Login/Login'
import { useSelector } from 'react-redux'

function App() {
  
  const currentState = useSelector((store)=> store.form.currentState)
const isSigninRoute = window.location.pathname === "/signin"
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path={!isSigninRoute? "/login":"/signin"}  element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
