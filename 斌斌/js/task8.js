function Match(node){
	var text=document.getElementById("text").value;
	var divValue=node.firstChild.nodeValue;
	var r=/[0-9]{1,5}/;
	var value=divValue.match(r);
	if (value==text) {
		return true;
	}
	else{
		return false;
	}
}
function PreorderTraversal(node,divArray){	
	var divNodes=node.children;
	divArray.push(node);
	if (divNodes[0]!=null) {			
		PreorderTraversal(divNodes[0],divArray);	
		if (divNodes[1]!=null) {
			PreorderTraversal(divNodes[1],divArray);
		}			
	}							
}
function InorderTraversal(node,divArray){
	var divNodes=node.children;
	if (divNodes[0]!=null) {			
		InorderTraversal(divNodes[0],divArray);		
		if (divNodes[1]!=null) {
			divArray.push(node);	
			InorderTraversal(divNodes[1],divArray);
		}			
	}
	else{
		divArray.push(node);
	}	
	
}
function PostorderTraversal(node,divArray){
	var divNodes=node.children;
	if (divNodes[0]!=null) {			
		PostorderTraversal(divNodes[0],divArray);			
		if (divNodes[1]!=null) {
			PostorderTraversal(divNodes[1],divArray);			
		}	
		divArray.push(node);		
	}
	else{
		divArray.push(node);
	}	
}
function showArray(treeArray){
	var timer=setInterval(function(){
		var divs=document.getElementsByTagName('div');
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.backgroundColor="white";
		}
		if(treeArray.length!=0){
			var node=treeArray.shift();
			if (Match(node)) {
				node.style.backgroundColor="green";
				alert("已找到目标div，且修改成绿色")；
				clearInterval(timer);
				return true;
			}
			else{
				node.style.backgroundColor="red";
			}			
		}
		else{
			clearInterval(timer);
		}
	},1000);
}
var buttonPre=document.getElementById("preorderTraversal");
var buttonIn=document.getElementById("inorderTraversal");
var buttonPost=document.getElementById("postorderTraversal");
var _root=document.getElementById("root");
var treeDiv=new Array();
buttonPre.onclick=function(){
	PreorderTraversal(_root,treeDiv);
	showArray(treeDiv);
};
buttonIn.onclick=function(){
	InorderTraversal(_root,treeDiv);
	showArray(treeDiv);
};
buttonPost.onclick=function(){
	PostorderTraversal(_root,treeDiv);
	showArray(treeDiv);
};
