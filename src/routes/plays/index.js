const router = require('express').Router();
const PlayController = require('../../controllers/PlayController')

router.post('/user/:user_id/playlist/:playlist_id', PlayController.store)

module.exports = router