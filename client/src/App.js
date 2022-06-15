import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
import Checkout from './components/Checkout.js';
import ExperienceHome from './components/ExperienceHome.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Header from './components/Header';
import ExperienceGridCard from './pages/ExperienceGridCard';
//import Experience



function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
           <Route element={<Header/>}>
            <Route path="/" element={<Home />} />
            <Route path="/econoExperience" element={<ExperienceGridCard />} />
            {/*<Route path={ROUTES.EXPERIENCE} element={<Experience />} />
            <Route path={ROUTES.BOOKING} element={<Login />} />*/}
          </Route>
          {/*<Route path={ROUTES.SIGN_IN} element={<Login />} />*/}
{/*           <Route path={ROUTES.USER}>
            <Route path={ROUTES.USER_PROFILE} element={<MyProfile />} />
            <Route path={ROUTES.USER_EXPERIENCES} element={<MyExperiences />} />
          </Route>
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
     
 
         </div>
    </Router>
  );
  
}

export default App;
