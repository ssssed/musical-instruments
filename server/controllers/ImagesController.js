const ApiError = require('../error/ApiError');
const { Images } = require('../models/models');

class ImagesController {
  async getImages(req, res) {
    return res.json('Получить все карточки');
  }
  async getImagesByID(req, res) {
    return res.json('Получить конкретную карточку');
  }
  async postComment(req, res) {
    return res.json('Отправить Коммент');
  }
}

module.exports = new ImagesController();
