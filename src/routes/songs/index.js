const router = require('express').Router();

const SongController = require('../../controllers/SongController')

router.post('/song', SongController.store)

module.exports = router