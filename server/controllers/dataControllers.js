const ApiError = require('../error/ApiError');

class DataController {
  async getgetImages(req, res, next) {
    return res.json('все карточки');
  }
  async getImagesById(req, res, next) {}
  async postComment(req, res, next) {}
}

module.exports = new DataController();
