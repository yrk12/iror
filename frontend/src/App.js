import './App.css';
import Login from './files/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './files/homepage';
import Register from './files/register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;


