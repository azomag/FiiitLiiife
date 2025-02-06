import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Programmes from './pages/Programmes';
import DetailsProgrammes from './pages/DetailsProgrammes';

function App() {
  return ( 
    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/program/:id" element={<DetailsProgrammes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;