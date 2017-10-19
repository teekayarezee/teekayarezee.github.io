/* eslint-env browser */
/* exported px */
// _____ _        _____
// |_   _| | ___ _|__  /
//   | | | |/ / '__|/ / 
//   | | |   <| |  / /_ 
//   |_| |_|\_\_| /____|
//
// Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// Many thanks to "Indecent Act" for permission
//
// Version 2.0c
// Original Author: "Indecent Act" / @RSLinkify
// Author:          "TkrZ" / @TkrZ

var px;
function countDown() {
    "use strict";
    var i, a = 10,
        tD = new Date(),
        timeHour = tD.getUTCHours() < 12 ? tD.getUTCHours() + 48 : tD.getUTCHours() + 24, timeMin = tD.getUTCMinutes(), timeSec = tD.getUTCSeconds(),
        updateEl = function (e, c) { document.getElementById(e).innerHTML = c; },
        updateArray = function () { for (i = 6; i > 0; i -= 1) { var p = 6400, timeInMins = (timeHour * 60) + timeMin, tick;
                                                                while (timeInMins <= p) { p -= a; }
                                                                tick = p + a - timeInMins; if (tick < 1) { tick = a; } tick *= 60; a *= 2;
                                                                updateEl("count" + i, ("0" + Math.floor((tick - timeSec) / 3600)).slice(-2) + ":" + ("0" + Math.floor(((tick - timeSec) % 3600) / 60)).slice(-2) + ":" + ("0" + (60 - timeSec)).slice(-2)); } };
    
    updateArray();
    updateEl("currentHour", tD.getUTCHours());
    updateEl("currentMin", timeMin);
    updateEl("currentSec", timeSec);
    updateEl("am_pm", tD.getUTCHours() >= 12 ? "PM" : "AM");
    updateEl("currentDate", tD.toString().split(' ').splice(1, 3).join(' '));
    px = (Math.floor((timeHour * 3600 + timeMin * 60 + timeSec) / 30) + -405);
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });