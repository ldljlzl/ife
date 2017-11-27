function pushNumLeft(){
	var mainDiv=document.getElementById("main");
	var num=document.getElementById("text").value;
	if (!isNaN(num)) {
		var btnNum=document.createElement("input");
		btnNum.type="button";
		btnNum.value=num;
		mainDiv.insertBefore(btnNum,mainDiv.firstChild);
		btnNum.onclick=function(){
			mainDiv.removeChild(this);
		};
	}
	else{
		alert("输入值非法");
	}
	
	// btnNum.onclick=mainDiv.removeChild(btnNum);
	// var str=mainDiv.innerHTML;
	// str="<input type=\"button\" value=\""+num+"\">"+str;
	// mainDiv.innerHTML=str;
}
function pushNumRight(){
	var mainDiv=document.getElementById("main");
	var num=document.getElementById("text").value;
	if (!isNaN(num)) {
		var mainDiv=document.getElementById("main");
		var num=document.getElementById("text").value;
		var btnNum=document.createElement("input");
		btnNum.type="button";
		btnNum.value=num;
		mainDiv.appendChild(btnNum);
		btnNum.onclick=function(){
			mainDiv.removeChild(this);
		};
	}
	else{
		alert("输入值非法");
	}
	
}
function popNumLeft(){
	var mainDiv=document.getElementById("main");
	mainDiv.removeChild(mainDiv.firstChild);
}
function popNumRight(){
	var mainDiv=document.getElementById("main");
	mainDiv.removeChild(mainDiv.lastChild);
}

function removeNum(){
	var mainDiv=document.getElementById("main");
	var btns=mainDiv.getElementsByTagName("input");
	for (var i = 0; i < btns.length; i++) {
	btns[i].onclick=function(){
		mainDiv.removeChild(this);
		alert("asd");
	}
}
}
removeNum();
var buttonPushLeft=document.getElementById("pushLeft");
buttonPushLeft.onclick=pushNumLeft;
var buttonPushRight=document.getElementById("pushRight");
buttonPushRight.onclick=pushNumRight;
var buttonPopLeft=document.getElementById("popLeft");
buttonPopLeft.onclick=popNumLeft;
var buttonPopRight=document.getElementById("popRight");
buttonPopRight.onclick=popNumRight;


