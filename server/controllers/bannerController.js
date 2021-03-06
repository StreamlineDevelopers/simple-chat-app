const Banner = require("../models/bannerModel");

getBanners = async (req,res) => {
    try {
        const banners = await Banner.find();
        res.json(banners);
    } catch (error) {
        res.json({message: error})
    }
}

module.exports = {getBanners};