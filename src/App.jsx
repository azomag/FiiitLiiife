import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import SignUp from "./pages/SignUp";
import Login from './pages/Login';
import Programmes from './pages/Programmes';
import DetailsProgrammes from './pages/DetailsProgrammes';
import Footer from './Footer/Footer';
import Workout from './pages/Workout';
import WorkoutDetails from './pages/WorkoutDetails'; // Import WorkoutDetails component
import PersonalTrainer from './pages/PersonalTrainer';
import PersonalTrainerDetails from './pages/PersonalTrainerDetails'; // Import PersonalTrainerDetails
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
          <Route path="/workout" element={<Workout />} />
          <Route path="/WorkoutDetails/:id" element={<WorkoutDetails />} /> {/* ✅ Fix added */}
        <Route path='/PersonalTrainer' element={<PersonalTrainer />} />
        <Route path="/PersonalTrainerDetails/:id" element={<PersonalTrainerDetails />} />    
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
