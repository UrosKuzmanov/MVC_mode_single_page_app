"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert_date = void 0;
class Convert_date {
    static convert(date) {
        return new Date(date);
    }
    static convert_date_dot(date) {
        const date_arr = date.split(".");
        const date_minus = `${date_arr[2]}-${date_arr[1]}-${date_arr[0]}`;
        return Convert_date.convert(date_minus);
    }
}
exports.Convert_date = Convert_date;
