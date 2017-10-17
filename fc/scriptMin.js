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
        timeHour = (timeDate.getUTCHours() < 12) ? timeDate.getUTCHours() + 24 : timeDate.getUTCHours(),
        timeMin = timeDate.getUTCMinutes(),
        timeInMins = (timeHour * 60) + timeMin,
        hh = timeHour * 3600,
        //mm = timeMin === 0 ? 1 : timeMin * 60,
        tt = Math.floor((hh + timeMin * 60 + timeSec) / 30) + -405,
        
        mathHours = function (m) { return ("0" + (Math.floor(m / 36e5))).slice(-2); },
        mathMins = function (m) { return ("0" + (Math.floor((m % 36e5) / 6e4))).slice(-2); },
        getMSecs = function (n) { var tick, step = 6400, hour, min;
                                 while (timeInMins <= step) { step -= n; } tick = step + n - timeInMins;
                                 if (tick < 1) { tick = n; } tick *= 60; hour = Math.floor((tick - timeSec) / 3600); min = Math.floor(((tick - timeSec) % 3600) / 60);
                                 return ((hour * 3600) + (min * 60) + ((tick - timeSec) % 60)) * 1e3; },
        milli = function (n, t) { return (t > n * 1e5 || t * 1e5 < 0) ? n * 1e5 : t; },
        updateEl = function (e, c) { document.getElementById(e).innerHTML = c; },
        
        //Spirit Tree 320 min cycles
        millis1 = milli(192, getMSecs(320)),
        hours1 = mathHours(millis1),
        mins1 = mathMins(millis1),
        secs1 = ('0' + (Math.floor((millis1 % 6e4) / 1e3))).slice(-2),
        
        //fTreeCDSecs = getMSecs(160),
        millis2 = milli(96, getMSecs(160)),
        hours2 = mathHours(millis2),
        mins2 = mathMins(millis2),
        
        //Cacti 80 min cycles
        millis3 = milli(48, getMSecs(80)),
        hours3 = mathHours(millis3),
        mins3 = mathMins(millis3),
        
        //Reg tree 40 min cycles
        millis4 = milli(24, getMSecs(40)),
        hours4 = mathHours(millis4),
        mins4 = mathMins(millis4),
        
        //Herb 20 min cycles
        millis5 = milli(12, getMSecs(20)),
        hours5 = mathHours(millis5),
        mins5 = mathMins(millis5),
        
        //Allotment 10 min cycles
        millis6 = milli(6, getMSecs(10)),
        hours6 = mathHours(millis6),
        mins6 = mathMins(millis6);
    
    updateEl("count0", hours1 + ":" + mins1 + ":" + secs1);
    updateEl("count1", hours2 + ":" + mins2 + ":" + secs1);
    updateEl("count2", hours3 + ":" + mins3 + ":" + secs1);
    updateEl("count3", hours4 + ":" + mins4 + ":" + secs1);
    updateEl("count4", hours5 + ":" + mins5 + ":" + secs1);
    updateEl("count5", hours6 + ":" + mins6 + ":" + secs1);
    updateEl("currentHour", timeDate.getUTCHours());
    updateEl("currentMin", timeMin);
    updateEl("currentSec", timeSec);
    updateEl("am_pm", timeAMPM);
    updateEl("currentDate", timeDate.toString().split(' ').splice(1, 3).join(' '));
    document.getElementById("icon").style.backgroundPosition = "-" + tt + "px 0px";
}
