/*jslint bitwise: true */ /* eslint-env browser */ /* exported countDown */
//  _____ _        _____  |  Farming Tick Timer/Clock/Calculator - PHP to HTML/JS Re-write
// |_   _| | ___ _|__  /  |  Version 5b
//   | | | |/ / '__|/ /   |  Original Author: "Indecent Act" / @RSLinkify
//   | | |   <| |  / /_   |  Author:          "TkrZ"         / @TkrZ
//   |_| |_|\_\_| /____|  |  - Many thanks to Indecent Act for permission to keep this project alive! -

window.countDown = function countDown() {
    "use strict";
    var d = document, p = Date.now() / 864e5, i = (p - ~~p) * 24, m = (i - ~~i) * 60, s = (m - ~~m) * 60, t = ~~i;
    
    t += ~~p / 2 === ~~(p / 2) ? t < 12 ? 48 : 0 : 24;
    t = t * 60 + ~~m;
    
    for (m = 10, i = 7; i-- > 1; m *= 2) {
        for (p = 6400; t <= p;) { p -= m; }
        d.getElementById(i).innerHTML = new Date(1000 * (60 * (p + m - t < 1 ? m : p + m - t) - ~~s)).toISOString().substr(11, 8);
    }
    
    d.getElementById("icon").style.backgroundPosition = -(~~((60 * t + ~~s) / 30) + -405) + "px 0px";
}