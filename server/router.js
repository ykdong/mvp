const controller = require('./controller.js')
const router = require('express').Router()

router.post('/register', controller.newUser);
router.get('/getCash/:userName', controller.getCash)
router.post('/buy/:userName', controller.buy)
// router.get('/loaderio-b7d33ba30d4735fc0c46c7658de2a753.txt', (req, res) => 
//   res.status(200).send('loaderio-b7d33ba30d4735fc0c46c7658de2a753'));

module.exports = router