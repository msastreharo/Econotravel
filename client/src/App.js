import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
//import Checkout from './pages/Checkout.js';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Singup from './pages/Singup.js';
import Login from './pages/Login.js'
import Header from './components/Header';
import AboutUs from './pages/AboutUs.js';
import Checkout from './pages/Checkout.js';
import MyProfile from './pages/MyProfile.js';
import ExperienceGridCard from './pages/ExperienceGridCard';
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
            {/*<Route exact path="/checkout" element={<Checkout />} />*/}
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/myprofile" element={<MyProfile />} />


            {/*<Route path={ROUTES.EXPERIENCE} element={<Experience />} />
            <Route path={ROUTES.BOOKING} element={<Login />} />*/}
          
          {/*</Route><Route path={ROUTES.SIGN_IN} element={<Login />} />*/}
{/*           <Route path={ROUTES.USER}>
            <Route path={ROUTES.USER_PROFILE} element={<MyProfile />} />
            <Route path={ROUTES.USER_EXPERIENCES} element={<MyExperiences />} />
          </Route>
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
     
 
         </div>
   <Outlet />
                 
    </Router>
  );
  
}

export default App;
