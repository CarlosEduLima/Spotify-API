const router = require('express').Router();
const PlaylistController = require('../../controllers/PlaylistController')

router.post('/playlist/:user_id', PlaylistController.store)
router.post('/playlist/:playlist_id/song/:song_id', PlaylistController.fillPlaylist)
router.delete('/playlist/:playlist_id', PlaylistController.delete)
router.uptade('/playlist/:playlist_id', PlaylistController.uptade)
router.delete('/playlist/:song_id', PlaylistController.removeSong)
module.exports = router