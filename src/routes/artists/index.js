const router = require('express').Router();
const ArtistController = __require('controllers/ArtistController')

router.post('/artist', ArtistController.store)
router.get('/artists', ArtistController.index)
router.put('/artist/:artist_id', ArtistController.uptade)
router.get('/artist/:artist_id', ArtistController.show)
router.delete('/artist/:artist_id', ArtistController.delete)
module.exports = router