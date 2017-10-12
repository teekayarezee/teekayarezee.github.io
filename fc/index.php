<?php
//important to set timezone to UTC
date_default_timezone_set('UTC');
?>
    <!DOCTYPE html>
    <HTML lang="en">

    <HEAD>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="generator" content="Indecent Act (www.indecentcode.com)">

        <meta name="keywords" content="Runescape, farming, tick, spirit, tree, magic tree, growth, ,herbs, time, timer, clock, farm, ,herbs, rs, jagex, help, giude, spirit tree, windows, indecent, Act,Indy's, Skill">
        <title>RuneScape Farm Timer/Clock</title>
        <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>



        <style type="text/css">

            .wrap {
                position: relative;
                width: 1147px;
                margin: 0 auto;
                font-size: 16px;
            }

            #pic2 img {
                -moz-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                filter: FlipH;
                -ms-filter: "FlipH";
            }

            .button1 {
                /*font-family: Verdana, Geneva, sans-serif;*/
                /*font-size: 24px;*/
                /*color: #FFF;*/
                margin-top: 2px;
                color: #545429;

                cursor: pointer;
                background: rgb(255, 255, 255);
                /* Old browsers */
                /* IE9 SVG, needs conditional override of 'filter' to 'none' */
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZDljNWEiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
                background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(173, 156, 90, 1) 100%);
                /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(100%, rgba(173, 156, 90, 1)));
                /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(173, 156, 90, 1) 100%);
                /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(173, 156, 90, 1) 100%);
                /* Opera 11.10+ */
                background: -ms-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(173, 156, 90, 1) 100%);
                /* IE10+ */
                background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(173, 156, 90, 1) 100%);
                /* W3C */
                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ad9c5a', GradientType=0);
                /* IE6-8 */
            }

            .button1:hover {
                background: #594500;
                /*sub-menu bar hover colour*/
                background: rgb(255, 255, 255);
                /* Old browsers */
                /* IE9 SVG, needs conditional override of 'filter' to 'none' */
                background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM1OTQ1MDAiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
                background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(89, 69, 0, 1) 100%);
                /* FF3.6+ */
                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(100%, rgba(89, 69, 0, 1)));
                /* Chrome,Safari4+ */
                background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(89, 69, 0, 1) 100%);
                /* Chrome10+,Safari5.1+ */
                background: -o-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(89, 69, 0, 1) 100%);
                /* Opera 11.10+ */
                background: -ms-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(89, 69, 0, 1) 100%);
                /* IE10+ */
                background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(89, 69, 0, 1) 100%);
                /* W3C */
                margin-top: 2px;
                text-shadow: 0 0 5px #ffffff;
                -ms-text-shadow: 1px 1px 10px #ffffff;
                /* for ie 9+ */
                color: #FFF;
            }

            li.ff {
                font-size: 16px;
            }


            div.icon {
                border-width: 5px;
                border-color: white;
                border-style: ridge;
                height: 175px;
                top: 500px;
                width: 814px;
                background-image: url('grid6.gif');
            }

            div.result {
                position: absolute;
                top: 50px;
            }

            div.left {
                font-weight: bold;
                position: absolute;
                top: 75px;
                left: 5px;
                color: #FFFFFF text-align:left;
                z-index: 200;
                text-shadow: none;
                background-color: rgba(0, 0, 0, 0.5);
                border-right-width: 5px;
                border-right-color: white;
                border-right-style: ridge;
                display: none;
            }

            div.line {


                z-index: 100;
                position: absolute;
                top: 69px;
                left: 419px;
                width: 3px height:165px;
            }

            .div-table {
                display: table;
                border: none;
                width: 814px;
            }

            .div-table-row {
                display: table-row;
                background-color: rgba(247, 235, 166, 0.3);
                text-align: left;
            }

            .div-table-row1 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 255, 192, 0.5);
                text-align: left;
            }

            .div-table-row2 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 192, 192, 0.5);
                text-align: left;
            }

            .div-table-row3 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 160, 192, 0.6);
                text-align: left;
            }

            .div-table-row4 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 96, 192, 0.5);
                text-align: left;
            }

            .div-table-row5 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 64, 192, 0.5);
                text-align: left;
            }

            .div-table-row6 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #C0C0C0;
                font-weight: bold;
                background-color: rgba(96, 32, 192, 0.5);
                text-align: left;
            }

            .div-table-row7 {
                display: table-row;
                border-top-width: 2px;
                text-shadow: 1px 1px #808080;
                font-weight: bold;
                background-color: rgba(64, 0, 96, 0.6);
                text-align: left;
            }

            .div-table-col {
                display: table-cell;
                text-align: center;
                width: auto;
                border: 1px solid #3d3d1f;
            }

            .div-table-col1,
            .div-table-col2,
            .div-table-col2,
            .div-table-col3,
            .div-table-col4,
            .div-table-col5,
            .div-table-col6,
            .div-table-col7 {
                display: table-cell;
                text-align: center;
                width: auto;
                border: 1px solid #3d3d1f;
                cursor: default;
            }

            .row1,
            .row2,
            .row3,
            .row4,
            .row5,
            .row6,
            .row7 {
                z-index: 300;
                position: absolute;
                left: 5px;
                width: 814px;
                height: 21px;
                background-color: rgba(255, 255, 255, 0);
            }

            .coloured {
                background-color: rgba(255, 255, 255, 0.4);
            }

            .button1,
            .button2,
            .button3,
            .button4 {
                margin-top: 2px;
                color: #545429;
                cursor: pointer;
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#AD9C5A');
                /* for IE */
                background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#AD9C5A));
                /* for webkit browsers */
                background: -moz-linear-gradient(top, #ffffff, #AD9C5A);
                /* for firefox 3.6+ */
            }

            .button1:hover,
            .button2:hover,
            .button3:hover,
            .button4:hover {
                background: #594500;
                /*sub-menu bar hover colour*/
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFF', endColorstr='#594500');
                /* for IE */
                background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#594500));
                /* for webkit browsers */
                background: -moz-linear-gradient(top, #FFFFFF, #594500);
                /* for firefox 3.6+ */
                margin-top: 2px;
                text-shadow: 0 0 5px #ffffff;
                -ms-text-shadow: 1px 1px 10px #ffffff;
                /* for ie 9+ */
                color: #FFF;
                cursor: url(http://indecentcode.com/finger.cur), auto;
            }

            .coloured2 {
                text-shadow: 1px 1px #000000;
                color: #FFFFFF;
            }

            .tDisplay1 {
                font-weight: bold;
                position: absolute;
                border-width: 5px;
                border-color: white;
                border-style: ridge;
                top: 280px;
                width: 814px;
                height: 409px;
                overflow-y: scroll;
                overflow-x: hidden;
            }

            .tDisplay2,
            .tDisplay3 {
                visibility: hidden;

            }

            div.heading {
                font-size: 13pt;
                font-weight: bold;
            }

            div.my_content {
                line-height: 1.3;
                width: 600px;
                margin-top: 10px;
                margin-bottom: 30px;
                padding: 10px;
            }

            img.my_img1 {
                float: left;
            }

            img.my_img2 {
                float: right;
            }

            img.my_img3 {
                display: block;
                margin-bottom: 10px;
            }
        </style>
    </HEAD>

    <body onload="countDown()">

        <DIV CLASS="wrap" ID="container" STYLE="height: 903px; width: 1147px;">





            <div class="heading"><span style="padding-right:160px;">Indecent Act's Unofficial RuneScape Farm Clock</span>
            </div>
            <!-- end heading -->
            <DIV CLASS="header"><span class="textstyleBig">
				Real Time Farm Ticks<br>
				</span>

            </DIV>
            <!-- end header -->

            <DIV CLASS="bodyMid" style="z-index:51;" ID="mid">


                <div id="mee" class="left">
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:3px;">Spirit Tree</div>
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:2px;">Fruit Trees</div>
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:3px;">Cactus/Belladonna</div>
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:2px;">Regular Trees</div>
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:3px;">Herbs</div>
                    <div style="text-align:left; color:#FFFFFF; padding-bottom:2px;">Allotments</div>
                    <div style="text-align:left; color:#FFFFFF;">Flowers</div>


                </div>
                <button class="button1" style="z-index:201; position:absolute; left:0px; top:46px">Toggle Key</button><br>
                <span style="z-index:201; position:absolute; left:200px; top:256px"><input type="checkbox" id="chkSelect" />Auto Highlighting</span>
                <button class="button2" style="z-index:201; position:absolute; left:0px; top:256px">Countdown</button>
                <button class="button3" style="z-index:201; position:absolute; left:100px; top:256px">Instructions</button>
                <!-- <button class="button4" style="z-index:201; position:absolute; left:200px; top:256px">Alarm</button> -->
                <script>
                    $(".button1").click(function() {
                        $("#mee").toggle("slow");
                    });

                    $(".button2").click(function() {
                        $('#tDisplay3').hide();
                        $('#tDisplay2').hide();
                        $('#tDisplay1').show();
                    });

                    $(".button3").click(function() {
                        $('#tDisplay1').hide();
                        $('#tDisplay3').hide();
                        $('#tDisplay2').show();
                    });

                    $(".button4").click(function() {
                        $('#tDisplay1').hide();
                        $('#tDisplay2').hide();
                        $('#tDisplay3').show();
                    });
                </script>
                <div class="result" id="result">
                    <b style="position: relative; left: 100px;">
<span id="currentDate"></span> <span id="currentHour"></span>:<span id="currentMin"></span>:<span id="currentSec"> </span><span id="am_pm"></span> (GMT)</b>
                    <div id="icon" class="icon"></div>

                </div>
                <div class="line">
                    <img src="line2.gif" />
                </div>

                <div id="tDisplay2" class="tDisplay1" style="text-shadow: 1px 1px #D8D8D8; text-align:left;">
                    <div class="tDisplay4" style="text-shadow: 1px 1px #D8D8D8; text-align:left;">
                        <img style="float:right;" src="herb.gif" alt="My Image 3" />
                        <h3>Some benefits to working with farm ticks</h3>
                        - Synchronised crops (encourage all herbs to mature together)<br> - More herb runs per day (more profit)<br> - Early disease detection.<br> - Minimise skipping growth cycles for all plants.<br> - Improved farming XP.<br> - Increased efficiency.<br> - Makes you more attractive.<br> - And much more.<br>

                        <div class="my_content"><br>
                            <h3>The Basics</h3>
                            <div style="float:right; padding-left:20px; text-align:right">
                                <img style="padding-left:20px;" src="treeWindow2.gif" alt="My Image 3" /><img style="padding-left:20px;" src="nonTreeWindow.gif" alt="My Image 3" /><br> &nbsp;&nbsp;&nbsp;Growth window for trees&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No growth period for trees
                            </div>
                            Crops don't continuously grow, they only advance to their to next stage during a growth window. Growth windows for all plants last 5 minutes and are shown on the grid as coloured windows. Black windows are 5 minute periods of inactive growth.<br><br>
                        </div>
                        There are only three possible events that can occur during a growth window (coloured window).<br> - Crops advance one stage (grow or reach full maturity).<br> - Crops become diseased.<br> - Crops die (50% chance of death if diseased plants are not cured).<br> If a diseased crop entering a growth window doesn't die it will not grow.<br> None of these events can occur outside a growth window.<br><br> It's also important to be aware that growth windows are driven by the game servers, they are in no way derived from or determined by the player. This makes them predictable since they run like clockwork and it's because of this predictability we can use them to our advantage.

                        <br><br>
                        <div class="my_content"><img src="growTimes3.gif" class="my_img2" alt="My Image 3" /> The time between growth windows varies according to the type of crop. Example: Fruit tree windows occur every 160 minutes, and cactus growth windows occur every 80 minutes. But no matter what type of crop, the growth windows all have a five minute duration.<br><br>
                        </div>

                        <div class="my_content" style="width:450px;">
                            <div style="text-align:center; float:right; padding-left:40px;"><img src="diseaseCheck.gif" alt="My Image 3" /><br> Time for a disease check<br>
                            </div>

                            Just knowing where growth windows are means we can now see when plants can grow and when they don't. With this knowledge we can see that the best time to check for diseased crops is right after a growth stage, and we can see when those times are.<br><br>
                        </div>

                        <div class="my_content" style="width:450px;">
                            <div style="text-align:center; float:right; padding-left:40px;"><img src="timeToPlant2.gif" alt="My Image 3" /><br> To grow in sync, plant<br> before a growth window<br> You may want to allow<br> more or less time<br> depending on the run<br><br><br>
                            </div>

                            Knowing when growth windows occur can also tell us when to plant, planting all patches just before a growth window can have some benefits. Firstly the crops are in sync. Assuming they don't get diseased they'll all mature together. Plus they can advance a stage shortly after planting. The trick is to not enter a growth window mid farm run. There is much more we can gain from knowing when growth windows occur, I'll explain below...<br><br>
                        </div>

                        <h3>The not so Basics</h3>
                        <div class="my_content" style="width:700px;">
                            <div style="float:right; padding-left:20px;">
                                <img src="condition1.gif" alt="My Image 3" />
                                <img src="cDown.gif" />
                                <br>
                                <div style="text-align:center; float:right; padding-right:10px;">
                                    Condition 2<br> 5 min countdown hits zero<br><br>
                                </div>
                                <div style="text-align:center; float:right; padding-right:20px;">
                                    Condition 1<br> Inside growth window<br><br><br>
                                </div>
                            </div>

                            There are actually two conditions that must be met for crops to grow. The first condition is the growth window, the second condition is determined by you (the player's farm tick). This second condition is based on timer, a timer that starts/resets when you log in/out. Think of it as repeating 5 minute or 300 second (500 runescape game ticks) countdown timer. Every time it reaches zero the game server checks to see if you're in a growth window. If you are in a growth window and your 5 minute timer has hit zero then the two conditions have been met to allow growth to the next stage. Basically your farm tick must occur somewhere during a growth window for plants to grow.<br><br>It's the player's farm tick that determines where in the 5 minute growth window your crops advance. There is one catch with this timer, the first time it runs it counts down from 303 seconds (505 runescape game ticks) meaning it's rare but possible to completely miss a growth window. That 3 seconds extra however is the least of our concerns. The biggest controllable factor in missing growth windows is the fact that logging in/out resets the player's farm tick, meaning the 5 minute countdown restarts.
                        </div>


                        <h3>Real farmers don't hop.</h3>
                        <div class="my_content" style="width:600px;">

                            Ok that's not entirely true, real farmers don't skip growth windows when they hop. Keep reading and you too will be hopping seamlessly around growth windows like a true stealthful farming ninja. First some examples showing the effects of logging in and out.
                        </div>

                        <div class="my_content">
                            <div style="text-align:center; float:right; padding-left:40px;"><img src="dontLogHere.gif" alt="My Image 3" /><br> Logging in/out here<br> means the growth window<br> will be skipped
                            </div>
                            Simply nothing will advance a growth stage within the first 5 minutes of logging in or out (flowers can be an exception). Logging in at the start of, or during a farming growth window means when the countdown from 5 minutes has elapsed you will no longer be in the farming growth window, thus the two required conditions for crop growth were never met and nothing grew. Basically 20 minutes grow time has been added to herbs and/or 160 minutes grow time added to fruit trees. An extreme case would be an extra 5 hours and 20 minutes has been added to a spirit tree's grow time. World hopping once every five minutes could effectively put crops in suspended animation.
                        </div><br> Bonus xp weekends were a classic example of players losing growth windows. Many players complained on the runescape forums during bonus xp weekends, claiming their trees weren't growing and that the farming skill was bugged. They were in fact logging out frequently to preserve their bonus xp multipliers, but at a cost to losing farming growth windows. I also logged out allot more frequently than normal for the very same reason, yet I managed to do fruit tree + calquat tree runs every day over the weekend without any major difference in grow times.
                        <br><br>
                        <div class="my_content">
                            <div style="text-align:center; float:right; padding-left:40px;"><img src="risky.gif" alt="My Image 3" /><br> Logging out here is risky<br> If your crops haven't yet<br> advanced, then logging out<br> skips the growth window<br>
                            </div>



                            Logging in during a growth window means you skip that current window and nothing grows. Logging out during a growth window can be a little different but it's still risky, if all your crops have already advanced then there may be no negative effect. But if they haven't grown then you lose a growth window. It's just best to avoid logging in/out during farming growth windows and to allow a few minutes either side of them too. I realise this isn't always practical, but you'll benefit greatly from applying this whenever possible.
                        </div>
                        <br><br>
                        <h3>Conclusion</h3>
                        Okay, now it's time to sum up this information so it can be used in a useful way. In all honesty I have barely scratched the surface of farming mechanics, but the aim here is to provide some information that can be used with this farming tool. I've outlined some basics that should take some of the guesswork out of farming.<br><br> There are many farming anomalies in runescape and there will be times where inexplicable things happen. By simply observing these things you might find you can use them to your advantage. For example: It's sometimes possible to squeeze an extra grow cycle in, on one particular herb patch. I'm sure anyone who observes and understands farming ticks will already know of this, and know how to use it.<br><br> There are many other things I haven't covered here, like can disease causes a growth window to be lost even if you're paying a farmer to watch crops? It hard to determine if Farming NPC's cure disease or prevent disease. Depending on how this works, this (in theory) may or may not have an effect on grow times. In short, there will be many times where crops get delayed, and the reasons may not be obvious. Just remember there is always a little unpredictability in runescape farming.
                        <br><br> As I said there is much more to farming mechanics than what I've written about here, my examples and analogies are only used to form a visual representation for growth windows and shouldn't be concidered absolute. An example being the 5 minute countdown analogy is used just to represent 5 minutes duration of farm ticks, how that's actually determined by the game could be done a number of ways, and for simplicity I described as countdown timer. Keeping that in mind, this information combined with this farm tool should allow you take farming mechanics to any level of complexity you like.<br><br> At the top of this page I listed these benefits...<br><br> - Synchronised crops (encourage all herbs to mature together)<br> - More herb runs per day (more profit)<br> - Early disease detection.<br> - Minimise skipping growth cycles for all plants.<br> - Improved farming XP.<br> - Increased efficiency.<br> - Makes you more attractive.<br> - And much more.<br><br> I purposely haven't explained step by step procedures to do all those things. The reason why is, the tools and basics of runescape farming mechanics are here, the methods used are up to the individual. Forming your own strategies is a very rewarding thing to do, and if I help inspire anyone to do that, then I consider this a success.
                        <br><br>For more information about advanced farming techniques I strongly recommend this thread on RSOF by Zigzagpaul. <a class="cpy" style="text-decoration:underline;" target="_blank" href="http://services.runescape.com/m=forum/forums.ws?154,155,727,62039428">FARMING SCIENTIST HQ (and FAQ)</a> Even though some of my information differs, I have to say his knowledge, dedication and insight into the farming skill has been a big part of my inspiration to make this tool.
                        <br><br>Oh, how does farming make you more attractive?<br> I'll just say this.....The farming skillcape is HOT!

                        <br><br> Happy Farming!<br><br> Indecent Act :)


                    </div>
                </div>
                <div id="tDisplay3" class="tDisplay1" style="overflow-y: hidden; overflow-x: hidden;">
                    Alarm
                </div>
                <div id="tDisplay1" class="tDisplay1">
                    <div class="div-table">
                        <div class="div-table-row" style="border-top-width:2px; text-shadow: 1px 1px #C0C0C0; font-weight:bold; background-color:rgba(64,64,64,0.5);">
                            <div class="div-table-col" style="text-align:center;">Plant</div>
                            <div class="div-table-col" style="text-align:center;">Window Interval</div>
                            <div class="div-table-col" style="text-align:center;">Total Growth Windows</div>
                            <div class="div-table-col" style="text-align:center;">Total Growth Time</div>
                            <div class="div-table-col" style="text-align:center;">Next window &nbsp;&nbsp;</div>
                        </div>
                        <div class="div-table-row1">
                            <div class="div-table-col1" style="text-align:center;">Spirit Tree</div>
                            <div class="div-table-col" style="text-align:center;">320 Min</div>
                            <div class="div-table-col" style="text-align:center;">11</div>
                            <div class="div-table-col" style="text-align:center;">2 days 10 hrs 40 min</div>
                            <div class="div-table-col" style="text-align:center;"><span id="count1">- - -</span></div>
                        </div>
                        <div class="div-table-row2">
                            <div class="div-table-col2" style="text-align:center;">Fruit Trees<br>
                                <div style="border-top:solid 2px #3d3d1f;">Calquat Tree</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">160 Min</div>
                            <div class="div-table-col" style="text-align:center;">6<br>
                                <div style="border-top:solid 2px #3d3d1f;">8</div>
                            </div>
                            <div class="div-table-col" style="text-align:center;">16 Hours<br>
                                <div style="border-top:solid 2px #3d3d1f;">21 Hours 20 Min</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><span id="count2">- - -</span></div>
                        </div>
                        <div class="div-table-row3">
                            <div class="div-table-col3" style="text-align:center;">Cactus<br>
                                <div style="border-top:solid 2px #3d3d1f;">Belladonna</div>
                                <div style="border-top:solid 2px #3d3d1f;">Morchella Mushroom</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">80 Min</div>
                            <div class="div-table-col" style="text-align:center;">7<br>
                                <div style="border-top:solid 2px #3d3d1f; padding-top:10px;">3</div>
                            </div>
                            <div class="div-table-col" style="text-align:center;">9 Hours 20 Min<br>
                                <div style="border-top:solid 2px #3d3d1f; padding-top:10px;">4 Hours</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><span id="count3">- - -</span></div>
                        </div>
                        <div class="div-table-row4">
                            <div class="div-table-col4" style="text-align:center;">Magic Tree<br>
                                <div style="border-top:solid 2px #3d3d1f;">Yew Tree</div>
                                <div style="border-top:solid 2px #3d3d1f;">Maple Tree</div>
                                <div style="border-top:solid 2px #3d3d1f;">Willow Tree</div>
                                <div style="border-top:solid 2px #3d3d1f;">Oak Tree</div>
                                <div style="border-top:solid 2px #3d3d1f;">Bittercap Mushroom</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">40 Min</div>
                            <div class="div-table-col" style="text-align:center;">11<br>
                                <div style="border-top:solid 2px #3d3d1f;">9</div>
                                <div style="border-top:solid 2px #3d3d1f;">7</div>
                                <div style="border-top:solid 2px #3d3d1f;">5</div>
                                <div style="border-top:solid 2px #3d3d1f;">4</div>
                                <div style="border-top:solid 2px #3d3d1f;">6</div>
                            </div>
                            <div class="div-table-col" style="text-align:center;">7 Hours 20 Min<br>
                                <div style="border-top:solid 2px #3d3d1f;">6 Hours</div>
                                <div style="border-top:solid 2px #3d3d1f;">4 Hours 40 Min</div>
                                <div style="border-top:solid 2px #3d3d1f;">3 Hours 20 Min</div>
                                <div style="border-top:solid 2px #3d3d1f;">2 Hours 40 Min</div>
                                <div style="border-top:solid 2px #3d3d1f;">4 Hours</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><span id="count4">- - -</span></div>
                        </div>
                        <div class="div-table-row5">
                            <div class="div-table-col5" style="text-align:center;">Herbs<br>
                                <div style="border-top:solid 2px #3d3d1f;">Redberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Cadavaberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Dwellberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Jangerberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Whiteberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Poison Ivy</div>
                                <div style="border-top:solid 2px #3d3d1f;">White Lilly</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">20 Min</div>
                            <div class="div-table-col" style="text-align:center;">4<br>
                                <div style="border-top:solid 2px #3d3d1f;">5</div>
                                <div style="border-top:solid 2px #3d3d1f;">6</div>
                                <div style="border-top:solid 2px #3d3d1f;">7</div>
                                <div style="border-top:solid 2px #3d3d1f;"><br></div>
                                <div style="border-top:solid 2px transparent;">8</div>
                                <div style="border-top:solid 2px transparent;"><br></div>
                                <div style="border-top:solid 2px #3d3d1f;">4</div>
                            </div>
                            <div class="div-table-col" style="text-align:center;">1 Hour 20 Min<br>
                                <div style="border-top:solid 2px #3d3d1f;">1 Hour 40 Min</div>
                                <div style="border-top:solid 2px #3d3d1f;">2 Hours</div>
                                <div style="border-top:solid 2px #3d3d1f;">2 Hours 20 Min</div>
                                <div style="border-top:solid 2px #3d3d1f;"><br></div>
                                <div style="border-top:solid 2px transparent;">2 Hours 40 Min</div>
                                <div style="border-top:solid 2px transparent;"><br></div>
                                <div style="border-top:solid 2px #3d3d1f;">1 Hour 20 Min</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><span id="count5">- - -</span></div>
                        </div>

                        <div class="div-table-row6">
                            <div class="div-table-col6" style="text-align:center;">Potato<br>
                                <div style="border-top:solid 2px #3d3d1f;">Onion</div>
                                <div style="border-top:solid 2px #3d3d1f;">Cabbage</div>
                                <div style="border-top:solid 2px #3d3d1f;">Tomato</div>
                                <div style="border-top:solid 2px #3d3d1f;">Sweetcorn</div>
                                <div style="border-top:solid 2px #3d3d1f;">Strawberry</div>
                                <div style="border-top:solid 2px #3d3d1f;">Watermelon</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">10 Min</div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><br>
                                <div style="height:4em;width:100%; border-top:solid 2px transparent;vertical-align:middle;">
                                    <div style="width:50px; margin: 10px auto;">4</div>
                                </div>
                                <div style="border-top:solid 2px #3d3d1f;">5<br></div>
                                <div style="border-top:solid 2px #3d3d1f;">6<br></div>
                                <div style="border-top:solid 2px #3d3d1f;">7</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><br>
                                <div style="height:4em;width:100%; border-top:solid 2px transparent;vertical-align:middle;">
                                    <div style="width:50px; margin: 10px auto;">40 Min</div>
                                </div>
                                <div style="border-top:solid 2px #3d3d1f;">50 Min<br></div>
                                <div style="border-top:solid 2px #3d3d1f;">60 Min<br></div>
                                <div style="border-top:solid 2px #3d3d1f;">70 Min</div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><span id="count6">- - -</span></div>
                        </div>
                        <div class="div-table-row7">
                            <div class="div-table-col7" style="text-align:center;">Potato<br> Marigold
                                <br> Rosemary
                                <br> Nasturtium
                                <br> Woad
                                <br> Limpwurt
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">5 Min</div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">4</div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;"><br>
                                <div style="height:4em;width:100%; border-top:solid 2px transparent;vertical-align:middle;">
                                    <div style="width:50px; margin: 10px auto;">5 Min</div>
                                </div>
                            </div>
                            <div class="div-table-col" style="text-align:center; vertical-align:middle;">N/A</div>
                        </div>
                    </div>
                </div>

                <script>
                    $(document).ready(function() {
                        $('#tDisplay3').hide();
                        $('#tDisplay2').hide();
                        $(".row1").click(function() {

                            $(this).toggleClass("coloured");
                            $('.div-table-row1').toggleClass('coloured2');
                        });

                        $(".row2").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row2').toggleClass('coloured2');
                        });
                        $(".row3").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row3').toggleClass('coloured2');
                        });
                        $(".row4").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row4').toggleClass('coloured2');
                        });
                        $(".row5").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row5').toggleClass('coloured2');
                        });
                        $(".row6").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row6').toggleClass('coloured2');
                        });
                        $(".row7").click(function() {
                            $(this).toggleClass("coloured");
                            $('.div-table-row7').toggleClass('coloured2');
                        });

                        $('.row1').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row1').toggleClass('coloured');
                                $('.div-table-row1').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col1').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row1').toggleClass('coloured');
                                $('.div-table-row1').toggleClass('coloured2');
                            }
                        });
                        $('.row2').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row2').toggleClass('coloured');
                                $('.div-table-row2').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col2').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row2').toggleClass('coloured');
                                $('.div-table-row2').toggleClass('coloured2');
                            }
                        });
                        $('.row3').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row3').toggleClass('coloured');
                                $('.div-table-row3').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col3').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row3').toggleClass('coloured');
                                $('.div-table-row3').toggleClass('coloured2');
                            }
                        });
                        $('.row4').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row4').toggleClass('coloured');
                                $('.div-table-row4').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col4').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row4').toggleClass('coloured');
                                $('.div-table-row4').toggleClass('coloured2');
                            }
                        });
                        $('.row5').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row5').toggleClass('coloured');
                                $('.div-table-row5').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col5').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row5').toggleClass('coloured');
                                $('.div-table-row5').toggleClass('coloured2');
                            }
                        });
                        $('.row6').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row6').toggleClass('coloured');
                                $('.div-table-row6').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col6').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row6').toggleClass('coloured');
                                $('.div-table-row6').toggleClass('coloured2');
                            }
                        });
                        $('.row7').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row7').toggleClass('coloured');
                                $('.div-table-row7').toggleClass('coloured2');
                            }
                        });
                        $('.div-table-col7').hover(function() {
                            if ($('#chkSelect').is(":checked")) {
                                $('.row7').toggleClass('coloured');
                                $('.div-table-row7').toggleClass('coloured2');
                            }
                        });



                    })
                </script>


                <div class="row1" style="top:76px;"></div>
                <div class="row2" style="top:98px;"></div>
                <div class="row3" style="top:120px;"></div>
                <div class="row4" style="top:142px;"></div>
                <div class="row5" style="top:164px;"></div>
                <div class="row6" style="top:186px;"></div>
                <div class="row7" style="top:208px;"></div>

                <script>
                    if (typeof(EventSource) !== "undefined") {

                        var source = new EventSource("udate.php");
                        source.onmessage = function(event) {
                            clearTimeout(t);
                            var mystr = event.data;
                            var myarr = mystr.split("~")

                            document.getElementById("currentDate").innerHTML = myarr[0];
                            hours = (myarr[1] * 3600) * 1000;
                            mins = myarr[2] * 60000;
                            secs = myarr[3] * 1000;
                            millis = hours + mins + secs;
                            document.getElementById("am_pm").innerHTML = " " + myarr[4];

                            millis1 = myarr[5];
                            millis2 = myarr[6];
                            millis3 = myarr[7];
                            millis4 = myarr[8];
                            millis5 = myarr[9];
                            millis6 = myarr[10];
                            document.getElementById("icon").style.backgroundPosition = "-" + myarr[11] + "px 0px";
                            t = setInterval(function() {
                                countDown()
                            }, 1000);
                        };
                    } else {
                        window.location.href = "errror.html";
                        //document.getElementById("result").innerHTML="Sorry, your browser does not support server-sent events...";
                    }
                </script>





            </DIV>
            <!-- end bodyMid -->



            <DIV id="frame" CLASS="narrowRightSm"></DIV>
        </DIV>
        <!-- end wrap -->

        <script type="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
        <!--[if !IE]> -->
        <script>
            $(function() {

                $('#coolMenu').find('> li').hover(function() {
                    $(this).find('ul')
                        .removeClass('noJS')
                        .stop(true, true).slideToggle('fast');
                });

            });
        </script>
        <!-- <![endif]-->
        <script>
            var count = 20;

            function countDown() {

                millis += 1000;
                millis1 -= 1000;
                millis2 -= 1000;
                millis3 -= 1000;
                millis4 -= 1000;
                millis5 -= 1000;
                millis6 -= 1000;

                if (millis1 > 19200000 || millis1 < 0) {
                    millis1 = 19200000;
                }
                if (millis2 > 9600000 || millis2 < 0) {
                    millis2 = 9600000;
                }
                if (millis3 > 4800000 || millis3 < 0) {
                    millis3 = 4800000;
                }
                if (millis4 > 2400000 || millis4 < 0) {
                    millis4 = 2400000;
                }
                if (millis5 > 1200000 || millis5 < 0) {
                    millis5 = 1200000;
                }
                if (millis6 > 600000 || millis6 < 0) {
                    millis6 = 600000;
                }

                var hours1 = Math.floor(millis1 / 36e5),
                    mins1 = Math.floor((millis1 % 36e5) / 6e4),
                    secs1 = Math.floor((millis1 % 6e4) / 1000),
                    hours2 = Math.floor(millis2 / 36e5),
                    mins2 = Math.floor((millis2 % 36e5) / 6e4),
                    hours3 = Math.floor(millis3 / 36e5),
                    mins3 = Math.floor((millis3 % 36e5) / 6e4),
                    hours4 = Math.floor(millis4 / 36e5),
                    mins4 = Math.floor((millis4 % 36e5) / 6e4),
                    hours5 = Math.floor(millis5 / 36e5),
                    mins5 = Math.floor((millis5 % 36e5) / 6e4),
                    hours6 = Math.floor(millis6 / 36e5),
                    mins6 = Math.floor((millis6 % 36e5) / 6e4),
                    hours = Math.floor(millis / 36e5),
                    mins = Math.floor((millis % 36e5) / 6e4),
                    secs = Math.floor((millis % 6e4) / 1000);
                secs1 = ('0' + (secs1)).slice(-2);
                mins1 = ('0' + (mins1)).slice(-2);
                hours1 = ('0' + (hours1)).slice(-2);
                mins2 = ('0' + (mins2)).slice(-2);
                hours2 = ('0' + (hours2)).slice(-2);
                mins3 = ('0' + (mins3)).slice(-2);
                hours3 = ('0' + (hours3)).slice(-2);
                mins4 = ('0' + (mins4)).slice(-2);
                hours4 = ('0' + (hours4)).slice(-2);
                mins5 = ('0' + (mins5)).slice(-2);
                hours5 = ('0' + (hours5)).slice(-2);
                mins6 = ('0' + (mins6)).slice(-2);
                hours6 = ('0' + (hours6)).slice(-2);
                secs = ('0' + (secs)).slice(-2);
                mins = ('0' + (mins)).slice(-2);
                hours = ('0' + (hours)).slice(-2);

                document.getElementById('count1').innerHTML = hours1 + ':' + mins1 + ':' + secs1;
                document.getElementById('count2').innerHTML = hours2 + ':' + mins2 + ':' + secs1;
                document.getElementById('count3').innerHTML = hours3 + ':' + mins3 + ':' + secs1;
                document.getElementById('count4').innerHTML = hours4 + ':' + mins4 + ':' + secs1;
                document.getElementById('count5').innerHTML = hours5 + ':' + mins5 + ':' + secs1;
                document.getElementById('count6').innerHTML = hours6 + ':' + mins6 + ':' + secs1;
                document.getElementById('currentHour').innerHTML = hours;
                document.getElementById('currentMin').innerHTML = mins;
                document.getElementById('currentSec').innerHTML = secs;

            }
            <?php
include("start.php");
?>
            t = setInterval(function() {
                countDown()
            }, 1000);
        </script>
    </BODY>

    </HTML>