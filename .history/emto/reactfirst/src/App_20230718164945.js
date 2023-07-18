
import React from 'react';
import './pages/Login/Login.css';
import './pages/SignUp/SignUp.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import images from './Assets';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/'  element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}
 
export default App;