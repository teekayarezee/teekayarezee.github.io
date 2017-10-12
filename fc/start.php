<?php
$timeDate = date('l: dS: F');
$timeSec= date('s');
$timeMin = date('i');
$timeHour= date('h');
$timeAMPM= date('A');

$h = date('h');
$m = date('i');
$s = date('s');
//toggle days
$total_days = floor(time()/86400);
	if ($total_days/2 == floor($total_days/2)){
		if (date('A')=='AM'){
		$h=$h+48;
			}else{
		$h=$h+12;
		}
	}else{
		if (date('A')=='AM'){
		$h=$h+24;
			}else{
		$h=$h+36;
		}
	}

$hh=$h*60*60;

if ($m==0){$mm=1;}else{$mm=$m*60;}
$timeInMins = ($h*60)+$m;

//countdown for spirit tree tick
$step = 3200;
while($timeInMins<=$step){
$step=$step-320;
}
$sTreeTick1=$step+320-$timeInMins;

$step = 6400;
while($timeInMins<=$step){
$step=$step-160;
}
$fTreeTick1=$step+160-$timeInMins;
//cacti 80 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-80;
}
$cactiTick1=$step+80-$timeInMins;

//reg tree 40 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-40;
}
$rTreeTick1=$step+40-$timeInMins;
//herb  20 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-20;
}
$hTreeTick1=$step+20-$timeInMins;
	
//allotment  10 min cycles
$step = 6400;
while($timeInMins<=$step){
$step=$step-10;
}
$aTreeTick1=$step+10-$timeInMins;
	
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
 
 echo'var millis1 = '.$sTreeCdownsSecs.',millis2 = '.$fTreeCdownSecs.',millis3 = '.$cactiCdownSecs.',millis4 = '.$rTreeCdownSecs.',millis5 = '.$herbCdownSecs.',millis6 = '.$allotCdownSecs.';';
echo'document.getElementById("currentDate").innerHTML="'.$timeDate.'";';
echo'var hours=('.$timeHour.'*3600)*1000;';
echo'var mins='.$timeMin.'*60000;';
echo'var secs='.$timeSec.'*1000;';
echo'var millis=hours+mins+secs;';
echo'document.getElementById("am_pm").innerHTML=" "+"'.$timeAMPM.'";';
 ?>