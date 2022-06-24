import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav.jsx";

const UserHomePage = ({ bought, cash, initTotal, Total, currUserName }) => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <br></br>
      <table className="table tablestriped">
        <thead>
          <tr>
            <th className="text-strt">Symbol</th>
            <th className="text-strt">Name</th>
            <th className="text-end">Shares</th>
            <th className="text-end">Price</th>
            <th className="text-end">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {bought ?<tr>
            <td className="text-strt">{ bought.symbol }</td>
            <td className="text-strt">{ bought.company_name }</td>
            <td className="text-end">{ bought.shares }</td>
            <td className="text-end">{ bought.price }</td>
            <td className="text-end">{ bought.total }</td>
          </tr> : null}
        </tbody>
        <tfoot>
          <tr>
            <td className="border-0 fw-bold text-end" colSpan="4">Cash</td>
            <td className="border-0 text-end">${ cash || initTotal }</td>
          </tr>
          <tr>
            <td className="border-0 fw-bold text-end" colSpan="4">TOTAL</td>
            <td className="border-0 w-bold text-end">${ Total || initTotal}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
export default UserHomePage;