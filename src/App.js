import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* ... otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
