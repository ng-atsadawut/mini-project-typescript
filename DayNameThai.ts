import { getDayOfWeekThai } from "./DayOfWeekThai";

export function getDayNameThai(dateString: string): string {
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const dayIndex = date.getDay();
    return `วันที่ ${day}/${month}/${year} เป็น${getDayOfWeekThai(dayIndex)}`;
}
