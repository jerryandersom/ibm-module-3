import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'; // Adjust the path if necessary
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
