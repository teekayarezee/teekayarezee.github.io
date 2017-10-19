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
    var a = 10, i, p, k, d = new Date(), h = d.getUTCHours(), m = d.getUTCMinutes(), s = d.getUTCSeconds(), t = h * 60 + m, f = function (e) { return ("0" + Math.floor(e)).slice(-2); };
    for (i = 6; i > 0; i -= 1) { p = 6400; while (t <= p) { p -= a; } k = p + a - t; if (k < 1) { k = a; } a *= 2; p = k * 60 - s;
                                document.getElementById("count" + i).innerHTML = f(p / 3600) + ":" + f((p % 3600) / 60) + ":" + f(60 - s); }
    document.getElementById("currentDate").innerHTML = d.toUTCString();
    px = Math.floor((((h < 12 ? h + 24 : h) * 60 + m) * 60 + s) / 30) + -405;
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });