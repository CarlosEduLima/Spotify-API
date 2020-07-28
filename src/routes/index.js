const router = require("express").Router();

router.use(require('./albuns'));
router.use(require('./artists'));
router.use(require('./playlists'));
router.use(require('./plays'));
router.use(require('./shares'));
router.use(require('./songs'));
router.use(require('./users'));

router.get("/test", (req, res) => {
  res.json({ success: true, message: "the app is online" });
});

module.exports = router;
