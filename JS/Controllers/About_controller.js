"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About_controller = void 0;
const View_1 = require("../View");
const Controller_1 = require("./Controller");
class About_controller extends Controller_1.Controller {
    default() {
        View_1.View.get().render("About.njk");
    }
}
exports.About_controller = About_controller;
