import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/Sign_up/Sign_up';
import LogIn from './Components/Login/Login';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/Sign_up" element={<SignUp/>}/>
              <Route path="/Login" element={<LogIn/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;