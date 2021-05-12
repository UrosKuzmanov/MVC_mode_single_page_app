"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery_controller = void 0;
const Controller_1 = require("./Controller");
const View_1 = require("../View");
const Post_1 = require("../Models/Post");
class Gallery_controller extends Controller_1.Controller {
    default() {
        const all_gallery = Post_1.Post.all();
        View_1.View.get().render("Gallery.njk", {
            "gallery": all_gallery
        });
    }
}
exports.Gallery_controller = Gallery_controller;
