var myScore=0,myLevel=0;



//*******************************First prompt and naming*******************************************
var name = prompt("What is your name: ");
alert("Welcome "+name+ "to find pairs game, have fun...");





//****************************Timeer****************************************************************
var sec =99;
var timing = document.getElementById('time');
var setSource = document.getElementById("mySource");
var backgrounding = document.getElementById("time");
//Setting the timer 
function myTime(){
	timing.innerHTML = sec;

	if(sec <=99 && sec >= 30){
		backgrounding.style.backgroundColor = "green";//makes the background of timer green

	}

	if(sec <=30 && sec >= 3){
		backgrounding.style.backgroundColor = "yellow";//makes the background of timer green

	}

	if(sec<=3 && sec>=1){
		backgrounding.style.backgroundColor = "red";//makes the background of timer red
		setSource.src = "audio/1.mp3"; // when the time is over the sound will be starting

	}

	//end of timer
	if(sec == 0 ){
		clearTimeout(timer);
		setSource.src = "";
	}

	sec--;

}
	var timer = setInterval(myTime,1000);
//******************************************PlayGround setUp ************************************************

var playR = document.getElementById("play-ground");
for(var i=1;i<=5;i++){
for(var j=1;j<=6;j++){
	playR.innerHTML += 
"<div style='float:left;width:110px;border:1px solid lightgray;height:65px;'class='div"+i+""+j+"'><img src = 'img/icon.svg' style='width:100%;height:100%;color:blue;'></div>";
}}

//*********************************Setting Random array*******************************************************
var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];




//*********************************Onclick functions using Jquery*******************************************
//onclick functioning
var myC = document.getElementsByTagName("div");


//jqurey import in coding
$(document).ready (function() {
$(".play-ground div img").on("click", function(){
	$(this).attr("src","img/numbers/15.png");
});


$("#close-btn1").on("click",function(){
	if(confirm("Are you sure want to exit?") == true){
	window.close();}
	});
$("div.about").on("click",function(){

	var mywindow = window.open("","AboutMe","width=500,height=440");
	mywindow.document.write("<p style ='font-size:20px;font-family:arial;'>Thank you for using this web application,<br />This app is bult by the help of javaScript and Jquery library.<br /> my name is Ghafor Yaqubi, for more information visit my facebook profile:<a href='www.facebook.com/Ghafor Yaqubi'>Ghafor Yaqubi</a></p><img src = 'img/mypic.jpg'>");
	mywindow.moveBy(400,50);
	mywindow.resize(false);
	
});


});




