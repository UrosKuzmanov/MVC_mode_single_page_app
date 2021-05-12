"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post_controller = void 0;
const Controller_1 = require("./Controller");
const View_1 = require("../View");
const Post_1 = require("../Models/Post");
class Post_controller extends Controller_1.Controller {
    default() {
        this.all();
    }
    all() {
        const all_posts = Post_1.Post.all();
        const categories = Post_1.Post.get_category();
        View_1.View.get().render("Posts.njk", { "posts": all_posts, "categories": categories });
    }
    view(args) {
        const post = Post_1.Post.one_post(Number(args[0]));
        View_1.View.get().render("Post.njk", {
            "post": post
        });
    }
    search(args) {
        const posts = Post_1.Post.filter_posts(args[0], args[1], args[2]);
        const categories = Post_1.Post.get_category();
        View_1.View.get().render("Posts.njk", {
            "posts": posts,
            "categories": categories
        });
    }
}
exports.Post_controller = Post_controller;
