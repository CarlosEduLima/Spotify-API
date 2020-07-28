const router = require('express').Router();

const UserController = __require('controllers/UserController')

router.post('/user', UserController.store)
router.get('/user/:user_id', UserController.show)
router.get('/users', UserController.index)
router.put('/user/:user_id', UserController.uptade)
router.delete('/user/:user_id', UserController.delete)

module.exports = router