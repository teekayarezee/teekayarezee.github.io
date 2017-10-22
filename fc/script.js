/* eslint-env browser */ /* exported x */
//  _____ _        _____  |  Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// |_   _| | ___ _|__  /  |  Version 3a
//   | | | |/ / '__|/ /   |  Original Author: "Indecent Act" / @RSLinkify
//   | | |   <| |  / /_   |  Author:          "TkrZ"         / @TkrZ
//   |_| |_|\_\_| /____|  |  - Many thanks to Indecent Act for permission to keep this project alive! -

var x, o = document;
function countDown() {
    "use strict";
    var a = 10, t, i, p, d = new Date(), h = d.getUTCHours(), m = d.getUTCMinutes(), s = d.getUTCSeconds(), td = ~~((Date.now() / 1e3) / 86400),
        f = function (e) { return e === 60 ? "00" : ("0" + ~~e).slice(-2); };
    if (td / 2 === ~~(td / 2)) { h = (h === 0) ? h += 36 : (h < 12) ? h += 48 : (h > 12) ? h += 12 : h; } else { h += 24; }
    t = h * 60 + m;
    for (i = 6; i > 0; i--) {
        for (p = 6400; t <= p;) { p -= a; }
        p = 60 * (p + a - t < 1 ? a : p + a - t) - s;
        a *= 2;
        o.getElementById(i).innerHTML = f(p / 3600) + ":" + f(p % 3600 / 60) + ":" + f(p % 60); }
    o.getElementById("cD").innerHTML = d.toUTCString();
    x = ~~((60 * (60 * h + m) + s) / 30) + -405;
}

o.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });

//ms = Date.now();
//ms to h
//~~(ms/(1e3*3600)%24)
//ms to m
//~~((ms/(1e3*60))%60)
//ms to s
//~~((ms/1e3)%60)

//ms/1000 - equiv to time()