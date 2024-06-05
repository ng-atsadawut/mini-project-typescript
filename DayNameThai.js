"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayNameThai = void 0;
var DayOfWeekThai_1 = require("./DayOfWeekThai");
function getDayNameThai(dateString) {
    var _a = dateString.split('/').map(Number), day = _a[0], month = _a[1], year = _a[2];
    var date = new Date(year, month - 1, day);
    var dayIndex = date.getDay();
    return "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ".concat(day, "/").concat(month, "/").concat(year, " \u0E40\u0E1B\u0E47\u0E19").concat((0, DayOfWeekThai_1.getDayOfWeekThai)(dayIndex));
}
exports.getDayNameThai = getDayNameThai;
