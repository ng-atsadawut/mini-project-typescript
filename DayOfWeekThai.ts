export function getDayOfWeekThai(dayIndex: number): string {
    const daysOfWeek = [
        'วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'
    ];

    return daysOfWeek[dayIndex];
}
