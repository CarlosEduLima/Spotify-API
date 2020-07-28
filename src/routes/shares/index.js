const router = require('express').Router();

const ShareController = require('../../controllers/ShareController')

router.post('/shares/user/:user_id/playlist/:playlist_id', ShareController.store)

module.exports = router