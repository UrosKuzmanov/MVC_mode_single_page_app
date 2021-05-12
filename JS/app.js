"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URLParser_1 = require("./URLParser");
const Router_1 = require("./Router");
const View_1 = require("./View");
function main() {
    const hash = window.location.hash;
    const parse = new URLParser_1.URLParser(hash).parser();
    Router_1.Router.get().call(parse);
}
function filter_date_event(e) {
    const input_category = document.querySelector("#category");
    const input_from_date = document.querySelector("#from_date");
    const input_to_date = document.querySelector("#to_date");
    console.log(input_category.value);
    const hash = `#posts/search/${input_from_date.value}/${input_to_date.value}/${input_category.value}`;
    const parse = new URLParser_1.URLParser(hash).parser();
    Router_1.Router.get().call(parse);
    window.location.hash = hash;
}
function global_click_listener(e) {
    if (e.target.tagName == "A" && e.target.getAttribute("href").startsWith("#")) {
        const hash = e.target.getAttribute("href");
        const parse = new URLParser_1.URLParser(hash).parser();
        Router_1.Router.get().call(parse);
        console.log("uros");
    }
    if (e.target.id == "filter_btn") {
        filter_date_event(e);
    }
}
//***********************select app output****************************
View_1.View.get().get_app_element(".app_div");
//--------------------------------------------------------------------
main();
document.body.onclick = global_click_listener;
