import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/webpages/index';
import Booking from './components/webpages/booking';
import Notification from './components/webpages/notification';



function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/notification' element={<Notification/>} />
    </Routes>
    </Router>
);
}

export default App;