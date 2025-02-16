import { Route, Routes } from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/*Path for landing,history and home */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/History' element={<History/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
