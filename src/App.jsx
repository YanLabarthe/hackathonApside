import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Timeline from "./pages/Timeline";
import WeekTimeline from "./pages/WeeklyTimeline";
import ProjectFeed from "./pages/ProjectFeed";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekTime" element={<WeekTimeline />} />
        <Route path="/project-feed" element={<ProjectFeed />} />
      </Routes>
    </>
  );
}

export default App;
