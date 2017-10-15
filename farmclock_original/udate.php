<?php


//exit();
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
date_default_timezone_set('UTC');

$timeDate = date('l: dS: F');
$timeSec= date('s');
$timeMin = date('i');
$timeHour= date('h');
$timeAMPM= date('A');

$h = date('h');
$m = date('i');
$s = date('s');
//if (date('A')=='PM' && date('h')<>'12'){$h=$h+12;}


//////////////1631 pixels to new 24hr day//4030 or 1150

$del=-405;
//toggle days
$total_days = floor(time()/86400);

/////
	if ($total_days/2 <> floor($total_days/2)){//day 1
		if (date('A')=='AM'){
			if ($h==12){
			$h=$h+12;
			}else{
			$h=$h+24;
			}
		}else{
			if ($h==12){
			$h=$h+24;
			}else{
			$h=$h+36;
			}
		}
	}else{
		if (date('A')=='AM'){//day 2
			if ($h==12){
			$h=$h+36;
			}else{
			$h=$h+48;
			}
		}else{
			if ($h==12){
			$h=$h+0;
			}else{
			$h=$h+12;
			}
		}
	}


$hh=$h*60*60;

if ($m==0){$mm=1;}else{$mm=$m*60;}
$timeInMins = ($h*60)+$m;
$tt= floor(($hh+$mm+$s)/30)+$del;
$spiritNow='';
//countdown for spirit tree tick
$step = 6400;
while($timeInMins<=$step){
$step=$step-320;
}
$sTreeTick1=$step+320-$timeInMins;
if ($sTreeTick1<1){$sTreeTick1=320;}
$step = 6400;
while($timeInMins<=$step){
$step=$step-160;
}
$fTreeTick1=$step+160-$timeInMins;
if ($fTreeTick1<1){$fTreeTick1=160;}
//cacti 80 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-80;
}
$cactiTick1=$step+80-$timeInMins;
if ($cactiTick1<1){$cactiTick1=80;}
//reg tree 40 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-40;
}
$rTreeTick1=$step+40-$timeInMins;
if ($rTreeTick1<1){$rTreeTick1=40;}
//herb  20 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-20;
}
$hTreeTick1=$step+20-$timeInMins;
if ($hTreeTick1<1){$hTreeTick1=20;}
//allotment  10 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-10;
}
$aTreeTick1=$step+10-$timeInMins;
if ($aTreeTick1<1){$aTreeTick1=10;}

	$sTreeCdownHours=gmdate('g', ($sTreeTick1*60)-$s);
	if ($sTreeCdownHours==12){$sTreeCdownHours='00';}
	$sTreeCdownMins =gmdate('i', ($sTreeTick1*60)-$s);
	$sTreeCdownsSecs=gmdate('s', ($sTreeTick1*60)-$s);
	$sTreeCdownsSecs=(($sTreeCdownHours*3600)+($sTreeCdownMins*60)+$sTreeCdownsSecs)*1000;
//cacti
	$cactiCdownHours=gmdate('g', ($cactiTick1*60)-$s);
	if ($cactiCdownHours==12){$cactiCdownHours='00';}
	$cactiCdownMins =gmdate('i', ($cactiTick1*60)-$s);
	$cactiCdownSecs =gmdate('s', ($cactiTick1*60)-$s);
	$cactiCdownSecs=(($cactiCdownHours*3600)+($cactiCdownMins*60)+$cactiCdownSecs)*1000;
//fruit tree
	$fTreeCdownHours=gmdate('g', ($fTreeTick1*60)-$s);
	if ($fTreeCdownHours==12){$fTreeCdownHours='00';}
	$fTreeCdownMins =gmdate('i', ($fTreeTick1*60)-$s);
	$fTreeCdownSecs =gmdate('s', ($fTreeTick1*60)-$s);
	$fTreeCdownSecs=(($fTreeCdownHours*3600)+($fTreeCdownMins*60)+$fTreeCdownSecs)*1000;
//reg tree
	$rTreeCdownHours=gmdate('g', ($rTreeTick1*60)-$s);
	if ($rTreeCdownHours==12){$rTreeCdownHours='00';}
	$rTreeCdownMins =gmdate('i', ($rTreeTick1*60)-$s);
	$rTreeCdownSecs =gmdate('s', ($rTreeTick1*60)-$s);
	$rTreeCdownSecs=(($rTreeCdownMins*60)+$rTreeCdownSecs)*1000;
//herb
	$herbCdownHours='00';
	$herbCdownMins =gmdate('i', ($hTreeTick1*60)-$s);
	$herbCdownSecs =gmdate('s', ($hTreeTick1*60)-$s);
	$herbCdownSecs=(($herbCdownMins*60)+$herbCdownSecs)*1000;
	//allotment
	$allotCdownHours='00';
	$allotCdownMins =gmdate('i', ($aTreeTick1*60)-$s);
	if($allotCdownMins>9){
		$allotCdownMins='10';
		$allotCdownSecs='00';
	}else{
		$allotCdownSecs =gmdate('s', ($aTreeTick1*60)-$s);
	}
	$allotCdownSecs=(($allotCdownMins*60)+$allotCdownSecs)*1000;

  echo "retry: 15000\n";
$theData="data: {$timeDate}~{$timeHour}~{$timeMin}~{$timeSec}~{$timeAMPM}~{$sTreeCdownsSecs}";
$theData.="~{$fTreeCdownSecs}~{$cactiCdownSecs}";
$theData.="~{$rTreeCdownSecs}~{$herbCdownSecs}";
$theData.="~{$allotCdownSecs}~{$tt}";
$theData.="\n\n";
//echo "data: The server time is: {$time}\n\n";
echo $theData;
flush();

?>
