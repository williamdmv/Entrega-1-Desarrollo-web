import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/" element={<Navigate to="/registro" replace />} />
        {/* ... otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
