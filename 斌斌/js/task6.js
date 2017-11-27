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
function StringInput(){
	var mainDiv=document.getElementById("main");
	var str=document.getElementById("text").value;
	var re=/\n|\t|\r| |;|'|,|:/;
	var strArray=str.split(re);
	for (var i = 0; i < strArray.length; i++) {
		var btnNum=document.createElement("input");
		btnNum.type="button";
		btnNum.value=strArray[i];
		mainDiv.insertBefore(btnNum,mainDiv.firstChild);
		btnNum.onclick=function(){
			mainDiv.removeChild(this);
		};
	}
}
function Find(mDiv){
	var btns=mDiv.getElementsByTagName("input");
	var str=document.getElementById("text").value;
	var targetStr=document.getElementById("targetStr").value;
	for (var i = 0; i < btns.length; i++) {
		var strArray=btns[i].value;
		if (strArray.match(targetStr)!=null){
			btns[i].style.backgroundColor="blue";
		}
	}

}
var mainDiv=document.getElementById("main");
var buttonStrInput=document.getElementById("strInput");
buttonStrInput.onclick=StringInput;
var buttonFind=document.getElementById("find");
buttonFind.onclick=function(){
	Find(mainDiv);
};
removeNum();

var buttonPopLeft=document.getElementById("popLeft");
buttonPopLeft.onclick=popNumLeft;
var buttonPopRight=document.getElementById("popRight");
buttonPopRight.onclick=popNumRight;


