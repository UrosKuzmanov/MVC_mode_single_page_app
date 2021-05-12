"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLParser = void 0;
class URLParser {
    constructor(hash) {
        this.hash = hash;
    }
    extractor() {
        const no_hash = this.hash.substring(1);
        if (no_hash.length == 0) {
            return [];
        }
        else {
            return no_hash.split("/");
        }
    }
    parser() {
        let pars = this.extractor();
        let controller = "home";
        let method = "default";
        let args = [];
        if (pars.length == 1) {
            controller = pars[0];
        }
        else if (pars.length == 2) {
            controller = pars[0];
            method = pars[1];
        }
        else if (pars.length > 2) {
            controller = pars.shift();
            method = pars.shift();
            args = pars;
        }
        return {
            "controller": controller,
            "method": method,
            "args": args
        };
    }
}
exports.URLParser = URLParser;
