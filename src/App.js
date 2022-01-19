import { Route, Routes } from "react-router-dom"

import HomePage from './Pages/HomePage';
import Index from "./Pages/Index";

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/transactions" element={<Index/>} />
     </Routes>
    </div>
  );
}

export default App;
