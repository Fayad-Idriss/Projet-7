import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/index"
import Apropos from "./pages/About/index"
import Error from "./pages/Error/index"
import Logement from './pages/Lodging/index';

// Routing
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/logement/:id" element={<Logement/>}/>
        <Route path="/A_propos" element={<Apropos/>}/> 
        <Route path="/*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
 