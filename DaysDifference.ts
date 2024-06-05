export function getDaysDifference(dateString: string): string {
    const [day, month, year] = dateString.split('/').map(Number);
    const currentDate = new Date();
    const inputDate = new Date(year, month - 1, day);
    const difference = Math.abs(currentDate.getTime() - inputDate.getTime());
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return `ผ่านมาแล้ว ${daysDifference} วัน`;
}
