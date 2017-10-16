//Script Start
var timeDate, timeAMPM, timeHour, timeMin, timeSec, timeHourDisplay,
    del = -405,
    step,
    hh, mm, tt,
    timeInMins,
    sTreeTick1, fTreeTick1, cactiTick1, rTreeTick1, hTreeTick1, aTreeTick1,
    sTreeCdownHours, sTreeCdownMins, sTreeCdownSecs,
    cactiCdownHours, cactiCdownMins, cactiCdownSecs,
    fTreeCdownHours, fTreeCdownMins, fTreeCdownSecs,
    rTreeCdownHours, rTreeCdownMins, rTreeCdownSecs,
    herbCdownHours, herbCdownMins, herbCdownSecs,
    allotCdownHours, allotCdownMins, allotCdownSecs,
    theData,
    hours, mins, secs,
    hours1, mins1, secs1,
    mins2, hours2, mins3, hours3, mins4, hours4, mins5, hours5, mins6, hours6,
    millis, millis1, millis2, millis3, millis4, millis5, millis6;

function countDown() {
    "use strict";

    timeDate = new Date();
    timeAMPM = (timeDate.getHours() >= 12) ? "PM" : "AM";
    timeHour = timeDate.getHours();
    timeHourDisplay = timeDate.getHours();
    if (timeHour < 12) { timeHour += 24; } else if (timeHour === 0) { timeHour = 12; }
    timeMin = timeDate.getMinutes();
    if (timeMin === 0) { mm = 1; } else { mm = timeMin * 60; }
    timeSec = timeDate.getSeconds();
    timeInMins = (timeHour * 60) + timeMin;

    hh = timeHour * 60 * 60;
    tt = Math.floor((hh + mm + timeSec) / 30) + del;

    //countdown for spirit tree tick
    step = 6400;
    while (timeInMins <= step) { step = step - 320; }
    sTreeTick1 = step + 320 - timeInMins;
    if (sTreeTick1 < 1) { sTreeTick1 = 320; }
    
    step = 6400;
    while (timeInMins <= step) { step = step - 160; }
    fTreeTick1 = step + 160 - timeInMins;
    if (fTreeTick1 < 1) { fTreeTick1 = 160; }
    
    //cacti 80 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 80; }
    cactiTick1 = step + 80 - timeInMins;
    if (cactiTick1 < 1) { cactiTick1 = 80; }
    
    //reg tree 40 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 40; }
    rTreeTick1 = step + 40 - timeInMins;
    if (rTreeTick1 < 1) { rTreeTick1 = 40; }
    
    //herb  20 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 20; }
    hTreeTick1 = step + 20 - timeInMins;
    if (hTreeTick1 < 1) { hTreeTick1 = 20; }
    
    //allotment  10 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 10; }
    aTreeTick1 = step + 10 - timeInMins;
    if (aTreeTick1 < 1) { aTreeTick1 = 10; }

    sTreeCdownHours = Math.floor((((sTreeTick1 * 60) - timeSec) / 3600));
    if (sTreeCdownHours === 12) { sTreeCdownHours = 0; }
    sTreeCdownMins = Math.floor(((((sTreeTick1 * 60) - timeSec) % 3600)) / 60);
    sTreeCdownSecs = ((sTreeTick1 * 60) - timeSec) % 60;
	sTreeCdownSecs = ((sTreeCdownHours * 3600) + (sTreeCdownMins * 60) + sTreeCdownSecs) * 1000;
    
    //cacti
    cactiCdownHours = Math.floor((((cactiTick1 * 60) - timeSec) / 3600));
    if (cactiCdownHours === 12) { cactiCdownHours = 0; }
    cactiCdownMins = Math.floor(((((cactiTick1 * 60) - timeSec) % 3600)) / 60);
    cactiCdownSecs = ((cactiTick1 * 60) - timeSec) % 60;
    cactiCdownSecs = ((cactiCdownHours * 3600) + (cactiCdownMins * 60) + cactiCdownSecs) * 1000;
    
    //fruit tree
    fTreeCdownHours = Math.floor((((fTreeTick1 * 60) - timeSec) / 3600));
    if (fTreeCdownHours === 12) { fTreeCdownHours = 0; }
    fTreeCdownMins = Math.floor((((fTreeTick1 * 60) - timeSec) % 3600) / 60);
    fTreeCdownSecs = ((fTreeTick1 * 60) - timeSec) % 60;
    fTreeCdownSecs = ((fTreeCdownHours * 3600) + (fTreeCdownMins * 60) + fTreeCdownSecs) * 1000;
    
    //reg tree
    rTreeCdownHours = Math.floor((((rTreeTick1 * 60) - timeSec) / 3600));
    if (rTreeCdownHours === 12) { rTreeCdownHours = 0; }
    rTreeCdownMins = Math.floor(((((rTreeTick1 * 60) - timeSec) % 3600)) / 60);
    rTreeCdownSecs = ((rTreeTick1 * 60) - timeSec) % 60;
    rTreeCdownSecs = ((rTreeCdownMins * 60) + rTreeCdownSecs) * 1000;
    
    //herb
    herbCdownHours = 0;
    herbCdownMins = Math.floor(((((hTreeTick1 * 60) - timeSec) % 3600)) / 60);
    herbCdownSecs = ((hTreeTick1 * 60) - timeSec) % 60;
    herbCdownSecs = ((herbCdownMins * 60) + herbCdownSecs) * 1000;
    
    //allotment
    allotCdownHours = 0;
    allotCdownMins = Math.floor(((((aTreeTick1 * 60) - timeSec) % 3600)) / 60);
    allotCdownSecs = ((aTreeTick1 * 60) - timeSec) % 60;
    allotCdownSecs = ((allotCdownMins * 60) + allotCdownSecs) * 1000;

    theData = "data: " + timeDate.toString().split(' ').splice(1, 3).join(' ');
    theData += "~" + timeHour + "~" + timeMin + "~" + timeSec + "~" + timeAMPM + "~" + sTreeCdownSecs;
    theData += "~" + fTreeCdownSecs + "~" + cactiCdownSecs;
    theData += "~" + rTreeCdownSecs + "~" + herbCdownSecs;
    theData += "~" + allotCdownSecs + "~" + tt;
    theData += "\n\n";

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

    if (millis1 > 19200000 || millis1 < 0) { millis1 = 19200000; }
    if (millis2 > 9600000 || millis2 < 0) { millis2 = 9600000; }
    if (millis3 > 4800000 || millis3 < 0) { millis3 = 4800000; }
    if (millis4 > 2400000 || millis4 < 0) { millis4 = 2400000; }
    if (millis5 > 1200000 || millis5 < 0) { millis5 = 1200000; }
    if (millis6 > 600000 || millis6 < 0) { millis6 = 600000; }
    
    secs1 = ('0' + (Math.floor((millis1 % 6e4) / 1000))).slice(-2);
    mins1 = ('0' + (Math.floor((millis1 % 36e5) / 6e4))).slice(-2);
    hours1 = ('0' + (Math.floor(millis1 / 36e5))).slice(-2);
    mins2 = ('0' + (Math.floor((millis2 % 36e5) / 6e4))).slice(-2);
    hours2 = ('0' + (Math.floor(millis2 / 36e5))).slice(-2);
    mins3 = ('0' + (Math.floor((millis3 % 36e5) / 6e4))).slice(-2);
    hours3 = ('0' + (Math.floor(millis3 / 36e5))).slice(-2);
    mins4 = ('0' + (Math.floor((millis4 % 36e5) / 6e4))).slice(-2);
    hours4 = ('0' + (Math.floor(millis4 / 36e5))).slice(-2);
    mins5 = ('0' + (Math.floor((millis5 % 36e5) / 6e4))).slice(-2);
    hours5 = ('0' + (Math.floor(millis5 / 36e5))).slice(-2);
    mins6 = ('0' + (Math.floor((millis6 % 36e5) / 6e4))).slice(-2);
    hours6 = ('0' + (Math.floor(millis6 / 36e5))).slice(-2);
    secs = ('0' + (Math.floor((millis % 6e4) / 1000))).slice(-2);
    mins = ('0' + (Math.floor((millis % 36e5) / 6e4))).slice(-2);
    hours = ('0' + (Math.floor(millis / 36e5))).slice(-2);

    document.getElementById('count1').innerHTML = hours1 + ':' + mins1 + ':' + secs1;
    document.getElementById('count2').innerHTML = hours2 + ':' + mins2 + ':' + secs1;
    document.getElementById('count3').innerHTML = hours3 + ':' + mins3 + ':' + secs1;
    document.getElementById('count4').innerHTML = hours4 + ':' + mins4 + ':' + secs1;
    document.getElementById('count5').innerHTML = hours5 + ':' + mins5 + ':' + secs1;
    document.getElementById('count6').innerHTML = hours6 + ':' + mins6 + ':' + secs1;
    document.getElementById('currentHour').innerHTML = timeHourDisplay;
    document.getElementById('currentMin').innerHTML = mins;
    document.getElementById('currentSec').innerHTML = secs;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
    console.log(theData);
}
