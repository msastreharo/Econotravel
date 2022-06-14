import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import Home from './pages/Home.js';
=======
<<<<<<< HEAD:src/App.js
import Checkout from './components/Checkout.js';
=======
import Home from './components/Home.js';
>>>>>>> dce7d804abfb62d784621e4d5f5ec8a2d9e3975e
import ExperienceHome from './components/ExperienceHome.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Header from './components/Header';
import ExperienceGridCard from './pages/ExperienceGridCard';
//import Experience



>>>>>>> 4242baeda4df779aa672e08baaae37b6302e440b:client/src/App.js

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
           <Route element={<Header/>}>
            <Route path="/" element={<Home />} />
            <Route path={ROUTES.EXPERIENCES} element={<ExperienceGridCard />} />
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
      <Home />
<<<<<<< HEAD:src/App.js
      <Checkout />
 
=======
      <ExperienceHome />
>>>>>>> 4242baeda4df779aa672e08baaae37b6302e440b:client/src/App.js
    </div>
    </Router>
  );
  
}

export default App;
