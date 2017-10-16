//Script Start
var timeDate, timeAMPM, timeHour, timeMin, timeSec, timeHourDisplay, input, input2, input3,
    hh, mm, timeInMins, tt, step,
    sTreeTick1, fTreeTick1, cactiTick1, rTreeTick1, hTreeTick1, aTreeTick1,
    sTreeCdownHours, sTreeCdownMins, sTreeCdownSecs,
    cactiCdownHours, cactiCdownMins, cactiCdownSecs,
    fTreeCdownHours, fTreeCdownMins, fTreeCdownSecs,
    rTreeCdownHours, rTreeCdownMins, rTreeCdownSecs,
    herbCdownHours, herbCdownMins, herbCdownSecs,
    allotCdownHours, allotCdownMins, allotCdownSecs,
    hours1, mins1, secs1, hours2, mins2, hours3, mins3, hours4, mins4, hours5, mins5, hours6, mins6,
    millis, millis1, millis2, millis3, millis4, millis5, millis6;

function getSecsFromHours(input) { "use strict"; return Math.floor(((input * 60) - timeSec) / 3600); }
function getSecsFromMins(input) { "use strict"; return Math.floor((((input * 60) - timeSec) % 3600) / 60); }
function getSecsFromTick(input) { "use strict"; return ((input * 60) - timeSec) % 60; }
function getSecs(input, input2, input3) { "use strict"; return ((input * 3600) + (input2 * 60) + getSecsFromTick(input3)) * 1000; }

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
    tt = Math.floor((hh + mm + timeSec) / 30) + -405;

    //Spirit Tree 320 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 320; }
    sTreeTick1 = step + 320 - timeInMins;
    if (sTreeTick1 < 1) { sTreeTick1 = 320; }

    //Fruit tree 160 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 160; }
    fTreeTick1 = step + 160 - timeInMins;
    if (fTreeTick1 < 1) { fTreeTick1 = 160; }

    //Cacti 80 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 80; }
    cactiTick1 = step + 80 - timeInMins;
    if (cactiTick1 < 1) { cactiTick1 = 80; }

    //Reg tree 40 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 40; }
    rTreeTick1 = step + 40 - timeInMins;
    if (rTreeTick1 < 1) { rTreeTick1 = 40; }

    //Herb  20 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 20; }
    hTreeTick1 = step + 20 - timeInMins;
    if (hTreeTick1 < 1) { hTreeTick1 = 20; }

    //Allotment  10 min cycles
    step = 6400;
    while (timeInMins <= step) { step = step - 10; }
    aTreeTick1 = step + 10 - timeInMins;
    if (aTreeTick1 < 1) { aTreeTick1 = 10; }

    //Spirit Tree
    sTreeCdownHours = getSecsFromHours(sTreeTick1);
    if (sTreeCdownHours === 12) { sTreeCdownHours = 0; }
    sTreeCdownMins = getSecsFromMins(sTreeTick1);
    sTreeCdownSecs = getSecs(sTreeCdownHours, sTreeCdownMins, sTreeTick1);

    //Cacti
    cactiCdownHours = getSecsFromHours(cactiTick1);
    if (cactiCdownHours === 12) { cactiCdownHours = 0; }
    cactiCdownMins = getSecsFromMins(cactiTick1);
    cactiCdownSecs = getSecs(cactiCdownHours, cactiCdownMins, cactiTick1);

    //Fruit tree
    fTreeCdownHours = getSecsFromHours(fTreeTick1);
    if (fTreeCdownHours === 12) { fTreeCdownHours = 0; }
    fTreeCdownMins = getSecsFromMins(fTreeTick1);
    fTreeCdownSecs = getSecs(fTreeCdownHours, fTreeCdownMins, fTreeTick1);

    //Reg tree
    rTreeCdownHours = getSecsFromHours(rTreeTick1);
    if (rTreeCdownHours === 12) { rTreeCdownHours = 0; }
    rTreeCdownMins = getSecsFromMins(rTreeTick1);
    rTreeCdownSecs = getSecs(rTreeCdownHours, rTreeCdownMins, rTreeTick1);

    //Herb
    herbCdownHours = 0;
    herbCdownMins = getSecsFromMins(hTreeTick1);
    herbCdownSecs = getSecs(herbCdownHours, herbCdownMins, hTreeTick1);

    //Allotment
    allotCdownHours = 0;
    allotCdownMins = getSecsFromMins(aTreeTick1);
    allotCdownSecs = ((allotCdownMins * 60) + getSecsFromTick(aTreeTick1)) * 1000;

    millis = ((timeHour * 3600) * 1000) + ((timeMin * 60) * 1000) + (timeSec * 1000) + 1000;
    millis1 = sTreeCdownSecs;
    millis2 = fTreeCdownSecs;
    millis3 = cactiCdownSecs;
    millis4 = rTreeCdownSecs;
    millis5 = herbCdownSecs;
    millis6 = allotCdownSecs;

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

    document.getElementById('count1').innerHTML = hours1 + ':' + mins1 + ':' + secs1;
    document.getElementById('count2').innerHTML = hours2 + ':' + mins2 + ':' + secs1;
    document.getElementById('count3').innerHTML = hours3 + ':' + mins3 + ':' + secs1;
    document.getElementById('count4').innerHTML = hours4 + ':' + mins4 + ':' + secs1;
    document.getElementById('count5').innerHTML = hours5 + ':' + mins5 + ':' + secs1;
    document.getElementById('count6').innerHTML = hours6 + ':' + mins6 + ':' + secs1;
    document.getElementById('currentHour').innerHTML = timeHourDisplay;
    document.getElementById('currentMin').innerHTML = timeMin;
    document.getElementById('currentSec').innerHTML = timeSec;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
    
    //var theData = "data: " + timeDate.toString().split(' ').splice(1, 3).join(' ');
    //theData += "~" + timeHour + "~" + timeMin + "~" + timeSec + "~" + timeAMPM + "~" + sTreeCdownSecs;
    //theData += "~" + fTreeCdownSecs + "~" + cactiCdownSecs;
    //theData += "~" + rTreeCdownSecs + "~" + herbCdownSecs;
    //theData += "~" + allotCdownSecs + "~" + tt;
    //theData += "\n\n";
    //console.log(theData);
}
