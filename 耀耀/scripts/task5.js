var mainDiv=document.getElementById("main");
for (var i = 0; i < 10; i++) {
	mainDiv.innerHTML+="<div class=\"second\"></div>";
	var secondDiv=mainDiv.getElementsByClassName("second");
	for (var j = 0; j < 10; j++) {
		secondDiv[i].innerHTML+="<div class=\"third\"></div>";
	}
}
var img=document.getElementById("square");
var x=Number(img.offsetLeft);
var y=Number(img.offsetTop);
var direction=0;
var btn=document.getElementById("btn");
btn.addEventListener('click',Act);
function Act() {
	var text=document.getElementById("text").value;
	if (text=="GO") {
		Go();
	}
	else if(text=="TUN LEF"){
		direction+=3;
		direction%=4;
		Turn(direction,false);
	}
	else if(text=="TUN RIG"){
		direction+=1;
		direction%=4;
		Turn(direction,false);
	}
	else if(text=="TUN BAC"){
		direction+=2;
		direction%=4;
		Turn(direction,false);
	}
	else if(text=="TRA LEF"){
		x-=32;
	}
	else if(text=="MOV LEF"){
		Turn(3,true);		
	}
	else if(text=="MOV RIG"){
		Turn(1,true);		
	}
	else if(text=="MOV TOP"){
		Turn(0,true);
	}
	else if(text=="MOV BOT"){
		Turn(2,true);
	}
	else{
		alert("输入命令错误");
		return false;
	}
}
function Go(){
	if (direction=="0") {
		y-=32;
	}
	else if(direction=="3"){
		x-=32;
	}
	else if(direction=="1"){
		x+=32;
	}
	else if(direction=="2"){
		y+=32;
	}
	else{
		return false;
	}
	img.style.left=x+"px";
	img.style.top=y+"px";
}
function Turn(dire,flag){
	var targetAngle=dire*90;
	var angle=direction*90;
	var delAngle=dire-direction;
	if ((delAngle==1)||(delAngle==2)) {
		var timer=setInterval(function(){
			angle+=10;
			if (angle>targetAngle) {
				clearInterval(timer);
				direction=dire;
				if (flag) {
					Go();
				}
				return true;
			}
			img.style.WebkitTransform="rotate("+angle+"deg)";
		},100)
	}
	else if (delAngle==-3) {
		var timer=setInterval(function(){
			angle+=10;
			if (angle>360) {
				clearInterval(timer);
				direction=dire;
				if (flag) {
					Go();
				}
				return true;
			}
			img.style.WebkitTransform="rotate("+angle+"deg)";
		},100)
	}
	else if ((delAngle==-1)||(delAngle==-2)) {
		var timer=setInterval(function(){
			angle-=10;
			if (angle<targetAngle) {
				clearInterval(timer);
				direction=dire;
				if (flag) {
					Go();
				}
				return true;
			}
			img.style.WebkitTransform="rotate("+angle+"deg)";
		},100)
	}
	else if (delAngle==3) {
		var timer=setInterval(function(){
			angle-=10;
			if (angle<-90) {
				clearInterval(timer);
				direction=dire;
				if (flag) {
					Go();
				}
				return true;
			}
			img.style.WebkitTransform="rotate("+angle+"deg)";
		},100)
	}
	else if (delAngle==0) {
		return true;
	}
	else{
		return false;
	}
	
}