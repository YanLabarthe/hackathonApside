import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Accueil from "./Accueil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Accueil/>}/>
      </Routes>
    </>
  );
}

export default App;
