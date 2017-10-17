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
function setTick(n, m) { "use strict"; var o, step = 6400; while (m <= step) { step -= n; } o = step + n - m; if (o < 1) { o = n; } return o; }

function getSecs(n, m, s) { "use strict";
var tick = setTick(n, m), 
secsFromHours = Math.floor(((tick * 60) - s) / 3600),
a = secsFromHours === 12 ? 0 : secsFromHours,
b = Math.floor((((tick * 60) - s) % 3600) / 60);
return ((a * 3600) + (b * 60) + ( ((tick * 60) - s) % 60 )) * 1e3; }

function updateElement(c, h, m, s) { "use strict"; document.getElementById(c).innerHTML = h + ':' + m + ':' + s; }

// Main Function
function countDown() {
    "use strict";
    
    var timeDate = new Date(),
        timeAMPM = (timeDate.getUTCHours() >= 12) ? "PM" : "AM",
        timeSec = timeDate.getUTCSeconds(),
        timeHourD = timeDate.getUTCHours(),
        timeHour = (timeDate.getUTCHours() < 12) ? timeDate.getUTCHours() + 24 : (timeDate.getUTCHours() === 0) ? 12 : timeDate.getUTCHours(),
        timeMin = timeDate.getUTCMinutes(),
        timeInMins = (timeHour * 60) + timeMin,
        hh = timeHour * 60 * 60,
        mm = timeMin === 0 ? 1 : timeMin * 60,
        tt = Math.floor((hh + mm + timeSec) / 30) + -405,
    
        //Spirit Tree 320 min cycles
        sTreeCDSecs = getSecs(320, timeInMins, timeSec),
        //Cacti 80 min cycles
        cactiCDSecs = getSecs(80, timeInMins, timeSec),
        //Fruit tree 160 min cycles
        fTreeCDSecs = getSecs(160, timeInMins, timeSec),
        //Reg tree 40 min cycles
        rTreeCDSecs = getSecs(40, timeInMins, timeSec),
        //Herb  20 min cycles
        herbCDSecs = getSecs(20, timeInMins, timeSec),
        //Allotment  10 min cycles
        allotCDSecs = getSecs(10, timeInMins, timeSec),
        
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
