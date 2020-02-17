/*
    //Write a JavaScript program to display the current day and time in the following format.
    Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/


let date = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let curDay = 'Current Day is : ' + days[date.getDay()];
console.log(curDay)


let hour = date.getHours();
hour = (hour > 12) ? hour - 12 : hour;
let minute = date.getMinutes();
minute = (minute < 10) ? '0' + minute  : minute;
let secon = date.getSeconds();
secon = (secon < 10) ? '0' + secon : secon;
let prepend = (hour >= 12) ? 'PM' : 'AM'

if (hour === 0 && prepend === 'PM') {
    if (minute === 0 && secon === 0) {
        hour = 12;
        prepend = 'NOON'
    } else {
        hour = 12;
        prepend = 'PM'
    }
}
if(hour === 0 && prepend === 'AM') {
    if(minute === 0 && secon === 0){
        hour = 12;
        prepend = 'Night';
    } else {
        hour = 12;
        prepend = 'AM'
    }
}
let curTime = 'Current Time is : ' +  hour + ' ' + prepend + ' : ' + minute + ' : ' + secon;
console.log(curTime)