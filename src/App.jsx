import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Accueil from "./Accueil";
import Timeline from "./components/page/Timeline";
import WeekTimeline from "./components/page/WeeklyTimeline"
import ProjectFeed from "./pages/ProjectFeed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Accueil/>}/>
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekTime" element={<WeekTimeline />} />
        <Route path="/project-feed" element={<ProjectFeed />} />
      </Routes>
    </>
  );
}

export default App;
