import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import axios from 'axios';
import Quoted from './Quoted.jsx';
import Buy from './Buy.jsx';
import Sell from './Sell.jsx';
import Login from './Login.jsx';
import { TOKEN } from '../../config.js'; 


const Quote = () => {
  const [userInput, setUserInput] = useState('');
  const [quotedResult, setQuotedResult] = useState({});
  const [showTable, setShowTable] = useState(false);
  const handleInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }
  const handleQuote = (e) => {
    e.preventDefault();
    if (userInput === '') { window.alert('Please type in the symbol to quote')}
    else (
      axios
      .get(`https://cloud.iexapis.com/stable/stock/${userInput}/quote?token=${TOKEN}`)
      .then((result) => {setQuotedResult(result.data); setShowTable(true); console.log(result.data)})
      .catch((err)=> {setQuotedResult(null); setShowTable(true)})
    )
  }
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
      <br></br>
      <form>
        <div className="mb-3">
            <input autoComplete="off" autoFocus className="form-control mx-auto w-auto" id="symbol" name="symbol" placeholder="Symbol" type="text" onChange={(e)=>handleInput(e)}/>
        </div>
        <button className="btn btn-primary" type="submit" onClick={(e)=>handleQuote(e)}>Quote</button>
      </form>
      { showTable ? <Quoted data={quotedResult} /> : null }
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/quoted' element={<Quoted />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </>
  );
};
export default Quote;