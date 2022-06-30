import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Timeline from "./components/page/Timeline";
import WeekTimeline from "./components/page/WeeklyTimeline"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/weekTime" element={<WeekTimeline />} />
      </Routes>
    </>
  );
}

export default App;
