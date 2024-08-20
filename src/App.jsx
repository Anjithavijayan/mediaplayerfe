
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landingpage from './components/pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Watchhistory from './components/pages/Watchhistory'


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Landingpage/> }/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<Watchhistory/>}/>
    </Routes>  
      <Footer />
    </>
  )
}

export default App
