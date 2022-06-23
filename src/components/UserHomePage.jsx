import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";

const UserHomePage = ({ history }) => {
  const navigate = useNavigate();
  return (
    <>
    <Nav />
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th className="text-strt">Symbol</th>
            <th className="text-end">Shares</th>
            <th className="text-end">Price</th>
            <th className="text-end">Transacted</th>
          </tr>
        </thead>
        <tbody>
          {history ?
            <tr>
              <td className="text-strt">{history.symbol}</td>
              <td className="text-end">{history.shares}</td>
              <td className="text-end">{history.share_price}</td>
              <td className="text-end">{history.transacted}</td>
            </tr>
            :
            null
          }
        </tbody>
      </table>
    </>
  )
};
export default UserHomePage;