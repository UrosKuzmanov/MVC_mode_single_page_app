"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const Home_controller_1 = require("./Controllers/Home_controller");
const Post_controller_1 = require("./Controllers/Post_controller");
const About_controller_1 = require("./Controllers/About_controller");
const Gallery_controller_1 = require("./Controllers/Gallery_controller");
class Router {
    constructor() {
        this.registry = {
            "home": new Home_controller_1.Home_controller,
            "posts": new Post_controller_1.Post_controller,
            "about": new About_controller_1.About_controller,
            "gallery": new Gallery_controller_1.Gallery_controller,
        };
    }
    static get() {
        if (Router.instance == undefined || Router.instance == null) {
            Router.instance = new Router;
        }
        return Router.instance;
    }
    call(parser) {
        const controller = parser.controller;
        if (!(controller in this.registry)) {
            throw new Error("Eror 404 Page not founded");
        }
        if (parser.args.length == 0) {
            this.registry[controller][parser.method]();
        }
        else {
            this.registry[controller][parser.method](parser.args);
        }
    }
}
exports.Router = Router;
