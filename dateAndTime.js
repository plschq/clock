function getDateAndTime() {
    let date = new Date();
    return [
        toLength(date.getFullYear(), 4),
        toLength(date.getMonth() + 1, 2),
        toLength(date.getDate(), 2),
        toLength(date.getHours(), 2),
        toLength(date.getMinutes(), 2),
        toLength(date.getSeconds(), 2),
        toLength(date.getMilliseconds(), 3)
    ];
}
function getWeekDayIndex() {
    let date = new Date();
    return date.getDay();
}
