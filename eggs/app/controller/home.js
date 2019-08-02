'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await this.service.home.index();
  }
  async getUser() {
    const { ctx } = this;
    ctx.body = await this.service.home.getUser();
  }
}

module.exports = HomeController;
