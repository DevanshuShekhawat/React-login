import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import ForgotPassword from './components/reset'
import Header from './components/Header'
import Home from './components/Home'
import Abouts from './components/Abouts'
import Blogs from './components/Blogs'
import Ourstory from './components/Ourstory'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Proper from './components/Proper'

function App() {
  return (

    <><><Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              CalmConnect
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Proper />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/password-recovery" element={<ForgotPassword />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router></></>
  );
}

export default App