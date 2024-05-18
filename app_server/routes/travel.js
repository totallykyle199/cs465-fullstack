var express = require('express');
var router = express.Router();
var controller = require('../Controllers/travel');

/* Get travel Page */
router.get('/', controller.travel);

module.exports = router;