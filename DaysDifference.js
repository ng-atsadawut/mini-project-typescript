"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDaysDifference = void 0;
function getDaysDifference(dateString) {
    var _a = dateString.split('/').map(Number), day = _a[0], month = _a[1], year = _a[2];
    var currentDate = new Date();
    var inputDate = new Date(year, month - 1, day);
    var difference = Math.abs(currentDate.getTime() - inputDate.getTime());
    var daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return "\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32\u0E41\u0E25\u0E49\u0E27 ".concat(daysDifference, " \u0E27\u0E31\u0E19");
}
exports.getDaysDifference = getDaysDifference;
