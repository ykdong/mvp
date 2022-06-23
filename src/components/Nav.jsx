import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import UserHomePage from './UserHomePage.jsx';
import Quote from './Quote.jsx';
import Buy from './Buy.jsx';
import Sell from './Sell.jsx';
import Login from './Login.jsx';

const Nav = () => {
  return (
    <>
      <nav className="bg-light border navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand"><span className="blue">$</span><span className="red">M</span><span className="yellow">V</span><span className="green">P</span> <span className="red">Finance</span></a>
          <button aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbar" data-bs-toggle="collapse" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <br></br>
            <ul className="navbar-nav me-auto mt-2">
              <Link className="nav-item nav-link" to="/quote" name="quote" >Quote</Link>
              <Link className="nav-item nav-link" to="/buy" name="buy" >Buy</Link>
              <Link className="nav-item nav-link" to="/sell" name="sell" >Sell</Link>
              <Link className="nav-item nav-link" to="/history" name="history" >History</Link>
            </ul>
            <ul className="navbar-nav ms-auto mt-2">
              <Link className="nav-item nav-link" to="/login" name="logout" >Log Out</Link>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/userHomePage' element={<UserHomePage />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </>
  );
};
export default Nav;