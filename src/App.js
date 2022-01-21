import { Route, Routes } from "react-router-dom"

import HomePage from "./Pages/HomePage";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from './Components/NavBar';
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
     <NavBar/>
     <div style={{
       display: "grid",
       gridTemplateRows: "repeat(auto-fill, minmax(300px, 1fr))",
       gap: "1rem",
       alignItems: "flex-start"
     }}
     >

     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/transactions" element={<Index/>} />
       <Route path="/transactions/new" element={<New />}/>
       <Route path="/transactions/:index" element={<Show/>} />
       <Route path="/transactions/:index/edit" element={<Edit />} />
     </Routes>
     </div>
    </Container>
  );
}

export default App;
