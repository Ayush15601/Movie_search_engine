import Home from "./src/assets/pages/home";
import { Route, Routes } from "react-router-dom";
import Favourite from "./src/assets/pages/favorite";
import Navbar from "./src/assets/components/navbar";
import { Movieprovider } from "./src/context/context.jsx";

function App() {

  return (
    
    <>
    
      <Movieprovider>
     
          <Navbar />

        <div>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
    
        </div>
    
      </Movieprovider>
    
    </>

  );
}

export default App;