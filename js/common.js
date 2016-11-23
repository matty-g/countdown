/**
 * Created by mattg on 23/11/16.
 */


// variables

var myInterval;
var depart; // date we depart
var initDate; // date to start the calc from
var daysDiff;
var pic;
var numMsInDays = 1000 * 60 * 60 * 24;


function convertMSToDate(msVal){

    var totDays = 86400000;
    var totHrs = 3600000;
    var totMins = 60000;
    var totSecs = 1000;


    var days = Math.floor(msVal / totDays);
    msVal = msVal - (totDays * days);

    var hours = Math.floor((msVal / totHrs) % 24);
    msVal = msVal - (totHrs * hours);

    var mins = Math.floor((msVal / totMins) % 60);
    msVal = msVal - (totMins * mins);

    var secs = Math.floor((msVal / totSecs) % 60);
    msVal = msVal - (totSecs * secs);

    //console.log("secs remaining should be zero - it is: " + msVal);

    return days + " days, " + hours +" hours, " + mins + " mins, " + secs + " secs...";

}


function calcTimeRemaining() {


    var present = new Date(); // right now
    var remainingTime = depart - present;

    // convert milliseconds amount into number of days
    var days_remaining = Math.floor(remainingTime / numMsInDays);

    // update label with remaining time
    document.getElementById('counter').innerHTML = convertMSToDate(remainingTime);

    // calculate opacity of image based on remaining time
    var opacity = 1/(daysDiff/(daysDiff - (daysDiff - (present-initDate))));

    console.log(opacity)

    pic.style.opacity = opacity;

    console.log("img opacity is: " + opacity);

    if (opacity >= 1) {
        myInterval = 0;
    }

    return;

}


function init() {
    depart = new Date("Fri, 25 November 2016, 20:30:00");
    initDate = new Date("Mon, 21 November, 2016, 12:00:00");
    daysDiff = depart - initDate;
}