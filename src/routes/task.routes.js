const express = require('express');
const router = express.Router();

router.get('/', (require, response) => {
  response.json({
    status: 'API works!'
  });
});

module.exports = router;

