import React from 'react';
import './pages/Login/Login.css';
import './pages/SignUp/SignUp.css';
import './pages/DashBoard/DashBoard';

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import DashBoard from './pages/DashBoard/DashBoard';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/dashboard' element={<DashBoard />} />
            </Routes>
        </Router>
    );
}

export default App;