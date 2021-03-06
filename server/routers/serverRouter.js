const router = require("express").Router();

// db models
const bannerController = require("../controllers/bannerController");

// routes
router.get('/', bannerController.getBanners)

module.exports = router;