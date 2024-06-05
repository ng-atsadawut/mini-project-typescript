"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDayOfWeekThai = void 0;
function getDayOfWeekThai(dayIndex) {
    var daysOfWeek = [
        'วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'
    ];
    return daysOfWeek[dayIndex];
}
exports.getDayOfWeekThai = getDayOfWeekThai;
