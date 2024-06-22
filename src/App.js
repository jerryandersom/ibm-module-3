import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login'; // Adjust the path if necessary
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';  
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';  
import Notification from './Components/Notification/Notification';
import ReviewTable from './Components/ReviewTable/ReviewTable'; // Adjust the path if necessary
import ReviewForm from './Components/ReviewForm/ReviewForm'; // Adjust the path if necessary
import ProfileCard from './Components/ProfileCard/ProfileCard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Notification>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing_Page />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/search/doctors" element={<BookingConsultation />} />
            <Route path="/review-table" element={<ReviewTable />} />
            <Route path="/review-form" element={<ReviewForm />} /> {/* Corrected path */}
            <Route path="/profile" element={<ProfileCard />} /> {/* Corrected path */}
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
