"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DayNameThai_1 = require("./DayNameThai");
var DaysDifference_1 = require("./DaysDifference");
var inputDate = "01/06/2024";
var dayName = (0, DayNameThai_1.getDayNameThai)(inputDate);
var daysDifference = (0, DaysDifference_1.getDaysDifference)(inputDate);
console.log("".concat(dayName, " ").concat(daysDifference));
