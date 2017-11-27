function pushNumLeft(heightValue){
	var mainDiv=document.getElementById("main");
	var num=document.getElementById("text").value;
	var N=mainDiv.getElementsByTagName("input").length;
	if (!isNaN(num)) {
		if (N>60) {
			alert("元素数量大于60");
			return false;
		}
		else{
			var numValue=Number(num);
			var btnNum=document.createElement("input");
			if ((numValue>=10)&&(numValue<=100)) {
				btnNum.type="button";
				btnNum.style.height=numValue+"px";
				mainDiv.insertBefore(btnNum,mainDiv.firstChild);
				btnNum.onclick=function(){
					mainDiv.removeChild(this);
				};
				heightValue.splice(0,0,numValue);
			}
			else{
				alert("请输入10-100的数字");
				return false;
			}			
		}
		
	}
	else{
		alert("输入值非法");
	}
	
	// btnNum.onclick=mainDiv.removeChild(btnNum);
	// var str=mainDiv.innerHTML;
	// str="<input type=\"button\" value=\""+num+"\">"+str;
	// mainDiv.innerHTML=str;
}
function pushNumRight(heightValue){
	var mainDiv=document.getElementById("main");
	var num=document.getElementById("text").value;
	var N=mainDiv.getElementsByTagName("input").length;
	if (!isNaN(num)) {
		if (N>60) {
			alert("元素数量大于60");
			return false;
		}
		else{
			var numValue=Number(num);
			var btnNum=document.createElement("input");
			if ((numValue>=10)&&(numValue<=100)) {
				btnNum.type="button";
				btnNum.style.height=numValue+"px";
				mainDiv.appendChild(btnNum);
				btnNum.onclick=function(){
					mainDiv.removeChild(this);
				};
				heightValue.push(numValue);
			}
			else{
				alert("请输入10-100的数字");
				return false;
			}			
		}		
	}
	else{
		alert("输入值非法");
	}
	
}
function popNumLeft(heightValue){
	var mainDiv=document.getElementById("main");
	mainDiv.removeChild(mainDiv.firstChild);
	heightValue.shift();
}
function popNumRight(){
	var mainDiv=document.getElementById("main");
	mainDiv.removeChild(mainDiv.lastChild);
	heightValue.pop();
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
function SelectSort(buttons,values){
	for (var i = 0; i < values.length-1; i++) {
		if (values[i]>values[i+1]) {
			if (i==0) {
				ChangeNum(values,buttons,i,i+1);
			}else{
				x=values[i+1];
				var j=i;
				while((x<values[j])&&(j>=0)){
					j--;
				}
				for (var k = i+1; k >=j+2; k--) {
					values[k]=values[k-1];
				}
				values[j+1]=x;	
			}
			
		}
	}
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.height=values[i]+"px";
	}
}
function BubbleSort(buttons,values){
	for (var i = 0; i < values.length; i++) {
		for (var j = 0; j < values.length-i; j++) {
			if (values[j]>values[j+1]) {
				buttons[j].style.backgroundColor="yellow";
				buttons[j+1].style.backgroundColor="yellow";
				function ChangeNum(){	
					alert("he");
					buttons[j].style.height=values[j+1]+"px";
					buttons[j+1].style.height=values[j]+"px";
					var tempValue=values[j];
					values[j]=values[j+1];
					values[j+1]=tempValue;
					buttons[j].style.backgroundColor="red";
					buttons[j+1].style.backgroundColor="red";
				}
				var timer=setInterval(ChangeNum,500);
				
			}
		}
	}
	clearInterval(timer);
	
}

function Recover(buttons){
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.backgroundColor="red";
	}
}
function QuickSort(arr) {
	if (arr.length <= 1) {
		return arr.slice(0);
	}
	var left = [];
	var right = [];
  	var mid = [arr[0]]; //first number as a pivot

  	for (var i = 1; i < arr.length; i++) {
  		if (arr[i] < mid[0]) {
  			left.push(arr[i]);
  		} else {
  			right.push(arr[i]);
  		}
  	}
  	return QuickSort(left).concat(mid.concat(QuickSort(right)));
}

function ChangeNum(values,buttons,a,b){	
	alert("he");
	buttons[a].style.height=values[b]+"px";
	buttons[b].style.height=values[a]+"px";
	// for (var i = values[a]; i >values[b]; i--) {
	// 	setInterval(function(){
	// 		buttons[a].style.height=i+"px";
	// 	},1000);
	// }	
	// for (var i=values[b];i<values[a];i++){
	// 	setInterval(function(){
	// 		buttons[b].style.height=i+"px";
	// 	},1000);
	// }
	var tempValue=values[a];
	values[a]=values[b];
	values[b]=tempValue;
	buttons[a].style.backgroundColor="red";
	buttons[b].style.backgroundColor="red";
}

var mainDiv=document.getElementById("main");
var btns=mainDiv.getElementsByTagName("input");
var heightValue=new Array(btns.length);
for (var i = 0; i < btns.length; i++) {
	heightValue[i]=parseInt(btns[i].style.height);
}
var buttonBubbleSort=document.getElementById("bubbleSort");
var buttonSelectSort=document.getElementById("selectSort");
var buttonQuickSort=document.getElementById("quickSort");
buttonBubbleSort.onclick=function(){
	BubbleSort(btns,heightValue);
}
buttonSelectSort.onclick=function(){
	SelectSort(btns,heightValue);
}
buttonQuickSort.onclick=function(){
	var sortValues=QuickSort(heightValue);
	for (var i = 0; i < btns.length; i++) {
		btns[i].style.height=sortValues[i]+"px";
	}
}

removeNum();	//删除选中的元素
var buttonPushLeft=document.getElementById("pushLeft");
var buttonPushRight=document.getElementById("pushRight");
var buttonPopLeft=document.getElementById("popLeft");
var buttonPopRight=document.getElementById("popRight");
buttonPushLeft.onclick=function(){
	pushNumLeft(heightValue);
}

buttonPushRight.onclick=function(){
	pushNumRight(heightValue);
}

buttonPopLeft.onclick=function(){
	popNumLeft(heightValue);
}

buttonPopRight.onclick=function(){
	popNumLeft(popNumRight);
}


