//Script Start
var timeDate, timeAMPM, timeHour, timeMin, timeSec,
    del = -405,
    hh,
    mm,
    timeInMins,
    tt,
    spiritNow = "",
    step = 6400,
    sTreeTick1,
    fTreeTick1,
    cactiTick1,
    rTreeTick1,
    hTreeTick1,
    aTreeTick1,
    sTreeCdownHours, sTreeCdownMins, sTreeCdownSecs,
    cactiCdownHours, cactiCdownMins, cactiCdownSecs,
    fTreeCdownHours, fTreeCdownMins, fTreeCdownSecs,
    rTreeCdownHours, rTreeCdownMins, rTreeCdownSecs,
    herbCdownHours = "00",
    herbCdownMins, herbCdownSecs,
    allotCdownHours = "00",
    allotCdownMins, allotCdownSecs,
    theData,
    millis, millis1, millis2, millis3, millis4, millis5, millis6,
    hours, mins, secs,
    secs1, mins1, hours1,
    mins2, hours2,
    mins3, hours3,
    mins4, hours4,
    mins5, hours5,
    mins6, hours6,
    secs1, mins1, hours1,
    mins2, hours2,
    mins3, hours3,
    mins4, hours4,
    mins5, hours5,
    mins6, hours6;

function countDown() {
    "use strict";

    timeDate = new Date();
    timeAMPM = (timeDate.gethours >= 12) ? "PM" : "AM";
    timeHour = timeDate.getHours() % 12 || 12;
    timeMin = timeDate.getMinutes();
    if (timeMin === 0) {
        mm = 1;
    } else {
        mm = timeMin * 60;
    }
    timeSec = timeDate.getSeconds();
    timeInMins = (timeHour * 60) + timeMin;
    hh = timeHour * 60 * 60;
    tt = Math.floor((hh + mm + timeSec) / 30) + del;

    sTreeTick1 = step + 320 - timeInMins;
    fTreeTick1 = step + 160 - timeInMins;
    cactiTick1 = step + 80 - timeInMins;
    rTreeTick1 = step + 40 - timeInMins;
    hTreeTick1 = step + 20 - timeInMins;
    aTreeTick1 = step + 10 - timeInMins;

    //countdown for spirit tree tick
    step = 3200;
    while (timeInMins <= step) {
        step = step - 320;
    }
    sTreeTick1 = step + 320 - timeInMins;

    step = 6400;
    while (timeInMins <= step) {
        step = step - 160;
    }
    fTreeTick1 = step + 160 - timeInMins;
    //cacti 80 min cycles
    step = 6400;
    while (timeInMins <= step) {
        step = step - 80;
    }
    cactiTick1 = step + 80 - timeInMins;

    //reg tree 40 min cycles
    step = 6400;
    while (timeInMins <= step) {
        step = step - 40;
    }
    rTreeTick1 = step + 40 - timeInMins;
    //herb  20 min cycles
    step = 6400;
    while (timeInMins <= step) {
        step = step - 20;
    }
    hTreeTick1 = step + 20 - timeInMins;

    //allotment  10 min cycles
    step = 6400;
    while (timeInMins <= step) {
        step = step - 10;
    }
    aTreeTick1 = step + 10 - timeInMins;

    sTreeCdownHours = (sTreeTick1 * 60) - timeSec;
    if (sTreeCdownHours === 12) {
        sTreeCdownHours = '00';
    }
    sTreeCdownMins = (sTreeTick1 * 60) - timeSec;
    sTreeCdownSecs = (sTreeTick1 * 60) - timeSec;
    sTreeCdownSecs = ((sTreeCdownHours * 3600) + (sTreeCdownMins * 60) + sTreeCdownSecs) * 1000;
    //cacti
    cactiCdownHours = (cactiTick1 * 60) - timeSec;
    if (cactiCdownHours === 12) {
        cactiCdownHours = '00';
    }
    cactiCdownMins = (cactiTick1 * 60) - timeSec;
    cactiCdownSecs = (cactiTick1 * 60) - timeSec;
    cactiCdownSecs = ((cactiCdownHours * 3600) + (cactiCdownMins * 60) + cactiCdownSecs) * 1000;
    //fruit tree
    fTreeCdownHours = (fTreeTick1 * 60) - timeSec;
    if (fTreeCdownHours === 12) {
        fTreeCdownHours = '00';
    }
    fTreeCdownMins = (fTreeTick1 * 60) - timeSec;
    fTreeCdownSecs = (fTreeTick1 * 60) - timeSec;
    fTreeCdownSecs = ((fTreeCdownHours * 3600) + (fTreeCdownMins * 60) + fTreeCdownSecs) * 1000;
    //reg tree
    rTreeCdownHours = (rTreeTick1 * 60) - timeSec;
    if (rTreeCdownHours === 12) {
        rTreeCdownHours = '00';
    }
    rTreeCdownMins = (rTreeTick1 * 60) - timeSec;
    rTreeCdownSecs = (rTreeTick1 * 60) - timeSec;
    rTreeCdownSecs = ((rTreeCdownMins * 60) + rTreeCdownSecs) * 1000;
    //herb
    herbCdownHours = '00';
    herbCdownMins = (hTreeTick1 * 60) - timeSec;
    herbCdownSecs = (hTreeTick1 * 60) - timeSec;
    herbCdownSecs = ((herbCdownMins * 60) + herbCdownSecs) * 1000;
    //allotment
    allotCdownHours = '00';
    allotCdownMins = (aTreeTick1 * 60) - timeSec;
    if (allotCdownMins > 9) {
        allotCdownMins = '10';
        allotCdownSecs = '00';
    } else {
        allotCdownSecs = (aTreeTick1 * 60) - timeSec;
    }
    allotCdownSecs = ((allotCdownMins * 60) + allotCdownSecs) * 1000;

    millis1 = sTreeCdownSecs;
    millis2 = fTreeCdownSecs;
    millis3 = cactiCdownSecs;
    millis4 = rTreeCdownSecs;
    millis5 = herbCdownSecs;
    millis6 = allotCdownSecs;
    hours = (timeHour * 3600) * 1000;
    mins = timeMin * 60000;
    secs = timeSec * 1000;
    millis = hours + mins + secs;




    theData = "data: " + timeDate.toString().split(' ').splice(1, 3).join(' ');
    theData += "~" + timeHour + "~" + timeMin + "~" + timeSec + "~" + timeAMPM + "~" + sTreeCdownSecs;
    theData += "~" + fTreeCdownSecs + "~" + cactiCdownSecs;
    theData += "~" + rTreeCdownSecs + "~" + herbCdownSecs;
    theData += "~" + allotCdownSecs + "~" + tt;
    theData += "\n\n";


    //echo "data: The server time is: {$time}.n.n";
    hours = (timeHour * 3600) * 1000;
    mins = timeMin * 60000;
    secs = timeSec * 1000;
    millis = hours + mins + secs;
    millis1 = sTreeCdownSecs;
    millis2 = fTreeCdownSecs;
    millis3 = cactiCdownSecs;
    millis4 = rTreeCdownSecs;
    millis5 = herbCdownSecs;
    millis6 = allotCdownSecs;

    millis += 1000;
    millis1 -= 1000;
    millis2 -= 1000;
    millis3 -= 1000;
    millis4 -= 1000;
    millis5 -= 1000;
    millis6 -= 1000;

    if (millis1 > 19200000 || millis1 < 0) {
        millis1 = 19200000;
    }
    if (millis2 > 9600000 || millis2 < 0) {
        millis2 = 9600000;
    }
    if (millis3 > 4800000 || millis3 < 0) {
        millis3 = 4800000;
    }
    if (millis4 > 2400000 || millis4 < 0) {
        millis4 = 2400000;
    }
    if (millis5 > 1200000 || millis5 < 0) {
        millis5 = 1200000;
    }
    if (millis6 > 600000 || millis6 < 0) {
        millis6 = 600000;
    }

    hours1 = Math.floor(millis1 / 36e5);
    mins1 = Math.floor((millis1 % 36e5) / 6e4);
    secs1 = Math.floor((millis1 % 6e4) / 1000);
    hours2 = Math.floor(millis2 / 36e5);
    mins2 = Math.floor((millis2 % 36e5) / 6e4);
    hours3 = Math.floor(millis3 / 36e5);
    mins3 = Math.floor((millis3 % 36e5) / 6e4);
    hours4 = Math.floor(millis4 / 36e5);
    mins4 = Math.floor((millis4 % 36e5) / 6e4);
    hours5 = Math.floor(millis5 / 36e5);
    mins5 = Math.floor((millis5 % 36e5) / 6e4);
    hours6 = Math.floor(millis6 / 36e5);
    mins6 = Math.floor((millis6 % 36e5) / 6e4);
    hours = Math.floor(millis / 36e5);
    mins = Math.floor((millis % 36e5) / 6e4);
    secs = Math.floor((millis % 6e4) / 1000);
    secs1 = ('0' + (secs1)).slice(-2);
    mins1 = ('0' + (mins1)).slice(-2);
    hours1 = ('0' + (hours1)).slice(-2);
    mins2 = ('0' + (mins2)).slice(-2);
    hours2 = ('0' + (hours2)).slice(-2);
    mins3 = ('0' + (mins3)).slice(-2);
    hours3 = ('0' + (hours3)).slice(-2);
    mins4 = ('0' + (mins4)).slice(-2);
    hours4 = ('0' + (hours4)).slice(-2);
    mins5 = ('0' + (mins5)).slice(-2);
    hours5 = ('0' + (hours5)).slice(-2);
    mins6 = ('0' + (mins6)).slice(-2);
    hours6 = ('0' + (hours6)).slice(-2);
    secs = ('0' + (secs)).slice(-2);
    mins = ('0' + (mins)).slice(-2);
    hours = ('0' + (hours)).slice(-2);

    document.getElementById('count1').innerHTML = hours1 + ':' + mins1 + ':' + secs1;
    document.getElementById('count2').innerHTML = hours2 + ':' + mins2 + ':' + secs1;
    document.getElementById('count3').innerHTML = hours3 + ':' + mins3 + ':' + secs1;
    document.getElementById('count4').innerHTML = hours4 + ':' + mins4 + ':' + secs1;
    document.getElementById('count5').innerHTML = hours5 + ':' + mins5 + ':' + secs1;
    document.getElementById('count6').innerHTML = hours6 + ':' + mins6 + ':' + secs1;
    document.getElementById('currentHour').innerHTML = hours;
    document.getElementById('currentMin').innerHTML = mins;
    document.getElementById('currentSec').innerHTML = secs;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
    console.log(theData);
}
