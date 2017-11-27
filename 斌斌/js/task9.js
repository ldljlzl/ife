
var divs=document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
	selectedDiv=divs[i].addEventListener('click',Select);
}
var delateBtn=document.getElementById("delate");
delateBtn.addEventListener('click',Delate);
var addBtn=document.getElementById("add");
addBtn.addEventListener('click',Add);
function Select(elem) {
	var divs=document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor="white";
	}
	this.style.backgroundColor="red";
	var childDivs=this.getElementsByTagName("div");
	for (var i = 0; i < childDivs.length; i++) {
		childDivs[i].style.backgroundColor="white";
	}
	elem.stopPropagation();
	return this;
}
function Delate(){
	var divs=document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		var color=divs[i].style.backgroundColor;
		if (color=="red") {
			var elem=divs[i];
		}
	}
	elem.parentNode.removeChild(elem);	
}
function Add(){
	var divs=document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		var color=divs[i].style.backgroundColor;
		if (color=="red") {
			var elem=divs[i];
		}
	}
	var text=document.getElementById("text").value;
	elem.innerHTML=elem.innerHTML+"<div>"+text+"</div>";
}