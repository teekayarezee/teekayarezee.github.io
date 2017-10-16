//Script Start
var timeDate, timeSec,
    sTreeTick1, fTreeTick1, cactiTick1, rTreeTick1, hTreeTick1, aTreeTick1,
    hours1, mins1, secs1, hours2, mins2, hours3, mins3, hours4, mins4, hours5, mins5, hours6, mins6;

function getSecsFromHours(input) { "use strict"; return Math.floor(((input * 60) - timeSec) / 3600); }
function getSecsFromMins(input) { "use strict"; return Math.floor((((input * 60) - timeSec) % 3600) / 60); }
function getSecsFromTick(input) { "use strict"; return ((input * 60) - timeSec) % 60; }
function getSecs(input, input2, input3) { "use strict"; return ((input * 3600) + (input2 * 60) + getSecsFromTick(input3)) * 1000; }
function updateElement(c, h, m, s) { "use strict"; document.getElementById(c).innerHTML = h + ':' + m + ':' + s; }

function countDown() {
    "use strict";
    
    var t0 = performance.now();
    timeDate = new Date();
    timeSec = timeDate.getSeconds();
    var timeAMPM = (timeDate.getHours() >= 12) ? "PM" : "AM",
        timeHourD = timeDate.getHours(),
        timeHour = (timeDate.getHours() < 12) ? timeDate.getHours() + 24 : (timeDate.getHours() === 0) ? 12 : timeDate.getHours(),
        timeMin = timeDate.getMinutes(),
        timeInMins = (timeHour * 60) + timeMin,
        hh = timeHour * 60 * 60,
        mm = (timeMin === 0) ? 1 : timeMin * 60,
        tt = Math.floor((hh + mm + timeSec) / 30) + -405,
        step = 6400;
    
    //Spirit Tree 320 min cycles
    while (timeInMins <= step) { step -= 320; }
    sTreeTick1 = step + 320 - timeInMins;
    if (sTreeTick1 < 1) { sTreeTick1 = 320; }
    
    //Fruit tree 160 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 160; }
    fTreeTick1 = step + 160 - timeInMins;
    if (fTreeTick1 < 1) { fTreeTick1 = 160; }

    //Cacti 80 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 80; }
    cactiTick1 = step + 80 - timeInMins;
    if (cactiTick1 < 1) { cactiTick1 = 80; }

    //Reg tree 40 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 40; }
    rTreeTick1 = step + 40 - timeInMins;
    if (rTreeTick1 < 1) { rTreeTick1 = 40; }

    //Herb  20 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 20; }
    hTreeTick1 = step + 20 - timeInMins;
    if (hTreeTick1 < 1) { hTreeTick1 = 20; }

    //Allotment  10 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 10; }
    aTreeTick1 = step + 10 - timeInMins;
    if (aTreeTick1 < 1) { aTreeTick1 = 10; }
    
        //Spirit Tree
    var sTreeCdownHours = (getSecsFromHours(sTreeTick1) === 12) ? 0 : getSecsFromHours(sTreeTick1),
        sTreeCdownMins = getSecsFromMins(sTreeTick1),
        sTreeCdownSecs = getSecs(sTreeCdownHours, sTreeCdownMins, sTreeTick1),
        //Cacti
        cactiCdownHours = (getSecsFromHours(cactiTick1) === 12) ? 0 : getSecsFromHours(cactiTick1),
        cactiCdownMins = getSecsFromMins(cactiTick1),
        cactiCdownSecs = getSecs(cactiCdownHours, cactiCdownMins, cactiTick1),
        //Fruit tree
        fTreeCdownHours = (getSecsFromHours(fTreeTick1) === 12) ? 0 : getSecsFromHours(fTreeTick1),
        fTreeCdownMins = getSecsFromMins(fTreeTick1),
        fTreeCdownSecs = getSecs(fTreeCdownHours, fTreeCdownMins, fTreeTick1),
        //Reg tree
        rTreeCdownHours = (getSecsFromHours(rTreeTick1) === 12) ? 0 : getSecsFromHours(rTreeTick1),
        rTreeCdownMins = getSecsFromMins(rTreeTick1),
        rTreeCdownSecs = getSecs(rTreeCdownHours, rTreeCdownMins, rTreeTick1),
        //Herb
        herbCdownMins = getSecsFromMins(hTreeTick1),
        herbCdownSecs = getSecs(0, herbCdownMins, hTreeTick1),
        //Allotment
        allotCdownMins = getSecsFromMins(aTreeTick1),
        allotCdownSecs = getSecs(0, allotCdownMins, aTreeTick1),
        
        millis = ((timeHour * 3600) * 1000) + ((timeMin * 60) * 1000) + (timeSec * 1000) + 1000,
        millis1 = (sTreeCdownSecs > 192e5 || sTreeCdownSecs < 0) ? 192e5 : sTreeCdownSecs,
        millis2 = (fTreeCdownSecs > 96e5 || fTreeCdownSecs < 0) ? 96e5 : fTreeCdownSecs,
        millis3 = (cactiCdownSecs > 48e5 || cactiCdownSecs < 0) ? 48e5 : cactiCdownSecs,
        millis4 = (rTreeCdownSecs > 24e5 || rTreeCdownSecs < 0) ? 24e5 : rTreeCdownSecs,
        millis5 = (herbCdownSecs > 12e5 || herbCdownSecs < 0) ? 12e5 : herbCdownSecs,
        millis6 = (allotCdownSecs > 6e5 || allotCdownSecs < 0) ? 6e5 : allotCdownSecs;

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

    updateElement("count1", hours1, mins1, secs1);
    updateElement("count2", hours2, mins2, secs1);
    updateElement("count3", hours3, mins3, secs1);
    updateElement("count4", hours4, mins4, secs1);
    updateElement("count5", hours5, mins5, secs1);
    updateElement("count6", hours6, mins6, secs1);
    document.getElementById('currentHour').innerHTML = timeHourD;
    document.getElementById('currentMin').innerHTML = timeMin;
    document.getElementById('currentSec').innerHTML = timeSec;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
    
    var t1 = performance.now();
    
    console.log("Call to countDown() took " + (t1 - t0).toFixed(4) + " milliseconds.");
    
    //var theData = "data: " + timeDate.toString().split(' ').splice(1, 3).join(' ');
    //theData += "~" + timeHour + "~" + timeMin + "~" + timeSec + "~" + timeAMPM + "~" + sTreeCdownSecs;
    //theData += "~" + fTreeCdownSecs + "~" + cactiCdownSecs;
    //theData += "~" + rTreeCdownSecs + "~" + herbCdownSecs;
    //theData += "~" + allotCdownSecs + "~" + tt;
    //theData += "\n\n";
    //console.log(theData);
}