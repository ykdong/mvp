import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Quote from './Quote.jsx';
import Sell from './Sell.jsx';
import History from './History.jsx';
import Message from './Message.jsx';
import UserHomePage from './UserHomePage.jsx';
import { TOKEN } from '../../config.js';

const Buy = ({currUserName}) => {
  const navigate = useNavigate();
  const [shares, setShares] = useState(0);
  const [symbol, setSymbol] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [bought, setBought] = useState([]);

  const closeMessage = (e) => { e.preventDefault(); setShowMessage(false) };

  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name === 'shares') { setShares(e.target.value) }
    else if (e.target.name === 'symbol') { setSymbol(e.target.value) };
  }
  const handleBuy = (e) => {
    e.preventDefault();
    if (symbol === '' || shares === 0) { setMessage('Some field(s) are missing'); setShowMessage(true)}
    else {
      axios
        .get(`https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${TOKEN}`)
        .then((result) => {
          axios.get(`/getCash/${currUserName}`)
               .then((response) => {
                 if (response.data < (result.data.latestPrice * shares)) { setMessage('Not enough money'); setShowMessage(true)}
                 else {
                   axios.post(`/buy/${currUserName}`, {
                     UserName: currUserName,
                     Shares: shares,
                     Symbol: result.data.symbol,
                     CompanyName: result.data.companyName,
                     CurrTotal: response.data,
                     Price: result.data.latestPrice,
                     action: 'Buy',
                     actionTotal: result.data.latestPrice * shares
                   })
                 }
               })
               .then(()=>{ setMessage('Bought!'); setShowMessage(true); navigate('/userHomePage'); })
        })
        .catch((err)=> { setMessage('Something is wrong, Please try again'); setShowMessage(true)})
    }
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
            <input autoComplete="off" autoFocus className="form-control mx-auto w-auto" id="symbol" name="symbol" placeholder="Symbol" type="text" required onChange={(e)=>handleInput(e)}/>
        </div>
        <div className="mb-3">
            <input className="form-control mx-auto w-auto" id="shares" name="shares" placeholder="Shares" type="number" min="1" required onChange={(e)=>handleInput(e)}/>
        </div>
        <button className="btn btn-primary" type="submit" onClick={(e)=>handleBuy(e)}>Buy</button>
      </form>
      {showMessage ? <Message message={message} closeMessage={closeMessage}/> : null}
      <Routes>
        <Route path='/quote' element={<Quote />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/history' element={<History />} />
        <Route path='/userHomePage/*' element={<UserHomePage initTotal={initTotal} currUserName={currUserName}/>} />
      </Routes>
    </>
  );
};
export default Buy;