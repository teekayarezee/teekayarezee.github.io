//  _____ _        _____
// |_   _| | ___ _|__  /
//   | | | |/ / '__|/ / 
//   | | |   <| |  / /_ 
//   |_| |_|\_\_| /____|
//
// Farming Tick Timer/Clock/Calculator 
// PHP -> HTML/JS Re-write
//
// Original Author: Indecent Act
//                  @RSLinkify
// Author:          TkrZ / Irobot335
//                  @TkrZ


// Preliminary functions
function getSecsFromHours(a, t) { "use strict"; return Math.floor(((a * 60) - t) / 3600); }
function getSecsFromMins(a, t) { "use strict"; return Math.floor((((a * 60) - t) % 3600) / 60); }
function getSecsFromTick(a, t) { "use strict"; return ((a * 60) - t) % 60; }
function getSecs(a, b, c, t) { "use strict"; return ((a * 3600) + (b * 60) + getSecsFromTick(c, t)) * 1e3; }
function setTick(a, t) { "use strict"; var o, step = 6400; while (t <= step) { step -= a; } o = step + a - t; if (o < 1) { o = a; } return o; }
function updateElement(c, h, m, s) { "use strict"; document.getElementById(c).innerHTML = h + ':' + m + ':' + s; }
function getCDHours(s, t) { "use strict"; return (getSecsFromHours(s, t) === 12) ? 0 : getSecsFromHours(s, t); }

// Main Function
function countDown() {
    "use strict";
    
    var timeDate = new Date(),
        timeAMPM = (timeDate.getHours() >= 12) ? "PM" : "AM",
        timeSec = timeDate.getSeconds(),
        timeHourD = timeDate.getHours(),
        timeHour = (timeDate.getHours() < 12) ? timeDate.getHours() + 24 : (timeDate.getHours() === 0) ? 12 : timeDate.getHours(),
        timeMin = timeDate.getMinutes(),
        timeInMins = (timeHour * 60) + timeMin,
        hh = timeHour * 60 * 60,
        mm = timeMin === 0 ? 1 : timeMin * 60,
        tt = Math.floor((hh + mm + timeSec) / 30) + -405,
    
        //Spirit Tree 320 min cycles
        sTreeTick1 = setTick(320, timeInMins),
        sTreeCDHours = getCDHours(sTreeTick1, timeSec),
        sTreeCDMins = getSecsFromMins(sTreeTick1, timeSec),
        sTreeCDSecs = getSecs(sTreeCDHours, sTreeCDMins, sTreeTick1, timeSec),
        //Cacti 80 min cycles
        cactiTick1 = setTick(80, timeInMins),
        cactiCDHours = getCDHours(cactiTick1, timeSec),
        cactiCDMins = getSecsFromMins(cactiTick1, timeSec),
        cactiCDSecs = getSecs(cactiCDHours, cactiCDMins, cactiTick1, timeSec),
        //Fruit tree 160 min cycles
        fTreeTick1 = setTick(160, timeInMins),
        fTreeCDHours = getCDHours(fTreeTick1, timeSec),
        fTreeCDMins = getSecsFromMins(fTreeTick1, timeSec),
        fTreeCDSecs = getSecs(fTreeCDHours, fTreeCDMins, fTreeTick1, timeSec),
        //Reg tree 40 min cycles
        rTreeTick1 = setTick(40, timeInMins),
        rTreeCDHours = getCDHours(rTreeTick1, timeSec),
        rTreeCDMins = getSecsFromMins(rTreeTick1, timeSec),
        rTreeCDSecs = getSecs(rTreeCDHours, rTreeCDMins, rTreeTick1, timeSec),
        //Herb  20 min cycles
        hTreeTick1 = setTick(20, timeInMins),
        herbCDMins = getSecsFromMins(hTreeTick1, timeSec),
        herbCDSecs = getSecs(0, herbCDMins, hTreeTick1, timeSec),
        //Allotment  10 min cycles
        aTreeTick1 = setTick(10, timeInMins),
        allotCDMins = getSecsFromMins(aTreeTick1, timeSec),
        allotCDSecs = getSecs(0, allotCDMins, aTreeTick1, timeSec),
        
        //millis = ((timeHour * 3600) * 1e3) + ((timeMin * 60) * 1e3) + (timeSec * 1e3) + 1e3,
        millis1 = (sTreeCDSecs > 192e5 || sTreeCDSecs < 0) ? 192e5 : sTreeCDSecs,
        millis2 = (fTreeCDSecs > 96e5 || fTreeCDSecs < 0) ? 96e5 : fTreeCDSecs,
        millis3 = (cactiCDSecs > 48e5 || cactiCDSecs < 0) ? 48e5 : cactiCDSecs,
        millis4 = (rTreeCDSecs > 24e5 || rTreeCDSecs < 0) ? 24e5 : rTreeCDSecs,
        millis5 = (herbCDSecs > 12e5 || herbCDSecs < 0) ? 12e5 : herbCDSecs,
        millis6 = (allotCDSecs > 6e5 || allotCDSecs < 0) ? 6e5 : allotCDSecs,
        secs1 = ('0' + (Math.floor((millis1 % 6e4) / 1e3))).slice(-2),
        mins1 = ('0' + (Math.floor((millis1 % 36e5) / 6e4))).slice(-2),
        hours1 = ('0' + (Math.floor(millis1 / 36e5))).slice(-2),
        mins2 = ('0' + (Math.floor((millis2 % 36e5) / 6e4))).slice(-2),
        hours2 = ('0' + (Math.floor(millis2 / 36e5))).slice(-2),
        mins3 = ('0' + (Math.floor((millis3 % 36e5) / 6e4))).slice(-2),
        hours3 = ('0' + (Math.floor(millis3 / 36e5))).slice(-2),
        mins4 = ('0' + (Math.floor((millis4 % 36e5) / 6e4))).slice(-2),
        hours4 = ('0' + (Math.floor(millis4 / 36e5))).slice(-2),
        mins5 = ('0' + (Math.floor((millis5 % 36e5) / 6e4))).slice(-2),
        hours5 = ('0' + (Math.floor(millis5 / 36e5))).slice(-2),
        mins6 = ('0' + (Math.floor((millis6 % 36e5) / 6e4))).slice(-2),
        hours6 = ('0' + (Math.floor(millis6 / 36e5))).slice(-2);
    
    updateElement("count0", hours1, mins1, secs1);
    updateElement("count1", hours2, mins2, secs1);
    updateElement("count2", hours3, mins3, secs1);
    updateElement("count3", hours4, mins4, secs1);
    updateElement("count4", hours5, mins5, secs1);
    updateElement("count5", hours6, mins6, secs1);
    document.getElementById('currentHour').innerHTML = timeHourD;
    document.getElementById('currentMin').innerHTML = timeMin;
    document.getElementById('currentSec').innerHTML = timeSec;
    document.getElementById("am_pm").innerHTML = " " + timeAMPM;
    document.getElementById("currentDate").innerHTML = timeDate.toString().split(' ').splice(1, 3).join(' ');
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
}