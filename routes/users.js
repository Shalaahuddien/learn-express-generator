var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('showing all of user list!');
});

router.get('/blocked', function(req, res, next) {
  const blockedUsers = [{
    uuid: Math.random().toString(),
    name: "rafi ahmad",
    address: "Jl. jakarta RW1"
    },
    {
    uuid: Math.random().toString(),
    name: "Sutedjo",
    address: "Jl. Buyahamka Rt3"
    },
  {
    uuid: Math.random().toString(),
    name: "Rahmawati Wedha",
    address: "Jl. kertadjati Rw7"
    }]
  res.status(200).json({payload: blockedUsers});
});

module.exports = router;
