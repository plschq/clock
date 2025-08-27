function toLength(s, l) {
    return '0'.repeat(l - s.toString().length) + s.toString();
}
function getDateTime() {
    const date = new Date();
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
function fillLabels() {
    const dateTimeArray = getDateTime();
    document.querySelector('span#time-hms').innerHTML = dateTimeArray[3] + ':' + dateTimeArray[4] + ':' + dateTimeArray[5];
    document.querySelector('span#time-ms').innerHTML = '.' + dateTimeArray[6][0];
    document.querySelector('span#date').innerHTML = dateTimeArray[0] + '-' + dateTimeArray[1] + '-' + dateTimeArray[2];
}
function changeBgColor() {
    document.querySelector('html').style.background = document.querySelector('input#bg-color-selector').value;
}
function changeBgImage() {
    document.querySelector('html').style.background = 'url(' + document.querySelector('input#bg-img-selector').value + ')';
    alert('url(' + document.querySelector('input#bg-img-selector').value + ')');
}
function changeFontColor() {
    document.querySelector('div#datetime-container').style.color = document.querySelector('input#font-color-selector').value;
}
function run() {
    document.querySelector('input#bg-color-selector').value = document.querySelector('html').style.background;
    document.querySelector('input#font-color-selector').value = document.querySelector('div#datetime-container').style.color;
    document.querySelector('input#bg-color-selector').oninput = changeBgColor;
    document.querySelector('input#font-color-selector').oninput = changeFontColor;
    document.querySelector('input#bg-img-selector').oninput = changeBgImage;
    setInterval(fillLabels, 50);
}
run()
