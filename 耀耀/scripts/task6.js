var floatDiv=document.getElementById("float");
var btnFloat=document.getElementById("btn");
var body=document.getElementsByTagName('body');
var floatDiv=document.getElementById("float");
var btns=floatDiv.getElementsByTagName('input');
btnFloat.onclick=function(){
	floatDiv.style.display="block";
	btnFloat.style.display="none";
	body[0].style.background="rgba(0,0,0,0.5)";
}
for (var i = 0; i < btns.length; i++) {
	btns[i].onclick=function(){
		floatDiv.style.display="none";
		btnFloat.style.display="block";
		body[0].style.background="rgba(255,255,255,1)";
	}
}