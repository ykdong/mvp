module.exports = {
  postUser: function (req, res) {
    res.sendStatus(201);
    console.log(req.cookie);
  }
}