
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import SignUp from '../emto/reactfirst/src/pages/SignUp/SignUp';
import Login from '../emto/reactfirst/src/pages/Login/Login';
 
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