/* eslint-env browser */
/* exported x */
//  _____ _        _____  |  Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// |_   _| | ___ _|__  /  |  Version 2.5a
//   | | | |/ / '__|/ /   |  Original Author: "Indecent Act" / @RSLinkify
//   | | |   <| |  / /_   |  Author:          "TkrZ"         / @TkrZ
//   |_| |_|\_\_| /____|  |  - Many thanks to Indecent Act for permission to keep this project alive! -

var x, o = document;
function countDown() {
    "use strict";
    var a = 10, i, p, k, d = new Date(), u = d.getUTCHours(), h = u + 24, m = d.getUTCMinutes(), s = d.getUTCSeconds(), t = h * 60 + m,
        f = function (e) { return e === 60 ? "00" : ("0" + ~~(e)).slice(-2); };
    for (i = 6; i > 0; i -= 1) { p = 6400; while (t <= p) { p -= a; } k = p + a - t; k = k < 1 ? a : k; a *= 2; p = k * 60 - s;
                                o.getElementById(i).innerHTML = f(p / 3600) + ":" + f((p % 3600) / 60) + ":" + f(60 - s); }
    o.getElementById("cD").innerHTML = d.toUTCString();
    x = ((h * 60 + m) * 60 + s) / 30 + -405;
}

o.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });