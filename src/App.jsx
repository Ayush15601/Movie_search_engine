import './App.css'
import Home from './assets/components/pages/home'
import {Routes, Route } from 'react-router-dom';
import Favourites from './assets/components/pages/favourite';
import Navbar from './assets/components/navbar'; 


function App() {
    
  return (
    <>

    <div>
      <Navbar />
        <main className='main-content'>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favourites' element={<Favourites />}/>
      </Routes>
      
      </main>  
    </div>
  
    </>
  )
}

export default App