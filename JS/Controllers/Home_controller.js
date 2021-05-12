"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home_controller = void 0;
const Controller_1 = require("./Controller");
const View_1 = require("../View");
class Home_controller extends Controller_1.Controller {
    default() {
        View_1.View.get().render("Home.njk");
    }
}
exports.Home_controller = Home_controller;
