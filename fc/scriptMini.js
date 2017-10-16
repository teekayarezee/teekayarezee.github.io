//Script Start
var e, t, c, timeDate, timeSec,
    sTreeTick1, fTreeTick1, cactiTick1, rTreeTick1, hTreeTick1, aTreeTick1,
    sTreeCDHours, sTreeCDMins, sTreeCDSecs,
    cactiCDHours, cactiCDMins, cactiCDSecs,
    fTreeCDHours, fTreeCDMins, fTreeCDSecs,
    rTreeCDHours, rTreeCDMins, rTreeCDSecs,
    herbCDHours, herbCDMins, herbCDSecs,
    allotCDHours, allotCDMins, allotCDSecs,
    hours1, mins1, secs1, hours2, mins2, hours3, mins3, hours4, mins4, hours5, mins5, hours6, mins6,
    millis, millis1, millis2, millis3, millis4, millis5, millis6;

function getSecsFromHours(e) { "use strict"; return Math.floor(((e * 60) - timeSec) / 3600); }
function getSecsFromMins(e) { "use strict"; return Math.floor((((e * 60) - timeSec) % 3600) / 60); }
function getSecsFromTick(e) { "use strict"; return ((e * 60) - timeSec) % 60; }
function getSecs(e, t, c) { "use strict"; return ((e * 3600) + (t * 60) + getSecsFromTick(c)) * 1e3; }

function countDown() {
    "use strict";
    
    var t0 = performance.now();
    timeDate = new Date();
    timeSec = timeDate.getSeconds();
    var timeAMPM = (timeDate.getHours() >= 12) ? "PM" : "AM",
        timeHourD = timeDate.getHours(),
        timeHour = timeDate.getHours() < 12 ? timeDate.getHours() + 24 : timeDate.getHours() === 0 ? 12 : timeDate.getHours(),
        timeMin = timeDate.getMinutes(),
        timeInMins = (timeHour * 60) + timeMin,
        hh = timeHour * 60 * 60,
        mm = (timeMin === 0) ? 1 : timeMin * 60,
        tt = Math.floor((hh + mm + timeSec) / 30) + -405,
        step = 6400;
    
    //Spirit Tree 320 min cycles
    while (timeInMins <= step) { step -= 320; }
    sTreeTick1=step+320-timeInMins,sTreeTick1<1&&(sTreeTick1=320);
    
    //Fruit tree 160 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 160; }
    fTreeTick1=step+160-timeInMins,fTreeTick1<1&&(fTreeTick1=160);
    
    //Cacti 80 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 80; }
    cactiTick1=step+80-timeInMins,cactiTick1<1&&(cactiTick1=80);

    //Reg tree 40 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 40; }
    rTreeTick1=step+40-timeInMins,rTreeTick1<1&&(rTreeTick1=40);

    //Herb  20 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 20; }
    hTreeTick1=step+20-timeInMins,hTreeTick1<1&&(hTreeTick1=20);

    //Allotment  10 min cycles
    step = 6400;
    while (timeInMins <= step) { step -= 10; }
    aTreeTick1=step+10-timeInMins,aTreeTick1<1&&(aTreeTick1=10);

    //Spirit Tree
    sTreeCDHours = getSecsFromHours(sTreeTick1);
    if (sTreeCDHours === 12) { sTreeCDHours = 0; }
    sTreeCDMins = getSecsFromMins(sTreeTick1);
    sTreeCDSecs = getSecs(sTreeCDHours, sTreeCDMins, sTreeTick1);

    //Cacti
    cactiCDHours = getSecsFromHours(cactiTick1);
    if (cactiCDHours === 12) { cactiCDHours = 0; }
    cactiCDMins = getSecsFromMins(cactiTick1);
    cactiCDSecs = getSecs(cactiCDHours, cactiCDMins, cactiTick1);

    //Fruit tree
    fTreeCDHours = getSecsFromHours(fTreeTick1);
    if (fTreeCDHours === 12) { fTreeCDHours = 0; }
    fTreeCDMins = getSecsFromMins(fTreeTick1);
    fTreeCDSecs = getSecs(fTreeCDHours, fTreeCDMins, fTreeTick1);

    //Reg tree
    rTreeCDHours = getSecsFromHours(rTreeTick1);
    if (rTreeCDHours === 12) { rTreeCDHours = 0; }
    rTreeCDMins = getSecsFromMins(rTreeTick1);
    rTreeCDSecs = getSecs(rTreeCDHours, rTreeCDMins, rTreeTick1);

    //Herb
    herbCDHours = 0;
    herbCDMins = getSecsFromMins(hTreeTick1);
    herbCDSecs = getSecs(herbCDHours, herbCDMins, hTreeTick1);

    //Allotment
    allotCDHours = 0;
    allotCDMins = getSecsFromMins(aTreeTick1);
    allotCDSecs = ((allotCDMins * 60) + getSecsFromTick(aTreeTick1)) * 1000;

    millis = ((timeHour * 3600) * 1000) + ((timeMin * 60) * 1000) + (timeSec * 1000) + 1000;
    millis1 = sTreeCDSecs;
    millis2 = fTreeCDSecs;
    millis3 = cactiCDSecs;
    millis4 = rTreeCDSecs;
    millis5 = herbCDSecs;
    millis6 = allotCDSecs;

    if (millis1 > 192e5 || millis1 < 0) { millis1 = 192e5; }
    if (millis2 > 96e5 || millis2 < 0) { millis2 = 96e5; }
    if (millis3 > 48e5 || millis3 < 0) { millis3 = 48e5; }
    if (millis4 > 24e5 || millis4 < 0) { millis4 = 24e5; }
    if (millis5 > 12e5 || millis5 < 0) { millis5 = 12e5; }
    if (millis6 > 6e5 || millis6 < 0) { millis6 = 6e5; }

    secs1 = ('0' + (Math.floor((millis1 % 6e4) / 1e3))).slice(-2);
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
    document.getElementById('currentHour').innerHTML = timeHourD;
    document.getElementById('currentMin').innerHTML = timeMin;
    document.getElementById('currentSec').innerHTML = timeSec;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
    
    var t1 = performance.now();
    
    console.log("Call to countDown() took " + (t1 - t0).toFixed(4) + " milliseconds.");
    
    //var theData = "data: " + timeDate.toString().split(' ').splice(1, 3).join(' ');
    //theData += "~" + timeHour + "~" + timeMin + "~" + timeSec + "~" + timeAMPM + "~" + sTreeCDSecs;
    //theData += "~" + fTreeCDSecs + "~" + cactiCDSecs;
    //theData += "~" + rTreeCDSecs + "~" + herbCDSecs;
    //theData += "~" + allotCDSecs + "~" + tt;
    //theData += "\n\n";
    //console.log(theData);
}