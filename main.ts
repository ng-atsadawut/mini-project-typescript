import { getDayNameThai } from "./DayNameThai";
import { getDaysDifference } from "./DaysDifference";

const inputDate = "01/06/2024";
const dayName = getDayNameThai(inputDate);
const daysDifference = getDaysDifference(inputDate);

console.log(`${dayName} ${daysDifference}`);
