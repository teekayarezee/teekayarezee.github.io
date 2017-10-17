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
        hh = timeHour * 3600,
        //mm = timeMin === 0 ? 1 : timeMin * 60,
        tt = Math.floor((hh + timeMin * 60 + timeSec) / 30) + -405,
        
        mathHours = function (m) { return ('0' + (Math.floor(m / 36e5))).slice(-2); },
        mathMins = function (m) { return ('0' + (Math.floor((m % 36e5) / 6e4))).slice(-2); },
        setTick = function (n) { var o, step = 6400; while (timeInMins <= step) { step -= n; } o = step + n - timeInMins; if (o < 1) { o = n; } return o * 60; },
        getSecs = function (n) { var tick = setTick(n), secsFromHours = Math.floor((tick - timeSec) / 3600), a = secsFromHours === 12 ? 0 : secsFromHours, b = Math.floor(((tick - timeSec) % 3600) / 60);
                                return ((a * 3600) + (b * 60) + ((tick - timeSec) % 60)) * 1e3; },
        updateEl = function (e, c) { document.getElementById(e).innerHTML = c; },
    
        //Spirit Tree 320 min cycles
        sTreeCDSecs = getSecs(320),
        //Cacti 80 min cycles
        cactiCDSecs = getSecs(80),
        //Fruit tree 160 min cycles
        fTreeCDSecs = getSecs(160),
        //Reg tree 40 min cycles
        rTreeCDSecs = getSecs(40),
        //Herb 20 min cycles
        herbCDSecs = getSecs(20),
        //Allotment 10 min cycles
        allotCDSecs = getSecs(10),
        
        millis = ((timeHour * 3600) * 1e3) + ((timeMin * 60) * 1e3) + (timeSec * 1e3) + 1e3,
        milli = function (n, t) { return (t > n * 1e5 || t * 1e5 < 0) ? n * 1e5 : t; },
        millis1 = milli(192, sTreeCDSecs),
        millis2 = milli(96, fTreeCDSecs),
        millis3 = milli(48, cactiCDSecs),
        millis4 = milli(24, rTreeCDSecs),
        millis5 = milli(12, herbCDSecs),
        millis6 = milli(6, allotCDSecs),
        
        secs1 = ('0' + (Math.floor((millis1 % 6e4) / 1e3))).slice(-2),
        hours1 = mathHours(millis1),
        mins1 = mathMins(millis1),
        hours2 = mathHours(millis2),
        mins2 = mathMins(millis2),
        hours3 = mathHours(millis3),
        mins3 = mathMins(millis3),
        hours4 = mathHours(millis4),
        mins4 = mathMins(millis4),
        hours5 = mathHours(millis5),
        mins5 = mathMins(millis5),
        hours6 = mathHours(millis6),
        mins6 = mathMins(millis6);
    
    updateEl("count0", hours1 + ":" + mins1 + ":" + secs1);
    updateEl("count1", hours2 + ":" + mins2 + ":" + secs1);
    updateEl("count2", hours3 + ":" + mins3 + ":" + secs1);
    updateEl("count3", hours4 + ":" + mins4 + ":" + secs1);
    updateEl("count4", hours5 + ":" + mins5 + ":" + secs1);
    updateEl("count5", hours6 + ":" + mins6 + ":" + secs1);
    updateEl("currentHour", timeHourD);
    updateEl("currentMin", timeMin);
    updateEl("currentSec", timeSec);
    updateEl("am_pm", timeAMPM);
    updateEl("currentDate", timeDate.toString().split(' ').splice(1, 3).join(' '));
    updateEl("currentHour", timeHourD);
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
}
