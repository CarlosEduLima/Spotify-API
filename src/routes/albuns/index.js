const router = require('express').Router();

const AlbumController = __require('controllers/AlbumController')

router.post('/album/:artist_id', AlbumController.store)
router.put('/album/:album_id', AlbumController.uptade)
router.get('/album/:album_id', AlbumController.show)
router.delete('/album/:album_id', AlbumController.delete)
router.get('/albuns', AlbumController.index)
module.exports = router

