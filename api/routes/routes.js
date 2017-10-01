var express = require('express');
var userAccounts = require('../controllers/users.controllers.js');

var router = express.Router();

router.route('/api/accounts/signUp').get(userAccounts.userSignUp).post(userAccounts.addUser);
router.route('/api/accounts/usersGetAll').get(userAccounts.usersGetAll);
router.route('/api/accounts/usersGetOne').get(userAccounts.usersGetOne);

module.exports = router;
