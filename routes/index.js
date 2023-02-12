let express = require('express');
let router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async(req, res, next) => {
  const getBlockedUsers = await axios.get("http://localhost:3000/users/blocked");
  const datas = getBlockedUsers.data.payload;  
  console.log(datas);
  res.render('index', { datas });
});

module.exports = router;
