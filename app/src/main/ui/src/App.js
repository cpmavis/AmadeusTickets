import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './components/webpages/index';
import Booking from './components/webpages/booking';



function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/booking' element={<Booking/>} />
    </Routes>
    </Router>
);
}

export default App;

{/* Need to Implement router here to have a option that shows flights and another one that sends an email */}
