'use strict';
const Service = require('egg').Service;
const data = require('../public/data.json')
class HomeService extends Service {
  async index() {
    return data;
  }
  async getUser() {
    return data;
  }
}
module.exports = HomeService;
