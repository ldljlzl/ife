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
	}
	else if(text=="TUN RIG"){
		direction+=1;
	}
	else if(text=="TUN BAC"){
		direction+=2;
	}
	else{
		alert("输入命令错误");
		return false;
	}
	direction%=4;
	img.style.left=x+"px";
	img.style.top=y+"px";
	switch(direction){
		case 0: 
			img.src="imgs/top.jpg";
			break;
		case 1:
			img.src="imgs/right.jpg";
			break;	
		case 2:
			img.src="imgs/bottom.jpg";
			break;	
		case 3:
			img.src="imgs/left.jpg";
			break;	
		default:
			break;
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
}
