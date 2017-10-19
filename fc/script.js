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
        h = tD.getUTCHours(), min = tD.getUTCMinutes(), timeSec = tD.getUTCSeconds(),
        updateEl = function (e, c) { document.getElementById(e).innerHTML = c; },
        updateArray = function () { for (i = 6; i > 0; i -= 1) { var p = 6400, timeInMins = (h * 60) + min, tick; while (timeInMins <= p) { p -= a; }
                                                                tick = p + a - timeInMins; if (tick < 1) { tick = a; } a *= 2; p = tick * 60 - timeSec;
                                                                updateEl("count" + i, ("0" + Math.floor(p / 3600)).slice(-2) + ":" + ("0" + Math.floor((p % 3600) / 60)).slice(-2) + ":" + ("0" + (60 - timeSec)).slice(-2)); } };
    updateArray();
    updateEl("currentDate", tD.toUTCString(), h >= 12 ? "PM" : "AM");
    px = (Math.floor(((h < 12 ? h + 48 : h + 24) * 3600 + min * 60 + timeSec) / 30) + -405);
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });