"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const _post_data_1 = require("../Data/_post_data");
const Date_string_util_1 = require("../Date_string_util");
class Post {
    constructor(data) {
        this.id = 0;
        this.img = "";
        this.title = "";
        this.content = "";
        this.publish_date = "";
        this.country = "";
        if (data != undefined) {
            this.id = data.id;
            this.img = data.img;
            this.title = data.title;
            this.content = data.content;
            this.publish_date = data.publish_date;
            this.country = data.country;
        }
    }
    static all() {
        const posts_obj = [];
        //logic for DB/service
        for (let post of _post_data_1.posts) {
            posts_obj.push(new Post(post));
        }
        return posts_obj;
    }
    static one_post(id) {
        let post_obj = {};
        for (let post of _post_data_1.posts) {
            if (post.id == id) {
                post_obj = post;
                break;
            }
        }
        return post_obj;
    }
    static filter_posts(start_date = "", end_date = "", category = "0") {
        const start_post_obj = Date_string_util_1.Convert_date.convert(start_date);
        const end_post_obj = Date_string_util_1.Convert_date.convert(end_date);
        let posts_obj = [];
        const posts_obj_filter_date = [];
        if (start_date != "" && end_date != "") {
            for (let post of _post_data_1.posts) {
                let publish_date = Date_string_util_1.Convert_date.convert_date_dot(post.publish_date);
                if (publish_date > start_post_obj && publish_date < end_post_obj) {
                    posts_obj_filter_date.push(new Post(post));
                }
            }
        }
        else {
            for (let post of _post_data_1.posts) {
                posts_obj_filter_date.push(new Post(post));
            }
        }
        if (category != "0") {
            for (let post of posts_obj_filter_date) {
                if (post.country == category) {
                    posts_obj.push(post);
                }
            }
        }
        else {
            posts_obj = posts_obj_filter_date;
        }
        return posts_obj;
    }
    static get_category() {
        const categories = [];
        for (let post of _post_data_1.posts) {
            let category_found = false;
            for (let category of categories) {
                if (post.country == category) {
                    category_found = true;
                    break;
                }
            }
            if (!category_found) {
                categories.push(post.country);
            }
        }
        for (let i = 0; i < categories.length - 1; i++) { //*********sort category*********
            for (let j = i + 1; j < categories.length; j++) {
                if (categories[i].localeCompare(categories[j]) == 1) {
                    let tmp = categories[i];
                    categories[i] = categories[j];
                    categories[j] = tmp;
                }
            }
        }
        return categories;
    }
}
exports.Post = Post;
