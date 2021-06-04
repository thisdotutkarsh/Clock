window.onload = (event) => {
    setTime();
}

setInterval(setTime, 1000);

const hourHand = document.querySelector('[data-hourHand]');
const minuteHand = document.querySelector('[data-minuteHand]');
const secondHand = document.querySelector('[data-secondHand]');

function setTime() {
    const dateToday = new Date();

    const seconds = dateToday.getSeconds() / 60;
    const minutes = (seconds + dateToday.getMinutes()) / 60;
    const hours = (minutes + dateToday.getHours()) / 12;

    setRotationDegrees(secondHand, seconds);
    setRotationDegrees(minuteHand, minutes);
    setRotationDegrees(hourHand, hours);

}

function setRotationDegrees(clockHand, rotationDegree) {
    clockHand.style.setProperty('--clock-hands-rotation', rotationDegree * 360)
}

/*  Add functionality to modify styling   */

/*
    1. Function to modify clock hands.
    2. Function to modify clock dial.
*/