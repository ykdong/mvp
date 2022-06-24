const db = require('./db')
const bcrypt = require('bcrypt');


module.exports = {
  newUser: function(req, res) {
    const initTotal = 1000.00;
    db.query(`INSERT INTO userinfo(name, password, cash, total) VALUES('${req.body.userName}','${req.body.passWord}',${1000.00}, ${initTotal});`, 
      (err, result) => {
        if(err) { console.log(err) } 
        else {res.status(201).json('ok')}
      });
  },
  getCash: function(req, res) {
    const userName = req.params.userName.toString();
    db.query(`SELECT cash from userinfo WHERE name = '${userName}';`)
    .then((result) => res.status(200).json(result.rows[0].cash))
    .catch((err) => res.status(500).json(err))
  },
  buy: function(req, res) {
    const data = req.body;
    const share = Number(req.body.Shares);
    const newCash = parseFloat(req.body.CurrTotal) - parseFloat(req.body.actionTotal);
    db.query(`INSERT INTO history(username, symbol, companyname, shares, price, rowtotal, action) 
              VALUES('${data.UserName}', '${data.Symbol}', '${data.CompanyName}', ${share}, ${data.Price}, ${data.actionTotal}, '${data.action}');`);
    db.query(`UPDATE userinfo SET cash=${newCash} WHERE name='${data.UserName}';`)
    .then((result) => res.sendStatus(200))
    .catch((err) => console.log(err))
  }
}