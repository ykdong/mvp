import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
const root = createRoot(document.getElementById("root"));
import axios from 'axios';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Login from "./components/Login.jsx";
import UserHomePage from './components/UserHomePage.jsx';
import Quote from './components/Quote.jsx';
import Buy from './components/Buy.jsx';
import Sell from './components/Sell.jsx';
import History from './components/History.jsx';

const App = () => {
  const navigate = useNavigate();
  const [currUserName, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [initTotal, setInitTotal] = useState(1000);

  const handleRegister = (e, username, password, passwordConfirm) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      window.alert('Passwords are different, Please Modify');
    } else {
      axios.post('/register', {
        userName: username,
        passWord: password
      }).then((response) => { 
        if (response.status === 201) { 
          setLoggedIn(true);
          setName(username);
          navigate('/userHomePage');
        } 
      })
    };
  };
  return (
    <>
      {!loggedIn ? 
      <nav className="bg-light border navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand"><span className="blue">$</span><span className="red">M</span><span className="yellow">V</span><span className="green">P</span> <span className="red">Finance</span></a>
          <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbar" data-bs-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <br></br>
            <ul className="navbar-nav ms-auto mt-2">
              <Link className="nav-item nav-link" to="/register" name="register">Register</Link>
              <Link className="nav-item nav-link" to="/login" name="login">Log In</Link>
            </ul>
          </div>
        </div>
      </nav> : <></>}
      <br></br>
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn}/>} />
        <Route path='/register' element={<Register handleRegister={handleRegister} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/userHomePage/*' element={<UserHomePage initTotal={initTotal} currUserName={currUserName}/>} />
        <Route path='/quote/*' element={<Quote />} />
        <Route path='/buy/*' element={<Buy currUserName={currUserName}/>} />
        <Route path='/sell' element={<Sell currUserName={currUserName}/>} />
        <Route path='/history' element={<History currUserName={currUserName}/>} />
      </Routes>
    </>
  )
};

root.render(<Router><App /></Router>);