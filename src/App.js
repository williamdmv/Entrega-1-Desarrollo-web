import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import Box from './Components/Shared/HeaderInicio';
import Frame from './Components/Shared/Footer';
import About from "./Pages/Inicio/Inicio.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<About />} />
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        {/* ... otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
