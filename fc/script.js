/* eslint-env browser */ /* exported x */
//  _____ _        _____  |  Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// |_   _| | ___ _|__  /  |  Version 4a
//   | | | |/ / '__|/ /   |  Original Author: "Indecent Act" / @RSLinkify
//   | | |   <| |  / /_   |  Author:          "TkrZ"         / @TkrZ
//   |_| |_|\_\_| /____|  |  - Many thanks to Indecent Act for permission to keep this project alive! -

var x;
function countDown() {
    "use strict";
    var a = 10, p = Date.now() / 864e5, i = (p - ~~p) * 24, m = (i - ~~i) * 60, s = (m - ~~m) * 60, t = ~~i,
        f = function (e) { return ("0" + ~~e).slice(-2); };
    
    t += ~~p / 2 === ~~(p / 2) ? t < 12 ? 48 : 0 : 24;
    t = t * 60 + ~~m;
    x = ~~((60 * t + ~~s) / 30) + -405;
    
    for (i = 6; i > 0; a *= 2, i--) {
        for (p = 6400; t <= p;) { p -= a; }
        p = 60 * (p + a - t < 1 ? a : p + a - t) - ~~s;
        document.getElementById(i).innerHTML = f(p / 3600) + ":" + f(p % 3600 / 60) + ":" + f(p % 60); }
}

document.addEventListener("DOMContentLoaded", function () { "use strict"; countDown(); });