const router = require("express").Router();
const {getUsers,addUser} = require('../controllers/user.controller');

router.get('/', getUsers);
router.post('/', addUser);

module.exports = router;