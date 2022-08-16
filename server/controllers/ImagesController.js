const ApiError = require('../error/ApiError');
const { Images } = require('../models/models');

class ImagesController {
  async getImages(req, res) {
    const images = await await Images.findAll();
    return res.json(images);
  }
  async getImagesByID(req, res) {
    const { id } = req.params;
    const images = await Images.findOne({ where: { id } });
    return res.json(images);
  }
  async postComment(req, res) {
    const { id } = req.params;
    const { comment } = req.body;
    const images = await Images.findOne({ where: { id } });
    images.update({
      ['comments']: [...images.comments, comment],
    });
    return res.json(images);
  }
  async createImages(req, res) {
    const { link } = req.body;
    const image = await Images.create({
      link,
      comments: [],
    });
    return res.json({ status: 200, image });
  }
}

module.exports = new ImagesController();
