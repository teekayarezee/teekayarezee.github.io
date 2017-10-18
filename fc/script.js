/* eslint-env browser */
// _____ _        _____
// |_   _| | ___ _|__  /
//   | | | |/ / '__|/ / 
//   | | |   <| |  / /_ 
//   |_| |_|\_\_| /____|
//
// Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// Many thanks to "Indecent Act" for permission
//
// Version 1.6c
// Original Author: "Indecent Act" / @RSLinkify
// Author:          "TkrZ" / @TkrZ

function countDown() {
    "use strict";
    
    var i, a = 10, b = 6,
        tD = new Date(),
        timeHour = (tD.getUTCHours() < 12) ? tD.getUTCHours() + 24 : tD.getUTCHours(),
        timeMin = tD.getUTCMinutes(),
        timeSec = tD.getUTCSeconds(),
        timeInMins = (timeHour * 60) + timeMin,
        updateEl = function (e, c) { document.getElementById(e).innerHTML = c; },
        secs = ("0" + (60 - tD.getUTCSeconds())).slice(-2),
        
        updateArray = function () { for (i = 6; i > 0; i -= 1) { var p = 6400, hour, min, t, tick;
                                                                while (timeInMins <= p) { p -= a; }
                                                                tick = p + a - timeInMins;
                                                                if (tick < 1) { tick = a; }
                                                                
                                                                tick *= 60;
                                                                hour = Math.floor((tick - timeSec) / 3600);
                                                                min = Math.floor(((tick - timeSec) % 3600) / 60);
                                                                t = ((hour * 3600) + (min * 60) + ((tick - timeSec) % 60)) * 1e3;
                                                                t = (t > b * 1e5 || t < 0) ? b * 1e5 : t;
                                                                
                                                                console.log(b);
                                                                a *= 2;
                                                                b *= 2;
                                                                updateEl("count" + i, ("0" + (Math.floor(t / 36e5))).slice(-2) + ":" + ("0" + (Math.floor((t % 36e5) / 6e4))).slice(-2) + ":" + secs); } };
    
    updateArray();
    updateEl("currentHour", tD.getUTCHours());
    updateEl("currentMin", timeMin);
    updateEl("currentSec", timeSec);
    updateEl("am_pm", tD.getUTCHours() >= 12 ? "PM" : "AM");
    updateEl("currentDate", tD.toString().split(' ').splice(1, 3).join(' '));
    document.getElementById("icon").style.backgroundPosition = "-" + (Math.floor((timeHour * 3600 + timeMin * 60 + timeSec) / 30) + -405) + "px 0px";
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });

