import './App.css'
import Home from './assets/pages/home'
import {Routes, Route } from 'react-router-dom';
import Favourites from './assets/pages/favourite';


function App() {
    
  return (
    <>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />}/>
      </Routes>
    </main>    
    </>
  )
}

export default App