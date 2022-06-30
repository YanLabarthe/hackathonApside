import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import DemoForm from './pages/DemoForm';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/demoform" element={<DemoForm />} />
      </Routes>
    
  );
}

export default App;
