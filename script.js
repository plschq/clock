let millisecondsVisible = true;
let scrollbarVisible = true;

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
    if (document.querySelector('input#background-color-radio').checked) {
        document.querySelector('html').style.background = document.querySelector('input#background-color-selector').value;
    }
}
function changeBgGradient() {
    const degreesValue = document.querySelector('input#bg-gradient-selector-deg').value;
    const degreesInput = document.querySelector('input#bg-gradient-selector-deg');
    const color_1 = document.querySelector('input#bg-gradient-selector-1').value;
    const color_2 = document.querySelector('input#bg-gradient-selector-2').value;
    if (document.querySelector('input#background-gradient-radio').checked) {
        if (degreesValue > 360) {
            degreesInput.value = 360;
        } else if (degreesValue < 0) {
            degreesInput.value = 0;
        } else if (degreesValue === '') {
            degreesInput.value = '0';
        }
        document.querySelector('html').style.background = 'linear-gradient(' + degreesValue + 'deg, ' + color_1 + ', ' + color_2 + ')';
    }
}
function changeBgImage() {}
function changeFontColor() {
    const value = document.querySelector('input#font-color-selector').value;
    document.querySelector('div#datetime-container').style.color = value;
    document.querySelector('svg').style.color = value;
}
function millisecondsToggle() {
    const label = document.querySelector('span#time-ms');
    if (millisecondsVisible) {
        label.style.display = 'none';
        millisecondsVisible = false;
    } else if (!millisecondsVisible) {
        label.style.display = 'inline';
        millisecondsVisible = true;
    }
}
function scrollbarToggle() {
    const style = document.querySelector('head style#scrollbar-style');
    if (scrollbarVisible) {
        style.innerHTML = '::-webkit-scrollbar {display: none;}';
        scrollbarVisible = false;
    } else if (!scrollbarVisible) {
        style.innerHTML = '';
        scrollbarVisible = true;
    }
    
}


function startup() {
    document.querySelector('input#background-color-selector').oninput = changeBgColor;
    document.querySelector('input#background-color-radio').oninput = changeBgColor;
    document.querySelector('input#bg-gradient-selector-deg').oninput = changeBgGradient;
    document.querySelector('input#bg-gradient-selector-1').oninput = changeBgGradient;
    document.querySelector('input#bg-gradient-selector-2').oninput = changeBgGradient;
    document.querySelector('input#background-gradient-radio').oninput = changeBgGradient;
    document.querySelector('input#background-image-radio').oninput = changeBgImage;
    document.querySelector('input#background-image-selector').oninput = changeBgImage;
    document.querySelector('input#font-color-selector').oninput = changeFontColor;
    document.querySelector('input#show-ms-checkbox').oninput = millisecondsToggle;
    document.querySelector('input#hide-scrollbar-checkbox').oninput = scrollbarToggle;
    
    setInterval(fillLabels, 50);
}
function run() {
    startup();
}
run();
