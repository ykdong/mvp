const model = require('./model.js')

module.exports = {
  newUser: function (req, res) {
    model.newUser(req, res)
  },
  getCash: function (req, res) { 
    model.getCash(req, res) 
  },
  buy: function (req, res) {
    model.buy(req, res)
  }
}