import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Singup from './pages/Singup.js';
import Login from './pages/Login.js'
import Header from './components/Header';
//import AboutUs from './pages/AboutUs.js';
import Checkout from './pages/Checkout.js';
import MyProfile from './pages/MyProfile.js';
import ExperienceGridCard from './pages/ExperienceGridCard';
import PaginasExperiences from './pages/PaginasExperiences'
import Error from './pages/Error';
//import Experience



function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
            <Route element={<Header />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/experiences" element={<ExperienceGridCard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/singup" element={<Singup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route exact path="/myprofile" element={<MyProfile />} />
            <Route path="/paginasexperiences/:id" element={<PaginasExperiences />} /> 
            <Route path="/paginasexperiences/:id/:checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} /> 
    </Routes>
     
         </div>
   <Outlet />
                 
    </Router>
  );
  
}

export default App;
