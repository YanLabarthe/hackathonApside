import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Timeline from "./pages/Timeline";
import WeekTimeline from "./pages/WeeklyTimeline"
import ProjectFeed from "./pages/ProjectFeed";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekTime" element={<WeekTimeline />} />
        <Route path="/project-feed" element={<ProjectFeed />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    
  );
}

export default App;
