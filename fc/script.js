/* eslint-env browser */
/* exported px */
//  _____ _        _____  |  Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// |_   _| | ___ _|__  /  |  Version 2.5a
//   | | | |/ / '__|/ /   |  Original Author: "Indecent Act" / @RSLinkify
//   | | |   <| |  / /_   |  Author:          "TkrZ"         / @TkrZ
//   |_| |_|\_\_| /____|  |  - Many thanks to Indecent Act for permission to keep this project alive! -

var px;
function countDown() {
    "use strict";
    var a = 10, i, p, tick,
        d = new Date(),
        h6 = d.getUTCHours() * 60, m = d.getUTCMinutes(), s = d.getUTCSeconds(), t = h6 + m,
        math = function (e) { return ("0" + Math.floor(e)).slice(-2); };
    for (i = 6; i > 0; i -= 1) { p = 6400; while (t <= p) { p -= a; } tick = p + a - t; if (tick < 1) { tick = a; } a *= 2; p = tick * 60 - s;
                                document.getElementById("count" + i).innerHTML = math(p / 3600) + ":" + math((p % 3600) / 60) + ":" + math(60 - s); }
    document.getElementById("currentDate").innerHTML = d.toUTCString();
    px = Math.floor((((h6 < 12 ? h6 + 24 : h6) + m) * 60 + s) / 30) + -405;
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });