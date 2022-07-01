import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Accueil from "./Accueil";
import ProjectFeed from "./pages/ProjectFeed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Accueil/>}/>
        <Route path="/project-feed" element={<ProjectFeed />} />
      </Routes>
    </>
  );
}

export default App;
